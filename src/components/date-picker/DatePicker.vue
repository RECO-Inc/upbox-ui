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

/**
 * `InputFrame` 병합은 `getLocal().x ?? parent` 이다. optional boolean 이 런타임 `false` 면
 * 상위 `DateMove` 의 `disabled` 등을 쓸 수 없다. 미지정은 `DateInput` 과 같이 `undefined` 로 둔다.
 */
const modelValue = defineModel<CalendarDate | null>();
const props = withDefaults(
  defineProps<
    InputFrameDesignProps & {
      modelValue?: CalendarDate | null
      placeholder?: string
      class?: HTMLAttributes["class"]
      popoverContentClass?: HTMLAttributes["class"]
    }
  >(),
  {
    placeholder: "날짜 선택",
    variant: undefined,
    size: undefined,
    error: undefined,
    readonly: undefined,
    disabled: undefined,
  },
)
const design = useInputFrameInjectProvide(() => pickInputFrameDesign(props))
const emits = defineEmits<{
  (e: "update:modelValue", value: CalendarDate | null | undefined): void
}>()

const open = ref(false)

const isCalendarLocked = computed(() => !!props.readonly || !!props.disabled)

watch(
  isCalendarLocked,
  (locked) => {
    if (locked)
      open.value = false
  },
  { immediate: true },
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
