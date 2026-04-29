<script lang="ts" setup>
/**
 * DateCalendar — Figma 최종 Component `dateCalendar` (node `12247:8602`) 정렬 단일 일자 패널
 * - KR 로케·월요일 주 시작 · 연/월 각각 네비(<< < 제목 > >>)
 * - 빠른 기간(1·3·6개월·1년) · 초기화·완료 바
 *
 * 월·연만 필요하면 `MonthCalendar` 를 사용하세요.
 *
 * 범위 선택은 PeriodCalendar / RangeCalendar 를 사용하세요.
 */
import type { CalendarRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { DateValue } from "@internationalized/date"
import {
  CalendarDate,
  getLocalTimeZone,
  today,
} from "@internationalized/date"
import { computed, ref, watch } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { useForwardPropsEmits } from "reka-ui"
import { cn } from "../../lib/utils"
import CalendarDateGrid from "./CalendarDateGrid.vue"
import CalendarMonthGrid from "./CalendarMonthGrid.vue"
import CalendarYearGrid from "./CalendarYearGrid.vue"

defineOptions({ name: "DateCalendar" })

type ViewMode = "DATE" | "MONTH" | "YEAR"

export interface Props extends CalendarRootProps {
  class?: HTMLAttributes["class"]
  showFooter?: boolean // 초기화 완료
  showQuickPresets?: boolean // n 개월
}

const props = withDefaults(defineProps<Props>(), {
  showFooter: true,
  showQuickPresets: true,
})

const emits = defineEmits<{
  "update:modelValue": [value: CalendarRootProps["modelValue"]]
  "update:placeholder": [value: CalendarRootProps["placeholder"]]
  "change": [value: Date | null]
  "reset": []
}>()

const delegatedProps = reactiveOmit(
  props,
  "class",
  "showFooter",
  "showQuickPresets",
  /** CalendarRoot 에 직접 넘기고 기본값을 덮어쓴다 */
  "locale",
  "weekStartsOn",
)

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const viewMode = ref<ViewMode>("DATE")

const now = new Date()
const placeholder = ref(new CalendarDate(now.getFullYear(), now.getMonth() + 1, 1))

const localeResolved = computed(() => props.locale ?? "ko-KR")
const weekStartsResolved = computed(() => props.weekStartsOn ?? 1)

watch(() => props.modelValue, (newVal) => {
  if (newVal && typeof newVal === "object") {
    if ("year" in newVal && "month" in newVal) {
      const dateVal = newVal as DateValue
      placeholder.value = new CalendarDate(dateVal.year, dateVal.month, 1)
    }
  }
}, { immediate: true })

/** 월 패널 표시 연도(`placeholder`)와 모델 연도가 같을 때만 칩 강조 */
const selectedMonthInMonthView = computed(() => {
  const m = props.modelValue
  if (!m || typeof m !== "object" || !("year" in m) || !("month" in m))
    return undefined
  const d = m as DateValue
  if (d.year !== placeholder.value.year)
    return undefined
  return d.month
})

const selectedYear = computed(() => {
  if (props.modelValue && typeof props.modelValue === "object" && "year" in props.modelValue) {
    return (props.modelValue as DateValue).year
  }
  return undefined
})

function onClickHeading() {
  viewMode.value = "MONTH"
}

function onSelectMonth(month: number) {
  placeholder.value = new CalendarDate(placeholder.value.year, month, 1)
  viewMode.value = "DATE"
}

function onSelectYear(year: number) {
  placeholder.value = new CalendarDate(year, placeholder.value.month, 1)
  viewMode.value = "MONTH"
}

function onPrevYear() {
  placeholder.value = new CalendarDate(placeholder.value.year - 1, placeholder.value.month, 1)
}

function onNextYear() {
  placeholder.value = new CalendarDate(placeholder.value.year + 1, placeholder.value.month, 1)
}

function onClickYear() {
  viewMode.value = "YEAR"
}

function onQuickAddMonths(offset: number) {
  const tz = getLocalTimeZone()
  const anchor = today(tz) as CalendarDate
  const next = anchor.add({ months: offset })
  emits("update:modelValue", next)
  placeholder.value = new CalendarDate(next.year, next.month, 1)
}

function onReset() {
  emits("reset")
}

function onDone() {
  let selectedDate: Date | null = null
  if (props.modelValue && typeof props.modelValue === "object") {
    const val = props.modelValue as any
    if ("year" in val && "month" in val && "day" in val) {
      selectedDate = new Date(val.year, val.month - 1, val.day)
    }
  }
  emits("change", selectedDate)
}

</script>

<template>
  <div
    class="date-calendar-figma calendar-wrapper min-w-[288px] rounded-[8px] bg-grey-10"
  >
    <template v-if="viewMode === 'DATE'">
      <CalendarDateGrid
        v-bind="forwarded"
        :class="cn('rounded-t-[inherit] p-[16px] pb-[8px]', props.class)"
        :locale="localeResolved"
        :placeholder="placeholder as CalendarRootProps['placeholder']"
        :week-starts-on="weekStartsResolved"
        :show-quick-presets="showQuickPresets"
        :show-footer="showFooter"
        @update:placeholder="(val) => (placeholder = val as CalendarDate)"
        @click-heading="onClickHeading"
        @shortcut-select="onQuickAddMonths"
        @reset="onReset"
        @done="onDone"
      >
        <template #reset="{ onReset: handleReset }">
          <slot name="reset" :on-reset="handleReset" />
        </template>
        <template #done="{ onDone: handleDone }">
          <slot name="done" :on-done="handleDone" />
        </template>
      </CalendarDateGrid>
    </template>

    <template v-else-if="viewMode === 'MONTH'">
      <div class="p-[16px]">
        <CalendarMonthGrid
          :year="placeholder.year"
          :selected-month="selectedMonthInMonthView"
          @select="onSelectMonth"
          @prev-year="onPrevYear"
          @next-year="onNextYear"
          @click-year="onClickYear"
        />
      </div>
    </template>

    <template v-else-if="viewMode === 'YEAR'">
      <div class="p-[16px]">
        <CalendarYearGrid
          :selected-year="selectedYear"
          :start-year="placeholder.year + 3"
          @select="onSelectYear"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>

/** 오늘(미선택): 피그마 밝은 파랑 강조 · 선택은 CellTrigger 규칙 유지 */
.date-calendar-figma :deep(.date-calendar-day-btn[data-today]:not([data-selected])) {
  font-weight: 400;
  color: var(--color-blue-80);
  background-color: transparent !important;
}
</style>
