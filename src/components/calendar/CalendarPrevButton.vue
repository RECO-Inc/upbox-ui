<script lang="ts" setup>
import type { CalendarPrevProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronLeft } from "lucide-vue-next"
import { CalendarPrev, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import { buttonVariants } from '../button'

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarPrev
    :class="cn(
      buttonVariants({ variant: 'tertiary', style: 'outlined' }),
      'h-[28px] w-[28px] bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronLeft class="h-[16px] w-[16px]" />
    </slot>
  </CalendarPrev>
</template>
