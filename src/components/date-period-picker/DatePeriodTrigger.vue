<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, ref } from "vue"
import { Calendar as CalendarGlyph } from "lucide-vue-next"
import { PopoverTrigger } from "reka-ui"
import { cn } from "../../lib/utils"
import {
  InputFrame,
  InputIcon,
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "../input-frame"
import type { DatePeriodValue } from "./datePeriodTypes"
import DatePeriodInput from "./DatePeriodInput.vue"

const props = withDefaults(
  defineProps<{
    modelValue?: DatePeriodValue | null
    startPlaceholder?: string
    endPlaceholder?: string
    class?: HTMLAttributes["class"]
  }>(),
  { modelValue: null },
)

const emit = defineEmits<{
  "update:modelValue": [value: DatePeriodValue | null]
}>()

const design = useInputFrameInjectProvide(() => pickInputFrameDesign({}))

const draftErrorFromInput = ref(false)
const isReadonly = computed(() => design.readonly.value)
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
      <DatePeriodInput
        :model-value="modelValue"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        @update:model-value="(v) => emit('update:modelValue', v)"
        @update:draft-error="onUpdateDraftError"
      />
      <PopoverTrigger
        v-if="!isReadonly"
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
