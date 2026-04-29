<script lang="ts" setup>
import type { RangeCalendarHeaderProps } from "reka-ui"
import type { CalendarDate, DateValue } from "@internationalized/date"
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronsLeft, ChevronsRight } from "lucide-vue-next"
import { RangeCalendarHeader, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import RangeCalendarPrevButton from "./RangeCalendarPrevButton.vue"
import RangeCalendarNextButton from "./RangeCalendarNextButton.vue"

const props = defineProps<
  RangeCalendarHeaderProps & {
    class?: HTMLAttributes["class"]
    placeholder: CalendarDate
  }
>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
const emits = defineEmits<{
  clickHeading: []
}>()

const navBtnClass = "opacity-50 hover:opacity-100"

const headingLabel = computed(() => {
  const p = props.placeholder
  if (!p || typeof p !== "object" || !("year" in p) || !("month" in p))
    return ""
  const d = p as CalendarDate
  return `${d.year}년 ${String(d.month).padStart(2, "0")}월`
})

function subtractYears(d: DateValue, dy: number) {
  return (d as CalendarDate).subtract({ years: dy })
}

function addYears(d: DateValue, dy: number) {
  return (d as CalendarDate).add({ years: dy })
}
</script>

<template>
  <RangeCalendarHeader
    :class="cn('relative flex w-full items-center justify-between pt-[4px]', props.class)"
    v-bind="forwardedProps"
  >
    <div class="flex items-center gap-[4px]">
      <RangeCalendarPrevButton
        :prev-page="(d: DateValue) => subtractYears(d, 1)"
        :class="navBtnClass"
      >
        <ChevronsLeft />
      </RangeCalendarPrevButton>
      <RangeCalendarPrevButton :class="navBtnClass" />
    </div>
    <button
      type="button"
      class="text-size-13 font-bold text-grey-90 select-none hover:text-navy-80"
      aria-label="월 선택 보기"
      @click="emits('clickHeading')"
    >
      {{ headingLabel }}
    </button>
    <div class="flex items-center gap-[4px]">
      <RangeCalendarNextButton :class="navBtnClass" />
      <RangeCalendarNextButton
        :class="navBtnClass"
        :next-page="(d: DateValue) => addYears(d, 1)"
      >
        <ChevronsRight />
      </RangeCalendarNextButton>
    </div>
  </RangeCalendarHeader>
</template>
