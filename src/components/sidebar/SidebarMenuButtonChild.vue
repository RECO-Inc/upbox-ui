<script setup lang="ts">
import type { PrimitiveProps } from "reka-ui"
import type { SidebarMenuButtonChildProps } from "."
import { Primitive } from "reka-ui"
import { cn } from "../../lib/utils"
import { sidebarMenuButtonVariants } from "."

export interface SidebarMenuButtonProps extends PrimitiveProps, SidebarMenuButtonChildProps {}

const props = withDefaults(defineProps<SidebarMenuButtonProps>(), {
  as: "button",
  variant: "default",
  size: "regular",
})
</script>

<template>
  <Primitive
    data-sidebar="menu-button"
    :data-size="size"
    :data-active="isActive"
    :class="cn(sidebarMenuButtonVariants({ variant, size }), props.class)"
    :as="as"
    :as-child="asChild"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>
