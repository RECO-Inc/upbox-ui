<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn('relative [&>[data-slot=input]]:has-[[data-slot=increment]]:pr-[20px] [&>[data-slot=input]]:has-[[data-slot=decrement]]:pl-[20px]', props.class)">
    <slot />
  </div>
</template>
