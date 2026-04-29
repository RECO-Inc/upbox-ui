<script setup lang="ts">
/**
 * MonthCalendar — Figma `monthPicker`(node `12247:8599`).
 * 6×2 숫자 월 격자 · 하단 이번달/완료.
 * 연 라벨 탭 시 연도 그리드로 전환.
 */
import type { HTMLAttributes } from "vue"
import {
  CalendarDate,
  getLocalTimeZone,
  today,
} from "@internationalized/date"
import { computed, ref, watch } from "vue"
import { cn } from "../../lib/utils"
import { Button } from "../button"
import CalendarMonthGrid from "./CalendarMonthGrid.vue"
import CalendarYearGrid from "./CalendarYearGrid.vue"

defineOptions({ name: "MonthCalendar" })

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
  }>(),
  {},
)

const modelValue = defineModel<CalendarDate | null>()

const emit = defineEmits<{
  /** 완료 클릭(부모에서 팝업 닫기 등) */
  done: []
}>()

type ViewMode = "month" | "year"
const viewMode = ref<ViewMode>("month")

const displayYear = ref<number>(today(getLocalTimeZone()).year)

watch(
  () => modelValue.value,
  (v) => {
    if (v?.year != null)
      displayYear.value = v.year
  },
  { immediate: true },
)

/** 패널 연도와 선택 연도가 같을 때만 월 하이라이트 (다른 연 탐색 중 4월이 잘못 켜지지 않게) */
const selectedMonthInView = computed(() => {
  const m = modelValue.value
  if (!m || m.year !== displayYear.value)
    return undefined
  return m.month
})

const selectedYear = computed(() => modelValue.value?.year)

function onClickYearLabel() {
  viewMode.value = "year"
}

function onSelectMonth(month: number) {
  modelValue.value = new CalendarDate(displayYear.value, month, 1)
}

function onPrevYear() {
  displayYear.value -= 1
}

function onNextYear() {
  displayYear.value += 1
}

function onSelectYear(year: number) {
  displayYear.value = year
  viewMode.value = "month"
}

function onThisMonth() {
  const t = today(getLocalTimeZone()) as CalendarDate
  displayYear.value = t.year
  modelValue.value = new CalendarDate(t.year, t.month, 1)
}

function onDoneClick() {
  emit("done")
}
</script>

<template>
  <div
    :class="cn(
      'month-calendar-root w-[320px] max-w-full rounded-[8px] bg-grey-10 shadow-regular',
      props.class,
    )"
  >
    <template v-if="viewMode === 'month'">
      <CalendarMonthGrid
        :year="displayYear"
        :selected-month="selectedMonthInView"
        @select="onSelectMonth"
        @prev-year="onPrevYear"
        @next-year="onNextYear"
        @click-year="onClickYearLabel"
      />
      <div
        class="flex items-center justify-between gap-[12px] border-t border-grey-30 px-[16px] py-[12px]"
      >
        <Button
          type="button"
          variant="tertiary"
          theme="outlined"
          size="small"
          @click="onThisMonth"
        >
          이번달
        </Button>
        <Button
          type="button"
          variant="primary"
          theme="filled"
          size="small"
          @click="onDoneClick"
        >
          완료
        </Button>
      </div>
    </template>
    <template v-else-if="viewMode === 'year'">
      <CalendarYearGrid
        :selected-year="selectedYear"
        :start-year="displayYear + 3"
        @select="onSelectYear"
      />
    </template>
  </div>
</template>

<style scoped>
.month-calendar-root {
  background-color: var(--color-grey-10);
}
</style>
