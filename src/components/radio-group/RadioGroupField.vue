<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { RadioGroupRoot } from "reka-ui"
import { cn } from "../../lib/utils"
import RadioGroupItem from "./RadioGroupItem.vue"
import type { SelectOption } from "../../lib/options"

/** reka RadioGroup 은 string value 기반 → 내부에서 String 매핑, emit 시 원본 타입 복원 */
type RadioValue = string | number

const props = withDefaults(defineProps<{
  modelValue?: RadioValue | null
  options: SelectOption<RadioValue>[]
  /** 배치 방향 (default: vertical) */
  orientation?: "horizontal" | "vertical"
  size?: "small" | "regular" | "large"
  /** 미지정 시 RadioGroupItem 이 Form 에러 컨텍스트로 fallback */
  error?: boolean
  disabled?: boolean
  readOnly?: boolean
  name?: string
  class?: HTMLAttributes["class"]
}>(), {
  orientation: "vertical",
  size: "regular",
  disabled: false,
  readOnly: false,
})

const emit = defineEmits<{ "update:modelValue": [value: RadioValue] }>()

const model = computed<string | undefined>({
  get: () => (props.modelValue == null ? undefined : String(props.modelValue)),
  set: (raw) => {
    // String 으로 비교해 원본 value(number 등) 타입을 보존해 emit
    const matched = props.options.find((option) => String(option.value) === raw)
    emit("update:modelValue", matched ? matched.value : (raw as RadioValue))
  },
})

const layoutClass = computed(() =>
  props.orientation === "horizontal"
    ? "flex flex-row flex-wrap items-center gap-x-[16px] gap-y-[8px]"
    : "grid gap-[8px]",
)

const labelTextClass = computed(() =>
  props.size === "small"
    ? "text-size-13"
    : props.size === "large"
      ? "text-size-16"
      : "text-size-14",
)
</script>

<template>
  <RadioGroupRoot
    v-model="model"
    :name="name"
    :disabled="disabled"
    :class="cn(layoutClass, props.class)"
  >
    <!-- label 로 감싸면 네이티브 동작상 첫 labelable 자손(라디오 버튼)이 활성화돼 텍스트 클릭도 선택됨 -->
    <label
      v-for="option in options"
      :key="String(option.value)"
      class="inline-flex items-center gap-[8px]"
      :class="(disabled || option.disabled)
        ? 'cursor-not-allowed opacity-70'
        : readOnly ? 'cursor-default' : 'cursor-pointer'"
    >
      <RadioGroupItem
        :value="String(option.value)"
        :size="size"
        :error="error"
        :read-only="readOnly"
        :disabled="disabled || option.disabled"
      />
      <span :class="[labelTextClass, 'text-grey-90 select-none leading-none']">
        {{ option.label }}
      </span>
    </label>
  </RadioGroupRoot>
</template>
