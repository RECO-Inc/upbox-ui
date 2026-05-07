<script setup lang="ts">
/**
 * 디자인 시스템 Figma `periodCalendar` (node `12247:8603`)에 대응.
 * 래핑 레이아웃·헤더 네비·단축·푸터 순서 및 토큰은 `DateCalendar` 와 통일된다.
 * 기본값은 **두 달 패널**(`numberOfMonths: 2`) + 페이지 단위 네비(`pagedNavigation`)이다.
 *
 * 범위 값 모델은 reka-ui `DateRange` (`{ start?, end? }`, `@internationalized/date` 호환).
 * 앱 레벨 `{ start: CalendarDate | null; end: CalendarDate | null }` 매핑은
 * `DatePeriodPicker` 또는 수동으로 처리한다.
 *
 * @see RangeCalendar.vue
 */
import { computed, useAttrs } from "vue"
import RangeCalendar from "./RangeCalendar.vue"

defineOptions({
  inheritAttrs: false,
  name: "PeriodCalendar",
})

const attrs = useAttrs()

/** 기본 두 달 + 스텝 네비게이션(두 달 단위 페이지 이동) */
const rangeCalendarAttrs = computed(() => {
  const nRaw = attrs.numberOfMonths
  const months = typeof nRaw === "number" && Number.isFinite(nRaw)
    ? Math.max(1, Math.floor(nRaw))
    : 2
  const pageRaw = attrs.pagedNavigation
  const paged = typeof pageRaw === "boolean"
    ? pageRaw
    : months > 1

  return {
    ...attrs,
    numberOfMonths: months,
    pagedNavigation: paged,
  }
})
</script>

<template>
  <RangeCalendar v-bind="rangeCalendarAttrs" :show-footer="true" :show-quick-presets="true">
    <template v-if="$slots.reset" #reset="{ onReset }">
      <slot name="reset" :on-reset="onReset" />
    </template>
    <template v-if="$slots.done" #done="{ onDone }">
      <slot name="done" :on-done="onDone" />
    </template>
  </RangeCalendar>
</template>
