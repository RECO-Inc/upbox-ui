<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { BadgeVariants } from "."
import { cn } from "../../lib/utils"
import { badgeVariants } from "."

const props = defineProps<{
  variant?: BadgeVariants["variant"]
  size?: BadgeVariants["size"]
  deep?: boolean
  outline?: boolean
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="[badgeVariants({ variant, size, deep, outline }), props.class]">
    <slot />
  </div>
</template>
