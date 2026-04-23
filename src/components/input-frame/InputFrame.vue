<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, provide } from "vue"
import { cn } from "../../lib/utils"
import { INPUT_FRAME_CONTEXT_KEY, useInputFrameDesign } from "./inputFrameContext"
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

const design = useInputFrameDesign(() => props)

provide(INPUT_FRAME_CONTEXT_KEY, {
  variant: design.variant,
  size: design.size,
  error: design.error,
  readonly: design.readonly,
  disabled: design.disabled,
})

const rootClass = computed(() =>
  cn(
    inputFrameVariants({
      variant: design.variant.value,
      size: design.size.value,
      error: design.error.value,
      readonly: design.readonly.value,
      disabled: design.disabled.value,
    }),
    props.class,
  ),
)
</script>

<template>
  <div
    :class="rootClass"
    :data-disabled="design.disabled ? '' : undefined"
  >
    <slot />
  </div>
</template>
