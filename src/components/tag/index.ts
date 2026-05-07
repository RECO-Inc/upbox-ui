import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Tag } from "./Tag.vue"

export const tagVariants = cva(
  "inline-flex items-center font-semibold whitespace-nowrap box-border transition-colors",
  {
    variants: {
      state: {
        enabled: "bg-grey-10 border border-solid border-grey-90 text-grey-90",
        disabled: "bg-grey-30 text-grey-80 cursor-not-allowed",
        error: "bg-grey-10 border border-solid border-red-80 text-red-80",
      },
      size: {
        "3xsmall": "h-[16px] px-[4px] text-size-12 leading-[16px] rounded-[3px]",
        "2xsmall": "h-[20px] px-[8px] gap-[4px] text-size-12 leading-[16px] rounded-[3px]",
        xsmall: "h-[24px] px-[8px] py-[4px] gap-[4px] text-size-14 leading-[20px] rounded-[3px]",
        small: "h-[32px] px-[8px] gap-[4px] text-size-14 leading-[20px] rounded-[4px]",
      },
    },
    defaultVariants: {
      state: "enabled",
      size: "small",
    },
  },
)

export type TagVariants = VariantProps<typeof tagVariants>

export interface TagProps {
  state?: "enabled" | "disabled" | "error"
  size?: "3xsmall" | "2xsmall" | "xsmall" | "small"
  mode?: "view" | "edit"
  class?: string
}

export const tagCloseIconSize: Record<NonNullable<TagVariants["size"]>, string> = {
  "3xsmall": "size-[14px]",
  "2xsmall": "size-[14px]",
  xsmall: "size-[14px]",
  small: "size-[18px]",
}
