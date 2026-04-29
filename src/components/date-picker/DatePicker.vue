<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject, provide, ref, watch } from "vue"
import type { CalendarDate, DateValue } from "@internationalized/date"
import { Popover, PopoverContent } from "../popover"
import { DateCalendar } from "../calendar"
import { cn } from "../../lib/utils"
import {
  pickInputFrameDesign,
  useInputFrameInjectProvide,
  type InputFrameDesignProps,
} from "../input-frame"
import DateTrigger from "./DateTrigger.vue"
import DateInput from "./DateInput.vue"
import { DATE_MOVE_MODEL_KEY } from "../date-move/dateMoveContext"
import { isDatePeriodValue } from "../date-period-picker/datePeriodTypes"
import { DATE_PICKER_CTX_KEY } from "./datePickerContext"

const localModel = defineModel<CalendarDate | null>()
const props = withDefaults(
  defineProps<
    InputFrameDesignProps & {
      class?: HTMLAttributes["class"]
      popoverContentClass?: HTMLAttributes["class"]
    }
  >(),
  {
    variant: undefined,
    size: undefined,
    error: undefined,
    readonly: undefined,
    disabled: undefined,
  },
)

const design = useInputFrameInjectProvide(() => pickInputFrameDesign(props))
const dateMoveCtx = inject(DATE_MOVE_MODEL_KEY, null)

const model = computed({
  get(): CalendarDate | null | undefined {
    if (localModel.value !== undefined) return localModel.value
    const v = dateMoveCtx?.value
    if (v === undefined || isDatePeriodValue(v)) return null
    return v
  },
  set(v: CalendarDate | null | undefined) {
    localModel.value = v
    if (dateMoveCtx) dateMoveCtx.value = v ?? null
  },
})

const draftError = ref(false)

provide(DATE_PICKER_CTX_KEY, { model, draftError })

const open = ref(false)

const isCalendarLocked = computed(() => design.readonly.value || design.disabled.value)

watch(
  isCalendarLocked,
  (locked) => {
    if (locked) open.value = false
  },
  { immediate: true },
)

function onCalendarUpdate(v: DateValue | DateValue[] | undefined) {
  if (v === undefined) {
    model.value = null
    open.value = false
    return
  }
  if (Array.isArray(v)) return
  model.value = v as CalendarDate
  open.value = false
}
</script>

<template>
  <Popover v-model:open="open">
    <DateTrigger :class="props.class">
      <slot>
        <!-- 기본은 DateInput -->
        <DateInput />
      </slot>
    </DateTrigger>
    <PopoverContent
      align="end"
      :class="
        cn(
          '!p-0 w-[min-content] !border-1 !border-grey-40 bg-transparent p-0 shadow-none',
          props.popoverContentClass,
        )
      "
    >
      <DateCalendar
        :model-value="model ?? undefined"
        :show-footer="false"
        :show-quick-presets="false"
        @update:model-value="onCalendarUpdate"
      />
    </PopoverContent>
  </Popover>
</template>
