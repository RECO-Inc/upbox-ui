<script lang="ts" setup>
import type { CalendarCellTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarCellTrigger, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<CalendarCellTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarCellTrigger
    :class="cn(
      // Base styles - 36x36 cell size matching original
      'inline-flex items-center justify-center w-[36px] h-[36px] p-0 text-sm font-normal rounded transition-colors cursor-pointer select-none',
      'text-grey-90 hover:bg-grey-30',
      // Today
      '[&[data-today]:not([data-selected])]:bg-grey-20 [&[data-today]:not([data-selected])]:text-navy-80 [&[data-today]:not([data-selected])]:font-semibold',
      // Selected (first/last in range)
      'data-[selected]:bg-blue-80 data-[selected]:text-grey-10 data-[selected]:hover:bg-blue-90',
      // Disabled
      'data-[disabled]:text-grey-50 data-[disabled]:bg-grey-20 data-[disabled]:cursor-not-allowed',
      // Unavailable
      'data-[unavailable]:text-red-70 data-[unavailable]:line-through',
      // Outside months
      'data-[outside-view]:text-grey-50',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCellTrigger>
</template>
