<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, ref, shallowRef, watch } from "vue"
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date"
import type { AcceptableValue } from "reka-ui"
import { X, Calendar as CalendarGlyph } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import { ToggleGroup, ToggleGroupItem } from "../toggle-group"
import { DatePicker } from "../date-picker"
import DateInput from "../date-picker/DateInput.vue"
import { Button } from "../button"
import { InputFrame, InputIcon } from "../input-frame"
import type { DatePeriodValue } from "../date-period-picker/datePeriodTypes"

export type DatePeriodPreset = "1m" | "3m" | "1y" | "custom"

const props = withDefaults(
  defineProps<{
    modelValue?: DatePeriodValue | null
    preset?: DatePeriodPreset
    title?: string
    doneText?: string
    startPlaceholder?: string
    endPlaceholder?: string
    showClose?: boolean
    class?: HTMLAttributes["class"]
  }>(),
  {
    modelValue: null,
    preset: undefined,
    title: "조회기간 설정",
    doneText: "선택 완료",
    startPlaceholder: "시작일 선택",
    endPlaceholder: "종료일 선택",
    showClose: true,
  },
)

const emit = defineEmits<{
  "update:modelValue": [value: DatePeriodValue | null]
  "update:preset": [value: DatePeriodPreset]
  done: [value: DatePeriodValue]
  close: []
}>()

const tz = getLocalTimeZone()

function presetToRange(preset: Exclude<DatePeriodPreset, "custom">): DatePeriodValue {
  const end = today(tz) as CalendarDate
  if (preset === "1m")
    return { start: end.subtract({ months: 1 }), end }
  if (preset === "3m")
    return { start: end.subtract({ months: 3 }), end }
  return { start: end.subtract({ years: 1 }), end }
}

/** 초기 modelValue 가 1m/3m/1y 와 정확히 일치하면 그 프리셋을, 아니면 custom */
function detectPreset(v: DatePeriodValue | null | undefined): DatePeriodPreset {
  if (!v?.start || !v?.end)
    return "custom"
  const presets: Exclude<DatePeriodPreset, "custom">[] = ["1m", "3m", "1y"]
  for (const p of presets) {
    const r = presetToRange(p)
    if (
      r.start && r.end && v.start && v.end
      && r.start.compare(v.start) === 0
      && r.end.compare(v.end) === 0
    )
      return p
  }
  return "custom"
}

/**
 * `CalendarDate` 는 `#private` 가 있어 `ref<DatePeriodValue>` 로 묶으면
 * Vue 가 구조 분해하면서 타입이 어긋난다. 시작/종료를 나눠 보관한다.
 */
const draftStart = shallowRef<CalendarDate | null>(props.modelValue?.start ?? null)
const draftEnd = shallowRef<CalendarDate | null>(props.modelValue?.end ?? null)

const internalPreset = ref<DatePeriodPreset>(props.preset ?? detectPreset(props.modelValue))

watch(
  () => props.modelValue,
  (v) => {
    draftStart.value = v?.start ?? null
    draftEnd.value = v?.end ?? null
    if (props.preset === undefined)
      internalPreset.value = detectPreset(v)
  },
)

watch(
  () => props.preset,
  (p) => {
    if (p !== undefined)
      internalPreset.value = p
  },
)

function onPresetChange(payload: AcceptableValue | AcceptableValue[]) {
  if (Array.isArray(payload) || payload === undefined || payload === null || typeof payload !== "string")
    return
  const next = payload as DatePeriodPreset
  internalPreset.value = next
  emit("update:preset", next)
  if (next !== "custom") {
    const r = presetToRange(next)
    draftStart.value = r.start
    draftEnd.value = r.end
  }
}

const startModel = computed({
  get: () => draftStart.value,
  set: (v: CalendarDate | null | undefined) => {
    draftStart.value = v ?? null
  },
})

const endModel = computed({
  get: () => draftEnd.value,
  set: (v: CalendarDate | null | undefined) => {
    draftEnd.value = v ?? null
  },
})

function pad(n: number, w: number) {
  return String(n).padStart(w, "0")
}

function formatDate(d: CalendarDate | null) {
  if (!d)
    return ""
  return `${pad(d.year, 4)}-${pad(d.month, 2)}-${pad(d.day, 2)}`
}

const startText = computed(() => formatDate(draftStart.value))
const endText = computed(() => formatDate(draftEnd.value))

const doneDisabled = computed(() => !draftStart.value || !draftEnd.value)

function onDone() {
  if (doneDisabled.value)
    return
  const v: DatePeriodValue = { start: draftStart.value, end: draftEnd.value }
  emit("update:modelValue", v)
  emit("done", v)
}

function onClose() {
  emit("close")
}
</script>

<template>
  <section
    :class="cn(
      'flex w-full flex-col gap-[16px] rounded-[8px] bg-grey-10 p-[16px]',
      props.class,
    )"
  >
    <header class="flex items-center justify-between">
      <h3 class="text-size-20 font-bold text-grey-90 tracking-[-1px]">
        {{ props.title }}
      </h3>
      <button
        v-if="props.showClose"
        type="button"
        class="flex size-[24px] items-center justify-center text-grey-60"
        aria-label="닫기"
        @click="onClose"
      >
        <X class="size-[20px]" />
      </button>
    </header>

    <ToggleGroup
      type="single"
      :model-value="internalPreset"
      class="w-full gap-0 rounded-[6px] bg-grey-20 p-[2px]"
      @update:model-value="onPresetChange"
    >
      <ToggleGroupItem
        value="1m"
        class="h-[32px] flex-1 min-w-0 rounded-[4px] text-size-14 font-bold data-[state=on]:bg-grey-10 data-[state=on]:text-grey-90 data-[state=on]:shadow-small text-grey-60 hover:bg-transparent hover:text-grey-80"
      >
        1개월
      </ToggleGroupItem>
      <ToggleGroupItem
        value="3m"
        class="h-[32px] flex-1 min-w-0 rounded-[4px] text-size-14 font-bold data-[state=on]:bg-grey-10 data-[state=on]:text-grey-90 data-[state=on]:shadow-small text-grey-60 hover:bg-transparent hover:text-grey-80"
      >
        3개월
      </ToggleGroupItem>
      <ToggleGroupItem
        value="1y"
        class="h-[32px] flex-1 min-w-0 rounded-[4px] text-size-14 font-bold data-[state=on]:bg-grey-10 data-[state=on]:text-grey-90 data-[state=on]:shadow-small text-grey-60 hover:bg-transparent hover:text-grey-80"
      >
        1년
      </ToggleGroupItem>
      <ToggleGroupItem
        value="custom"
        class="h-[32px] flex-1 min-w-0 rounded-[4px] text-size-14 font-bold data-[state=on]:bg-grey-10 data-[state=on]:text-grey-90 data-[state=on]:shadow-small text-grey-60 hover:bg-transparent hover:text-grey-80"
      >
        직접 설정
      </ToggleGroupItem>
    </ToggleGroup>

    <div v-if="internalPreset !== 'custom'" class="w-full">
      <InputFrame size="large" readonly class="w-full">
        <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
          <div class="flex min-w-0 flex-1 items-center gap-[4px] text-size-16 text-grey-80">
            <span class="min-w-0 flex-1 basis-0 truncate">{{ startText }}</span>
            <span class="shrink-0 opacity-60" aria-hidden="true">→</span>
            <span class="min-w-0 flex-1 basis-0 truncate">{{ endText }}</span>
          </div>
          <InputIcon class="text-grey-60">
            <CalendarGlyph />
          </InputIcon>
        </div>
      </InputFrame>
    </div>

    <div v-else class="flex w-full items-center gap-[8px]">
      <DatePicker
        v-model="startModel"
        size="large"
        class="min-w-0 flex-1 basis-0"
        popover-content-class="!max-w-[calc(100vw-32px)]"
      >
        <DateInput :placeholder="props.startPlaceholder" />
      </DatePicker>
      <span class="shrink-0 text-grey-60" aria-hidden="true">~</span>
      <DatePicker
        v-model="endModel"
        size="large"
        class="min-w-0 flex-1 basis-0"
        popover-content-class="!max-w-[calc(100vw-32px)]"
      >
        <DateInput :placeholder="props.endPlaceholder" />
      </DatePicker>
    </div>

    <Button
      block
      size="large"
      variant="primary"
      :disabled="doneDisabled"
      @click="onDone"
    >
      {{ props.doneText }}
    </Button>
  </section>
</template>
