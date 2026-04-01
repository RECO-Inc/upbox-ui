<script setup lang="ts">
import { cn } from '../../lib/utils'
import { cva } from 'class-variance-authority'

const textButtonVariants = cva(
  'inline-flex items-center justify-center gap-[2px] whitespace-nowrap font-bold transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        destructive: 'text-red-80 hover:bg-red-20',
        secondary: 'text-grey-60 hover:bg-grey-20',
      },
      size: {
        '2xsmall': 'h-[20px] px-[4px] py-[2px] text-size-12 rounded-[2px] [&_svg]:size-[16px]',
        xsmall: 'h-[24px] px-[4px] text-size-14 rounded-[3px] [&_svg]:size-[20px]',
        small: 'h-[32px] px-[8px] py-[4px] text-size-16 rounded-[4px] [&_svg]:size-[24px]',
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'small',
    },
  }
)

export interface TextButtonProps {
  variant?: 'destructive' | 'secondary'
  size?: '2xsmall' | 'xsmall' | 'small'
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<TextButtonProps>(), {
  variant: 'secondary',
  size: 'small',
  disabled: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.disabled) return
  emit('click', event)
}
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="cn(textButtonVariants({ variant: props.variant, size: props.size }), props.class)"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
