<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <div :class="cn('mt-auto flex flex-col gap-[8px] p-[16px]', props.class)">
    <slot />
  </div>
</template>
