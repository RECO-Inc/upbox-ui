<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, ref, watch, nextTick } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const textareaVariants = cva(
  'flex w-full rounded-[4px] border transition-all duration-300 placeholder:text-grey-50 focus-visible:outline-none focus-visible:border-blue-80 focus-visible:ring-2 focus-visible:ring-blue-40 disabled:cursor-not-allowed disabled:opacity-50 resize-none hover:border-grey-50',
  {
    variants: {
      variant: {
        default: 'border-grey-40 bg-grey-10',
        filled: 'border-transparent bg-grey-20',
        bottomline: 'border-0 border-b border-grey-40 rounded-none bg-transparent hover:border-grey-50',
      },
      size: {
        small: 'px-[12px] py-[7px] text-size-12',
        regular: 'px-[16px] py-[9px] text-size-14',
        large: 'px-[16px] py-[11px] text-size-15',
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

export interface EnhancedTextareaProps {
  variant?: 'default' | 'filled' | 'bottomline'
  size?: 'small' | 'regular' | 'large'
  error?: boolean
  modelValue?: string | number
  defaultValue?: string | number
  class?: HTMLAttributes['class']
  label?: string
  required?: boolean
  errorMessage?: string
  counter?: boolean
  maxLength?: number
  byteMode?: boolean
  disabled?: boolean
  readonly?: boolean
  placeholder?: string
  autoResize?: boolean
  minHeight?: number
  maxHeight?: number
  rows?: number
}

const props = withDefaults(defineProps<EnhancedTextareaProps>(), {
  variant: 'default',
  size: 'regular',
  error: false,
  disabled: false,
  readonly: false,
  counter: false,
  byteMode: false,
  autoResize: true,
  minHeight: 60,
  maxHeight: 300,
  rows: 3,
})

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const textareaRef = ref<HTMLTextAreaElement | null>(null)
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

const adjustHeight = async () => {
  if (!props.autoResize || !textareaRef.value) return

  await nextTick()

  const textarea = textareaRef.value
  if (!textarea) return

  // Reset height to auto to get the correct scrollHeight
  textarea.style.height = 'auto'

  // Calculate new height
  let newHeight = textarea.scrollHeight

  // Apply min/max constraints
  if (props.minHeight) {
    newHeight = Math.max(newHeight, props.minHeight)
  }
  if (props.maxHeight) {
    newHeight = Math.min(newHeight, props.maxHeight)
  }

  // Set new height
  textarea.style.height = `${newHeight}px`

  // Handle scrolling if max height is reached
  if (props.maxHeight && textarea.scrollHeight > props.maxHeight) {
    textarea.style.overflowY = 'auto'
  } else {
    textarea.style.overflowY = 'hidden'
  }
}

watch(modelValue, () => {
  adjustHeight()
}, { immediate: true })

// Initial adjustment after mount
watch(textareaRef, () => {
  adjustHeight()
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

    <!-- Textarea -->
    <textarea
      ref="textareaRef"
      v-model="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :rows="autoResize ? 1 : rows"
      :class="cn(
        textareaVariants({
          variant: props.variant,
          size: props.size,
          error: hasError,
          readonly: props.readonly
        }),
        'text-grey-80',
        props.class
      )"
    />

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
