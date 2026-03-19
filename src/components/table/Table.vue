<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div class="relative w-full overflow-x-auto overflow-y-visible bg-grey-10">
    <table :class="cn('w-full caption-bottom text-size-13 min-w-full border border-grey-30 rounded', props.class)">
      <slot />
    </table>
  </div>
</template>
