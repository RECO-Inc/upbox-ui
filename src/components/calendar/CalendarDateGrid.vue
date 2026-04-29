<script lang="ts" setup>
import type { CalendarRootProps } from "reka-ui"
import type { WeekStartsOn } from "reka-ui/date"
import type { HTMLAttributes } from "vue"
import type { DateValue } from "@internationalized/date"
import { CalendarDate } from "@internationalized/date"
import { CalendarRoot } from "reka-ui"
import { cn } from "../../lib/utils"
import CalendarShortcut from "./CalendarShortcut.vue"
import CalendarCell from "./CalendarCell.vue"
import CalendarCellTrigger from "./CalendarCellTrigger.vue"
import CalendarFooter from "./CalendarFooter.vue"
import CalendarGrid from "./CalendarGrid.vue"
import CalendarGridBody from "./CalendarGridBody.vue"
import CalendarGridHead from "./CalendarGridHead.vue"
import CalendarGridRow from "./CalendarGridRow.vue"
import CalendarHeadCell from "./CalendarHeadCell.vue"
import CalendarHeader from "./CalendarHeader.vue"

defineOptions({ name: "CalendarDateGrid", inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    locale: string
    weekStartsOn: WeekStartsOn
    placeholder: CalendarRootProps["placeholder"]
    showQuickPresets?: boolean
    showFooter?: boolean
  }>(),
  {
    showQuickPresets: true,
    showFooter: true,
  },
)

const emits = defineEmits<{
  "update:placeholder": [value: CalendarRootProps["placeholder"]]
  clickHeading: []
  shortcutSelect: [months: number]
  reset: []
  done: []
}>()

function asCalendarDate(v: DateValue): CalendarDate {
  return v as CalendarDate
}

function subtractYears(d: DateValue, dy: number) {
  return asCalendarDate(d).subtract({ years: dy })
}

function addYears(d: DateValue, dy: number) {
  return asCalendarDate(d).add({ years: dy })
}

/** 월요일 시작(1) ⇒ 일요일은 7째 열 인덱스 6 · 일요일 시작(0) ⇒ 인덱스 0 */
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
  <CalendarRoot
    v-slot="{ grid, weekDays }"
    v-bind="$attrs"
    :class="cn('rounded-t-[inherit] p-[16px] pb-[8px]', props.class)"
    :locale="locale"
    :placeholder="placeholder as unknown as CalendarRootProps['placeholder']"
    :week-starts-on="weekStartsOn"
    weekday-format="narrow"
    @update:placeholder="(val) => emits('update:placeholder', val)" >
    <CalendarHeader 
      class="relative flex w-full items-center justify-between pt-[4px]"
      :placeholder="placeholder as CalendarDate"
      @click-heading="emits('clickHeading')"
      @prev-year="subtractYears(placeholder as DateValue, 1)"
      @next-year="addYears(placeholder as DateValue, 1)" />
    <div class="mt-[16px] flex flex-col gap-y-[16px]">
      <CalendarGrid v-for="month in grid" :key="month.value.toString()">
        <CalendarGridHead>
          <CalendarGridRow>
            <CalendarHeadCell
              v-for="(day, wi) in weekDays"
              :key="String(day)"
              :class="isSundayColumnIndex(wi) ? '!text-red-70' : '!text-grey-60'" >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody>
          <CalendarGridRow
            v-for="(weekDates, index) in month.rows"
            :key="`weekDate-${index}`"
            class="date-calendar-cell-row mt-[8px] w-full" >
            <CalendarCell
              v-for="(weekDate, di) in weekDates"
              :key="weekDate.toString()"
              :date="weekDate" >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
                :class="cn(
                  isSundayColumnIndex(di) &&
                    '!text-red-70 data-[outside-view]:text-red-50 [&[data-selected]]:!text-grey-10',
                  'date-calendar-day-btn',
                )" />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
  <CalendarShortcut
    v-if="showQuickPresets"
    @shortcut-select="emits('shortcutSelect', $event)" />
  <CalendarFooter
    v-if="showFooter"
    class="pt-[8px]"
    @reset="emits('reset')"
    @done="emits('done')" >
    <template #reset="{ onReset: handleReset }">
      <slot name="reset" :on-reset="handleReset" />
    </template>
    <template #done="{ onDone: handleDone }">
      <slot name="done" :on-done="handleDone" />
    </template>
  </CalendarFooter>
</template>
