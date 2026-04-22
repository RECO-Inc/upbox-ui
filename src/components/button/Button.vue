<script setup lang="ts">
import { cn } from '../../lib/utils'
import { Spinner } from '../spinner'
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: '',
        destructive: '',
        secondary: '',
        tertiary: '',
      },
      theme: {
        filled: '',
        outlined: 'border',
      },
      size: {
        xsmall: 'h-[24px] px-[6px] py-[4px] text-size-12 rounded-[3px]',
        small: 'h-[32px] px-[8px] py-[6px] text-size-13 rounded-[4px]',
        regular: 'h-[40px] px-[16px] py-[8px] text-size-14 rounded-[4px]',
        large: 'h-[48px] px-[16px] py-[8px] text-size-15 rounded-[4px]',
        xlarge: 'h-[56px] px-[16px] py-[16px] text-size-16 rounded-[4px]',
      },
      block: {
        true: 'w-full',
        false: '',
      },
    },
    compoundVariants: [
      // === Primary ===
      { variant: 'primary', theme: 'filled', class: 'bg-navy-80 border border-navy-80 text-grey-10 hover:bg-navy-90 hover:border-navy-90 active:bg-navy-100 active:border-navy-100' },
      { variant: 'primary', theme: 'outlined', class: 'bg-grey-10 border-cta-primary text-cta-primary hover:bg-navy-20 active:bg-navy-30' },

      // === Destructive ===
      { variant: 'destructive', theme: 'filled', class: 'bg-red-80 border border-red-80 text-grey-10 hover:bg-red-90 hover:border-red-90 active:bg-red-100 active:border-red-100' },
      { variant: 'destructive', theme: 'outlined', class: 'bg-grey-10 border-red-80 text-red-80 hover:bg-red-20 active:bg-red-30' },

      // === Secondary ===
      { variant: 'secondary', theme: 'filled', class: 'bg-grey-60 border border-grey-60 text-grey-10 hover:bg-grey-70 hover:border-grey-70 active:bg-grey-80 active:border-grey-80' },
      { variant: 'secondary', theme: 'outlined', class: 'bg-grey-10 border-grey-60 text-grey-60 hover:bg-grey-20 active:bg-grey-30' },

      // === Tertiary ===
      { variant: 'tertiary', theme: 'filled', class: 'bg-grey-30 border border-grey-30 text-grey-70 hover:bg-grey-40 hover:border-grey-40 active:bg-grey-50 active:border-grey-50 active:text-grey-80' },
      { variant: 'tertiary', theme: 'outlined', class: 'bg-grey-10 border-grey-30 text-grey-70 hover:bg-grey-20 hover:border-grey-40 active:bg-grey-30 active:border-grey-50' },
    ],
    defaultVariants: {
      variant: 'primary',
      theme: 'filled',
      size: 'regular',
      block: false,
    },
  }
)

export interface ButtonProps {
  variant?: 'primary' | 'destructive' | 'secondary' | 'tertiary'
  theme?: 'filled' | 'outlined'
  size?: 'xsmall' | 'small' | 'regular' | 'large' | 'xlarge'
  block?: boolean
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  class?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  theme: 'filled',
  size: 'regular',
  block: false,
  disabled: false,
  loading: false,
  type: 'button',
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.loading || props.disabled) return
  emit('click', event)
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="cn(
      buttonVariants({
        variant: props.variant,
        theme: props.theme,
        size: props.size,
        block: props.block,
      }),
      props.class
    )"
    @click="handleClick"
  >
    <Spinner v-if="loading" class="h-[16px] w-[16px]" />
    <slot v-else />
  </button>
</template>
