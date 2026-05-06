<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject, nextTick, ref, watch } from "vue"
import { Time } from "@internationalized/date"
import { cn } from "../../lib/utils"
import {
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "../input-frame"
import type { InputFrameVariantProps } from "../input-frame"
import { TIME_PICKER_CTX_KEY } from "./timePickerContext"

const localModel = defineModel<Time | null>()
const props = withDefaults(
  defineProps<{
    size?: InputFrameVariantProps["size"]
    readonly?: boolean
    disabled?: boolean
    /** 비어 있을 때(입력 가능할 때)만 표시. 미지정이면 "시간 선택" */
    placeholder?: string
    class?: HTMLAttributes["class"]
  }>(),
  {
    size: undefined,
    readonly: undefined,
    disabled: undefined,
  },
)

const emit = defineEmits<{
  "update:draftError": [value: boolean]
}>()

const design = useInputFrameInjectProvide(() => pickInputFrameDesign(props))
const isFrameDisabled = design.disabled

const timePicker = inject(TIME_PICKER_CTX_KEY, null)

const modelValue = computed({
  get(): Time | null | undefined {
    return timePicker ? timePicker.model.value : localModel.value
  },
  set(v: Time | null | undefined) {
    if (timePicker)
      timePicker.model.value = v
    else
      localModel.value = v
  },
})

const inputRef = ref<HTMLInputElement | null>(null)
/** 4자리: 시2·분2 — 빈칸은 '' (24h 기준) */
const slots = ref<string[]>(Array.from({ length: 4 }, () => ""))
const activeDigit = ref(0)
const isFocused = ref(false)
const snapshotAtFocus = ref<Time | null | undefined>(undefined)
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

const inputTextClass = computed(() => {
  if (design.disabled.value)
    return "text-inherit"
  if (display.value.length > 0)
    return "text-grey-80"
  return "text-inherit"
})

const draftError = computed(() => isSlotsInvalid(slots.value))

function emitDraftError() {
  const hasError = isSlotsInvalid(slots.value)
  if (timePicker)
    timePicker.draftError.value = hasError
  else
    emit("update:draftError", hasError)
}

function clearSlots() {
  slots.value = Array.from({ length: 4 }, () => "")
  activeDigit.value = 0
  emitDraftError()
}

function timeToSlots(t: Time): string[] {
  const s = Array.from({ length: 4 }, () => "")
  const h = String(t.hour).padStart(2, "0")
  const m = String(t.minute).padStart(2, "0")
  s[0] = h[0]!
  s[1] = h[1]!
  s[2] = m[0]!
  s[3] = m[1]!
  return s
}

/** 24h 시각을 한국어 오전/오후 + HH:MM 으로 표시 — Figma 명세에 맞춰 24h 숫자를 그대로 둔다 */
function formatSlotsToDisplay(s: string[]): string {
  const h = s.slice(0, 2).join("")
  const m = s.slice(2, 4).join("")
  if (h.length === 0)
    return ""
  const hourNum = h.length >= 1 ? Number(h.padEnd(2, "0")) : 0
  const meridiem = !Number.isNaN(hourNum) && hourNum >= 12 ? "오후" : "오전"
  if (m.length === 0)
    return `${meridiem} ${h}`
  return `${meridiem} ${h}:${m}`
}

function flatDigits(s: string[]): string {
  return s.join("")
}

/**
 * 4자리·시 0~23·분 0~59 검증. 부분 입력은 명백히 불가한 경우만 error.
 */
function isSlotsInvalid(s: string[]): boolean {
  const f = flatDigits(s)
  if (f.length < 1)
    return false
  if (f.length === 1) {
    if (f[0]! > "2")
      return true
    return false
  }
  if (f.length >= 2) {
    const h = Number(f.slice(0, 2))
    if (h < 0 || h > 23)
      return true
  }
  if (f.length === 3) {
    if (f[2]! > "5")
      return true
    return false
  }
  if (f.length === 4) {
    const m = Number(f.slice(2, 4))
    if (m < 0 || m > 59)
      return true
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
  if (f.length !== 4)
    return false
  return !isSlotsInvalid(s)
}

function parseSlotsToTime(s: string[]): Time {
  const f = flatDigits(s)
  return new Time(Number(f.slice(0, 2)), Number(f.slice(2, 4)))
}

/** display 상의 숫자 인덱스 → display 의 캐럿 범위 */
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
  if (!/\d/.test(displayStr[o]!)) {
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
      if (/\d/.test(displayStr[k]!))
        d++
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
  return Math.min(3, digitIdx)
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
    slots.value = timeToSlots(modelValue.value)
    emitDraftError()
  }
  else {
    clearSlots()
  }
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
    const t = parseSlotsToTime(slots.value)
    modelValue.value = t
    emitDraftError()
  }
  else {
    if (snap) {
      slots.value = timeToSlots(snap as Time)
      emitDraftError()
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
  if (i < 3)
    activeDigit.value = i + 1
  applySelection()
  if (isSlotsInvalid(slots.value))
    showInvalidFormatFeedback()
  emitDraftError()
}

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
  if (isSlotsInvalid(slots.value))
    showInvalidFormatFeedback()
  emitDraftError()
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
      if (el && t)
        el.setSelectionRange(0, t.length)
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
    activeDigit.value = Math.min(3, activeDigit.value + 1)
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
        emitDraftError()
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
      emitDraftError()
      return
    }
    if (i < 3) {
      activeDigit.value = i + 1
      applySelection()
    }
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
  const only = raw.replace(/\D/g, "").slice(0, 4)
  if (only.length === 0)
    return
  const next = Array.from({ length: 4 }, () => "")
  for (let i = 0; i < only.length; i++) next[i] = only[i]!
  slots.value = next
  activeDigit.value = Math.min(3, only.length)
  applySelection()
  if (isSlotsInvalid(slots.value))
    showInvalidFormatFeedback()
  emitDraftError()
}

watch(
  () => modelValue.value,
  (v) => {
    if (isFocused.value)
      return
    if (v) {
      slots.value = timeToSlots(v)
      emitDraftError()
    }
    else {
      clearSlots()
    }
  },
  { immediate: true },
)
</script>

<template>
  <div :class="cn('relative min-w-0 flex-1 h-full', props.class)">
    <div
      v-if="draftError"
      class="pointer-events-none absolute bottom-full left-0 z-50 mb-1 max-w-[min(100%,280px)] rounded-sm bg-grey-90 py-[6px] px-[10px] text-size-12 text-grey-10 shadow-md animate-in fade-in-0 zoom-in-95"
      role="status"
      aria-live="polite"
    >
      시간 형식에 맞지 않아 적용되지 않습니다.
    </div>
    <div
      class="h-full w-full will-change-transform"
      :class="cn(invalidateShake && 'time-input-invalidate-shake')"
      @animationend="onInvalidateShakeEnd"
    >
      <input
        ref="inputRef"
        :value="display"
        type="text"
        :readonly="!canType"
        :disabled="isFrameDisabled"
        :placeholder="canType ? (props.placeholder ?? '시간 선택') : undefined"
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
@keyframes time-input-invalidate-shake {
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
.time-input-invalidate-shake {
  animation: time-input-invalidate-shake 0.38s ease;
}
</style>
