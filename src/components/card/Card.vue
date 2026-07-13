<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-[2px] border border-grey-30 bg-grey-10 text-grey-100 [-webkit-tap-highlight-color:transparent]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
