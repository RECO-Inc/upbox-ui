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
      'flex h-10 w-full items-center justify-between whitespace-nowrap rounded-[4px] border border-base-40 bg-base-10 px-4 py-[9px] text-size-14 transition-all duration-300 data-[placeholder]:text-base-50 focus:outline-none focus:border-info-80 focus:ring-2 focus:ring-info-40 hover:border-base-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-base-20 disabled:border-base-30 disabled:hover:border-base-30 [&>span]:truncate text-start cursor-pointer select-none',
      props.class,
    )"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="w-4 h-4 opacity-50 shrink-0" />
    </SelectIcon>
  </SelectTrigger>
</template>
