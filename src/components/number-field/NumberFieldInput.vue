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
    :class="cn('flex h-[36px] w-full rounded-md border border-grey-40 bg-transparent py-[4px] text-sm text-center shadow-xs transition-colors placeholder:text-grey-60 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-navy-80 disabled:cursor-not-allowed disabled:opacity-50', props.class)"
  />
</template>
