<script lang="ts" setup>
/**
 * MobilePeriodCalendar — Figma 모바일 periodCalendar (node `12247:8094`) 정렬 범위 패널
 * - 폭 360, 상단 라운드 16/16/0/0, 두 달 세로 스택
 * - KR 로케 · 월요일 주 시작
 * - 시작·종료 셀: 채움 (`blue-80`) · 사이 셀: 행 라이트(`blue-20`)
 * - 초기화 / 저장 푸터 (xlarge)
 *
 * 데스크톱 범위는 `PeriodCalendar` 사용.
 */
import type { DateRange, RangeCalendarRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { DateValue } from "@internationalized/date"
import { CalendarDate } from "@internationalized/date"
import { computed, ref, watch } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarNext,
  RangeCalendarPrev,
  RangeCalendarRoot,
  useForwardPropsEmits,
} from "reka-ui"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, RotateCcw } from "lucide-vue-next"
import { useI18n } from "vue-i18n"
import { cn } from "../../lib/utils"
import { Button } from "../button"
import { IconButton } from "../icon-button"
import { getCalendarRangeDateCellTriggerClass } from "./calendarDateCellClasses"

defineOptions({ name: "MobilePeriodCalendar" })

export interface Props extends RangeCalendarRootProps {
  class?: HTMLAttributes["class"]
  /** 초기화·저장 푸터 표시 여부 */
  showFooter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showFooter: true,
  numberOfMonths: 2,
})

const emits = defineEmits<{
  "update:modelValue": [value: DateRange]
  "update:placeholder": [value: RangeCalendarRootProps["placeholder"]]
  "update:startValue": [value: RangeCalendarRootProps["placeholder"] | undefined]
  "change": [value: { first: Date | null; last: Date | null }]
  "reset": []
}>()

const delegatedProps = reactiveOmit(
  props,
  "class",
  "showFooter",
  "locale",
  "weekStartsOn",
  "numberOfMonths",
  "pagedNavigation",
)

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const { t } = useI18n()

const localeResolved = computed(() => props.locale ?? "ko-KR")
const weekStartsResolved = computed(() => props.weekStartsOn ?? 1)

const now = new Date()
const placeholder = ref(new CalendarDate(now.getFullYear(), now.getMonth() + 1, 1))

watch(() => props.modelValue, (newVal) => {
  if (newVal && typeof newVal === "object") {
    const startVal = newVal.start as DateValue | undefined
    if (startVal && typeof startVal === "object" && "year" in startVal && "month" in startVal) {
      placeholder.value = new CalendarDate(startVal.year, startVal.month, 1)
    }
  }
}, { immediate: true })

function isSundayColumnIndex(di: number) {
  const w = weekStartsResolved.value
  if (w === 1) return di === 6
  if (w === 0) return di === 0
  return false
}

/**
 * 연/월 이동은 reka-ui `RangeCalendarPrev`/`RangeCalendarNext` 로 위임한다.
 * placeholder 를 직접 ±1 하면 2달 뷰에서 새 달이 이미 화면에 보이는 달일 때
 * reka-ui grid watch 가 갱신을 건너뛰어(한 클릭이 삼켜져) 이동이 꼬인다.
 * (연 단위는 `prev-page`/`next-page` 로 스텝만 갈아끼운다)
 */
function prevYearPage(d: DateValue) {
  return (d as CalendarDate).subtract({ years: 1 })
}

function nextYearPage(d: DateValue) {
  return (d as CalendarDate).add({ years: 1 })
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
      firstDate = new Date(startVal.year, startVal.month - 1, startVal.day)
    }
    if (endVal && "year" in endVal && "month" in endVal && "day" in endVal) {
      lastDate = new Date(endVal.year, endVal.month - 1, endVal.day)
    }
  }
  emits("change", { first: firstDate, last: lastDate })
}

function headingLabel(p: CalendarDate) {
  return `${p.year}년 ${String(p.month).padStart(2, "0")}월`
}
</script>

<template>
  <div
    :class="cn(
      'mobile-period-calendar w-[360px] max-w-full bg-grey-10 rounded-t-[16px] flex flex-col px-[16px] py-[24px]',
      // 작은 화면에서 2개월 캘린더가 뷰포트를 넘겨 상단이 잘리지 않도록 패널 높이를 제한하고
      // 캘린더 영역만 내부 스크롤(footer 초기화·저장은 항상 하단 고정).
      'max-h-[90dvh] gap-y-[24px]',
      props.class,
    )"
  >
    <RangeCalendarRoot
      v-slot="{ grid, weekDays }"
      v-bind="forwarded"
      class="flex flex-col gap-y-[24px] min-h-0 overflow-y-auto"
      :locale="localeResolved"
      :placeholder="placeholder as RangeCalendarRootProps['placeholder']"
      :week-starts-on="weekStartsResolved"
      :number-of-months="props.numberOfMonths"
      :paged-navigation="false"
      weekday-format="narrow"
      @update:placeholder="(val) => (placeholder = val as CalendarDate)"
    >
      <div
        v-for="month in grid"
        :key="month.value.toString()"
        class="flex flex-col gap-y-[8px]"
      >
        <!-- Title -->
        <div class="flex w-full items-center justify-between h-[32px]">
          <div class="flex items-center gap-[8px]">
            <RangeCalendarPrev :as-child="true" :prev-page="prevYearPage">
              <IconButton
                variant="tertiary"
                size="small"
                class="shrink-0"
                aria-label="이전 연도"
              >
                <ChevronsLeft />
              </IconButton>
            </RangeCalendarPrev>
            <RangeCalendarPrev :as-child="true">
              <IconButton
                variant="tertiary"
                size="small"
                class="shrink-0"
                aria-label="이전 월"
              >
                <ChevronLeft />
              </IconButton>
            </RangeCalendarPrev>
          </div>
          <div
            class="text-size-16 font-bold text-grey-90 select-none leading-[24px] tracking-[-0.01em]"
          >
            {{ headingLabel(month.value as CalendarDate) }}
          </div>
          <div class="flex items-center gap-[8px]">
            <RangeCalendarNext :as-child="true">
              <IconButton
                variant="tertiary"
                size="small"
                class="shrink-0"
                aria-label="다음 월"
              >
                <ChevronRight />
              </IconButton>
            </RangeCalendarNext>
            <RangeCalendarNext :as-child="true" :next-page="nextYearPage">
              <IconButton
                variant="tertiary"
                size="small"
                class="shrink-0"
                aria-label="다음 연도"
              >
                <ChevronsRight />
              </IconButton>
            </RangeCalendarNext>
          </div>
        </div>

        <!-- Week + Day grid -->
        <RangeCalendarGrid class="w-full border-collapse">
          <RangeCalendarGridHead>
            <RangeCalendarGridRow class="flex w-full">
              <th
                v-for="(day, wi) in weekDays"
                :key="String(day)"
                scope="col"
                :class="cn(
                  'flex-1 h-[32px] flex items-center justify-center text-size-15 leading-[24px] font-bold tracking-[-0.01em]',
                  isSundayColumnIndex(wi) ? 'text-red-80' : 'text-grey-60',
                )"
              >
                {{ day }}
              </th>
            </RangeCalendarGridRow>
          </RangeCalendarGridHead>
          <RangeCalendarGridBody>
            <RangeCalendarGridRow
              v-for="(weekDates, index) in month.rows"
              :key="`weekDate-${index}`"
              class="flex w-full"
            >
              <RangeCalendarCell
                v-for="(weekDate, di) in weekDates"
                :key="weekDate.toString()"
                :date="weekDate"
                :class="cn(
                  'relative flex-1 h-[48px] w-auto p-0 text-center flex items-center justify-center',
                  'focus-within:relative focus-within:z-20',
                  '[&:has([data-selected]:not([data-selection-start]):not([data-selection-end]))]:bg-blue-20',
                  '[&:has([data-selection-start])]:rounded-l-[8px] [&:has([data-selection-start])]:bg-blue-20',
                  '[&:has([data-selection-end])]:rounded-r-[8px] [&:has([data-selection-end])]:bg-blue-20',
                  '[&:has([data-selection-start][data-selection-end])]:rounded-[8px]',
                  '[&:has([data-selected][data-outside-view])]:bg-blue-20/50',
                )"
              >
                <RangeCalendarCellTrigger
                  :day="weekDate"
                  :month="month.value"
                  :class="cn(
                    getCalendarRangeDateCellTriggerClass(
                      isSundayColumnIndex(di),
                      'mobile-period-calendar-day-btn',
                    ),
                    'h-[40px] w-[40px] rounded-[8px] text-size-15',
                  )"
                />
              </RangeCalendarCell>
            </RangeCalendarGridRow>
          </RangeCalendarGridBody>
        </RangeCalendarGrid>
      </div>
    </RangeCalendarRoot>

    <!-- Footer -->
    <div v-if="showFooter" class="flex items-stretch gap-[8px] w-full shrink-0">
      <slot name="reset" :on-reset="onReset">
        <Button
          variant="tertiary"
          theme="filled"
          size="xlarge"
          class="flex-1"
          @focus.prevent
          @focusout.prevent.stop
          @mousedown.prevent
          @click="onReset"
        >
          <RotateCcw class="w-[16px] h-[16px] mr-[4px]" />
          {{ t('word.reset') }}
        </Button>
      </slot>
      <slot name="done" :on-done="onDone">
        <Button
          variant="primary"
          theme="filled"
          size="xlarge"
          class="flex-1"
          @focus.prevent
          @focusout.prevent.stop
          @mousedown.prevent
          @click="onDone"
        >
          {{ t('word.save') }}
        </Button>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.mobile-period-calendar :deep(.mobile-period-calendar-day-btn[data-today]:not([data-selected])) {
  font-weight: 400;
  color: var(--color-blue-80);
  background-color: transparent !important;
}
</style>
