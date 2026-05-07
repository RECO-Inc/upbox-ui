<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { BadgeDividerVariants } from "."
import { cn } from "../../lib/utils"
import { badgeDividerVariants } from "."

const props = defineProps<{
  variant?: BadgeDividerVariants["variant"]
  size?: BadgeDividerVariants["size"]
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span :class="cn(badgeDividerVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </span>
</template>
