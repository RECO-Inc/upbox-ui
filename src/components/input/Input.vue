<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref, watch } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '../../lib/utils'
import { X, Eye, EyeOff } from 'lucide-vue-next'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva(
  'flex w-full rounded-[4px] border transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-grey-50 focus-visible:outline-hidden focus-visible:border-blue-80 focus-visible:ring-2 focus-visible:ring-blue-40 disabled:cursor-not-allowed disabled:opacity-50 hover:border-grey-50',
  {
    variants: {
      variant: {
        default: 'border-grey-40 bg-grey-10',
        filled: 'border-transparent bg-grey-20',
        bottomline: 'border-0 border-b border-grey-40 rounded-none bg-transparent hover:border-grey-50',
      },
      size: {
        small: 'h-[32px] px-[12px] py-[7px] text-size-12',
        regular: 'h-[40px] px-[16px] py-[9px] text-size-14',
        large: 'h-[48px] px-[16px] py-[11px] text-size-15',
      },
      error: {
        true: 'border-red-80 focus-visible:border-red-80 focus-visible:ring-0 hover:border-red-80',
        false: '',
      },
      readonly: {
        true: 'cursor-default focus-visible:border-grey-30 focus-visible:ring-0 bg-grey-20 border-grey-30 hover:border-grey-30',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'regular',
      error: false,
      readonly: false,
    },
  }
)

const wrapperVariants = cva(
  'relative w-full',
  {
    variants: {
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
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
  label?: string
  required?: boolean
  clearable?: boolean
  password?: boolean
  errorMessage?: string
  subfix?: string
  counter?: boolean
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
  counter: false,
  byteMode: false,
  type: 'text',
})

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const showPassword = ref(false)
const inputType = computed(() => {
  if (props.password) {
    return showPassword.value ? 'text' : 'password'
  }
  return props.type
})

const hasError = computed(() => props.error || !!props.errorMessage)

const getByteLength = (str: string): number => {
  return new Blob([str]).size
}

const currentCount = computed(() => {
  const value = String(modelValue.value || '')
  return props.byteMode ? getByteLength(value) : value.length
})

const maxCount = computed(() => props.maxLength || 0)

const counterText = computed(() => {
  if (!props.counter) return ''
  const unit = props.byteMode ? 'byte' : 'char'
  return props.maxLength
    ? `${currentCount.value}/${maxCount.value} ${unit}`
    : `${currentCount.value} ${unit}`
})

const showClearButton = computed(() => {
  return props.clearable && modelValue.value && !props.disabled && !props.readonly
})

const handleClear = () => {
  modelValue.value = ''
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}

const hasPaddingRight = computed(() => {
  return showClearButton.value || props.password || !!props.subfix
})

const inputPaddingClass = computed(() => {
  return cn(
    hasPaddingRight.value && 'pr-[40px]'
  )
})
</script>

<template>
  <div :class="wrapperVariants({ disabled: props.disabled })">
    <!-- Label -->
    <label
      v-if="label"
      class="inline-block mb-[8px] text-size-14 text-grey-80 font-medium"
    >
      {{ label }}
      <span v-if="required" class="text-red-70 ml-[4px]">*</span>
    </label>

    <!-- Input Wrapper -->
    <div class="relative">
      <!-- Input -->
      <input
        v-model="modelValue"
        :type="inputType"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :maxlength="maxLength"
        :class="cn(
          inputVariants({
            variant: props.variant,
            size: props.size,
            error: hasError,
            readonly: props.readonly
          }),
          inputPaddingClass,
          'text-grey-80',
          props.class
        )"
      />

      <!-- Right Side Elements Container -->
      <div
        v-if="hasPaddingRight"
        class="absolute right-[12px] top-1/2 -translate-y-1/2 flex items-center gap-[8px]"
      >
        <!-- Subfix Text -->
        <span v-if="subfix" class="text-size-14 text-grey-60">
          {{ subfix }}
        </span>

        <!-- Clear Button -->
        <button
          v-if="showClearButton"
          type="button"
          @click="handleClear"
          class="text-grey-50 hover:text-grey-70 transition-colors"
        >
          <X class="w-[16px] h-[16px]" />
        </button>

        <!-- Password Toggle -->
        <button
          v-if="password"
          type="button"
          @click="togglePasswordVisibility"
          class="text-grey-50 hover:text-grey-70 transition-colors"
        >
          <Eye v-if="!showPassword" class="w-[16px] h-[16px]" />
          <EyeOff v-else class="w-[16px] h-[16px]" />
        </button>
      </div>
    </div>

    <!-- Bottom Row: Error Message & Counter -->
    <div
      v-if="errorMessage || counter"
      class="flex justify-between items-start mt-[4px]"
    >
      <!-- Error Message -->
      <span
        v-if="errorMessage"
        class="text-size-12 text-red-70"
      >
        {{ errorMessage }}
      </span>
      <span v-else></span>

      <!-- Counter -->
      <span
        v-if="counter"
        class="text-size-12 text-grey-50 ml-auto"
      >
        {{ counterText }}
      </span>
    </div>
  </div>
</template>
