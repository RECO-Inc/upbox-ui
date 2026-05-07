import type { Component } from "vue"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Toggle } from "./Toggle.vue"

export const toggleTrackVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-grey-10 focus-visible:ring-navy-80 disabled:cursor-not-allowed data-[state=checked]:bg-navy-80 data-[state=unchecked]:bg-grey-50 disabled:bg-grey-40 disabled:opacity-60",
  {
    variants: {
      size: {
        "4xsmall": "h-[12px] w-[20px]",
        "3xsmall": "h-[16px] w-[30px]",
        "2xsmall": "h-[20px] w-[38px]",
      },
    },
    defaultVariants: {
      size: "2xsmall",
    },
  },
)

export const toggleThumbVariants = cva(
  "pointer-events-none block rounded-full bg-grey-10 ring-0 transition-transform",
  {
    variants: {
      size: {
        "4xsmall": "h-[8px] w-[8px] data-[state=checked]:translate-x-[10px] data-[state=unchecked]:translate-x-[2px]",
        "3xsmall": "h-[12px] w-[12px] data-[state=checked]:translate-x-[16px] data-[state=unchecked]:translate-x-[2px]",
        "2xsmall": "h-[14px] w-[14px] data-[state=checked]:translate-x-[21px] data-[state=unchecked]:translate-x-[3px]",
      },
    },
    defaultVariants: {
      size: "2xsmall",
    },
  },
)

export const toggleLabelVariants = cva(
  "select-none text-grey-90",
  {
    variants: {
      size: {
        "4xsmall": "text-size-12 leading-[16px]",
        "3xsmall": "text-size-12 leading-[16px]",
        "2xsmall": "text-size-14 leading-[20px]",
      },
    },
    defaultVariants: {
      size: "2xsmall",
    },
  },
)

export type ToggleTrackVariants = VariantProps<typeof toggleTrackVariants>

export interface ToggleProps {
  modelValue?: boolean
  defaultValue?: boolean
  size?: "4xsmall" | "3xsmall" | "2xsmall"
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
  id?: string
  label?: string
  asChild?: boolean
  as?: string | Component
  class?: string
}

export interface ToggleEmits {
  "update:modelValue": [value: boolean]
}
