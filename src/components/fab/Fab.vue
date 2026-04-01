<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '../../lib/utils'

const SIZE_MAP = {
  xsmall: { h: 'h-[32px]', px: 'px-[8px]', py: 'py-[6px]', font: 'text-size-14', icon: '[&_svg]:size-[16px]', circle: 'w-[32px]' },
  small: { h: 'h-[40px]', px: 'px-[8px]', py: '', font: 'text-size-14', icon: '[&_svg]:size-[20px]', circle: 'w-[40px]' },
  regular: { h: 'h-[48px]', px: 'px-[16px]', py: '', font: 'text-size-15', icon: '[&_svg]:size-[24px]', circle: 'w-[48px]' },
  medium: { h: 'h-[56px]', px: 'px-[16px]', py: '', font: 'text-size-16', icon: '[&_svg]:size-[24px]', circle: 'w-[56px]' },
} as const

const STYLE_MAP = {
  basic: 'bg-grey-10 text-cta-primary shadow-regular hover:bg-grey-20 active:bg-grey-30',
  colorfilled: 'bg-cta-primary text-grey-10 shadow-regular hover:bg-navy-90 active:bg-navy-100',
} as const

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

const classes = computed(() => {
  const s = SIZE_MAP[props.size]
  const base = 'inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0'

  if (props.iconOnly) {
    return cn(
      base,
      'rounded-full',
      s.circle, s.h, s.font, s.icon,
      STYLE_MAP[props.fabStyle],
      props.class
    )
  }

  return cn(
    base,
    'rounded-[100px] gap-[4px]',
    s.h, s.px, s.py, s.font, s.icon,
    STYLE_MAP[props.fabStyle],
    props.class
  )
})
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="classes"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
