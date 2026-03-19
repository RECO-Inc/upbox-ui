<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <tr :class="cn('transition-colors hover:bg-navy-20 data-[state=selected]:bg-navy-20', props.class)">
    <slot />
  </tr>
</template>
