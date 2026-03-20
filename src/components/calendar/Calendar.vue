<script lang="ts" setup>
/**
 * Calendar 컴포넌트
 * 단일 날짜를 선택할 수 있는 컴포넌트
 * - 시간 선택 (시/분/초)
 * - 년/월 선택 모드
 * - 리셋/완료 버튼
 *
 * 범위 선택은 RangeCalendar 컴포넌트를 사용하세요.
 */
import type { CalendarRootEmits, CalendarRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { DateValue } from "@internationalized/date"
import { computed, ref, watch } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarRoot, useForwardPropsEmits } from "reka-ui"
import { CalendarDate } from "@internationalized/date"
import { cn } from "../../lib/utils"

import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell,
  CalendarHeader,
  CalendarHeading,
  CalendarNextButton,
  CalendarPrevButton,
  CalendarMonthGrid,
  CalendarYearGrid,
  CalendarTimeSelect,
  CalendarFooter
} from "."

type ViewMode = 'DATE' | 'MONTH' | 'YEAR'

interface Props extends CalendarRootProps {
  class?: HTMLAttributes["class"]
  /** 날짜 선택을 할 수 없다. 년 월만 보여줌 */
  noDate?: boolean
  /** 시간까지 선택할 수 있는지 여부 */
  datetime?: boolean
  /** 초까지 선택할 수 있는지 여부 */
  seconds?: boolean
  /** 리셋/완료 버튼 표시 여부 */
  showFooter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  noDate: false,
  datetime: false,
  seconds: false,
  showFooter: false
})

const emits = defineEmits<{
  'update:modelValue': [value: CalendarRootProps['modelValue']]
  'update:placeholder': [value: CalendarRootProps['placeholder']]
  'change': [value: Date | null]
  'reset': []
}>()

const delegatedProps = reactiveOmit(props, "class", "noDate", "datetime", "seconds", "showFooter")

const forwarded = useForwardPropsEmits(delegatedProps, emits)

// View mode state
const viewMode = ref<ViewMode>(props.noDate ? 'YEAR' : 'DATE')

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
    if ('year' in newVal && 'month' in newVal) {
      // Update placeholder to show the selected date's month
      const dateVal = newVal as DateValue
      placeholder.value = new CalendarDate(dateVal.year, dateVal.month, 1)
    }
    if ('hour' in newVal) {
      const timeVal = newVal as { hour?: number; minute?: number; second?: number }
      hour.value = timeVal.hour ?? 0
      minute.value = timeVal.minute ?? 0
      second.value = timeVal.second ?? 0
    }
  }
}, { immediate: true })

// Computed selected month for highlighting in month grid
const selectedMonth = computed(() => {
  if (props.modelValue && typeof props.modelValue === 'object' && 'month' in props.modelValue) {
    return (props.modelValue as DateValue).month
  }
  return undefined
})

const selectedYear = computed(() => {
  if (props.modelValue && typeof props.modelValue === 'object' && 'year' in props.modelValue) {
    return (props.modelValue as DateValue).year
  }
  return undefined
})

function onClickHeading() {
  viewMode.value = 'MONTH'
}

function onSelectMonth(month: number) {
  // Update placeholder to navigate calendar to selected month
  placeholder.value = new CalendarDate(placeholder.value.year, month, 1)
  if (props.noDate) {
    // noDate 모드에서는 월 선택 시 바로 반영
    return
  }
  viewMode.value = 'DATE'
}

function onSelectYear(year: number) {
  // Update placeholder year
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
  let selectedDate: Date | null = null
  if (props.modelValue && typeof props.modelValue === 'object') {
    const val = props.modelValue as any
    if ('year' in val && 'month' in val && 'day' in val) {
      selectedDate = new Date(val.year, val.month - 1, val.day, hour.value, minute.value, second.value)
    }
  }
  emits('change', selectedDate)
}
</script>

<template>
  <div class="calendar-wrapper">
    <!-- Date selection mode -->
    <template v-if="viewMode === 'DATE'">
      <CalendarRoot
        v-slot="{ grid, weekDays }"
        :class="cn('p-[16px]', props.class)"
        v-bind="forwarded"
        :placeholder="placeholder as unknown as CalendarRootProps['placeholder']"
        @update:placeholder="(val) => placeholder = val as CalendarDate"
      >
        <CalendarHeader>
          <CalendarPrevButton />
          <CalendarHeading
            clickable
            @click="onClickHeading"
          />
          <CalendarNextButton />
        </CalendarHeader>

        <div class="flex flex-col gap-y-[16px] mt-[16px] sm:flex-row sm:gap-x-[16px] sm:gap-y-0">
          <CalendarGrid v-for="month in grid" :key="month.value.toString()">
            <CalendarGridHead>
              <CalendarGridRow>
                <CalendarHeadCell
                  v-for="day in weekDays" :key="day"
                >
                  {{ day }}
                </CalendarHeadCell>
              </CalendarGridRow>
            </CalendarGridHead>
            <CalendarGridBody>
              <CalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="mt-[8px] w-full">
                <CalendarCell
                  v-for="weekDate in weekDates"
                  :key="weekDate.toString()"
                  :date="weekDate"
                >
                  <CalendarCellTrigger
                    :day="weekDate"
                    :month="month.value"
                  />
                </CalendarCell>
              </CalendarGridRow>
            </CalendarGridBody>
          </CalendarGrid>

          <!-- Time selection -->
          <CalendarTimeSelect
            v-if="datetime"
            v-model:hour="hour"
            v-model:minute="minute"
            v-model:second="second"
            :show-seconds="seconds"
          />
        </div>
      </CalendarRoot>
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
</style>
