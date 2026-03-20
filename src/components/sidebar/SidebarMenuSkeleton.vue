<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "../../lib/utils"
import { Skeleton } from '../skeleton'

const props = defineProps<{
  showIcon?: boolean
  class?: HTMLAttributes["class"]
}>()

const width = computed(() => {
  return `${Math.floor(Math.random() * 40) + 50}%`
})
</script>

<template>
  <div
    data-sidebar="menu-skeleton"
    :class="cn('rounded-md h-[32px] flex gap-[8px] px-[8px] items-center', props.class)"
  >
    <Skeleton
      v-if="showIcon"
      class="size-[16px] rounded-md"
      data-sidebar="menu-skeleton-icon"
    />

    <Skeleton
      class="h-[16px] flex-1 max-w-(--skeleton-width)"
      data-sidebar="menu-skeleton-text"
      :style="{ '--skeleton-width': width }"
    />
  </div>
</template>
