import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export { default as Fab } from './Fab.vue'

export const fabVariants = cva(
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
    },
    defaultVariants: {
      fabStyle: 'basic',
      size: 'regular',
    },
  }
)

export type FabVariants = VariantProps<typeof fabVariants>
