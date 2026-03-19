<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"
import { Separator } from '../separator'

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <Separator
    data-sidebar="separator"
    :class="cn('mx-[8px] w-auto bg-grey-40', props.class)"
  >
    <slot />
  </Separator>
</template>
