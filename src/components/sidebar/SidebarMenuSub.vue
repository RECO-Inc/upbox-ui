<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = withDefaults(
  defineProps<{
    open?: boolean
    class?: HTMLAttributes["class"]
  }>(),
  {
    open: true,
  },
)
</script>

<template>
  <div
    data-sidebar="menu-sub"
    :data-state="props.open ? 'open' : 'closed'"
    :class="cn(
      'grid transition-[grid-template-rows] duration-200 ease-out',
      'data-[state=open]:grid-rows-[1fr] data-[state=closed]:grid-rows-[0fr]',
      'group-data-[collapsible=icon]:hidden',
      props.class,
    )"
  >
    <!-- grid item 은 패딩 없는 clipper. 패딩을 grid item 에 두면 0fr 로 접혀도 패딩(py-16=32px)이 남아 잔여 높이가 보인다 → 안쪽 ul 로 분리 -->
    <div class="min-h-0 overflow-hidden">
      <ul class="flex min-w-0 flex-col gap-[8px] py-[16px]">
        <slot />
      </ul>
    </div>
  </div>
</template>
