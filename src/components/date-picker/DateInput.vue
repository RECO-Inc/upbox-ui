<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, nextTick, ref, watch } from "vue"
import { CalendarDate, parseDate } from "@internationalized/date"
import { cn } from "../../lib/utils"
import type { InputFrameVariantProps } from "../input-frame"

const props = withDefaults(
  defineProps<{
    modelValue?: CalendarDate | null
    size?: InputFrameVariantProps["size"]
    readonly?: boolean
    disabled?: boolean
    /** 비어 있을 때(입력 가능할 때)만 표시. 미지정이면 YYYY-MM-DD */
    placeholder?: string
    class?: HTMLAttributes["class"]
  }>(),
  {
    modelValue: null,
    size: "regular",
    readonly: false,
    disabled: false,
  },
)

const emit = defineEmits<{
  "update:modelValue": [value: CalendarDate | null]
  "update:draftError": [value: boolean]
}>()

const inputRef = ref<HTMLInputElement | null>(null)
/** 8자리: 연4·월2·일2 — 빈칸은 '' */
const slots = ref<string[]>(Array.from({ length: 8 }, () => ""))
const activeDigit = ref(0)
const isFocused = ref(false)
/** 포커스 직전 확정 값(blur 시 되돌리기용) */
const snapshotAtFocus = ref<CalendarDate | null | undefined>(undefined)
const invalidateShake = ref(false)

const labelSizeClass = computed(() => {
  if (props.size === "small")
    return "text-size-12"
  if (props.size === "large")
    return "text-size-16"
  return "text-size-14"
})

const canType = computed(
  () => !props.disabled && !props.readonly,
)

const display = computed(() => formatSlotsToDisplay(slots.value))

/** InputFrame `has-[input:placeholder-shown]:text-grey-50` 이 여러 input 중 하나면 전체 톤이 밝아지는 문제 — 이 필드에 표시가 있을 때는 직접 grey-80 */
const inputTextClass = computed(() => {
  if (props.disabled)
    return "text-inherit"
  if (display.value.length > 0)
    return "text-grey-80"
  return "text-inherit"
})

const draftError = computed(() => isSlotsInvalid(slots.value))

watch(
  draftError,
  (v) => {
    emit("update:draftError", v)
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

function canCommit(s: string[]): boolean {
  const f = flatDigits(s)
  if (f.length !== 8)
    return false
  return !isSlotsInvalid(s)
}

function parseSlotsToCalendar(s: string[]): CalendarDate {
  const f = flatDigits(s)
  const iso = `${f.slice(0, 4)}-${f.slice(4, 6)}-${f.slice(6, 8)}`
  return parseDate(iso)
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
  snapshotAtFocus.value = props.modelValue ?? null
  if (props.modelValue)
    slots.value = calendarToSlots(props.modelValue)
  else
    clearSlots()
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
    emit("update:modelValue", d)
  }
  else {
    if (snap)
      slots.value = calendarToSlots(snap as CalendarDate)
    else
      clearSlots()
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
  if (isSlotsInvalid(slots.value))
    showInvalidFormatFeedback()
}

function onKeydown(e: KeyboardEvent) {
  if (e.isComposing)
    return
  if (e.key === "Enter") {
    e.preventDefault()
    inputRef.value?.blur()
    return
  }
  if (!canType.value)
    return
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
  if (isSlotsInvalid(slots.value))
    showInvalidFormatFeedback()
}

watch(
  () => props.modelValue,
  (v) => {
    if (isFocused.value)
      return
    if (v)
      slots.value = calendarToSlots(v)
    else
      clearSlots()
  },
  { immediate: true },
)
</script>

<template>
  <div
    :class="cn('relative min-w-0 flex-1 h-full', props.class)"
  >
    <div
      v-if="draftError"
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
        :disabled="props.disabled"
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
