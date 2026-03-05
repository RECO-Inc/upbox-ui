<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "../../lib/utils"
import { CircleHelp } from "lucide-vue-next"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip"

export type TableHeadSize = "small" | "regular" | "large"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  size?: TableHeadSize
  tooltip?: string
}>()

const sizeClasses = computed(() => {
  switch (props.size) {
    case "small":
      return "p-2.5" // 10px
    case "large":
      return "py-6 px-4" // 24px 16px
    case "regular":
    default:
      return "p-4" // 16px
  }
})
</script>

<template>
  <th
    :class="
      cn(
        'text-left align-middle text-base-90 bg-base-20 text-size-13 whitespace-nowrap border-b border-base-30 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
        sizeClasses,
        props.class
      )
    "
  >
    <div class="flex items-center gap-1">
      <slot />
      <TooltipProvider v-if="tooltip">
        <Tooltip>
          <TooltipTrigger as-child>
            <CircleHelp class="h-4 w-4 text-base-60 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent>
            <p class="whitespace-pre-line">{{ tooltip }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </th>
</template>
