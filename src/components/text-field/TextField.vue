<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject, provide, ref, useSlots } from "vue"
import { useVModel } from "@vueuse/core"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { X, Eye, EyeOff } from "lucide-vue-next"
import { FIELD_CONTROL_INJECTION_KEY } from "../form/injectionKeys"
import { InputFrame, InputIcon } from "../input-frame"
import { TEXT_FIELD_TRAILING_CONTEXT_KEY } from "./textFieldContext"

defineOptions({ inheritAttrs: false })

const wrapperVariants = cva(
  "relative w-full",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
)

export interface TextFieldProps {
  variant?: "default" | "filled" | "bottomline"
  size?: "small" | "regular" | "large"
  error?: boolean
  modelValue?: string | number
  defaultValue?: string | number
  class?: HTMLAttributes["class"]
  clearable?: boolean
  password?: boolean
  maxLength?: number
  byteMode?: boolean
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  type?: string
}

const props = withDefaults(defineProps<TextFieldProps>(), {
  variant: "default",
  size: "regular",
  error: false,
  disabled: false,
  readonly: false,
  clearable: false,
  password: false,
  byteMode: false,
  type: "text",
})

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
}>()

const slots = useSlots()
const fieldControl = inject(FIELD_CONTROL_INJECTION_KEY, null)
const localVModel = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const modelValue = computed<string | number>({
  get: () => (fieldControl
    ? (fieldControl.value.modelValue as string | number)
    : localVModel.value) ?? "",
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

/**********************
 * # password
 **********************/
const showPassword = ref(false)
const inputType = computed(() => {
  if (props.password) {
    return showPassword.value ? "text" : "password"
  }
  return props.type
})
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

/**********************
 * # Count provide
 **********************/
const maxLengthForContext = computed(() => props.maxLength)
const getByteLength = (str: string): number => {
  return new Blob([str]).size
}
const currentCount = computed(() => {
  const value = String(modelValue.value || "")
  return props.byteMode ? getByteLength(value) : value.length
})
provide(TEXT_FIELD_TRAILING_CONTEXT_KEY, {
  currentCount,
  maxLength: maxLengthForContext,
  byteMode: computed(() => props.byteMode),
})

/**
 * # 지우기 버튼 표시
 */
const showClearButton = computed(() => {
  return props.clearable && modelValue.value && !props.disabled && !props.readonly
})
const handleClear = () => {
  modelValue.value = ""
}

</script>

<template>
  <div :class="wrapperVariants({ disabled: props.disabled })">
    <InputFrame
      :variant="props.variant"
      :size="props.size"
      :error="props.error"
      :readonly="props.readonly"
      :disabled="props.disabled"
      class="relative w-full"
    >
      <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
        <input
          v-bind="$attrs"
          v-model="modelValue"
          :type="inputType"
          :disabled="disabled"
          :readonly="readonly"
          :placeholder="placeholder"
          :maxlength="maxLength"
          :class="cn(
            'min-h-0 h-full min-w-0 flex-1 border-0 bg-transparent',
            'text-inherit outline-none',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-inherit',
            'disabled:cursor-not-allowed',
            props.class,
          )"
          @blur="handleBlur"
        />
        <button
          v-if="showClearButton"
          type="button"
          class="shrink-0 text-inherit transition-opacity enabled:hover:opacity-100"
          @click="handleClear"
        >
          <InputIcon class="text-inherit">
            <X />
          </InputIcon>
        </button>
        <button
          v-if="password"
          type="button"
          class="shrink-0 text-inherit transition-opacity enabled:hover:opacity-100"
          @click="togglePasswordVisibility"
        >
          <InputIcon v-if="!showPassword" class="text-inherit">
            <Eye />
          </InputIcon>
          <InputIcon v-else class="text-inherit">
            <EyeOff />
          </InputIcon>
        </button>
        <slot />
      </div>
    </InputFrame>
  </div>
</template>
