<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

/**
 * 패딩은 단일 값이다(size prop 없음).
 * 시안(Component _v02)의 table 은 singleline / doubleLine variant 만 있고 밀도 축이 없다.
 * 1줄 행 높이 32px = line-height 20px + 6px * 2 이므로 세로 6px / 가로 8px 로 고정한다.
 * 2줄 이상은 콘텐츠가 늘어난 결과이므로 별도 prop 없이 자연스럽게 높아진다.
 */
</script>

<template>
  <td
    :class="
      cn(
        'align-middle text-grey-90 text-size-13 break-words max-w-full py-[6px] px-[8px] [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
        props.class,
      )
    "
  >
    <slot />
  </td>
</template>
