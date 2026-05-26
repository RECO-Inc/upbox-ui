<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { Primitive } from "reka-ui"
import { cn } from "../../lib/utils"

const props = withDefaults(defineProps<PrimitiveProps & {
  size?: "small" | "regular"
  isActive?: boolean
  class?: HTMLAttributes["class"]
}>(), {
  as: "a",
  size: "regular",
})
</script>

<template>
  <Primitive
    data-sidebar="menu-sub-button"
    :as="as"
    :as-child="asChild"
    :data-size="size"
    :data-active="isActive"
    :class="cn(
      'flex min-h-[28px] min-w-0 items-center gap-[8px] py-[4px] pl-[32px] pr-[8px] font-bold text-grey-60 cursor-pointer outline-hidden ring-cta-primary focus-visible:ring-2 hover:text-grey-90 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>svg]:size-[20px] [&>svg]:shrink-0',
      'data-[active=true]:text-cta-primary',
      size === 'small' && 'text-size-13 leading-[18px]',
      size === 'regular' && 'text-size-14 leading-[20px]',
      'group-data-[collapsible=icon]:hidden',
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
