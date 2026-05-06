<script setup lang="ts">
/**
 * 데스크톱 `DatePeriodPicker` 의 모바일 버전.
 * - 입력 표시는 `DatePeriodInput` 그대로 재사용
 * - 캘린더 띄우기는 `Popover + PeriodCalendar` → `Drawer + MobileDateCalendar`
 *   (모바일은 단일 일자 캘린더 한 장으로 시작·종료 탭을 전환해 고른다)
 */
import type { HTMLAttributes } from "vue"
import type { CalendarRootProps, AcceptableValue } from "reka-ui"
import { computed, inject, ref, shallowRef, watch } from "vue"
import type { DateValue } from "@internationalized/date"
import { CalendarDate } from "@internationalized/date"
import { RotateCcw } from "lucide-vue-next"
import { useI18n } from "vue-i18n"
import { Drawer, DrawerContent } from "../drawer"
import { MobileDateCalendar } from "../calendar"
import { Button } from "../button"
import { ToggleGroup, ToggleGroupItem } from "../toggle-group"
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

type EditingField = "start" | "end"

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
const draftStart = shallowRef<CalendarDate | null>(null)
const draftEnd = shallowRef<CalendarDate | null>(null)
const editingField = ref<EditingField>("start")

watch(open, (isOpen) => {
  if (isOpen) {
    draftStart.value = model.value?.start ?? null
    draftEnd.value = model.value?.end ?? null
    editingField.value = model.value?.start ? "end" : "start"
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

const activeDraft = computed(() =>
  editingField.value === "start" ? draftStart.value : draftEnd.value,
)

function setActiveDraft(v: CalendarDate | null) {
  if (editingField.value === "start") draftStart.value = v
  else draftEnd.value = v
}

function onCalendarUpdate(v: CalendarRootProps["modelValue"]) {
  if (Array.isArray(v) || v === undefined || v === null) {
    setActiveDraft(null)
    return
  }
  const dv = v as DateValue
  setActiveDraft(new CalendarDate(dv.year, dv.month, dv.day))
}

function onFieldChange(payload: AcceptableValue | AcceptableValue[]) {
  if (Array.isArray(payload) || typeof payload !== "string")
    return
  if (payload === "start" || payload === "end")
    editingField.value = payload
}

function onReset() {
  draftStart.value = null
  draftEnd.value = null
}

const { t } = useI18n()
const saveDisabled = computed(() => !draftStart.value || !draftEnd.value)

function onSave() {
  if (saveDisabled.value)
    return
  model.value = { start: draftStart.value, end: draftEnd.value }
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
      <div class="mx-auto w-[360px] max-w-full rounded-t-[16px] bg-grey-10 px-[16px] py-[16px] flex flex-col gap-y-[16px]">
        <ToggleGroup
          type="single"
          :model-value="editingField"
          class="w-full gap-0 rounded-[6px] bg-grey-20 p-[2px]"
          @update:model-value="onFieldChange"
        >
          <ToggleGroupItem
            value="start"
            class="h-[32px] flex-1 min-w-0 rounded-[4px] text-size-14 font-bold text-grey-60 hover:bg-transparent hover:text-grey-80 data-[state=on]:bg-grey-10 data-[state=on]:text-grey-90 data-[state=on]:shadow-small"
          >
            시작일
          </ToggleGroupItem>
          <ToggleGroupItem
            value="end"
            class="h-[32px] flex-1 min-w-0 rounded-[4px] text-size-14 font-bold text-grey-60 hover:bg-transparent hover:text-grey-80 data-[state=on]:bg-grey-10 data-[state=on]:text-grey-90 data-[state=on]:shadow-small"
          >
            종료일
          </ToggleGroupItem>
        </ToggleGroup>

        <MobileDateCalendar
          :model-value="activeDraft as unknown as CalendarRootProps['modelValue'] ?? undefined"
          :show-footer="false"
          class="!w-full !p-0"
          @update:model-value="onCalendarUpdate"
        />

        <div class="flex items-stretch gap-[8px] w-full">
          <Button
            variant="tertiary"
            theme="filled"
            size="xlarge"
            class="flex-1"
            @click="onReset"
          >
            <RotateCcw class="w-[16px] h-[16px] mr-[4px]" />
            {{ t('word.reset') }}
          </Button>
          <Button
            variant="primary"
            theme="filled"
            size="xlarge"
            class="flex-1"
            :disabled="saveDisabled"
            @click="onSave"
          >
            {{ t('word.save') }}
          </Button>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>
