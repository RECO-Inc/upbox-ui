<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <ul
    data-sidebar="menu-badge"
    :class="cn(
      'mx-[14px] flex min-w-0 translate-x-px flex-col gap-[4px] border-l border-base-40 px-[10px] py-[2px]',
      'group-data-[collapsible=icon]:hidden',
      props.class,
    )"
  >
    <slot />
  </ul>
</template>
