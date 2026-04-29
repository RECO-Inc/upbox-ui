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
      'box-border mb-[12px] h-[28px] w-[36px] max-w-[36px]',
      'px-px py-[6px] text-center align-middle text-sm leading-none font-bold tracking-[0.02em]',
      'text-grey-90',
      props.class
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeadCell>
</template>
