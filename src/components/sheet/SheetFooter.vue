<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <!-- `DialogFooter` 와 같은 이유로 항상 가로 배치. 그쪽 주석 참고. -->
  <div
    :class="
      cn(
        'flex flex-row items-center justify-end gap-x-[8px]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
