<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, ref } from "vue"
import { Calendar as CalendarGlyph } from "lucide-vue-next"
import { PopoverTrigger } from "reka-ui"
import { cn } from "../../lib/utils"
import {
  InputFrame,
  InputIcon,
  type InputFrameVariantProps,
} from "../input-frame"
import type { DatePeriodValue } from "./datePeriodTypes"
import DatePeriodInput from "./DatePeriodInput.vue"

const props = withDefaults(
  defineProps<{
    modelValue?: DatePeriodValue | null
    variant?: InputFrameVariantProps["variant"]
    size?: InputFrameVariantProps["size"]
    error?: boolean
    readonly?: boolean
    disabled?: boolean
    startPlaceholder?: string
    endPlaceholder?: string
    class?: HTMLAttributes["class"]
  }>(),
  {
    modelValue: null,
    variant: "default",
    size: "regular",
    error: false,
    readonly: false,
    disabled: false,
  },
)

const emit = defineEmits<{
  "update:modelValue": [value: DatePeriodValue | null]
}>()

const draftErrorFromInput = ref(false)

const isTriggerDisabled = computed(() => props.disabled || props.readonly)

const frameError = computed(() => props.error || draftErrorFromInput.value)

function onUpdateDraftError(v: boolean) {
  draftErrorFromInput.value = v
}
</script>

<template>
  <InputFrame
    :variant="props.variant"
    :size="props.size"
    :error="frameError"
    :readonly="props.readonly"
    :disabled="props.disabled"
    :class="cn('w-full min-w-0', props.class)"
  >
    <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
      <DatePeriodInput
        :model-value="modelValue"
        :size="props.size"
        :readonly="props.readonly"
        :disabled="props.disabled"
        :start-placeholder="startPlaceholder"
        :end-placeholder="endPlaceholder"
        @update:model-value="(v) => emit('update:modelValue', v)"
        @update:draft-error="onUpdateDraftError"
      />
      <PopoverTrigger
        v-if="!props.readonly"
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
