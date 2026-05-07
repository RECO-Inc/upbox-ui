<script lang="ts" setup>
import type { CalendarHeaderProps } from "reka-ui"
import { computed, type HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarHeader, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import type { CalendarDate, DateValue } from "@internationalized/date"
import CalendarPrevButton from "./CalendarPrevButton.vue"
import CalendarNextButton from "./CalendarNextButton.vue"
import { ChevronsLeft, ChevronsRight } from "lucide-vue-next"

const props = defineProps<
  CalendarHeaderProps & { 
    class?: HTMLAttributes["class"] 
    placeholder: CalendarDate
  }>()
const delegatedProps = reactiveOmit(props, "class")
const forwardedProps = useForwardProps(delegatedProps)
const emits = defineEmits<{
  (e: "clickHeading"): void
  (e: "prevYear", delta: number): void
  (e: "nextYear", delta: number): void
}>()


/** IconButton(Prev/Next 내부) 보조: 기존 outlined 보조 버튼 톤에 가깝게 */
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
  <CalendarHeader 
    :class="cn('relative flex w-full items-center justify-between pt-[4px]', props.class)" 
    v-bind="forwardedProps">
    <slot>
      <div class="flex items-center gap-[4px]">
        <CalendarPrevButton
          :prev-page="(d: DateValue) => subtractYears(d, 1)"
          :class="navBtnClass">
          <ChevronsLeft />
        </CalendarPrevButton>
        <CalendarPrevButton :class="navBtnClass" />
      </div>
      <button
        type="button"
        class="text-size-13 font-bold text-grey-90 select-none hover:text-navy-80"
        aria-label="월 선택 보기"
        @click="emits('clickHeading')" >
        {{ headingLabel }}
      </button>
      <div class="flex items-center gap-[4px]">
        <CalendarNextButton :class="navBtnClass" />
        <CalendarNextButton
          :class="navBtnClass"
          :next-page="(d: DateValue) => addYears(d, 1)">
          <ChevronsRight />
        </CalendarNextButton>
      </div>
    </slot>
  </CalendarHeader>
</template>
