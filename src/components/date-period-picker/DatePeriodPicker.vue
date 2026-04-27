<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, ref, watch } from "vue"
import type { DateRange } from "reka-ui"
import type { DateValue } from "@internationalized/date"
import { CalendarDate } from "@internationalized/date"
import { Popover, PopoverContent } from "../popover"
import { RangeCalendar } from "../calendar"
import { cn } from "../../lib/utils"
import {
  pickInputFrameDesign,
  useInputFrameInjectProvide,
  type InputFrameDesignProps,
} from "../input-frame"
import type { DatePeriodValue } from "./datePeriodTypes"
import DatePeriodTrigger from "./DatePeriodTrigger.vue"

const props = withDefaults(
  defineProps<
    InputFrameDesignProps & {
      modelValue?: DatePeriodValue | null
      startPlaceholder?: string
      endPlaceholder?: string
      class?: HTMLAttributes["class"]
      popoverContentClass?: HTMLAttributes["class"]
    }
  >(),
  {
    modelValue: null,
    startPlaceholder: "시작일 선택",
    endPlaceholder: "종료일 선택",
    disabled: undefined,
    readonly: undefined,
    variant: undefined,
    size: undefined,
    error: undefined,
  },
)

const emits = defineEmits<{
  "update:modelValue": [value: DatePeriodValue | null | undefined]
}>()

const open = ref(false)

const model = computed({
  get: () => props.modelValue,
  set: (v) => {
    emits("update:modelValue", v)
  },
})

const rangeForCalendar = computed<DateRange | undefined>(() => {
  const p = props.modelValue
  if (!p || (!p.start && !p.end))
    return undefined
  return {
    start: p.start ?? undefined,
    end: p.end ?? undefined,
  } as DateRange
})

function toCalendarDate(v: DateValue | undefined): CalendarDate | null {
  if (!v || typeof v !== "object")
    return null
  if (!("year" in v) || !("month" in v) || !("day" in v))
    return null
  return v as CalendarDate
}

function onRangeUpdate(v: DateRange) {
  const start = toCalendarDate(v.start)
  const end = toCalendarDate(v.end)
  emits("update:modelValue", { start, end })
  if (end)
    open.value = false
}

const isPeriodLocked = computed(() => !!props.readonly || !!props.disabled)

watch(
  isPeriodLocked,
  (locked) => {
    if (locked)
      open.value = false
  },
  { immediate: true },
)

useInputFrameInjectProvide(() => pickInputFrameDesign(props))
</script>

<template>
  <Popover v-model:open="open">
    <DatePeriodTrigger
      v-model="model"
      :start-placeholder="props.startPlaceholder"
      :end-placeholder="props.endPlaceholder"
      :class="props.class"
    />
    <PopoverContent
      align="end"
      :class="
        cn(
          '!p-0 w-[min-content] !border-1 !border-grey-40 bg-transparent p-0 shadow-none',
          props.popoverContentClass,
        )
      "
    >
      <RangeCalendar
        :model-value="rangeForCalendar"
        @update:model-value="onRangeUpdate"
      />
    </PopoverContent>
  </Popover>
</template>
