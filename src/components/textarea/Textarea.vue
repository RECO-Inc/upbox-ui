<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed, inject, ref, watch, nextTick } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { FIELD_CONTROL_INJECTION_KEY } from '../form/injectionKeys'

defineOptions({ inheritAttrs: false })

const textareaVariants = cva(
  'flex w-full rounded-[4px] border transition-all duration-300 placeholder:text-grey-50 focus-visible:outline-hidden focus-visible:border-blue-80 focus-visible:ring-2 focus-visible:ring-blue-40 disabled:cursor-not-allowed disabled:bg-grey-20 disabled:border-grey-40 disabled:hover:border-grey-40 resize-none hover:border-grey-50',
  {
    variants: {
      variant: {
        default: 'border-grey-40 bg-grey-10',
        filled: 'border-transparent bg-grey-20',
        bottomline: 'border-0 border-b border-grey-40 rounded-none bg-transparent hover:border-grey-50',
      },
      size: {
        small: 'px-[12px] py-[7px] text-size-12',
        regular: 'p-[16px] text-size-14',
        large: 'px-[16px] py-[11px] text-size-16',
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
        true: 'cursor-not-allowed',
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

const textareaRef = ref<HTMLTextAreaElement | null>(null)

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

  textarea.style.height = 'auto'

  let newHeight = textarea.scrollHeight

  if (props.minHeight) {
    newHeight = Math.max(newHeight, props.minHeight)
  }
  if (props.maxHeight) {
    newHeight = Math.min(newHeight, props.maxHeight)
  }

  textarea.style.height = `${newHeight}px`

  if (props.maxHeight && textarea.scrollHeight > props.maxHeight) {
    textarea.style.overflowY = 'auto'
  } else {
    textarea.style.overflowY = 'hidden'
  }
}

watch(modelValue, () => {
  adjustHeight()
}, { immediate: true })

watch(textareaRef, () => {
  adjustHeight()
})
</script>

<template>
  <div :class="wrapperVariants({ disabled: props.disabled })">
    <textarea
      ref="textareaRef"
      v-bind="$attrs"
      v-model="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :rows="autoResize ? 1 : rows"
      @blur="handleBlur"
      :class="cn(
        textareaVariants({
          variant: props.variant,
          size: props.size,
          error: props.error,
          readonly: props.readonly
        }),
        'text-grey-80',
        counter && 'pb-[24px]',
        props.class
      )"
    />

    <!-- Counter (bottom-right, inside container per Figma) -->
    <span
      v-if="counter"
      class="absolute right-[16px] bottom-[8px] text-size-10 leading-[16px] text-grey-60 text-right whitespace-nowrap pointer-events-none"
    >
      <span>{{ currentCount }}</span><span v-if="maxLength" class="text-grey-90">/{{ maxCount }}</span>
      <span v-if="byteMode" class="text-grey-60"> byte</span>
    </span>
  </div>
</template>
