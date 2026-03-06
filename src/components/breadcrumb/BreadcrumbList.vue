<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <ol
    :class="cn('flex flex-wrap items-center gap-[6px] break-words text-sm text-base-60 sm:gap-[10px]', props.class)"
  >
    <slot />
  </ol>
</template>
