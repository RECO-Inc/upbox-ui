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
      'shrink-0 text-size-14 text-grey-80',
      props.class,
    )"
  >
    <slot />
  </span>
</template>
