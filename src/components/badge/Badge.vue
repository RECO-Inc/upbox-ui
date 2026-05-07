<script setup lang="ts">
import { useSlots } from "vue"
import type { BadgeProps } from "."
import { cn } from "../../lib/utils"
import { badgeCountVariants, badgeVariants } from "."

const props = defineProps<BadgeProps>()

const slots = useSlots()
</script>

<template>
  <div :class="cn(badgeVariants({ variant: props.variant, tone: props.tone, round: props.round, size: props.size }), props.class)">
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
