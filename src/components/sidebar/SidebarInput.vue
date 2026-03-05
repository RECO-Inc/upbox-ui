<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"
import { Input } from '../input'

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Input
    data-sidebar="input"
    :class="cn(
      'h-8 w-full bg-base-10 shadow-none focus-visible:ring-2 focus-visible:ring-primary-80',
      props.class,
    )"
  >
    <slot />
  </Input>
</template>
