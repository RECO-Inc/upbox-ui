<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn('grid gap-[6px] p-[16px] text-center sm:text-left', props.class)">
    <slot />
  </div>
</template>
