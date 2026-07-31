<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "../../lib/utils"
import { CircleHelp } from "lucide-vue-next"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  tooltip?: string
  /** 헤더 정렬 (default: left). 내부 flex 컨테이너를 justify 하므로 text-align 보다 안전 */
  align?: "left" | "center" | "right"
}>()

/**
 * 패딩은 단일 값이다(size prop 없음).
 * 시안(Component _v02)의 table 은 singleline / doubleLine variant 만 있고 밀도 축이 없다.
 * 헤더 행 높이 32px = line-height 20px + 6px * 2 이므로 세로 6px / 가로 8px 로 고정한다.
 */
const justifyClass = computed(() =>
  props.align === "center" ? "justify-center" : props.align === "right" ? "justify-end" : "justify-start",
)
</script>

<template>
  <th
    :class="
      cn(
        'text-left align-middle text-grey-90 bg-grey-20 text-size-13 whitespace-nowrap border-b border-grey-30 py-[6px] px-[8px] [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
        props.class
      )
    "
  >
    <div class="flex items-center gap-[4px]" :class="justifyClass">
      <slot />
      <TooltipProvider v-if="tooltip">
        <Tooltip>
          <TooltipTrigger as-child>
            <CircleHelp class="h-[16px] w-[16px] text-grey-60 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent>
            <p class="whitespace-pre-line">{{ tooltip }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </th>
</template>
