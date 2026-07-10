<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject } from "vue"
import { useVModel } from "@vueuse/core"
import { NumberFieldRoot } from "reka-ui"
import { cn } from "../../lib/utils"
import { FIELD_CONTROL_INJECTION_KEY } from "../form/injectionKeys"
import { InputFrame, useInputFrameInjectProvide } from "../input-frame"
import type { NumberFieldProps } from "."
import NumberFieldDecrement from "./NumberFieldDecrement.vue"
import NumberFieldIncrement from "./NumberFieldIncrement.vue"
import NumberFieldInput from "./NumberFieldInput.vue"

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<NumberFieldProps>(), {
  variant: "center",
  size: "regular",
  disabled: false,
  readonly: false,
})

const emits = defineEmits<{
  "update:modelValue": [value: number]
}>()

const fieldControl = inject(FIELD_CONTROL_INJECTION_KEY, null)

const design = useInputFrameInjectProvide(() => ({
  variant: "default",
  error: props.error,
  size: props.size,
  readonly: props.readonly,
  disabled: props.disabled,
}))

const localVModel = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const modelValue = computed<number | undefined>({
  get: () => {
    if (fieldControl) {
      const v = fieldControl.value.modelValue
      return typeof v === "number" ? v : v == null ? undefined : Number(v)
    }
    return localVModel.value as number | undefined
  },
  set: (v) => {
    if (fieldControl) {
      fieldControl.value["onUpdate:modelValue"]?.(v)
    }
    else {
      localVModel.value = v
    }
  },
})

const handleBlur = () => {
  fieldControl?.value.onBlur?.()
}

const iconSize = computed(() => {
  switch (props.size) {
    case "small": return "20px"
    case "large": return "24px"
    default: return "22px"
  }
})

</script>

<template>
  <NumberFieldRoot
    v-model="modelValue"
    :default-value="defaultValue"
    :min="min"
    :max="max"
    :step="step"
    :format-options="formatOptions"
    :name="name"
    :id="id"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :class="cn('inline-flex w-full', props.class)"
    :style="{ '--nf-icon': iconSize }"
    @blur="handleBlur"
  >
    <InputFrame class="px-0! overflow-hidden">
      <template v-if="variant === 'center'">
        <NumberFieldDecrement :class="['shrink-0 border-r border-grey-40', { 'border-red-80': design.error.value }]" />
        <NumberFieldInput
          v-bind="$attrs"
          :placeholder="placeholder"
          @blur="handleBlur"
        />
        <NumberFieldIncrement :class="['shrink-0 border-l border-grey-40', { 'border-red-80': design.error.value }]" />
      </template>
      <template v-else>
        <NumberFieldInput
          v-bind="$attrs"
          :placeholder="placeholder"
          class="text-left px-[12px]"
          @blur="handleBlur"
        />
        <NumberFieldDecrement :class="['shrink-0 border-l border-grey-40', { 'border-red-80': design.error.value }]" />
        <NumberFieldIncrement :class="['shrink-0 border-l border-grey-40', { 'border-red-80': design.error.value }]" />
      </template>
    </InputFrame>
  </NumberFieldRoot>
</template>
