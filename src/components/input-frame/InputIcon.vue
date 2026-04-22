<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
  }>(),
  {},
)
</script>

<template>
  <span
    :class="cn(
      'inline-flex items-center justify-center text-grey-50 [&>svg]:h-[16px] [&>svg]:w-[16px]',
      props.class,
    )"
  >
    <slot />
  </span>
</template>
