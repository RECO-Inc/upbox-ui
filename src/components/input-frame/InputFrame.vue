<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, provide } from "vue"
import { cn } from "../../lib/utils"
import { INPUT_FRAME_CONTEXT_KEY } from "./inputFrameContext"
import {
  inputFrameVariants,
  type InputFrameVariantProps,
} from "./inputFrameVariants"

const props = withDefaults(
  defineProps<{
    variant?: InputFrameVariantProps["variant"]
    size?: InputFrameVariantProps["size"]
    error?: boolean
    readonly?: boolean
    /** `pointer-events-none`·비활성 톤(자식 `disabled`와 함께 쓰는 것을 권장) */
    disabled?: boolean
    class?: HTMLAttributes["class"]
  }>(),
  {
    variant: "default",
    size: "regular",
    error: false,
    readonly: false,
    disabled: false,
  },
)

provide(INPUT_FRAME_CONTEXT_KEY, {
  size: computed(() => props.size ?? "regular"),
})

const rootClass = computed(() =>
  cn(
    inputFrameVariants({
      variant: props.variant,
      size: props.size,
      error: props.error,
      readonly: props.readonly,
    }),
    props.disabled
    && "pointer-events-none cursor-not-allowed border-grey-40 bg-grey-20 hover:border-grey-40",
    props.class,
  ),
)
</script>

<template>
  <div :class="rootClass">
    <slot />
  </div>
</template>
