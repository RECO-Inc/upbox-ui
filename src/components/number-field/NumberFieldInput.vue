<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { NumberFieldInput } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  placeholder?: string
}>()
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    :placeholder="placeholder"
    :class="cn(
      'h-full min-w-0 flex-1 border-0 bg-transparent text-center text-inherit outline-none',
      'placeholder:text-grey-50',
      'disabled:cursor-not-allowed',
      props.class,
    )"
  />
</template>
