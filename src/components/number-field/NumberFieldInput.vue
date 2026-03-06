<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { NumberFieldInput } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <NumberFieldInput
    data-slot="input"
    :class="cn('flex h-[36px] w-full rounded-md border border-base-40 bg-transparent py-[4px] text-sm text-center shadow-sm transition-colors placeholder:text-base-60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-80 disabled:cursor-not-allowed disabled:opacity-50', props.class)"
  />
</template>
