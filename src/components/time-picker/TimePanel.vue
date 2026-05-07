<script setup lang="ts">
/**
 * TimePanel — Figma `time` (node `12266:7051`) 정렬 단일 시각 패널
 * - 시 / 분 input · AM·PM 세로 토글 · 선택 안함 체크박스
 * - 완료 시 `change` 이벤트로 확정 (null 이면 미선택)
 *
 * 24h 시각을 내부에 저장하지만 입력은 12h(1~12)로 받는다.
 * (Figma 입력 폼은 12h 표기·AM/PM 토글)
 */
import type { HTMLAttributes } from "vue"
import { Time } from "@internationalized/date"
import { computed, ref, watch } from "vue"
import { cn } from "../../lib/utils"
import { Button } from "../button"
import { Checkbox } from "../checkbox"

defineOptions({ name: "TimePanel" })

const props = withDefaults(
  defineProps<{
    modelValue?: Time | null
    class?: HTMLAttributes["class"]
    /** "선택 안함" 체크박스 노출 여부 */
    showSkip?: boolean
    /** 완료 버튼 노출 여부 */
    showFooter?: boolean
  }>(),
  {
    modelValue: null,
    showSkip: true,
    showFooter: true,
  },
)

const emit = defineEmits<{
  "update:modelValue": [value: Time | null]
  "change": [value: Time | null]
}>()

type Meridiem = "AM" | "PM"

/** draft 입력: 빈 문자열 허용 */
const hourText = ref<string>("")
const minuteText = ref<string>("")
const meridiem = ref<Meridiem>("AM")
const skip = ref(false)

function to12h(hour24: number): { h12: number, m: Meridiem } {
  const m: Meridiem = hour24 >= 12 ? "PM" : "AM"
  const h = hour24 % 12 === 0 ? 12 : hour24 % 12
  return { h12: h, m }
}

function from12h(h12: number, m: Meridiem): number {
  const base = h12 % 12
  return m === "PM" ? base + 12 : base
}

function syncFromModel(v: Time | null | undefined) {
  if (!v) {
    hourText.value = ""
    minuteText.value = ""
    meridiem.value = "AM"
    return
  }
  const { h12, m } = to12h(v.hour)
  hourText.value = String(h12).padStart(2, "0")
  minuteText.value = String(v.minute).padStart(2, "0")
  meridiem.value = m
}

watch(() => props.modelValue, (v) => syncFromModel(v ?? null), { immediate: true })

const isReady = computed(() => {
  if (skip.value)
    return true
  const h = Number(hourText.value)
  const m = Number(minuteText.value)
  if (Number.isNaN(h) || Number.isNaN(m))
    return false
  if (h < 1 || h > 12)
    return false
  if (m < 0 || m > 59)
    return false
  return true
})

function clamp(n: number, min: number, max: number) {
  if (Number.isNaN(n))
    return min
  return Math.min(max, Math.max(min, n))
}

function onHourInput(e: Event) {
  if (skip.value)
    return
  const raw = (e.target as HTMLInputElement).value.replace(/\D/g, "").slice(0, 2)
  hourText.value = raw
}

function onHourBlur() {
  if (skip.value || hourText.value === "")
    return
  const n = clamp(Number(hourText.value), 1, 12)
  hourText.value = String(n).padStart(2, "0")
}

function onMinuteInput(e: Event) {
  if (skip.value)
    return
  const raw = (e.target as HTMLInputElement).value.replace(/\D/g, "").slice(0, 2)
  minuteText.value = raw
}

function onMinuteBlur() {
  if (skip.value || minuteText.value === "")
    return
  const n = clamp(Number(minuteText.value), 0, 59)
  minuteText.value = String(n).padStart(2, "0")
}

function setMeridiem(m: Meridiem) {
  if (skip.value)
    return
  meridiem.value = m
}

function toggleSkip(v: boolean | "indeterminate") {
  skip.value = v === true
}

function buildTime(): Time | null {
  if (skip.value)
    return null
  const h = Number(hourText.value)
  const m = Number(minuteText.value)
  if (Number.isNaN(h) || Number.isNaN(m))
    return null
  return new Time(from12h(h, meridiem.value), m)
}

function onDone() {
  if (!isReady.value)
    return
  const t = buildTime()
  emit("update:modelValue", t)
  emit("change", t)
}

const hourPlaceholder = "시"
const minutePlaceholder = "분"

const inputBoxClass = cn(
  "w-[44px] h-[40px] rounded-[4px] border border-grey-40 bg-grey-10",
  "text-center text-size-14 text-grey-90 tabular-nums",
  "placeholder:text-grey-50 outline-hidden",
  "focus:border-blue-80 focus:ring-1 focus:ring-blue-50",
  "disabled:bg-grey-20 disabled:border-grey-30 disabled:text-grey-50 disabled:placeholder:text-grey-50",
)
</script>

<template>
  <div :class="cn('w-[200px] rounded-[8px] border border-grey-40 bg-grey-10 p-[12px]', props.class)">
    <div class="flex items-center gap-[6px]">
      <input
        :value="hourText"
        type="text"
        inputmode="numeric"
        :disabled="skip"
        :placeholder="hourPlaceholder"
        :class="inputBoxClass"
        @input="onHourInput"
        @blur="onHourBlur"
      />
      <span class="text-size-14 text-grey-70 select-none">:</span>
      <input
        :value="minuteText"
        type="text"
        inputmode="numeric"
        :disabled="skip"
        :placeholder="minutePlaceholder"
        :class="inputBoxClass"
        @input="onMinuteInput"
        @blur="onMinuteBlur"
      />
      <div class="ml-auto flex flex-col gap-0">
        <button
          type="button"
          :disabled="skip"
          :class="cn(
            'h-[20px] px-[8px] text-size-12 rounded-t-[4px] border border-b-0 transition-colors',
            meridiem === 'AM' && !skip
              ? 'bg-navy-80 border-navy-80 text-grey-10 font-bold'
              : 'bg-grey-10 border-grey-40 text-grey-70',
            skip && 'opacity-50 cursor-not-allowed',
          )"
          @mousedown.prevent
          @click="setMeridiem('AM')"
        >
          AM
        </button>
        <button
          type="button"
          :disabled="skip"
          :class="cn(
            'h-[20px] px-[8px] text-size-12 rounded-b-[4px] border transition-colors',
            meridiem === 'PM' && !skip
              ? 'bg-navy-80 border-navy-80 text-grey-10 font-bold'
              : 'bg-grey-10 border-grey-40 text-grey-70',
            skip && 'opacity-50 cursor-not-allowed',
          )"
          @mousedown.prevent
          @click="setMeridiem('PM')"
        >
          PM
        </button>
      </div>
    </div>

    <label
      v-if="props.showSkip"
      class="mt-[12px] flex items-center gap-[6px] text-size-12 text-grey-80 select-none"
    >
      <Checkbox
        size="small"
        :model-value="skip"
        @update:model-value="toggleSkip"
      />
      선택 안함
    </label>

    <div
      v-if="props.showFooter"
      class="mt-[12px] flex justify-end pt-[8px] border-t border-grey-30"
    >
      <Button
        variant="primary"
        size="small"
        :disabled="!isReady"
        @mousedown.prevent
        @click="onDone"
      >
        완료
      </Button>
    </div>
  </div>
</template>
