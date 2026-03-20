<script setup lang="ts">
import type { SelectTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { SelectIcon, SelectTrigger, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex h-[40px] w-full items-center justify-between whitespace-nowrap rounded-[4px] border border-grey-40 bg-grey-10 px-[16px] py-[9px] text-size-14 transition-all duration-300 data-[placeholder]:text-grey-50 focus:outline-hidden focus:border-blue-80 focus:ring-2 focus:ring-blue-40 hover:border-grey-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-grey-20 disabled:border-grey-30 disabled:hover:border-grey-30 [&>span]:truncate text-start cursor-pointer select-none',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="w-[16px] h-[16px] opacity-50 shrink-0" />
    </SelectIcon>
  </SelectTrigger>
</template>
