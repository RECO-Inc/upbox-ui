<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-sidebar="menu-badge"
    :class="cn(
      'absolute right-[4px] flex h-[20px] min-w-[20px] items-center justify-center rounded-md px-[4px] text-xs font-medium tabular-nums text-grey-100 select-none pointer-events-none',
      'peer-hover/menu-button:text-grey-100 peer-data-[active=true]/menu-button:text-grey-100',
      'peer-data-[size=small]/menu-button:top-[4px]',
      'peer-data-[size=regular]/menu-button:top-[6px]',
      'peer-data-[size=large]/menu-button:top-[10px]',
      'group-data-[collapsible=icon]:hidden',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
