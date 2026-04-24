<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "../../lib/utils"
import {
  type InputFrameDesignProps,
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "./inputFrameContext"
import { inputFrameVariants } from "./inputFrameVariants"

/**
 * design 키는 미지정이면 `undefined` 로 둬서 inject 병합 시 상위를 따른다.
 * (optional boolean 을 넘기지 않았을 때 런타임이 `false` 로 잡혀 `??` 가 상위를 덮는 것을 막음)
 */
const props = withDefaults(
  defineProps<
    InputFrameDesignProps & {
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    variant: undefined,
    size: undefined,
    error: undefined,
    readonly: undefined,
    disabled: undefined,
  },
)

const design = useInputFrameInjectProvide(() => pickInputFrameDesign(props))
const isFrameDisabled = design.disabled

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
    :data-disabled="isFrameDisabled ? '' : undefined"
  >
    <slot />
  </div>
</template>
