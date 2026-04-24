<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, ref, watch } from "vue"
import type { CalendarDate, DateValue } from "@internationalized/date"
import { Popover, PopoverContent } from "../popover"
import { Calendar } from "../calendar"
import { cn } from "../../lib/utils"
import {
  pickInputFrameDesign,
  useInputFrameInjectProvide,
  type InputFrameDesignProps,
} from "../input-frame"
import DateTrigger from "./DateTrigger.vue"

const props = withDefaults(
  defineProps<
    InputFrameDesignProps & {
      modelValue?: CalendarDate | null
      placeholder?: string
      class?: HTMLAttributes["class"]
      popoverContentClass?: HTMLAttributes["class"]
    }
  >(),
  { placeholder: "날짜 선택" },
)

const emits = defineEmits<{
  (e: "update:modelValue", value: CalendarDate | null | undefined): void
}>()

const open = ref(false)
const modelValue = computed<CalendarDate | null | undefined>({
  get: () => props.modelValue,
  set: (v) => {
    emits("update:modelValue", v)
  },
})

watch(
  () => props.readonly,
  (ro) => {
    if (ro)
      open.value = false
  },
)

watch(
  () => props.disabled,
  (d) => {
    if (d)
      open.value = false
  },
)

function onCalendarUpdate(v: DateValue | DateValue[] | undefined) {
  if (v === undefined) {
    modelValue.value = null
    open.value = false
    return
  }
  if (Array.isArray(v))
    return
  modelValue.value = v as CalendarDate
  open.value = false
}

useInputFrameInjectProvide(() => pickInputFrameDesign(props))
</script>

<template>
  <Popover v-model:open="open">
    <DateTrigger
      v-model="modelValue"
      :class="props.class"
    />
    <PopoverContent
      align="end"
      :class="
        cn(
          '!p-0 w-[min-content] !border-1 !border-grey-40 bg-transparent p-0 shadow-none',
          props.popoverContentClass,
        )
      "
    >
      <Calendar
        :model-value="modelValue ?? undefined"
        @update:model-value="onCalendarUpdate"
      />
    </PopoverContent>
  </Popover>
</template>
