<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  /** <table> 에 적용할 클래스 */
  class?: HTMLAttributes["class"]
  /**
   * 스크롤 래퍼 div 에 적용할 클래스.
   * 바깥에 이미 스크롤 컨테이너가 있어 이 래퍼의 overflow 를 끄고 싶을 때 쓴다
   * (예: overflow-visible). class prop 은 <table> 로 가므로 래퍼는 이 prop 으로 제어한다.
   */
  wrapperClass?: HTMLAttributes["class"]
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
  <div :class="cn('relative w-full overflow-x-auto overflow-y-clip bg-grey-10', props.wrapperClass)">
    <table :class="cn('w-full caption-bottom text-size-13 min-w-full border border-grey-30 rounded-sm', props.class)">
      <slot />
    </table>
  </div>
</template>
