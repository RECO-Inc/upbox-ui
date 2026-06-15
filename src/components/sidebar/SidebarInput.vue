<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"
import { TextField } from "../text-field"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <TextField
    data-sidebar="input"
    :class="cn(
      'h-[32px] w-full bg-grey-10 shadow-none focus-within:ring-2 focus-within:ring-navy-80',
      props.class,
    )"
  >
    <slot />
  </TextField>
</template>
