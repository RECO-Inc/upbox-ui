<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, inject, provide, ref, useSlots } from 'vue'
import { useVModel } from '@vueuse/core'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { X, Eye, EyeOff } from 'lucide-vue-next'
import { FIELD_CONTROL_INJECTION_KEY } from '../form/injectionKeys'
import { InputFrame } from '../input-frame'
import { INPUT_TRAILING_CONTEXT_KEY } from './inputContext'

defineOptions({ inheritAttrs: false })

const wrapperVariants = cva(
  'relative w-full',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
)

export interface EnhancedInputProps {
  variant?: 'default' | 'filled' | 'bottomline'
  size?: 'small' | 'regular' | 'large'
  error?: boolean
  modelValue?: string | number
  defaultValue?: string | number
  class?: HTMLAttributes['class']
  clearable?: boolean
  password?: boolean
  maxLength?: number
  byteMode?: boolean
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  type?: string
}

const props = withDefaults(defineProps<EnhancedInputProps>(), {
  variant: 'default',
  size: 'regular',
  error: false,
  disabled: false,
  readonly: false,
  clearable: false,
  password: false,
  byteMode: false,
  type: 'text',
})

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const slots = useSlots()
const fieldControl = inject(FIELD_CONTROL_INJECTION_KEY, null)
const localVModel = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const modelValue = computed<string | number>({
  get: () => (fieldControl
    ? (fieldControl.value.modelValue as string | number)
    : localVModel.value) ?? '',
  set: (v) => {
    if (fieldControl) {
      fieldControl.value['onUpdate:modelValue']?.(v)
    } else {
      localVModel.value = v
    }
  },
})

const handleBlur = () => {
  fieldControl?.value.onBlur?.()
}

const showPassword = ref(false)
const inputType = computed(() => {
  if (props.password) {
    return showPassword.value ? 'text' : 'password'
  }
  return props.type
})


/**********************
 * # Count provide
 **********************/
const maxLengthForContext = computed(() => props.maxLength)
const getByteLength = (str: string): number => {
  return new Blob([str]).size
}
const currentCount = computed(() => {
  const value = String(modelValue.value || '')
  return props.byteMode ? getByteLength(value) : value.length
})
provide(INPUT_TRAILING_CONTEXT_KEY, {
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
  modelValue.value = ''
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const hasDefaultSlot = computed(() => Boolean(slots.default))

const hasTrailing = computed(
  () =>
    hasDefaultSlot.value
    || showClearButton.value
    || props.password
)
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
          @blur="handleBlur"
          :class="cn(
            'min-h-0 h-full min-w-0 flex-1 border-0 bg-transparent',
            'text-grey-80 outline-none',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-grey-50',
            'disabled:cursor-not-allowed disabled:text-grey-50',
            props.class
          )"
        />
        <div
          v-if="hasTrailing"
          class="flex shrink-0 items-center gap-[8px] text-grey-50"
        >
          <button
            v-if="showClearButton"
            type="button"
            @click="handleClear"
            class="shrink-0 text-grey-50 transition-colors hover:text-grey-70"
          >
            <X class="h-[16px] w-[16px]" />
          </button>
          <button
            v-if="password"
            type="button"
            @click="togglePasswordVisibility"
            class="shrink-0 text-grey-50 transition-colors hover:text-grey-70"
          >
            <Eye v-if="!showPassword" class="h-[16px] w-[16px]" />
            <EyeOff v-else class="h-[16px] w-[16px]" />
          </button>
        </div>
      </div>
      <slot />
    </InputFrame>
  </div>
</template>
