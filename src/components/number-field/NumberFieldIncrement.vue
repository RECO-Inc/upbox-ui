<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { NumberFieldIncrementProps } from "reka-ui"
import { reactiveOmit } from "@vueuse/core"
import { Plus } from "lucide-vue-next"
import { NumberFieldIncrement, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<NumberFieldIncrementProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <NumberFieldIncrement
    data-slot="increment"
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
      <Plus class="size-[var(--nf-icon,20px)]" />
    </slot>
  </NumberFieldIncrement>
</template>
