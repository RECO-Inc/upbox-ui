<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, ref } from "vue"
import { Calendar as CalendarGlyph } from "lucide-vue-next"
import { CalendarDate } from "@internationalized/date"
import { PopoverTrigger } from "reka-ui"
import { cn } from "../../lib/utils"
import {
  InputFrame,
  InputIcon,
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "../input-frame"
import DateInput from "./DateInput.vue"

const modelValue = defineModel<CalendarDate | null>();
const props = withDefaults(defineProps<{ 
  class?: HTMLAttributes["class"] 
}>(), { 
  class: undefined 
})
const design = useInputFrameInjectProvide(() => pickInputFrameDesign({}))

const draftErrorFromInput = ref(false)
const isTriggerDisabled = computed(
  () => design.disabled.value || design.readonly.value,
)
const frameError = computed(
  () => design.error.value || draftErrorFromInput.value,
)

function onUpdateDraftError(v: boolean) {
  draftErrorFromInput.value = v
}
</script>

<template>
  <InputFrame
    :error="frameError"
    :class="cn('w-full min-w-0', props.class)"
  >
    <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
      <DateInput
        v-model="modelValue"
        @update:draft-error="onUpdateDraftError"
      />
      <PopoverTrigger
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
      </PopoverTrigger>
    </div>
  </InputFrame>
</template>
