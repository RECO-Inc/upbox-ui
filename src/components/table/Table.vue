<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

/**
 * 래퍼의 overflow-y 는 clip 이어야 한다.
 * CSS 명세상 한 축이 visible 이 아니면 나머지 축의 visible 은 auto 로 계산되므로,
 * overflow-y-visible 은 의도와 달리 세로 스크롤 컨테이너를 만든다
 * (셀 안에 높은 요소가 하나만 있어도 세로 스크롤바가 생긴다).
 * clip 은 스크롤바 없이 넘침만 잘라낸다.
 * Tooltip/Popover 류는 Portal 로 렌더되므로 clip 에 잘리지 않는다.
 */
</script>

<template>
  <div class="relative w-full overflow-x-auto overflow-y-clip bg-grey-10">
    <table :class="cn('w-full caption-bottom text-size-13 min-w-full border border-grey-30 rounded-sm', props.class)">
      <slot />
    </table>
  </div>
</template>
