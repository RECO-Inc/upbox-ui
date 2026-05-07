<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { NumberFieldRoot, useForwardPropsEmits } from "reka-ui"
import { cn } from "../../lib/utils"

interface Props {
  modelValue?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  name?: string
  id?: string
  formatOptions?: Intl.NumberFormatOptions
  locale?: string
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()
const emits = defineEmits<{
  "update:modelValue": [value: number]
}>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NumberFieldRoot v-bind="forwarded" :class="cn('grid w-full gap-[6px]', props.class)">
    <slot />
  </NumberFieldRoot>
</template>
