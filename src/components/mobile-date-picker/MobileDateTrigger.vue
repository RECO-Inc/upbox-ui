<script setup lang="ts">
/**
 * 데스크톱 `DateTrigger` 의 모바일 버전.
 * `PopoverTrigger` 대신 `DrawerTrigger` 로 캘린더 드로어를 연다. 그 외는 동일.
 */
import type { HTMLAttributes } from "vue"
import { computed, inject } from "vue"
import { Calendar as CalendarGlyph } from "lucide-vue-next"
import { DrawerTrigger } from "vaul-vue"
import { cn } from "../../lib/utils"
import {
  InputFrame,
  InputIcon,
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "../input-frame"
import { DATE_PICKER_CTX_KEY } from "../date-picker/datePickerContext"

const props = withDefaults(defineProps<{
  class?: HTMLAttributes["class"]
}>(), {
  class: undefined,
})

const design = useInputFrameInjectProvide(() => pickInputFrameDesign({}))
const datePicker = inject(DATE_PICKER_CTX_KEY, null)

const isTriggerDisabled = computed(
  () => design.disabled.value || design.readonly.value,
)
const frameError = computed(
  () => design.error.value || (datePicker?.draftError.value ?? false),
)
</script>

<template>
  <InputFrame
    :error="frameError"
    :class="cn('w-full min-w-0', props.class)"
  >
    <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
      <slot />
      <DrawerTrigger
        v-if="!design.readonly.value"
        as-child
        :disabled="isTriggerDisabled"
      >
        <button
          type="button"
          :disabled="isTriggerDisabled"
          class="shrink-0 text-grey-60"
          aria-label="달력 열기"
        >
          <InputIcon class="text-grey-60">
            <CalendarGlyph />
          </InputIcon>
        </button>
      </DrawerTrigger>
    </div>
  </InputFrame>
</template>
