<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <input
    v-bind="$attrs"
    data-slot="input-group-control"
    :class="cn(
      'min-h-0 h-full min-w-0 flex-1 border-0 bg-transparent outline-none',
      'text-inherit placeholder:text-grey-50',
      'disabled:cursor-not-allowed',
      props.class,
    )"
  />
</template>
