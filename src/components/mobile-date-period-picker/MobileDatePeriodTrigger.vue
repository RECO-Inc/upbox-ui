<script setup lang="ts">
/**
 * 데스크톱 `DatePeriodTrigger` 의 모바일 버전.
 * `PopoverTrigger` 대신 `DrawerTrigger` 로 캘린더 드로어를 연다.
 */
import type { HTMLAttributes } from "vue"
import { computed, ref } from "vue"
import { Calendar as CalendarGlyph } from "lucide-vue-next"
import { DrawerTrigger } from "vaul-vue"
import { cn } from "../../lib/utils"
import {
  InputFrame,
  InputIcon,
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "../input-frame"
import type { DatePeriodValue } from "../date-period-picker/datePeriodTypes"
import DatePeriodInput from "../date-period-picker/DatePeriodInput.vue"

const props = withDefaults(
  defineProps<{
    modelValue?: DatePeriodValue | null
    startPlaceholder?: string
    endPlaceholder?: string
    class?: HTMLAttributes["class"]
    /** 타이핑 중 유효 날짜 완성 시 즉시 커밋 (DateInput.liveCommit) */
    liveCommit?: boolean
  }>(),
  { modelValue: null, liveCommit: false },
)

const emit = defineEmits<{
  "update:modelValue": [value: DatePeriodValue | null]
  "update:draftError": [value: boolean]
}>()

const design = useInputFrameInjectProvide(() => pickInputFrameDesign({}))

const draftErrorFromInput = ref(false)
const isReadonly = computed(() => design.readonly.value)
const isTriggerDisabled = computed(
  () => design.disabled.value || design.readonly.value,
)
const frameError = computed(
  () => design.error.value || draftErrorFromInput.value,
)

function onUpdateDraftError(v: boolean) {
  draftErrorFromInput.value = v
  emit("update:draftError", v)
}
</script>

<template>
  <InputFrame
    :error="frameError"
    :class="cn('w-full min-w-0', props.class)"
  >
    <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
      <slot>
        <DatePeriodInput
          :model-value="modelValue"
          :start-placeholder="startPlaceholder"
          :end-placeholder="endPlaceholder"
          :live-commit="props.liveCommit"
          @update:model-value="(v) => emit('update:modelValue', v)"
          @update:draft-error="onUpdateDraftError"
        />
      </slot>
      <DrawerTrigger
        v-if="!isReadonly"
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
      </DrawerTrigger>
    </div>
  </InputFrame>
</template>
