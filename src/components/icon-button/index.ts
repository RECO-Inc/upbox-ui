import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as IconButton } from './IconButton.vue'

export const iconButtonVariants = cva(
  'inline-flex items-center justify-center transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-blue-20 hover:bg-blue-30 active:bg-blue-40',
        destructive: 'bg-red-20 hover:bg-red-30 active:bg-red-40',
        secondary: 'bg-grey-20 hover:bg-grey-30 active:bg-grey-40',
        tertiary: 'bg-grey-10 border border-grey-40 hover:bg-grey-20 active:bg-grey-30',
      },
      size: {
        '2xsmall': 'size-[20px] rounded-[2px] [&_svg]:size-[12px]',
        xsmall: 'size-[24px] rounded-[3px] [&_svg]:size-[16px]',
        small: 'size-[32px] rounded-[4px] [&_svg]:size-[20px]',
        regular: 'size-[40px] rounded-[4px] [&_svg]:size-[20px]',
        large: 'size-[48px] rounded-[4px] [&_svg]:size-[24px]',
        xlarge: 'size-[56px] rounded-[4px] [&_svg]:size-[24px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'regular',
    },
  }
)

export type IconButtonVariants = VariantProps<typeof iconButtonVariants>
