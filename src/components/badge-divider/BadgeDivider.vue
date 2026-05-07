<script setup lang="ts">
import type { BadgeDividerProps } from "."
import { cn } from "../../lib/utils"
import { badgeDividerVariants } from "."

const props = defineProps<BadgeDividerProps>()
</script>

<template>
  <span :class="cn(badgeDividerVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </span>
</template>
