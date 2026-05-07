<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { useSlots } from "vue"
import type { BadgeVariants } from "."
import { cn } from "../../lib/utils"
import { badgeCountVariants, badgeVariants } from "."

const props = defineProps<{
  variant?: BadgeVariants["variant"]
  tone?: BadgeVariants["tone"]
  shape?: BadgeVariants["shape"]
  size?: BadgeVariants["size"]
  class?: HTMLAttributes["class"]
}>()

const slots = useSlots()
</script>

<template>
  <div :class="cn(badgeVariants({ variant: props.variant, tone: props.tone, shape: props.shape, size: props.size }), props.class)">
    <slot />
    <span
      v-if="slots.icon"
      class="inline-flex items-center justify-center size-[16px] shrink-0"
    >
      <slot name="icon" />
    </span>
    <span
      v-if="slots.count"
      :class="cn(badgeCountVariants({ variant: props.variant ?? 'neutral' }))"
    >
      <slot name="count" />
    </span>
  </div>
</template>
