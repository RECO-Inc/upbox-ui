<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { IconMoreHorizontal } from "../../icons"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn('flex h-[36px] w-[36px] items-center justify-center', props.class)"
  >
    <slot>
      <IconMoreHorizontal class="h-[16px] w-[16px]" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
