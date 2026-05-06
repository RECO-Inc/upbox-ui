<script lang="ts" setup>
/**
 * MobileDateCalendar — Figma 모바일 dateCalendar (node `12247:8592`) 정렬 단일 일자 패널
 * - 폭 360, 상단 [16,16,0,0] 라운드, 셀 48h(트리거 40·gap 풀블리드)
 * - KR 로케 · 월요일 주 시작 · 연/월 각각 네비(<< < 제목 > >>)
 * - 빠른 기간 칩 없음, 푸터 = 초기화·저장 (xlarge)
 *
 * 데스크톱 단일 일자는 `DateCalendar`.
 */
import type { CalendarRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { DateValue } from "@internationalized/date"
import { CalendarDate } from "@internationalized/date"
import { computed, ref, watch } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarRoot,
  useForwardPropsEmits,
} from "reka-ui"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, RotateCcw } from "lucide-vue-next"
import { useI18n } from "vue-i18n"
import { cn } from "../../lib/utils"
import { Button } from "../button"
import { IconButton } from "../icon-button"
import CalendarCell from "./CalendarCell.vue"
import CalendarCellTrigger from "./CalendarCellTrigger.vue"
import CalendarMonthGrid from "./CalendarMonthGrid.vue"
import CalendarYearGrid from "./CalendarYearGrid.vue"

defineOptions({ name: "MobileDateCalendar" })

type ViewMode = "DATE" | "MONTH" | "YEAR"

export interface Props extends CalendarRootProps {
  class?: HTMLAttributes["class"]
  /** 초기화·저장 푸터 표시 여부 */
  showFooter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showFooter: true,
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
  "locale",
  "weekStartsOn",
)

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const { t } = useI18n()

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

const headingLabel = computed(() => {
  const p = placeholder.value
  return `${p.year}년 ${String(p.month).padStart(2, "0")}월`
})

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

/** 월요일 시작(1) ⇒ 일요일은 인덱스 6 · 일요일 시작(0) ⇒ 인덱스 0 */
function isSundayColumnIndex(di: number) {
  const w = weekStartsResolved.value
  if (w === 1) return di === 6
  if (w === 0) return di === 0
  return false
}

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
  placeholder.value = placeholder.value.subtract({ years: 1 })
}

function onNextYear() {
  placeholder.value = placeholder.value.add({ years: 1 })
}

function onPrevMonth() {
  placeholder.value = placeholder.value.subtract({ months: 1 })
}

function onNextMonth() {
  placeholder.value = placeholder.value.add({ months: 1 })
}

function onClickYear() {
  viewMode.value = "YEAR"
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
    :class="cn(
      'mobile-date-calendar w-[360px] max-w-full bg-grey-10 rounded-t-[16px] flex flex-col px-[16px] py-[24px]',
      'gap-y-[24px]',
      props.class,
    )"
  >
    <template v-if="viewMode === 'DATE'">
      <CalendarRoot
        v-slot="{ grid, weekDays }"
        v-bind="forwarded"
        class="flex flex-col gap-y-[8px]"
        :locale="localeResolved"
        :placeholder="placeholder as CalendarRootProps['placeholder']"
        :week-starts-on="weekStartsResolved"
        weekday-format="narrow"
        @update:placeholder="(val) => (placeholder = val as CalendarDate)"
      >
        <!-- Title (header) -->
        <div class="flex w-full items-center justify-between h-[32px]">
          <div class="flex items-center gap-[8px]">
            <IconButton
              variant="tertiary"
              size="small"
              class="shrink-0"
              aria-label="이전 연도"
              @click="onPrevYear"
            >
              <ChevronsLeft />
            </IconButton>
            <IconButton
              variant="tertiary"
              size="small"
              class="shrink-0"
              aria-label="이전 월"
              @click="onPrevMonth"
            >
              <ChevronLeft />
            </IconButton>
          </div>
          <button
            type="button"
            class="text-size-16 font-bold text-grey-90 select-none hover:text-navy-80 leading-[24px] tracking-[-0.01em]"
            aria-label="월 선택 보기"
            @click="onClickHeading"
          >
            {{ headingLabel }}
          </button>
          <div class="flex items-center gap-[8px]">
            <IconButton
              variant="tertiary"
              size="small"
              class="shrink-0"
              aria-label="다음 월"
              @click="onNextMonth"
            >
              <ChevronRight />
            </IconButton>
            <IconButton
              variant="tertiary"
              size="small"
              class="shrink-0"
              aria-label="다음 연도"
              @click="onNextYear"
            >
              <ChevronsRight />
            </IconButton>
          </div>
        </div>

        <!-- Week + Day grid -->
        <table v-for="month in grid" :key="month.value.toString()" class="w-full border-collapse">
          <CalendarGridHead>
            <CalendarGridRow class="flex w-full">
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
            </CalendarGridRow>
          </CalendarGridHead>
          <CalendarGridBody>
            <CalendarGridRow
              v-for="(weekDates, index) in month.rows"
              :key="`weekDate-${index}`"
              class="flex w-full"
            >
              <CalendarCell
                v-for="(weekDate, di) in weekDates"
                :key="weekDate.toString()"
                :date="weekDate"
                class="flex-1 h-[48px] !w-auto flex items-center justify-center"
              >
                <CalendarCellTrigger
                  :day="weekDate"
                  :month="month.value"
                  :class="cn(
                    '!h-[40px] !w-[40px] rounded-[8px] text-size-15',
                    isSundayColumnIndex(di) &&
                      '!text-red-70 data-[outside-view]:!text-red-50 [&[data-selected]]:!text-grey-10',
                    'mobile-date-calendar-day-btn',
                  )"
                />
              </CalendarCell>
            </CalendarGridRow>
          </CalendarGridBody>
        </table>
      </CalendarRoot>

      <!-- Footer (초기화 / 저장) -->
      <div v-if="showFooter" class="flex items-stretch gap-[8px] w-full">
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
    </template>

    <template v-else-if="viewMode === 'MONTH'">
      <CalendarMonthGrid
        :year="placeholder.year"
        :selected-month="selectedMonthInMonthView"
        @select="onSelectMonth"
        @prev-year="onPrevYear"
        @next-year="onNextYear"
        @click-year="onClickYear"
      />
    </template>

    <template v-else-if="viewMode === 'YEAR'">
      <CalendarYearGrid
        :selected-year="selectedYear"
        :start-year="placeholder.year + 3"
        @select="onSelectYear"
      />
    </template>
  </div>
</template>

<style scoped>
/** 오늘(미선택) 강조: 텍스트만 파란색 */
.mobile-date-calendar :deep(.mobile-date-calendar-day-btn[data-today]:not([data-selected])) {
  font-weight: 400;
  color: var(--color-blue-80);
  background-color: transparent !important;
}
</style>
