<script lang="ts" setup>
import type { CalendarHeadCellProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarHeadCell, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<CalendarHeadCellProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeadCell
    :class="cn(
      'w-[36px] h-[28px] mb-[12px] flex items-center justify-center',
      'text-sm font-bold text-base-90',
      props.class
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeadCell>
</template>
