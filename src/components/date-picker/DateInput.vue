<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject, nextTick, ref, watch } from "vue"
import type { DateValue } from "@internationalized/date"
import { CalendarDate, parseDate } from "@internationalized/date"
import { cn } from "../../lib/utils"
import {
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "../input-frame"
import type { InputFrameVariantProps } from "../input-frame"
import { DATE_PICKER_CTX_KEY } from "./datePickerContext"

/**
 * `readonly`/`disabled` 를 내려주지 않을 때(대부분 inject 에만 둘 때) 런타임 `false` 가 되면
 * `buildInputFrameContext` 가 상위 `readonly: true` 를 씹는다. 미지정은 `undefined` 로 둔다.
 */

const localModel = defineModel<CalendarDate | null>()
const props = withDefaults(
  defineProps<{
    size?: InputFrameVariantProps["size"]
    readonly?: boolean
    disabled?: boolean
    /** 비어 있을 때(입력 가능할 때)만 표시. 미지정이면 YYYY-MM-DD */
    placeholder?: string
    class?: HTMLAttributes["class"]
    /**
     * 타이핑 중 8자리 유효 날짜가 완성되면 즉시 모델에 반영한다.
     * 기본(false)은 blur 시점에만 커밋 — 필터처럼 모델 변경이 조회를 유발하는 곳의 기존 동작 유지.
     * 시트/다이얼로그처럼 입력 즉시 유효성·버튼 상태를 갱신해야 할 때만 켠다.
     */
    liveCommit?: boolean
    /**
     * 커밋 가능한 최소/최대 날짜(포함). 미지정이면 상위 `DatePicker` 컨텍스트 값을 쓴다.
     * 범위를 벗어난 타이핑은 모델에 반영하지 않는다(blur 시 직전 값으로 되돌림).
     */
    minValue?: DateValue | null
    maxValue?: DateValue | null
  }>(),
  {
    size: undefined,
    readonly: undefined,
    disabled: undefined,
    liveCommit: false,
    minValue: undefined,
    maxValue: undefined,
  },
)

const emit = defineEmits<{
  "update:draftError": [value: boolean]
}>()

const design = useInputFrameInjectProvide(() => pickInputFrameDesign(props))
const isFrameDisabled = design.disabled

const datePicker = inject(DATE_PICKER_CTX_KEY, null)

/**
 * 선택 가능 범위 — 자체 prop 우선, 없으면 상위 picker 컨텍스트.
 * 시각 정보가 섞인 `DateValue` 도 올 수 있어 날짜 단위로 정규화한다.
 */
function toDateOnly(v?: DateValue | null): CalendarDate | null {
  if (!v)
    return null
  return new CalendarDate(v.year, v.month, v.day)
}

const minBound = computed(() =>
  toDateOnly(props.minValue ?? datePicker?.minValue?.value),
)
const maxBound = computed(() =>
  toDateOnly(props.maxValue ?? datePicker?.maxValue?.value),
)

/**
 * DatePicker context가 있으면 inject된 모델 사용, 없으면 localModel (standalone용)
 */
const modelValue = computed({
  get(): CalendarDate | null | undefined {
    return datePicker ? datePicker.model.value : localModel.value
  },
  set(v: CalendarDate | null | undefined) {
    if (datePicker) {
      datePicker.model.value = v
    }
    else {
      localModel.value = v
    }
  },
})

const inputRef = ref<HTMLInputElement | null>(null)
/** 8자리: 연4·월2·일2 — 빈칸은 '' */
const slots = ref<string[]>(Array.from({ length: 8 }, () => ""))
const activeDigit = ref(0)
const isFocused = ref(false)
/** 포커스 직전 확정 값(blur 시 되돌리기용) */
const snapshotAtFocus = ref<CalendarDate | null | undefined>(undefined)
const invalidateShake = ref(false)

const labelSizeClass = computed(() => {
  if (design.size.value === "small")
    return "text-size-12"
  if (design.size.value === "large")
    return "text-size-16"
  return "text-size-14"
})

const canType = computed(
  () => !design.disabled.value && !design.readonly.value,
)

const display = computed(() => formatSlotsToDisplay(slots.value))

/** InputFrame `has-[input:placeholder-shown]:text-grey-50` 이 여러 input 중 하나면 전체 톤이 밝아지는 문제 — 이 필드에 표시가 있을 때는 직접 grey-80 */
const inputTextClass = computed(() => {
  if (design.disabled.value)
    return "text-inherit"
  if (display.value.length > 0)
    return "text-grey-80"
  return "text-inherit"
})

/** "" = 정상, "format" = 날짜 형식 오류, "range" = min/max 범위 밖 */
type DraftErrorKind = "" | "format" | "range"

function slotsErrorKind(s: string[]): DraftErrorKind {
  if (isSlotsInvalid(s))
    return "format"
  if (isSlotsOutOfRange(s))
    return "range"
  return ""
}

const draftErrorKind = computed<DraftErrorKind>(() => slotsErrorKind(slots.value))
const draftError = computed(() => draftErrorKind.value !== "")

/**
 * 범위 오류는 말풍선을 띄우지 않는다 — 어떤 범위인지는 화면마다 사정이 달라 문구를 쓸 수 없고,
 * 말풍선은 스크롤 컨테이너(모달 목록 등) 안에서 잘린다. 커밋 거부 + shake + error 테두리로만 알리고
 * 구체적인 안내 문구는 소비자가 필드 아래 인라인으로 붙인다.
 */
const showFormatTooltip = computed(() => draftErrorKind.value === "format")

// 범위(min/max)가 바깥에서 바뀌어도 상태가 따라가도록 값 자체를 관찰한다.
watch(
  draftError,
  (hasError) => {
    if (datePicker)
      datePicker.draftError.value = hasError
    else
      emit("update:draftError", hasError)
  },
  { immediate: true },
)

function clearSlots() {
  slots.value = Array.from({ length: 8 }, () => "")
  activeDigit.value = 0
}

function calendarToSlots(c: CalendarDate): string[] {
  const s = Array.from({ length: 8 }, () => "")
  const y = String(c.year).padStart(4, "0")
  const m = String(c.month).padStart(2, "0")
  const d = String(c.day).padStart(2, "0")
  for (let i = 0; i < 4; i++) s[i] = y[i]!
  s[4] = m[0]!
  s[5] = m[1]!
  s[6] = d[0]!
  s[7] = d[1]!
  return s
}

function formatSlotsToDisplay(s: string[]): string {
  const y = s.slice(0, 4).join("")
  const m = s.slice(4, 6).join("")
  const d = s.slice(6, 8).join("")
  if (y.length === 0)
    return ""
  if (m.length === 0)
    return y
  if (d.length === 0)
    return `${y}-${m}`
  return `${y}-${m}-${d}`
}

function flatDigits(s: string[]): string {
  return s.join("")
}

/**
 * 8자리·월·parseDate (부분은 명백히 불가한 경우만 error)
 */
function isSlotsInvalid(s: string[]): boolean {
  const f = flatDigits(s)
  if (f.length < 1)
    return false
  if (f.length < 4)
    return false
  const y = Number(f.slice(0, 4))
  if (y < 1 || y > 9999)
    return true
  if (f.length <= 4)
    return false
  if (f.length === 5) {
    if (f[4]! > "1")
      return true
    return false
  }
  if (f.length === 6) {
    const m = Number(f.slice(4, 6))
    if (m < 1 || m > 12)
      return true
    return false
  }
  if (f.length === 7) {
    const m = Number(f.slice(4, 6))
    if (m < 1 || m > 12)
      return true
    if (f[6]! > "3")
      return true
    return false
  }
  if (f.length === 8) {
    try {
      parseDate(
        `${f.slice(0, 4)}-${f.slice(4, 6)}-${f.slice(6, 8)}`,
      )
      return false
    }
    catch {
      return true
    }
  }
  return false
}

/**
 * min/max 범위 밖인지 — 8자리가 완성된 유효 날짜에 대해서만 판정한다.
 * (입력 중인 부분 값은 아직 확정이 아니라 범위를 따지지 않는다)
 */
function isSlotsOutOfRange(s: string[]): boolean {
  const f = flatDigits(s)
  if (f.length !== 8 || isSlotsInvalid(s))
    return false
  const min = minBound.value
  const max = maxBound.value
  if (!min && !max)
    return false
  const d = parseSlotsToCalendar(s)
  if (min && d.compare(min) < 0)
    return true
  if (max && d.compare(max) > 0)
    return true
  return false
}

function triggerInvalidateShake() {
  invalidateShake.value = false
  requestAnimationFrame(() => {
    invalidateShake.value = true
  })
}

function showInvalidFormatFeedback() {
  triggerInvalidateShake()
}

function onInvalidateShakeEnd() {
  invalidateShake.value = false
}

/**
 * 커밋(모델 반영) 가능 조건 — 8자리 · 형식 유효 · min/max 범위 안.
 * 범위 밖 값이 커밋되면 캘린더에서는 막히는 날짜가 타이핑으로 통과한다(UP20-8581).
 */
function canCommit(s: string[]): boolean {
  const f = flatDigits(s)
  if (f.length !== 8)
    return false
  return !isSlotsInvalid(s) && !isSlotsOutOfRange(s)
}

function parseSlotsToCalendar(s: string[]): CalendarDate {
  const f = flatDigits(s)
  const iso = `${f.slice(0, 4)}-${f.slice(4, 6)}-${f.slice(6, 8)}`
  return parseDate(iso)
}

/**
 * liveCommit 일 때만, 타이핑 도중 완성된 유효 날짜를 모델에 즉시 반영한다.
 * (modelValue watch 는 isFocused 가드가 있어 slots 를 되돌리지 않는다)
 */
function commitIfPossible() {
  if (!props.liveCommit)
    return
  if (canCommit(slots.value))
    modelValue.value = parseSlotsToCalendar(slots.value)
}

function digitIndexToDisplayRange(displayStr: string, di: number) {
  let diCur = 0
  for (let i = 0; i < displayStr.length; i++) {
    if (/\d/.test(displayStr[i]!)) {
      if (diCur === di)
        return { start: i, end: i + 1 }
      diCur++
    }
  }
  const n = displayStr.length
  return { start: n, end: n }
}

function charOffsetToDigitIndex(displayStr: string, offset: number) {
  if (displayStr.length === 0)
    return 0
  const o = Math.min(offset, displayStr.length - 1)
  if (displayStr[o]! === "-") {
    for (let j = o + 1; j < displayStr.length; j++) {
      if (/\d/.test(displayStr[j]!)) {
        let d = 0
        for (let k = 0; k <= j; k++) {
          if (/\d/.test(displayStr[k]!)) {
            if (k === j)
              return d
            d++
          }
        }
        return 0
      }
    }
    let d = 0
    for (let k = 0; k < displayStr.length; k++) {
      if (/\d/.test(displayStr[k]!)) {
        d++
      }
    }
    return Math.max(0, d - 1)
  }
  let digitIdx = 0
  for (let i = 0; i < displayStr.length; i++) {
    if (/\d/.test(displayStr[i]!)) {
      if (i === o)
        return digitIdx
      digitIdx++
    }
  }
  return Math.min(7, digitIdx)
}

function applySelection() {
  nextTick(() => {
    const el = inputRef.value
    const t = display.value
    if (!el)
      return
    const d = activeDigit.value
    const { start, end } = digitIndexToDisplayRange(t, d)
    el.setSelectionRange(start, end)
  })
}

/**
 * 클릭/포커스 직후 브라우저가 둔 캅/선택을 반영. 범위 드래그는 건드리지 않는다.
 */
function alignDigitSelection() {
  const el = inputRef.value
  const t = display.value
  if (!el)
    return
  if (t.length === 0) {
    activeDigit.value = 0
    return
  }
  const a = el.selectionStart ?? 0
  const b = el.selectionEnd ?? 0
  if (a !== b) {
    activeDigit.value = charOffsetToDigitIndex(t, a)
    return
  }
  const di = charOffsetToDigitIndex(t, a)
  activeDigit.value = di
  const { start, end } = digitIndexToDisplayRange(t, di)
  el.setSelectionRange(start, end)
}

function onFocus() {
  isFocused.value = true
  snapshotAtFocus.value = modelValue.value ?? null
  if (modelValue.value) {
    slots.value = calendarToSlots(modelValue.value)
  }
  else {
    clearSlots()
  }
  /* 클릭→포커스면 click 이 끝난 뒤 캅이 잡힘. tab 만 오면 setTimeout 을 쓴다. */
  setTimeout(() => {
    if (!isFocused.value)
      return
    alignDigitSelection()
  }, 0)
}

function onBlur() {
  isFocused.value = false
  const snap = snapshotAtFocus.value
  if (canCommit(slots.value)) {
    const d = parseSlotsToCalendar(slots.value)
    modelValue.value = d
  }
  else {
    // 형식 오류·범위 밖은 커밋하지 않는다. liveCommit 으로 타이핑 도중 이미 커밋됐을 수 있으므로 포커스 시점 값으로 되돌린다
    if (props.liveCommit)
      modelValue.value = (snap ?? null) as CalendarDate | null
    if (snap) {
      slots.value = calendarToSlots(snap as CalendarDate)
    }
    else {
      clearSlots()
    }
  }
  snapshotAtFocus.value = undefined
}

function onInputClick() {
  if (!canType.value)
    return
  alignDigitSelection()
}

/** 드래그로 범위 선택이 잡힌 뒤에도 첫 자리로 접히는 것을 막는다 */
function onInputSelect() {
  if (!canType.value)
    return
  const el = inputRef.value
  const t = display.value
  if (!el || t.length === 0)
    return
  const a = el.selectionStart ?? 0
  const b = el.selectionEnd ?? 0
  if (a === b)
    return
  activeDigit.value = charOffsetToDigitIndex(t, a)
}

function insertDigit(d: string) {
  if (!/^\d$/.test(d))
    return
  const i = activeDigit.value
  const next = [...slots.value] as string[]
  next[i] = d
  slots.value = next
  if (i < 7) {
    activeDigit.value = i + 1
  }
  applySelection()
  if (slotsErrorKind(slots.value))
    showInvalidFormatFeedback()
  commitIfPossible()
}

/** 빈칸은 0으로 보고, 해당 자릿수만 0~9에서 순환 */
function stepActiveDigit(delta: 1 | -1) {
  if (!canType.value)
    return
  const i = activeDigit.value
  const next = [...slots.value] as string[]
  const cur = next[i] ?? ""
  const n = cur === "" ? 0 : Number(cur)
  if (Number.isNaN(n) || n < 0 || n > 9)
    return
  const newN = (n + delta + 10) % 10
  next[i] = String(newN)
  slots.value = next
  applySelection()
  if (slotsErrorKind(slots.value))
    showInvalidFormatFeedback()
  commitIfPossible()
}

function onKeydown(e: KeyboardEvent) {
  if (e.isComposing)
    return
  if (e.key === "Enter") {
    e.preventDefault()
    inputRef.value?.blur()
    return
  }
  if (!canType.value) {
    if (e.key === "ArrowUp" || e.key === "ArrowDown")
      e.preventDefault()
    return
  }
  if (e.ctrlKey || e.metaKey) {
    if (e.key === "a" || e.key === "A") {
      e.preventDefault()
      activeDigit.value = 0
      const el = inputRef.value
      const t = display.value
      if (el && t) {
        el.setSelectionRange(0, t.length)
      }
    }
    return
  }
  if (e.key.length === 1 && /\d/.test(e.key)) {
    e.preventDefault()
    insertDigit(e.key)
    return
  }
  if (e.key === "ArrowLeft") {
    e.preventDefault()
    activeDigit.value = Math.max(0, activeDigit.value - 1)
    applySelection()
    return
  }
  if (e.key === "ArrowRight") {
    e.preventDefault()
    activeDigit.value = Math.min(7, activeDigit.value + 1)
    applySelection()
    return
  }
  if (e.key === "ArrowUp") {
    e.preventDefault()
    stepActiveDigit(1)
    return
  }
  if (e.key === "ArrowDown") {
    e.preventDefault()
    stepActiveDigit(-1)
    return
  }
  if (e.key === "Backspace" || e.key === "Delete") {
    e.preventDefault()
    const i = activeDigit.value
    const next = [...slots.value] as string[]
    const cur = next[i] ?? ""
    const isEmptyOrZero = cur === "" || cur === "0"
    if (e.key === "Backspace") {
      if (!isEmptyOrZero) {
        next[i] = "0"
        slots.value = next
        applySelection()
        commitIfPossible()
        return
      }
      if (i > 0) {
        activeDigit.value = i - 1
        applySelection()
        return
      }
      return
    }
    if (!isEmptyOrZero) {
      next[i] = "0"
      slots.value = next
      applySelection()
      commitIfPossible()
      return
    }
    if (i < 7) {
      activeDigit.value = i + 1
      applySelection()
    }
    return
  }
}

function onInputSync() {
  const el = inputRef.value
  if (!el)
    return
  const t = display.value
  if (el.value !== t)
    el.value = t
}

function onPaste(e: ClipboardEvent) {
  if (!canType.value)
    return
  e.preventDefault()
  const raw = e.clipboardData?.getData("text/plain") ?? ""
  const only = raw.replace(/\D/g, "").slice(0, 8)
  if (only.length === 0)
    return
  const next = Array.from({ length: 8 }, () => "")
  for (let i = 0; i < only.length; i++) next[i] = only[i]!
  slots.value = next
  activeDigit.value = Math.min(7, only.length)
  applySelection()
  if (slotsErrorKind(slots.value))
    showInvalidFormatFeedback()
  commitIfPossible()
}

watch(
  () => modelValue.value,
  (v) => {
    if (isFocused.value)
      return
    if (v) {
      slots.value = calendarToSlots(v)
    }
    else {
      clearSlots()
    }
  },
  { immediate: true },
)
</script>

<template>
  <div
    :class="cn('relative min-w-0 flex-1 h-full', props.class)"
  >
    <div
      v-if="showFormatTooltip"
      class="pointer-events-none absolute bottom-full left-0 z-50 mb-1 max-w-[min(100%,280px)] rounded-sm bg-grey-90 py-[6px] px-[10px] text-size-12 text-grey-10 shadow-md animate-in fade-in-0 zoom-in-95"
      role="status"
      aria-live="polite"
    >
      날짜 형식에 맞지 않아 적용되지 않습니다.
    </div>
    <div
      class="h-full w-full will-change-transform"
      :class="cn(invalidateShake && 'date-input-invalidate-shake')"
      @animationend="onInvalidateShakeEnd"
    >
      <input
        ref="inputRef"
        :value="display"
        type="text"
        :readonly="!canType"
        :disabled="isFrameDisabled"
        :placeholder="canType ? (props.placeholder ?? 'YYYY-MM-DD') : undefined"
        inputmode="numeric"
        autocomplete="off"
        class="min-h-0 h-full w-full min-w-0 border-0 bg-transparent outline-none placeholder:text-inherit tabular-nums read-only:cursor-default"
        :class="[labelSizeClass, inputTextClass]"
        @click="onInputClick"
        @select="onInputSelect"
        @focus="onFocus"
        @blur="onBlur"
        @keydown="onKeydown"
        @input="onInputSync"
        @paste="onPaste"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes date-input-invalidate-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-3px);
  }
  30% {
    transform: translateX(3px);
  }
  45% {
    transform: translateX(-2px);
  }
  60% {
    transform: translateX(2px);
  }
  75% {
    transform: translateX(-1px);
  }
  90% {
    transform: translateX(0);
  }
}
.date-input-invalidate-shake {
  animation: date-input-invalidate-shake 0.38s ease;
}
</style>
