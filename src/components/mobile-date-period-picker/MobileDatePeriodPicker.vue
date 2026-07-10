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
import { Drawer, DrawerContent, DrawerDescription, DrawerTitle } from "../drawer"
import { MobilePeriodCalendar } from "../calendar"
import { Button } from "../button"
import { cn } from "../../lib/utils"
import {
  pickInputFrameDesign,
  useInputFrameInjectProvide,
  type InputFrameDesignProps,
} from "../input-frame"
import MobileDatePeriodTrigger from "./MobileDatePeriodTrigger.vue"
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
      /** 선택 가능한 최소 날짜(포함). 이전 날짜 셀은 비활성. */
      minValue?: DateValue | null
      /** 선택 가능한 최대 날짜(포함). 이후 날짜 셀은 비활성.(예: 오늘 → 미래 차단) */
      maxValue?: DateValue | null
      /**
       * 최대 조회기간(일). 설정 시 시작일을 고른 뒤 그로부터 ±maxRangeDays 를 벗어난 날짜 셀을 비활성한다.
       * 시작일 확정 전에는 제약이 없다.
       */
      maxRangeDays?: number
      /** 타이핑 중 유효 날짜 완성 시 즉시 커밋 (DateInput.liveCommit) */
      liveCommit?: boolean
      /** 캘린더 드로어 패널 클래스(폭 제한 등). 데스크톱 `DatePeriodPicker.popoverContentClass` 대응 */
      drawerContentClass?: HTMLAttributes["class"]
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
    minValue: undefined,
    maxValue: undefined,
    maxRangeDays: undefined,
    liveCommit: false,
    drawerContentClass: undefined,
  },
)

const emits = defineEmits<{
  "update:modelValue": [value: DatePeriodValue | null | undefined]
  "update:draftError": [value: boolean]
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

/**
 * 셀 비활성 판정. reka `RangeCalendarCellTrigger` 가 이 함수를 직접 호출하므로
 * 정적 경계(minValue/maxValue)와 최대 조회기간(maxRangeDays)을 모두 여기서 다룬다.
 * - minValue/maxValue: 범위 밖 날짜 비활성(예: 2023-01 이전·오늘 이후).
 * - maxRangeDays: 시작일을 고른 뒤(종료일 선택 단계) 시작일로부터 ±maxRangeDays 초과 비활성.
 */
function isDateDisabled(date: DateValue): boolean {
  if (props.minValue && date.compare(props.minValue) < 0)
    return true
  if (props.maxValue && date.compare(props.maxValue) > 0)
    return true
  if (props.maxRangeDays != null) {
    const start = draft.value.start as DateValue | undefined
    const end = draft.value.end as DateValue | undefined
    if (start && !end) {
      const anchor = start as CalendarDate
      const upper = anchor.add({ days: props.maxRangeDays })
      const lower = anchor.subtract({ days: props.maxRangeDays })
      if (date.compare(upper) > 0 || date.compare(lower) < 0)
        return true
    }
  }
  return false
}

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
      :live-commit="props.liveCommit"
      :class="props.class"
      @update:draft-error="(v) => emits('update:draftError', v)"
    >
      <!-- 슬롯 미제공 시 MobileDatePeriodTrigger 의 배선된 DatePeriodInput fallback 이 뜨도록
           여기서 propless DatePeriodInput 을 넣지 않는다 (넣으면 model 이 안 붙어 Input 이 빈다) -->
      <slot />
    </MobileDatePeriodTrigger>
    <!-- DrawerContent 기본값(border / bg-grey-10)을 덮어 캘린더 패널만 보이게 한다.
         tailwind-merge 가 같은 그룹으로 인식해야 기본값이 제거되므로 leading-bang 을 쓰지 않는다. -->
    <DrawerContent :class="cn('border-0 bg-transparent p-0', props.drawerContentClass)">
      <!-- reka DialogContent 는 Title/Description 을 요구한다(스크린리더). 시각적으론 숨긴다. -->
      <DrawerTitle class="sr-only">
        기간 선택
      </DrawerTitle>
      <DrawerDescription class="sr-only">
        달력에서 조회 시작일과 종료일을 선택하세요.
      </DrawerDescription>
      <MobilePeriodCalendar
        :model-value="draft"
        :min-value="props.minValue ?? undefined"
        :max-value="props.maxValue ?? undefined"
        :is-date-disabled="isDateDisabled"
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
