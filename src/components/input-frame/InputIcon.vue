<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject } from "vue"
import { cn } from "../../lib/utils"
import { INPUT_FRAME_CONTEXT_KEY } from "./inputFrameContext"

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
  }>(),
  {},
)

const frameContext = inject(INPUT_FRAME_CONTEXT_KEY, null)
const iconSvgSizeClass = computed(() => {
  const size = frameContext?.size.value ?? "regular"
  if (size === "small") {
    return "[&>svg]:h-[16px] [&>svg]:w-[16px]"
  }
  return "[&>svg]:h-[20px] [&>svg]:w-[20px]"
})
</script>

<template>
  <span
    :class="cn(
      'inline-flex items-center justify-center text-grey-50',
      iconSvgSizeClass,
      props.class,
    )"
  >
    <slot />
  </span>
</template>
