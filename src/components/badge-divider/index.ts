import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as BadgeDivider } from "./BadgeDivider.vue"

export const badgeDividerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-bold text-center",
  {
    variants: {
      variant: {
        green: "text-green-80",
        navy: "text-navy-60",
      },
      size: {
        "3xsmall": "h-[16px] text-size-12 leading-[16px]",
        "2xsmall": "h-[20px] text-size-14 leading-[20px]",
        xsmall: "h-[24px] text-size-16 leading-[24px]",
      },
    },
    defaultVariants: {
      variant: "green",
      size: "2xsmall",
    },
  },
)

export type BadgeDividerVariants = VariantProps<typeof badgeDividerVariants>

export interface BadgeDividerProps {
  variant?: "green" | "navy"
  size?: "3xsmall" | "2xsmall" | "xsmall"
  class?: string
}
