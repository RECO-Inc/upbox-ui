<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { IconSpinner } from "../../icons"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <IconSpinner
    role="status"
    aria-label="Loading"
    :class="cn('size-[16px] animate-spin', props.class)"
  />
</template>
