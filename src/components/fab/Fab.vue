<script setup lang="ts">
import { cn } from '../../lib/utils'
import { cva } from 'class-variance-authority'

const fabVariants = cva(
  'inline-flex items-center justify-center gap-[4px] whitespace-nowrap font-bold transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 rounded-[100px]',
  {
    variants: {
      fabStyle: {
        basic: 'bg-grey-10 text-cta-primary shadow-regular hover:bg-grey-20 active:bg-grey-30',
        colorfilled: 'bg-cta-primary text-grey-10 shadow-regular hover:bg-navy-90 active:bg-navy-100',
      },
      size: {
        xsmall: 'h-[32px] px-[8px] py-[6px] text-size-14 [&_svg]:size-[16px]',
        small: 'h-[40px] px-[8px] text-size-14 [&_svg]:size-[20px]',
        regular: 'h-[48px] px-[16px] text-size-15 [&_svg]:size-[24px]',
        medium: 'h-[56px] px-[16px] text-size-16 [&_svg]:size-[24px]',
      },
      iconOnly: {
        true: 'rounded-full',
        false: '',
      },
    },
    compoundVariants: [
      { iconOnly: true, size: 'xsmall', class: 'w-[32px] h-[32px] px-0 py-0 gap-0' },
      { iconOnly: true, size: 'small', class: 'w-[40px] h-[40px] px-0 py-0 gap-0' },
      { iconOnly: true, size: 'regular', class: 'w-[48px] h-[48px] px-0 py-0 gap-0' },
      { iconOnly: true, size: 'medium', class: 'w-[56px] h-[56px] px-0 py-0 gap-0' },
    ],
    defaultVariants: {
      fabStyle: 'basic',
      size: 'regular',
      iconOnly: false,
    },
  }
)

export interface FabProps {
  fabStyle?: 'basic' | 'colorfilled'
  size?: 'xsmall' | 'small' | 'regular' | 'medium'
  iconOnly?: boolean
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<FabProps>(), {
  fabStyle: 'basic',
  size: 'regular',
  iconOnly: false,
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
    :class="cn(fabVariants({ fabStyle: props.fabStyle, size: props.size, iconOnly: props.iconOnly }), props.class)"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
