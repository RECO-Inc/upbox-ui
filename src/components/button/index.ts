import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Button } from "./Button.vue"

// LinkFrontApp style button variants (for main Button component)
export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 border [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-navy-80 border-navy-80 hover:bg-navy-90 hover:border-navy-90 active:bg-navy-100 active:border-navy-100',
        error: 'bg-red-80 border-red-80 hover:bg-red-70 hover:border-red-70 active:bg-red-100 active:border-red-100',
        positive: 'bg-green-80 border-green-80 hover:bg-green-70 hover:border-green-70',
        usually: 'bg-grey-60 border-grey-60 hover:bg-grey-70 hover:border-grey-70',
        assistant: 'bg-grey-30 border-grey-30 hover:bg-grey-40 hover:border-grey-40 active:bg-grey-50 active:border-grey-50',
        info: 'bg-blue-80 border-blue-80 hover:bg-blue-70 hover:border-blue-70',
      },
      style: {
        filled: '!text-grey-10',
        outlined: '!bg-grey-10',
        text: '!border-none !bg-transparent shadow-none p-0',
      },
      size: {
        xsmall: 'h-[24px] px-[6px] py-[4px] text-size-12 rounded-[2.4px]',
        small: 'h-[32px] px-[8px] py-[6px] text-size-13 rounded-[3.2px]',
        regular: 'h-[40px] px-[16px] py-[10px] text-size-14 rounded-[4px]',
        large: 'h-[48px] px-[16px] py-[12px] text-size-16 rounded-[4.8px]',
        xlarge: 'h-[56px] px-[16px] py-[16px] text-size-16 rounded-[5.6px]',
      },
      block: {
        true: 'w-full',
        false: '',
      },
    },
    compoundVariants: [
      // Primary outlined
      {
        variant: 'primary',
        style: 'outlined',
        class: 'border-navy-100 !text-navy-100 hover:bg-navy-20 hover:border-navy-90 hover:!text-navy-90 active:bg-navy-30 active:border-navy-80 active:!text-navy-90',
      },
      // Primary text
      {
        variant: 'primary',
        style: 'text',
        class: '!text-navy-80 hover:!bg-navy-20',
      },
      // Error outlined
      {
        variant: 'error',
        style: 'outlined',
        class: 'border-red-80 !text-red-80 hover:bg-red-20 hover:border-red-70 hover:!text-red-70 active:bg-red-40 active:border-red-80 active:!text-red-80',
      },
      // Error text
      {
        variant: 'error',
        style: 'text',
        class: '!text-red-80 hover:!bg-red-20',
      },
      // Positive outlined
      {
        variant: 'positive',
        style: 'outlined',
        class: 'border-green-80 !text-green-80 hover:bg-green-20 hover:border-green-70 hover:!text-green-70 active:bg-green-30 active:border-green-80 active:!text-green-80',
      },
      // Positive text
      {
        variant: 'positive',
        style: 'text',
        class: '!text-green-80 hover:!bg-green-20',
      },
      // Usually outlined
      {
        variant: 'usually',
        style: 'outlined',
        class: 'border-grey-70 !text-grey-70 hover:bg-grey-20 hover:border-grey-60 hover:!text-grey-60 active:bg-grey-30 active:border-grey-70 active:!text-grey-70',
      },
      // Usually text
      {
        variant: 'usually',
        style: 'text',
        class: '!text-grey-80 hover:!bg-grey-20',
      },
      // Assistant filled
      {
        variant: 'assistant',
        style: 'filled',
        class: '!text-grey-70 active:!text-grey-80',
      },
      // Assistant outlined
      {
        variant: 'assistant',
        style: 'outlined',
        class: 'border-grey-60 !text-grey-80 hover:bg-grey-20 hover:border-grey-70 hover:!text-grey-80 active:bg-grey-30 active:border-grey-80 active:!text-grey-80',
      },
      // Assistant text
      {
        variant: 'assistant',
        style: 'text',
        class: '!text-grey-60 hover:!bg-grey-20',
      },
      // Info outlined
      {
        variant: 'info',
        style: 'outlined',
        class: 'border-blue-80 !text-blue-80 hover:bg-blue-20 hover:border-blue-70 hover:!text-blue-70 active:bg-blue-30 active:border-blue-80 active:!text-blue-80',
      },
      // Info text
      {
        variant: 'info',
        style: 'text',
        class: '!text-blue-80 hover:!bg-blue-20',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      style: 'filled',
      size: 'regular',
      block: false,
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
