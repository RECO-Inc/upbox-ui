<script lang="ts" setup>
/**
 * 범위 캘린더 날짜 패널: `RangeCalendarRoot` + 헤더 + 표(reka-ui `RangeCalendarGrid`) + 단축 + 푸터.
 * `DateCalendar` → `CalendarDateGrid` 과 동일한 역할.
 */
import type { RangeCalendarRootProps } from "reka-ui"
import type { WeekStartsOn } from "reka-ui/date"
import type { HTMLAttributes } from "vue"
import { CalendarDate } from "@internationalized/date"
import { RangeCalendarRoot } from "reka-ui"
import { cn } from "../../lib/utils"
import CalendarShortcut from "./CalendarShortcut.vue"
import CalendarFooter from "./CalendarFooter.vue"
import CalendarTimeSelect from "./CalendarTimeSelect.vue"
import CalendarRangeHeader from "./CalendarRangeHeader.vue"
import {
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
  RangeCalendarCell,
  RangeCalendarCellTrigger,
} from "reka-ui"

defineOptions({ name: "CalendarRangeDateGrid", inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    locale: string
    weekStartsOn: WeekStartsOn
    placeholder: RangeCalendarRootProps["placeholder"]
    /** 다중 월 패널 배치용 (`RangeCalendar.numberOfMonths` 와 함께) */
    numberOfMonths?: number
    datetime?: boolean
    seconds?: boolean
    showQuickPresets?: boolean
    showFooter?: boolean
  }>(),
  {
    showQuickPresets: false,
    showFooter: false,
  },
)

const emits = defineEmits<{
  "update:placeholder": [value: RangeCalendarRootProps["placeholder"]]
  clickHeading: []
  shortcutSelect: [months: number]
  reset: []
  done: []
}>()

const hourModel = defineModel<number>("hour", { required: true })
const minuteModel = defineModel<number>("minute", { required: true })
const secondModel = defineModel<number>("second", { default: 0 })

function isSundayColumnIndex(di: number) {
  const w = props.weekStartsOn
  if (w === 1)
    return di === 6
  if (w === 0)
    return di === 0
  return false
}
</script>

<template>
  <RangeCalendarRoot
    v-slot="{ grid, weekDays }"
    v-bind="$attrs"
    :class="cn('rounded-t-[inherit] p-[16px] pb-[8px]', props.class)"
    :locale="locale"
    :placeholder="placeholder as unknown as RangeCalendarRootProps['placeholder']"
    :week-starts-on="weekStartsOn"
    :number-of-months="props.numberOfMonths ?? 1"
    weekday-format="narrow"
    @update:placeholder="(val) => emits('update:placeholder', val)"
  >
    <CalendarRangeHeader
      class="relative flex w-full items-center justify-between pt-[4px]"
      :placeholder="placeholder as CalendarDate"
      @click-heading="emits('clickHeading')"
    />

    <div
      :class="cn(
        'mt-[16px] flex flex-col gap-y-[16px]',
        (props.numberOfMonths ?? 1) > 1 && 'sm:flex-row sm:flex-wrap sm:gap-x-[16px] sm:gap-y-0',
      )"
    >
      <RangeCalendarGrid
        v-for="month in grid"
        :key="month.value.toString()"
        class="calendar-range-month-grid min-w-[252px] flex-1 border-collapse bg-transparent table-fixed [&_thead_tr]:border-0 [&_tbody_tr_td]:border-0"
      >
        <RangeCalendarGridHead>
          <RangeCalendarGridRow class="range-calendar-grid-row [&_th]:border-0">
            <RangeCalendarHeadCell
              v-for="(day, wi) in weekDays"
              :key="String(day)"
              :class="cn(
                'border-0 px-px py-[6px] align-middle text-center font-normal [&]:box-border',
                'w-[36px] min-w-[36px]',
                'text-sm leading-none tracking-[0.02em]',
                isSundayColumnIndex(wi) ? '!text-red-70' : '!text-grey-60',
              )"
            >
              {{ day }}
            </RangeCalendarHeadCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridHead>
        <RangeCalendarGridBody>
          <RangeCalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="range-calendar-cell-row [&_td]:border-0 mt-[8px]"
          >
            <RangeCalendarCell
              v-for="(weekDate, di) in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
              :class="cn(
                'relative w-[36px] p-0 text-center text-sm',
                'focus-within:relative focus-within:z-20',
                '[&:has([data-selected]:not([data-selection-start]):not([data-selection-end]))]:bg-blue-20',
                '[&:has([data-selection-start])]:rounded-l [&:has([data-selection-start])]:bg-blue-20',
                '[&:has([data-selection-end])]:rounded-r [&:has([data-selection-end])]:bg-blue-20',
                '[&:has([data-selection-start][data-selection-end])]:rounded',
                '[&:has([data-selected][data-outside-view])]:bg-blue-20/50',
              )"
            >
              <RangeCalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                :class="cn(
                  'inline-flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent p-0 text-sm font-normal transition-colors select-none',
                  'text-grey-90 hover:bg-grey-30',
                  '[&[data-today]:not([data-selected])]:bg-grey-20 [&[data-today]:not([data-selected])]:font-semibold [&[data-today]:not([data-selected])]:text-navy-80',
                  '[&[data-selected]:not([data-selection-start]):not([data-selection-end])]:bg-transparent [&[data-selected]:not([data-selection-start]):not([data-selection-end])]:text-blue-90',
                  'data-[selection-start]:bg-blue-80 data-[selection-start]:text-grey-10 data-[selection-start]:hover:bg-blue-90',
                  'data-[selection-end]:bg-blue-80 data-[selection-end]:text-grey-10 data-[selection-end]:hover:bg-blue-90',
                  'data-[disabled]:cursor-not-allowed data-[disabled]:bg-grey-20 data-[disabled]:text-grey-50',
                  'data-[unavailable]:text-red-70 data-[unavailable]:line-through',
                  'data-[outside-view]:text-grey-50',
                  isSundayColumnIndex(di)
                    && cn(
                      '!text-red-70 data-[outside-view]:text-red-50',
                      '[&[data-selection-start]]:!text-grey-10 [&[data-selection-end]]:!text-grey-10',
                      '[&[data-selected]:not([data-selection-start]):not([data-selection-end])]:!text-blue-90',
                    ),
                  'range-calendar-day-btn',
                )"
              />
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </RangeCalendarGrid>

      <CalendarTimeSelect
        v-if="datetime"
        v-model:hour="hourModel"
        v-model:minute="minuteModel"
        v-model:second="secondModel"
        :show-seconds="seconds"
      />
    </div>

    <CalendarShortcut
      v-if="showQuickPresets"
      @shortcut-select="emits('shortcutSelect', $event)"
    />

    <CalendarFooter
      v-if="showFooter"
      class="pt-[8px]"
      @reset="emits('reset')"
      @done="emits('done')"
    >
      <template #reset="{ onReset: handleReset }">
        <slot name="reset" :on-reset="handleReset" />
      </template>
      <template #done="{ onDone: handleDone }">
        <slot name="done" :on-done="handleDone" />
      </template>
    </CalendarFooter>
  </RangeCalendarRoot>
</template>
