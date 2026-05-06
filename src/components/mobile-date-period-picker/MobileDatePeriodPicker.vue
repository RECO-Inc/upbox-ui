<script setup lang="ts">
/**
 * 데스크톱 `DatePeriodPicker` 의 모바일 버전.
 * - 입력 표시는 `DatePeriodInput` 그대로 재사용
 * - 캘린더 띄우기는 `Popover + PeriodCalendar` → `Drawer + MobilePeriodCalendar`
 */
import type { HTMLAttributes } from "vue"
import type { DateRange } from "reka-ui"
import type { DateValue } from "@internationalized/date"
import { CalendarDate } from "@internationalized/date"
import { computed, inject, ref, shallowRef, watch } from "vue"
import { useI18n } from "vue-i18n"
import { Drawer, DrawerContent } from "../drawer"
import { MobilePeriodCalendar } from "../calendar"
import { Button } from "../button"
import {
  pickInputFrameDesign,
  useInputFrameInjectProvide,
  type InputFrameDesignProps,
} from "../input-frame"
import MobileDatePeriodTrigger from "./MobileDatePeriodTrigger.vue"
import DatePeriodInput from "../date-period-picker/DatePeriodInput.vue"
import { DATE_MOVE_MODEL_KEY } from "../date-move/dateMoveContext"
import type { DatePeriodValue } from "../date-period-picker/datePeriodTypes"
import { isDatePeriodValue } from "../date-period-picker/datePeriodTypes"

const props = withDefaults(
  defineProps<
    InputFrameDesignProps & {
      modelValue?: DatePeriodValue | null
      startPlaceholder?: string
      endPlaceholder?: string
      class?: HTMLAttributes["class"]
    }
  >(),
  {
    startPlaceholder: "YYYY-MM-DD",
    endPlaceholder: "YYYY-MM-DD",
    disabled: undefined,
    readonly: undefined,
    variant: undefined,
    size: undefined,
    error: undefined,
  },
)

const emits = defineEmits<{
  "update:modelValue": [value: DatePeriodValue | null | undefined]
}>()

const dateMoveCtx = inject(DATE_MOVE_MODEL_KEY, null)
const { t } = useI18n()

const model = computed({
  get(): DatePeriodValue | null | undefined {
    if (props.modelValue !== undefined)
      return props.modelValue
    const v = dateMoveCtx?.value
    if (v === undefined || !isDatePeriodValue(v))
      return null
    return v
  },
  set(v: DatePeriodValue | null | undefined) {
    emits("update:modelValue", v)
    if (dateMoveCtx)
      dateMoveCtx.value = v ?? null
  },
})

const open = ref(false)

/** 드로어 안 작업용 — 저장 누르기 전에는 외부 model 에 반영하지 않는다 */
const draft = shallowRef<DateRange>({ start: undefined, end: undefined })

function toCalendarDate(v: DateValue | undefined | null): CalendarDate | null {
  if (!v || typeof v !== "object" || !("year" in v) || !("month" in v) || !("day" in v))
    return null
  return new CalendarDate(v.year, v.month, v.day)
}

watch(open, (isOpen) => {
  if (isOpen) {
    draft.value = {
      start: (model.value?.start ?? undefined) as DateValue | undefined,
      end: (model.value?.end ?? undefined) as DateValue | undefined,
    }
  }
})

const design = useInputFrameInjectProvide(() => pickInputFrameDesign(props))
const isPeriodLocked = computed(() => !!design.readonly.value || !!design.disabled.value)

watch(
  isPeriodLocked,
  (locked) => {
    if (locked)
      open.value = false
  },
  { immediate: true },
)

const saveDisabled = computed(
  () => !draft.value.start || !draft.value.end,
)

function onCalendarUpdate(v: DateRange) {
  draft.value = v
}

function onReset() {
  draft.value = { start: undefined, end: undefined }
}

function onSave() {
  const start = toCalendarDate(draft.value.start as DateValue | undefined)
  const end = toCalendarDate(draft.value.end as DateValue | undefined)
  if (!start || !end)
    return
  model.value = { start, end }
  open.value = false
}
</script>

<template>
  <Drawer v-model:open="open">
    <MobileDatePeriodTrigger
      v-model="model"
      :start-placeholder="props.startPlaceholder"
      :end-placeholder="props.endPlaceholder"
      :class="props.class"
    >
      <slot>
        <DatePeriodInput />
      </slot>
    </MobileDatePeriodTrigger>
    <DrawerContent class="!border-0 !bg-transparent !p-0">
      <MobilePeriodCalendar
        :model-value="draft"
        class="mx-auto"
        @update:model-value="onCalendarUpdate"
        @reset="onReset"
      >
        <template #done>
          <Button
            variant="primary"
            theme="filled"
            size="xlarge"
            class="flex-1"
            :disabled="saveDisabled"
            @focus.prevent
            @focusout.prevent.stop
            @mousedown.prevent
            @click="onSave"
          >
            {{ t('word.save') }}
          </Button>
        </template>
      </MobilePeriodCalendar>
    </DrawerContent>
  </Drawer>
</template>
