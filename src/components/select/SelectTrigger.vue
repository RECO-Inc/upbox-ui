<script setup lang="ts">
import type { SelectTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { SelectIcon, SelectTrigger, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import { InputFrame } from "../input-frame"

const props = defineProps<SelectTriggerProps & {
  class?: HTMLAttributes["class"]
  /**
   * SearchField/InputGroup 등 외부 frame을 가진 wrapper 안에 들어갈 때 사용.
   * 자체 InputFrame 없이 transparent inline trigger로 렌더링된다.
   */
  inline?: boolean
}>()

const delegatedProps = reactiveOmit(props, "class", "inline")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectTrigger
    v-if="props.inline"
    v-bind="forwardedProps"
    :class="cn(
      'inline-flex h-full min-h-0 items-center gap-[4px] border-0 bg-transparent px-[8px] text-size-14 text-inherit shadow-none outline-none',
      'whitespace-nowrap text-start',
      'cursor-pointer select-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
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
  <InputFrame
    v-else
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
