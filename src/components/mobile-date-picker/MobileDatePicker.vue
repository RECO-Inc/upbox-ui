<script setup lang="ts">
/**
 * 데스크톱 `DatePicker` 의 모바일 버전.
 * - 입력 표시는 `DateInput` 그대로 재사용 (타이핑 가능)
 * - 캘린더 띄우기는 `Popover + DateCalendar` → `Drawer + MobileDateCalendar`
 *
 * 컨텍스트 키(`DATE_PICKER_CTX_KEY`)는 데스크톱과 공유하여 `DateInput` 이
 * 그대로 inject 받아 동작한다.
 */
import type { HTMLAttributes } from "vue"
import type { CalendarRootProps } from "reka-ui"
import { computed, inject, provide, ref, shallowRef, watch } from "vue"
import type { DateValue } from "@internationalized/date"
import { CalendarDate } from "@internationalized/date"
import { Drawer, DrawerContent } from "../drawer"
import { MobileDateCalendar } from "../calendar"
import {
  pickInputFrameDesign,
  useInputFrameInjectProvide,
  type InputFrameDesignProps,
} from "../input-frame"
import MobileDateTrigger from "./MobileDateTrigger.vue"
import DateInput from "../date-picker/DateInput.vue"
import { DATE_MOVE_MODEL_KEY } from "../date-move/dateMoveContext"
import { isDatePeriodValue } from "../date-period-picker/datePeriodTypes"
import { DATE_PICKER_CTX_KEY } from "../date-picker/datePickerContext"

const localModel = defineModel<CalendarDate | null>()
const props = withDefaults(
  defineProps<
    InputFrameDesignProps & {
      class?: HTMLAttributes["class"]
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

/** 드로어 안 캘린더의 작업용 값. 저장 누르기 전에는 외부 model 에 반영하지 않는다. */
const calendarDraft = shallowRef<CalendarDate | null>(null)

watch(open, (isOpen) => {
  if (isOpen)
    calendarDraft.value = model.value ?? null
})

const isCalendarLocked = computed(() => design.readonly.value || design.disabled.value)

watch(
  isCalendarLocked,
  (locked) => {
    if (locked) open.value = false
  },
  { immediate: true },
)

function onCalendarDraftUpdate(v: CalendarRootProps["modelValue"]) {
  if (Array.isArray(v) || v === undefined || v === null) {
    calendarDraft.value = null
    return
  }
  const dv = v as DateValue
  calendarDraft.value = new CalendarDate(dv.year, dv.month, dv.day)
}

function onCalendarChange(d: Date | null) {
  if (!d) {
    model.value = null
    open.value = false
    return
  }
  model.value = new CalendarDate(d.getFullYear(), d.getMonth() + 1, d.getDate())
  open.value = false
}

function onCalendarReset() {
  calendarDraft.value = null
}
</script>

<template>
  <Drawer v-model:open="open">
    <MobileDateTrigger :class="props.class">
      <slot>
        <DateInput />
      </slot>
    </MobileDateTrigger>
    <DrawerContent class="!border-0 !bg-transparent !p-0">
      <MobileDateCalendar
        :model-value="calendarDraft as unknown as CalendarRootProps['modelValue'] ?? undefined"
        class="mx-auto"
        @update:model-value="onCalendarDraftUpdate"
        @change="onCalendarChange"
        @reset="onCalendarReset"
      />
    </DrawerContent>
  </Drawer>
</template>
