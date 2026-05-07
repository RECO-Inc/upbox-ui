<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
  rows?: number
}>()
</script>

<template>
  <textarea
    v-bind="$attrs"
    data-slot="input-group-control"
    :rows="rows ?? 3"
    :class="cn(
      'block w-full min-w-0 flex-1 resize-none border-0 bg-transparent py-[12px] outline-none',
      'text-inherit placeholder:text-grey-50',
      'disabled:cursor-not-allowed',
      props.class,
    )"
  />
</template>
