<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { CheckboxGroupRoot } from "reka-ui"
import { cn } from "../../lib/utils"
import Checkbox from "./Checkbox.vue"
import type { SelectOption } from "../../lib/options"

/** reka CheckboxGroupRoot 는 AcceptableValue 제네릭 → number 도 String 매핑 없이 그대로 보존된다 */
type CheckboxValue = string | number

const props = withDefaults(defineProps<{
  modelValue?: CheckboxValue[] | null
  options: SelectOption<CheckboxValue>[]
  /** 배치 방향 (default: vertical) */
  orientation?: "horizontal" | "vertical"
  size?: "small" | "regular" | "large"
  /** 미지정 시 Checkbox 가 Form 에러 컨텍스트로 fallback */
  error?: boolean
  disabled?: boolean
  readOnly?: boolean
  class?: HTMLAttributes["class"]
}>(), {
  orientation: "vertical",
  size: "regular",
  disabled: false,
  readOnly: false,
})

const emit = defineEmits<{ "update:modelValue": [value: CheckboxValue[]] }>()

/**
 * CheckboxRoot 는 그룹 modelValue 가 nullish 면 그룹을 무시하고 standalone 으로 동작한다.
 * null/undefined 를 빈 배열로 정규화해 항상 그룹 경로를 타게 한다.
 */
const model = computed<CheckboxValue[]>({
  get: () => props.modelValue ?? [],
  set: value => emit("update:modelValue", value),
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
  <CheckboxGroupRoot
    v-model="model"
    :orientation="orientation"
    :disabled="disabled"
    :class="cn(layoutClass, props.class)"
  >
    <!-- label 로 감싸면 네이티브 동작상 첫 labelable 자손(체크박스)이 활성화돼 텍스트 클릭도 선택됨 -->
    <label
      v-for="option in options"
      :key="String(option.value)"
      class="inline-flex items-center gap-[8px]"
      :class="(disabled || option.disabled)
        ? 'cursor-not-allowed opacity-70'
        : readOnly ? 'cursor-default' : 'cursor-pointer'"
    >
      <Checkbox
        :value="option.value"
        :size="size"
        :error="error"
        :read-only="readOnly"
        :disabled="disabled || option.disabled"
      />
      <span :class="[labelTextClass, 'text-grey-90 select-none leading-none']">
        {{ option.label }}
      </span>
    </label>
  </CheckboxGroupRoot>
</template>
