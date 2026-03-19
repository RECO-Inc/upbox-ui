<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span
    :class="cn(
      'text-grey-60 flex items-center gap-[8px] text-size-14 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-[16px]',
      props.class,
    )"
  >
    <slot />
  </span>
</template>
