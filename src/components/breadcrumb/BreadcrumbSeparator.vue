<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { IconChevronRight } from "../../icons"
import { cn } from "../../lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <li
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-[14px]', props.class)"
  >
    <slot>
      <IconChevronRight />
    </slot>
  </li>
</template>
