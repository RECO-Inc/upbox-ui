<script setup lang="ts">
import { computed, type HTMLAttributes } from "vue"
import { ChevronLeft, ChevronRight } from "lucide-vue-next"
import { IconButton } from "../icon-button"
import {
  type InputFrameDesignProps,
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "../input-frame"
import { cn } from "../../lib/utils"
import type { DateMoveModel } from "./dateMoveUtils"
import { shiftDateMoveModel } from "./dateMoveUtils"

/**
 * # 이전/다음 달로 `modelValue` 를 월 단위 이동한다.
 * - DatePicker 혹은 DatePeriodPicker 를 품는다. 그 데이터를 이동시킴.
 */
const props = defineProps<
  {
    modelValue?: DateMoveModel
    class?: HTMLAttributes["class"]
  } & InputFrameDesignProps
>()
const emit = defineEmits<{
  "update:modelValue": [value: DateMoveModel]
}>()

const design = useInputFrameInjectProvide(() => pickInputFrameDesign(props))

const isFrameDisabled = design.disabled

const iconButtonSize = computed((): "xsmall" | "small" | "regular" | "large" => {
  if (design.size.value === "small")
    return "small"
  if (design.size.value === "large")
    return "large"
  return "regular"
})

const rootGapClass = computed(() => {
  if (design.size.value === "small")
    return "gap-[4px]"
  if (design.size.value === "large")
    return "gap-[10px]"
  return "gap-[8px]"
})

function go(delta: number) {
  if (design.disabled.value)
    return
  const next = shiftDateMoveModel(props.modelValue, delta)
  emit("update:modelValue", next)
}
</script>

<template>
  <div
    :class="cn('flex min-w-0 items-center', rootGapClass, props.class)"
  >
    <IconButton
      variant="tertiary"
      :size="iconButtonSize"
      :disabled="isFrameDisabled"
      aria-label="이전 달"
      @click="go(-1)"
    >
      <ChevronLeft />
    </IconButton>
    <div class="min-w-0 flex-1">
      <slot
        :size="design.size"
      />
    </div>
    <IconButton
      variant="tertiary"
      :size="iconButtonSize"
      :disabled="isFrameDisabled"
      aria-label="다음 달"
      @click="go(1)"
    >
      <ChevronRight />
    </IconButton>
  </div>
</template>
