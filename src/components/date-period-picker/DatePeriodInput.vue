<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import { cn } from "../../lib/utils"
import type { DatePeriodValue } from "./datePeriodTypes"
import DateInput from "../date-picker/DateInput.vue"

const props = withDefaults(
  defineProps<{
    modelValue?: DatePeriodValue | null
    startPlaceholder?: string
    endPlaceholder?: string
    class?: HTMLAttributes["class"]
  }>(),
  {
    modelValue: null,
    startPlaceholder: "YYYY-MM-DD",
    endPlaceholder: "YYYY-MM-DD",
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

function onStartUpdate(v: CalendarDate | null | undefined) {
  emit("update:modelValue", { start: v ?? null, end: value.value.end })
}

function onEndUpdate(v: CalendarDate | null | undefined) {
  emit("update:modelValue", { start: value.value.start, end: v ?? null })
}
</script>

<template>
  <div
    :class="cn(
      'flex min-w-0 flex-1 flex-nowrap items-center gap-[4px] overflow-x-auto h-full',
      props.class,
    )"
  >
    <DateInput
      :model-value="value.start"
      :placeholder="startPlaceholder"
      class="min-w-[120px] flex-1 basis-0 shrink-0"
      @update:model-value="onStartUpdate"
      @update:draft-error="onStartDraftError"
    />
    <span
      class="shrink-0 text-inherit opacity-60 select-none"
      aria-hidden="true"
    >→</span>
    <DateInput
      :model-value="value.end"
      :placeholder="endPlaceholder"
      class="min-w-[120px] flex-1 basis-0 shrink-0"
      @update:model-value="onEndUpdate"
      @update:draft-error="onEndDraftError"
    />
  </div>
</template>
