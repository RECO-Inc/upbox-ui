<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { NumberFieldDecrementProps } from "reka-ui"
import { reactiveOmit } from "@vueuse/core"
import { Minus } from "lucide-vue-next"
import { NumberFieldDecrement, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<NumberFieldDecrementProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldDecrement
    data-slot="decrement"
    v-bind="forwarded"
    :class="cn(
      'inline-flex h-full shrink-0 aspect-square items-center justify-center text-inherit',
      'transition-colors',
      'enabled:hover:bg-grey-20 enabled:active:bg-grey-30',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
  >
    <slot>
      <Minus class="size-[var(--nf-icon,20px)]" />
    </slot>
  </NumberFieldDecrement>
</template>
