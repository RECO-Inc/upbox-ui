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
    <ul class="flex min-w-0 flex-col gap-[8px] py-[16px] overflow-hidden">
      <slot />
    </ul>
  </div>
</template>
