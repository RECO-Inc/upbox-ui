<script setup lang="ts">
import type { SelectTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { SelectIcon, SelectTrigger, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import { InputFrame } from "../input-frame"

const props = defineProps<SelectTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <InputFrame
    size="regular"
    variant="default"
    :disabled="!!props.disabled"
    class="w-full min-w-0"
  >
    <SelectTrigger
      v-bind="forwardedProps"
      :class="cn(
        'flex h-full min-h-0 w-full min-w-0 flex-1 items-center justify-between border-0 bg-transparent',
        'px-0 py-0 text-size-14 text-inherit shadow-none outline-none transition-none',
        'whitespace-nowrap text-start',
        'cursor-pointer select-none',
        'disabled:cursor-not-allowed disabled:opacity-100',
        'focus:outline-hidden focus:ring-0',
        '[&>span]:truncate',
        props.class,
      )"
    >
      <slot />
      <SelectIcon as-child>
        <ChevronDown class="h-[16px] w-[16px] shrink-0 opacity-50" />
      </SelectIcon>
    </SelectTrigger>
  </InputFrame>
</template>
