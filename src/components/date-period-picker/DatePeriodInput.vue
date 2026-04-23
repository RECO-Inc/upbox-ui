<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import { cn } from "../../lib/utils"
import type { InputFrameVariantProps } from "../input-frame"
import type { DatePeriodValue } from "./datePeriodTypes"
import DateInput from "../date-picker/DateInput.vue"

const props = withDefaults(
  defineProps<{
    modelValue?: DatePeriodValue | null
    size?: InputFrameVariantProps["size"]
    readonly?: boolean
    disabled?: boolean
    startPlaceholder?: string
    endPlaceholder?: string
    class?: HTMLAttributes["class"]
  }>(),
  {
    modelValue: null,
    size: "regular",
    readonly: false,
    disabled: false,
    startPlaceholder: "시작일 선택",
    endPlaceholder: "종료일 선택",
  },
)

const emit = defineEmits<{
  "update:modelValue": [value: DatePeriodValue | null]
  "update:draftError": [value: boolean]
}>()

const value = computed(() => props.modelValue ?? { start: null, end: null })

const draftStart = ref(false)
const draftEnd = ref(false)

function emitDraft() {
  emit("update:draftError", draftStart.value || draftEnd.value)
}

function onStartDraftError(v: boolean) {
  draftStart.value = v
  emitDraft()
}

function onEndDraftError(v: boolean) {
  draftEnd.value = v
  emitDraft()
}

function onStartUpdate(v: CalendarDate | null) {
  emit("update:modelValue", { start: v, end: value.value.end })
}

function onEndUpdate(v: CalendarDate | null) {
  emit("update:modelValue", { start: value.value.start, end: v })
}
</script>

<template>
  <div
    :class="cn('flex min-w-0 flex-1 items-center gap-[4px] h-full', props.class)"
  >
    <DateInput
      :model-value="value.start"
      :size="props.size"
      :readonly="props.readonly"
      :disabled="props.disabled"
      :placeholder="startPlaceholder"
      class="min-w-0 flex-1"
      @update:model-value="onStartUpdate"
      @update:draft-error="onStartDraftError"
    />
    <span
      class="shrink-0 text-inherit opacity-60 select-none"
      aria-hidden="true"
    >→</span>
    <DateInput
      :model-value="value.end"
      :size="props.size"
      :readonly="props.readonly"
      :disabled="props.disabled"
      :placeholder="endPlaceholder"
      class="min-w-0 flex-1"
      @update:model-value="onEndUpdate"
      @update:draft-error="onEndDraftError"
    />
  </div>
</template>
