<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "../../lib/utils"

export type TableCellSize = "small" | "regular" | "large"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  size?: TableCellSize
}>()

const sizeClasses = computed(() => {
  switch (props.size) {
    case "small":
      return "p-2.5" // 10px
    case "large":
      return "py-6 px-4" // 24px 16px
    case "regular":
      return "p-4" // 16px
    default:
      return "py-2 px-4" // 8px 16px (기본값)
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
