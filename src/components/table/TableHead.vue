<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "../../lib/utils"
import { CircleHelp } from "lucide-vue-next"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip"

export type TableHeadSize = "sm" | "md" | "lg"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  size?: TableHeadSize
  tooltip?: string
}>()

const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "p-[10px]" // 10px
    case "lg":
      return "py-[24px] px-[16px]" // 24px 16px
    case "md":
    default:
      return "p-[16px]" // 16px
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
    <div class="flex items-center gap-[4px]">
      <slot />
      <TooltipProvider v-if="tooltip">
        <Tooltip>
          <TooltipTrigger as-child>
            <CircleHelp class="h-[16px] w-[16px] text-base-60 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent>
            <p class="whitespace-pre-line">{{ tooltip }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </th>
</template>
