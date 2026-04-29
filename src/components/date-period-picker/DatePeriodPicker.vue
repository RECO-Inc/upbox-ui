<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject, ref, watch } from "vue"
import type { DateRange } from "reka-ui"
import { CalendarDate } from "@internationalized/date"
import { Popover, PopoverContent } from "../popover"
import { PeriodCalendar } from "../calendar"
import { cn } from "../../lib/utils"
import {
  pickInputFrameDesign,
  useInputFrameInjectProvide,
  type InputFrameDesignProps,
} from "../input-frame"
import type { DatePeriodValue } from "./datePeriodTypes"
import { isDatePeriodValue } from "./datePeriodTypes"
import DatePeriodTrigger from "./DatePeriodTrigger.vue"
import { DATE_MOVE_MODEL_KEY } from "../date-move/dateMoveContext"

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
    startPlaceholder: "YYYY-MM-DD",
    endPlaceholder: "YYYY-MM-DD",
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

const dateMoveCtx = inject(DATE_MOVE_MODEL_KEY, null)

/**
 * props.modelValue가 바인딩 되지 않은 경우(undefined) DateMove의 공유 모델을 읽고 씀
 */
const model = computed({
  get(): DatePeriodValue | null | undefined {
    if (props.modelValue !== undefined)
      return props.modelValue
    const v = dateMoveCtx?.value
    if (v === undefined || !isDatePeriodValue(v))
      return null
    return v
  },
  set(v: DatePeriodValue | null | undefined) {
    emits("update:modelValue", v)
    if (dateMoveCtx)
      dateMoveCtx.value = v ?? null
  },
})

function modelToDraftRange(
  p: DatePeriodValue | null | undefined,
): DateRange | undefined {
  if (!p || (!p.start && !p.end))
    return undefined
  return {
    start: p.start ?? undefined,
    end: p.end ?? undefined,
  } as DateRange
}

const open = ref(false)

/** 팝업 안 범위 선택 — 완료 전에는 바깥 model 에 반영하지 않는다 */
const rangeDraft = ref<DateRange | undefined>(undefined)

watch(open, (isOpen) => {
  if (isOpen)
    rangeDraft.value = modelToDraftRange(model.value ?? null)
})

function jsDateToCalendarDate(d: Date): CalendarDate {
  return new CalendarDate(d.getFullYear(), d.getMonth() + 1, d.getDate())
}

function onRangeDraftUpdate(v: DateRange | undefined) {
  rangeDraft.value = v
}

function onPeriodCalendarChange(payload: { first: Date | null, last: Date | null }) {
  model.value = {
    start: payload.first ? jsDateToCalendarDate(payload.first) : null,
    end: payload.last ? jsDateToCalendarDate(payload.last) : null,
  }
  open.value = false
}

function onRangeDraftReset() {
  rangeDraft.value = undefined
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
          '!p-0 w-max max-w-[calc(100vw-16px)] !border-1 !border-grey-40 bg-transparent p-0 shadow-none',
          props.popoverContentClass,
        )
      "
    >
      <PeriodCalendar
        :model-value="rangeDraft"
        @update:model-value="onRangeDraftUpdate"
        @change="onPeriodCalendarChange"
        @reset="onRangeDraftReset"
      />
    </PopoverContent>
  </Popover>
</template>
