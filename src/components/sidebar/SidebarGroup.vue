<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-sidebar="group"
    :class="cn('relative flex w-full min-w-0 flex-col py-[8px] px-[16px] group-data-[collapsible=icon]:px-[8px]', props.class)"
  >
    <slot />
  </div>
</template>
