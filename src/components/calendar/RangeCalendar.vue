<script lang="ts" setup>
/**
 * 날짜 범위 선택. 루트 상태·월/연 뷰 전환은 여기서 두고,
 * `RangeCalendarRoot` 는 `CalendarRangeDateGrid`(DateCalendar→`CalendarDateGrid` 와 대응) 안에 둔다.
 *
 * 시작/종료 날짜 · 연·월 패널 · `datetime` 시간 영역 선택을 지원한다.
 */
import type { DateRange, RangeCalendarRootProps } from "reka-ui"
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
import CalendarMonthGrid from "./CalendarMonthGrid.vue"
import CalendarYearGrid from "./CalendarYearGrid.vue"
import CalendarRangeDateGrid from "./CalendarRangeDateGrid.vue"

type ViewMode = "DATE" | "MONTH" | "YEAR"

interface Props extends RangeCalendarRootProps {
  class?: HTMLAttributes["class"]
  /** 시작·종료 시각 포함 */
  datetime?: boolean
  /** 초 선택 */
  seconds?: boolean
  showFooter?: boolean
  /** 1·3·6개월·1년 단축 (DateCalendar 와 동일) */
  showQuickPresets?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  datetime: false,
  seconds: false,
  /** 다른 소비처(예: 기간 피커 팝업)에서는 푸터 없이 두는 경우가 많아 기본값은 낮춘다 */
  showFooter: false,
  /** `PeriodCalendar` 에서 명시하면 `DateCalendar` 와 같은 단축 막대 노출 */
  showQuickPresets: false,
})

const emits = defineEmits<{
  "update:modelValue": [value: DateRange]
  "update:placeholder": [value: RangeCalendarRootProps["placeholder"]]
  "update:startValue": [value: RangeCalendarRootProps["placeholder"] | undefined]
  "change": [value: { first: Date | null, last: Date | null }]
  "reset": []
}>()

const delegatedProps = reactiveOmit(
  props,
  "class",
  "datetime",
  "seconds",
  "showFooter",
  "showQuickPresets",
  "locale",
  "weekStartsOn",
)

const forwarded = useForwardPropsEmits(delegatedProps, emits)

const localeResolved = computed(() => props.locale ?? "ko-KR")
const weekStartsResolved = computed(() => props.weekStartsOn ?? 1)

const viewMode = ref<ViewMode>("DATE")

const now = new Date()
const placeholder = ref(new CalendarDate(now.getFullYear(), now.getMonth() + 1, 1))

const hour = ref(now.getHours())
const minute = ref(now.getMinutes())
const second = ref(0)

watch(() => props.modelValue, (newVal) => {
  if (newVal && typeof newVal === "object") {
    const startVal = newVal.start as DateValue | undefined
    if (startVal && typeof startVal === "object" && "year" in startVal && "month" in startVal) {
      placeholder.value = new CalendarDate(startVal.year, startVal.month, 1)
    }
    if (startVal && "hour" in startVal) {
      const timeVal = startVal as { hour?: number, minute?: number, second?: number }
      hour.value = timeVal.hour ?? 0
      minute.value = timeVal.minute ?? 0
      second.value = timeVal.second ?? 0
    }
  }
}, { immediate: true })

/** 표시 연(`placeholder`)과 시작일 연도가 같을 때만 월 패널에서 월 칩 강조 */
const selectedMonthInMonthView = computed(() => {
  const start = props.modelValue?.start as DateValue | undefined
  if (!start || typeof start !== "object" || !("year" in start) || !("month" in start))
    return undefined
  if ((start as DateValue).year !== placeholder.value.year)
    return undefined
  return (start as CalendarDate).month
})

const selectedYear = computed(() => {
  const start = props.modelValue?.start as DateValue | undefined
  if (start && typeof start === "object" && "year" in start)
    return start.year
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

function onReset() {
  emits("reset")
}

function onDone() {
  let firstDate: Date | null = null
  let lastDate: Date | null = null

  if (props.modelValue && typeof props.modelValue === "object") {
    const startVal = props.modelValue.start as any
    const endVal = props.modelValue.end as any

    if (startVal && "year" in startVal && "month" in startVal && "day" in startVal) {
      firstDate = new Date(startVal.year, startVal.month - 1, startVal.day, hour.value, minute.value, second.value)
    }
    if (endVal && "year" in endVal && "month" in endVal && "day" in endVal) {
      lastDate = new Date(endVal.year, endVal.month - 1, endVal.day, hour.value, minute.value, second.value)
    }
  }

  emits("change", {
    first: firstDate,
    last: lastDate,
  })
}

/** Figma web periodCalendar: 224px month grid * n + 32px gap + 좌우 p-[16px] */
const calendarShellMinStyle = computed(() => {
  const n = Math.max(1, Math.floor(props.numberOfMonths ?? 1))
  const gridMinPx = 224
  const gapPx = 32
  const horizontalPaddingPx = 32
  const intrinsic =
    horizontalPaddingPx + n * gridMinPx + Math.max(0, n - 1) * gapPx
  return { width: `${Math.max(256, intrinsic)}px` }
})

function onQuickAddMonths(offset: number) {
  const tz = getLocalTimeZone()
  const anchor = today(tz) as CalendarDate
  const end = anchor.add({ months: offset })
  emits("update:modelValue", {
    start: anchor,
    end,
  })
  placeholder.value = new CalendarDate(end.year, end.month, 1)
}

</script>

<template>
  <div
    class="period-calendar-figma calendar-wrapper rounded-[8px] bg-grey-10"
    :style="calendarShellMinStyle"
  >
    <template v-if="viewMode === 'DATE'">
      <CalendarRangeDateGrid
        v-bind="forwarded"
        :class="cn('rounded-t-[inherit] p-[16px] pb-[8px]', props.class)"
        :locale="localeResolved"
        :placeholder="placeholder as unknown as RangeCalendarRootProps['placeholder']"
        :week-starts-on="weekStartsResolved"
        :number-of-months="props.numberOfMonths"
        :datetime="datetime"
        :seconds="seconds"
        :show-quick-presets="showQuickPresets"
        :show-footer="showFooter"
        v-model:hour="hour"
        v-model:minute="minute"
        v-model:second="second"
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
      </CalendarRangeDateGrid>
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
/** 단일 패널 `DateCalendar` 와 동일 — 오늘(미선택): 밝은 파랑 포인트 */
.period-calendar-figma :deep(.range-calendar-day-btn[data-today]:not([data-selected])) {
  font-weight: 400;
  color: var(--color-blue-80);
  background-color: transparent !important;
}
</style>
