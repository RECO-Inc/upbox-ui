<script lang="ts" setup>
/**
 * RangeCalendar 컴포넌트
 * 날짜 범위를 선택할 수 있는 컴포넌트
 * - 시작일/종료일 선택
 * - 시간 선택 (시/분/초)
 * - 년/월 선택 모드
 * - 리셋/완료 버튼
 */
import type { RangeCalendarRootProps, DateRange } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { DateValue } from "@internationalized/date"
import { computed, ref, watch } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  RangeCalendarRoot,
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarHeader,
  RangeCalendarHeading,
  RangeCalendarNext,
  RangeCalendarPrev,
  useForwardPropsEmits
} from "reka-ui"
import { CalendarDate } from "@internationalized/date"
import { ChevronLeft, ChevronRight } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import { buttonVariants } from "../button"
import {
  CalendarMonthGrid,
  CalendarYearGrid,
  CalendarTimeSelect,
  CalendarFooter
} from "."

type ViewMode = 'DATE' | 'MONTH' | 'YEAR'

interface Props extends RangeCalendarRootProps {
  class?: HTMLAttributes["class"]
  /** 시간까지 선택할 수 있는지 여부 */
  datetime?: boolean
  /** 초까지 선택할 수 있는지 여부 */
  seconds?: boolean
  /** 리셋/완료 버튼 표시 여부 */
  showFooter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  datetime: false,
  seconds: false,
  showFooter: false
})

const emits = defineEmits<{
  'update:modelValue': [value: DateRange]
  'update:placeholder': [value: RangeCalendarRootProps['placeholder']]
  'update:startValue': [value: RangeCalendarRootProps['placeholder'] | undefined]
  'change': [value: { first: Date | null, last: Date | null }]
  'reset': []
}>()

const delegatedProps = reactiveOmit(props, "class", "datetime", "seconds", "showFooter")

const forwarded = useForwardPropsEmits(delegatedProps, emits)

// View mode state
const viewMode = ref<ViewMode>('DATE')

// Placeholder for controlling displayed month/year
const now = new Date()
const placeholder = ref(new CalendarDate(now.getFullYear(), now.getMonth() + 1, 1))

// Time selection
const hour = ref(now.getHours())
const minute = ref(now.getMinutes())
const second = ref(0)

// Watch for model value changes to update placeholder and time
watch(() => props.modelValue, (newVal) => {
  if (newVal && typeof newVal === 'object') {
    const startVal = newVal.start as DateValue | undefined
    if (startVal && typeof startVal === 'object' && 'year' in startVal && 'month' in startVal) {
      placeholder.value = new CalendarDate(startVal.year, startVal.month, 1)
    }
    if (startVal && 'hour' in startVal) {
      const timeVal = startVal as { hour?: number; minute?: number; second?: number }
      hour.value = timeVal.hour ?? 0
      minute.value = timeVal.minute ?? 0
      second.value = timeVal.second ?? 0
    }
  }
}, { immediate: true })

// Computed selected month for highlighting in month grid
const selectedMonth = computed(() => {
  const start = props.modelValue?.start as DateValue | undefined
  if (start && typeof start === 'object' && 'month' in start) {
    return start.month
  }
  return undefined
})

const selectedYear = computed(() => {
  const start = props.modelValue?.start as DateValue | undefined
  if (start && typeof start === 'object' && 'year' in start) {
    return start.year
  }
  return undefined
})

function onClickHeading() {
  viewMode.value = 'MONTH'
}

function onSelectMonth(month: number) {
  placeholder.value = new CalendarDate(placeholder.value.year, month, 1)
  viewMode.value = 'DATE'
}

function onSelectYear(year: number) {
  placeholder.value = new CalendarDate(year, placeholder.value.month, 1)
  viewMode.value = 'MONTH'
}

function onPrevYear() {
  placeholder.value = new CalendarDate(placeholder.value.year - 1, placeholder.value.month, 1)
}

function onNextYear() {
  placeholder.value = new CalendarDate(placeholder.value.year + 1, placeholder.value.month, 1)
}

function onClickYear() {
  viewMode.value = 'YEAR'
}

function onReset() {
  emits('reset')
}

function onDone() {
  let firstDate: Date | null = null
  let lastDate: Date | null = null

  if (props.modelValue && typeof props.modelValue === 'object') {
    const startVal = props.modelValue.start as any
    const endVal = props.modelValue.end as any

    if (startVal && 'year' in startVal && 'month' in startVal && 'day' in startVal) {
      firstDate = new Date(startVal.year, startVal.month - 1, startVal.day, hour.value, minute.value, second.value)
    }
    if (endVal && 'year' in endVal && 'month' in endVal && 'day' in endVal) {
      lastDate = new Date(endVal.year, endVal.month - 1, endVal.day, hour.value, minute.value, second.value)
    }
  }

  emits('change', {
    first: firstDate,
    last: lastDate
  })
}
</script>

<template>
  <div class="calendar-wrapper">
    <!-- Date selection mode -->
    <template v-if="viewMode === 'DATE'">
      <RangeCalendarRoot
        v-slot="{ grid, weekDays }"
        :class="cn('p-[16px]', props.class)"
        v-bind="forwarded"
        :placeholder="placeholder as unknown as RangeCalendarRootProps['placeholder']"
        @update:placeholder="(val) => placeholder = val as CalendarDate"
      >
        <RangeCalendarHeader class="relative flex w-full items-center justify-between pt-[4px]">
          <RangeCalendarPrev
            :class="cn(
              buttonVariants({ variant: 'assistant', style: 'outlined' }),
              'h-[28px] w-[28px] bg-transparent p-0 opacity-50 hover:opacity-100'
            )"
          >
            <ChevronLeft class="h-[16px] w-[16px]" />
          </RangeCalendarPrev>
          <RangeCalendarHeading
            class="text-sm font-medium cursor-pointer select-none"
            @click="onClickHeading"
          />
          <RangeCalendarNext
            :class="cn(
              buttonVariants({ variant: 'assistant', style: 'outlined' }),
              'h-[28px] w-[28px] bg-transparent p-0 opacity-50 hover:opacity-100'
            )"
          >
            <ChevronRight class="h-[16px] w-[16px]" />
          </RangeCalendarNext>
        </RangeCalendarHeader>

        <div class="flex flex-col gap-y-[16px] mt-[16px] sm:flex-row sm:gap-x-[16px] sm:gap-y-0">
          <RangeCalendarGrid v-for="month in grid" :key="month.value.toString()">
            <RangeCalendarGridHead>
              <RangeCalendarGridRow class="range-calendar-grid-row flex">
                <RangeCalendarHeadCell
                  v-for="day in weekDays" :key="day"
                  class="w-[36px] rounded-md text-[0.8rem] font-normal text-grey-60"
                >
                  {{ day }}
                </RangeCalendarHeadCell>
              </RangeCalendarGridRow>
            </RangeCalendarGridHead>
            <RangeCalendarGridBody>
              <RangeCalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="range-calendar-grid-row flex mt-[8px] w-full">
                <RangeCalendarCell
                  v-for="weekDate in weekDates"
                  :key="weekDate.toString()"
                  :date="weekDate"
                  :class="cn(
                    'relative p-0 text-center text-sm w-[36px] h-[36px]',
                    'focus-within:relative focus-within:z-20',
                    // Range selection - highlight included dates (between start and end)
                    '[&:has([data-selected]:not([data-selection-start]):not([data-selection-end]))]:bg-blue-20',
                    // First selected (range start) - rounded-sm left, solid bg on cell too
                    '[&:has([data-selection-start])]:rounded-l [&:has([data-selection-start])]:bg-blue-20',
                    // Last selected (range end) - rounded-sm right, solid bg on cell too
                    '[&:has([data-selection-end])]:rounded-r [&:has([data-selection-end])]:bg-blue-20',
                    // When start and end are same date
                    '[&:has([data-selection-start][data-selection-end])]:rounded',
                    // Outside view selected
                    '[&:has([data-selected][data-outside-view])]:bg-blue-20/50'
                  )"
                >
                  <RangeCalendarCellTrigger
                    :day="weekDate"
                    :month="month.value"
                    :class="cn(
                      // Base styles - 36x36 cell size matching original
                      'inline-flex items-center justify-center w-[36px] h-[36px] p-0 text-sm font-normal rounded-sm transition-colors cursor-pointer select-none',
                      'text-grey-90 hover:bg-grey-30',
                      // Today
                      '[&[data-today]:not([data-selected])]:bg-grey-20 [&[data-today]:not([data-selected])]:text-navy-80 [&[data-today]:not([data-selected])]:font-semibold',
                      // Selected dates in between (not start/end) - text color only, bg from cell
                      '[&[data-selected]:not([data-selection-start]):not([data-selection-end])]:text-blue-90 [&[data-selected]:not([data-selection-start]):not([data-selection-end])]:bg-transparent',
                      // Start/End dates - solid background
                      'data-[selection-start]:bg-blue-80 data-[selection-start]:text-grey-10 data-[selection-start]:hover:bg-blue-90',
                      'data-[selection-end]:bg-blue-80 data-[selection-end]:text-grey-10 data-[selection-end]:hover:bg-blue-90',
                      // Disabled
                      'data-[disabled]:text-grey-50 data-[disabled]:bg-grey-20 data-[disabled]:cursor-not-allowed',
                      // Unavailable
                      'data-[unavailable]:text-red-70 data-[unavailable]:line-through',
                      // Outside months
                      'data-[outside-view]:text-grey-50'
                    )"
                  />
                </RangeCalendarCell>
              </RangeCalendarGridRow>
            </RangeCalendarGridBody>
          </RangeCalendarGrid>

          <!-- Time selection -->
          <CalendarTimeSelect
            v-if="datetime"
            v-model:hour="hour"
            v-model:minute="minute"
            v-model:second="second"
            :show-seconds="seconds"
          />
        </div>
      </RangeCalendarRoot>
    </template>

    <!-- Month selection mode -->
    <template v-else-if="viewMode === 'MONTH'">
      <CalendarMonthGrid
        :year="placeholder.year"
        :selected-month="selectedMonth"
        @select="onSelectMonth"
        @prev-year="onPrevYear"
        @next-year="onNextYear"
        @click-year="onClickYear"
      />
    </template>

    <!-- Year selection mode -->
    <template v-else-if="viewMode === 'YEAR'">
      <CalendarYearGrid
        :selected-year="selectedYear"
        :start-year="placeholder.year + 3"
        @select="onSelectYear"
      />
    </template>

    <!-- Footer with reset/done buttons -->
    <CalendarFooter
      v-if="showFooter"
      @reset="onReset"
      @done="onDone"
    >
      <template #reset="{ onReset: handleReset }">
        <slot name="reset" :on-reset="handleReset" />
      </template>
      <template #done="{ onDone: handleDone }">
        <slot name="done" :on-done="handleDone" />
      </template>
    </CalendarFooter>
  </div>
</template>

<style scoped>
.calendar-wrapper {
  background-color: var(--color-grey-10);
}

/* Sunday (first column) - red color for date cells */
.range-calendar-grid-row :deep(> td:first-child button) {
  color: var(--color-red-70) !important;
}
.range-calendar-grid-row :deep(> td:first-child button[data-outside-view]) {
  color: var(--color-red-50) !important;
}
.range-calendar-grid-row :deep(> td:first-child button[data-selected]) {
  color: var(--color-grey-10) !important;
}
/* Sunday header (first column) */
.range-calendar-grid-row :deep(> th:first-child) {
  color: var(--color-red-70) !important;
}
</style>
