<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "../../lib/utils"

export type TableCellSize = "sm" | "md" | "lg"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  size?: TableCellSize
}>()

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "p-[10px]" // 10px
    case "lg":
      return "py-[24px] px-[16px]" // 24px 16px
    case "md":
      return "p-[16px]" // 16px
    default:
      return "py-[8px] px-[16px]" // 8px 16px (기본값)
  }
})
</script>

<template>
  <td
    :class="
      cn(
        'align-middle text-base-90 text-size-13 break-words max-w-full [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
        sizeClasses,
        props.class,
      )
    "
  >
    <slot />
  </td>
</template>
