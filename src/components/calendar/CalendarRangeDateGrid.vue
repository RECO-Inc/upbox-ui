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
import { getCalendarRangeDateCellTriggerClass } from "./calendarDateCellClasses"
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
    <!-- 이동·연도 버튼 + 월 헤더: 다중 월이면 패널(그리드)마다 각각 두어 Figma `periodCalendar` 와 동일하게 맞춤 -->
    <div class="flex flex-col gap-y-[16px]">
      <div
        :class="cn(
          (props.numberOfMonths ?? 1) > 1
            ? 'flex flex-row flex-nowrap items-start gap-x-[32px] overflow-x-hidden'
            : 'flex flex-col',
        )"
      >
        <div
          v-for="month in grid"
          :key="month.value.toString()"
          :class="cn(
            'calendar-range-month-column flex min-w-[224px] shrink-0 flex-col',
            (props.numberOfMonths ?? 1) > 1 ? '' : 'w-full flex-1',
          )"
        >
          <CalendarRangeHeader
            class="relative flex w-full items-center justify-between pt-[4px]"
            :placeholder="month.value as CalendarDate"
            @click-heading="emits('clickHeading')"
          />
          <RangeCalendarGrid
            class="calendar-range-month-grid mt-[16px] border-collapse bg-transparent table-fixed [&_thead_tr]:border-0 [&_tbody_tr_td]:border-0"
          >
        <RangeCalendarGridHead>
          <RangeCalendarGridRow class="range-calendar-grid-row [&_th]:border-0">
            <RangeCalendarHeadCell
              v-for="(day, wi) in weekDays"
              :key="String(day)"
              :class="cn(
                'border-0 px-px py-[6px] align-middle text-center font-normal [&]:box-border',
                'w-[32px] min-w-[32px]',
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
                'relative w-[32px] p-0 text-center text-sm',
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
                :class="getCalendarRangeDateCellTriggerClass(
                  isSundayColumnIndex(di),
                  'range-calendar-day-btn',
                )"
              />
            </RangeCalendarCell>
          </RangeCalendarGridRow>
        </RangeCalendarGridBody>
      </RangeCalendarGrid>
        </div>
      </div>

      <CalendarTimeSelect
        v-if="datetime"
        class="w-full shrink-0"
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
