import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as TextButton } from './TextButton.vue'

export const textButtonVariants = cva(
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

export type TextButtonVariants = VariantProps<typeof textButtonVariants>
