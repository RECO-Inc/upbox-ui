<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    data-slot="input-group"
    role="group"
    :class="cn(
      'group/input-group border-grey-50 bg-grey-10 relative flex w-full items-center rounded-md border shadow-sm transition-[color,box-shadow] outline-none',
      'h-[36px] min-w-0 has-[>textarea]:h-auto',

      // Variants based on alignment.
      'has-[>[data-align=inline-start]]:[&>input]:pl-[8px]',
      'has-[>[data-align=inline-end]]:[&>input]:pr-[8px]',
      'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-[12px]',
      'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-[12px]',

      // Focus state.
      'has-[[data-slot=input-group-control]:focus-visible]:ring-navy-80 has-[[data-slot=input-group-control]:focus-visible]:ring-1',

      props.class,
    )"
  >
    <slot />
  </div>
</template>
