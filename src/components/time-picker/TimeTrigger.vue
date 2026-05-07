<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject } from "vue"
import { Clock } from "lucide-vue-next"
import { PopoverTrigger } from "reka-ui"
import { cn } from "../../lib/utils"
import {
  InputFrame,
  InputIcon,
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "../input-frame"
import { TIME_PICKER_CTX_KEY } from "./timePickerContext"

const props = withDefaults(defineProps<{
  class?: HTMLAttributes["class"]
}>(), {
  class: undefined,
})

const design = useInputFrameInjectProvide(() => pickInputFrameDesign({}))
const timePicker = inject(TIME_PICKER_CTX_KEY, null)

const isTriggerDisabled = computed(
  () => design.disabled.value || design.readonly.value,
)
const frameError = computed(
  () => design.error.value || (timePicker?.draftError.value ?? false),
)
</script>

<template>
  <InputFrame
    :error="frameError"
    :class="cn('w-full min-w-0', props.class)"
  >
    <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
      <slot />
      <PopoverTrigger
        v-if="!design.readonly.value"
        as-child
        :disabled="isTriggerDisabled"
      >
        <button
          type="button"
          :disabled="isTriggerDisabled"
          class="shrink-0 text-grey-60"
          aria-label="시간 선택 열기"
        >
          <InputIcon class="text-grey-60">
            <Clock />
          </InputIcon>
        </button>
      </PopoverTrigger>
    </div>
  </InputFrame>
</template>
