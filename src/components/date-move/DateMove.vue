<script setup lang="ts">
import { computed, provide, type HTMLAttributes } from "vue"
import { CalendarDate, endOfMonth, getLocalTimeZone, today } from "@internationalized/date"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-vue-next"
import { IconButton } from "../icon-button"
import {
  type InputFrameDesignProps,
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "../input-frame"
import { cn } from "../../lib/utils"
import { isDatePeriodValue, type DateMoveModel, type DatePeriodValue } from "../date-period-picker/datePeriodTypes"
import { DATE_MOVE_MODEL_KEY } from "./dateMoveContext"
import DatePicker from "../date-picker/DatePicker.vue"

/**
 * # 이전, 다음 / 연, 월 단위로 `modelValue` 를 이동
 * - DatePicker 혹은 DatePeriodPicker 를 품고 그 데이터를 이동시킴
 * - 기본 slot 은 DatePicker 
 */
const modelValue = defineModel<DateMoveModel>();
provide(DATE_MOVE_MODEL_KEY, modelValue)
const props = defineProps<
  InputFrameDesignProps & {
    class?: HTMLAttributes["class"]
  }
>()

/**
 * # 공통 디자인 속성
 */
const design = useInputFrameInjectProvide(() => pickInputFrameDesign(props))

/**
 * # 사이즈 별 아이콘 크기
 * - small, regular, large 세 개만 있음
 */
const iconButtonSize = computed<"small" | "regular" | "large">(() => {
  if (design.size.value === "small")
    return "small"
  if (design.size.value === "large")
    return "large"
  return "regular"
})

/**
 * # 월 단위로 날짜 이동
 * @param date 날짜
 * @param months 이동 단위 -12 ~ 12
 */
function addMonthsToCalendarDate(date: CalendarDate, months: number): CalendarDate {
  const y = date.year
  const m0 = date.month - 1
  const total = y * 12 + m0 + months
  const newYear = Math.floor(total / 12)
  const newMonth = (total % 12) + 1
  const first = new CalendarDate(newYear, newMonth, 1)
  const last = endOfMonth(first)
  const day = Math.min(date.day, last.day)
  return new CalendarDate(newYear, newMonth, day)
}

/**
 * # 날짜 이동
 * @param v 날짜 모델
 * @param delta 이동 단위
 * @param { "month" | "year" } unit 이동 단위 (연, 월)
 */
function shiftDateMoveModel(
  v: DateMoveModel | undefined,
  delta: number,
  unit: "month" | "year" = "month",
): DateMoveModel {
  const months = unit === "year" ? delta * 12 : delta
  const anchor = today(getLocalTimeZone())
  if (v === null || v === undefined) {
    return addMonthsToCalendarDate(anchor, months)
  }
  if (isDatePeriodValue(v)) {
    if (v.start == null && v.end == null) {
      const d = addMonthsToCalendarDate(anchor, months)
      return { start: d, end: d } satisfies DatePeriodValue
    }
    return {
      start: v.start != null
        ? addMonthsToCalendarDate(v.start, months)
        : null,
      end: v.end != null
        ? addMonthsToCalendarDate(v.end, months)
        : null,
    } satisfies DatePeriodValue
  }
  return addMonthsToCalendarDate(v, months)
}

/**
 * # 날짜 이동
 * - 이전, 이후 / 연, 월 단위로 이동
 * - disabled 일 때는 이동 안 함. early return
 * @param delta 이동 단위
 * @param { "month" | "year" } unit 이동 단위 (연, 월)
 */
function onClickMove(delta: number, unit: "month" | "year" = "month") {
  if (design.disabled.value)
    return
  const next = shiftDateMoveModel(modelValue.value, delta, unit)
  modelValue.value = next
}
</script>

<template>
  <div :class="cn('flex min-w-0 items-center gap-[8px]', props.class)" >
    <div class="flex items-center gap-[4px]">
      <IconButton
        variant="tertiary"
        :size="iconButtonSize"
        :disabled="design.disabled.value"
        aria-label="이전 연"
        @click="onClickMove(-1, 'year')"
      >
        <ChevronsLeft />
      </IconButton>
      <IconButton
        variant="tertiary"
        :size="iconButtonSize"
        :disabled="design.disabled.value"
        aria-label="이전 달"
        @click="onClickMove(-1, 'month')"
      >
        <ChevronLeft />
      </IconButton>
    </div>
    <div class="min-w-0 flex-1">
      <slot>
        <!-- 기본은 DatePicker -->
        <DatePicker />
      </slot>
    </div>
    <div class="flex items-center gap-[4px]">
      <IconButton
        variant="tertiary"
        :size="iconButtonSize"
        :disabled="design.disabled.value"
        aria-label="다음 달"
        @click="onClickMove(1, 'month')"
      >
        <ChevronRight />
      </IconButton>
      <IconButton
        variant="tertiary"
        :size="iconButtonSize"
        :disabled="design.disabled.value"
        aria-label="다음 연"
        @click="onClickMove(1, 'year')"
      >
        <ChevronsRight />
      </IconButton>
    </div>
  </div>
</template>
