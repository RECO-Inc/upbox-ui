import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Chip } from "./Chip.vue"

export const chipVariants = cva(
  "inline-flex items-center justify-center font-semibold whitespace-nowrap box-border transition-colors cursor-pointer focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      round: {
        true: "rounded-full",
        false: "rounded-[4px]",
      },
      size: {
        xsmall: "h-[24px] px-[4px] gap-[2px] text-size-12",
        small: "h-[32px] px-[8px] py-[6px] gap-[2px] text-size-13",
      },
      state: {
        default: "bg-grey-20 text-grey-80 hover:bg-grey-30",
        selected: "bg-cta-primary text-grey-10",
        active: "bg-blue-20 text-cta-primary hover:bg-blue-30",
      },
    },
    defaultVariants: {
      round: false,
      size: "xsmall",
      state: "default",
    },
  },
)

export type ChipVariants = VariantProps<typeof chipVariants>

export interface ChipProps {
  round?: boolean
  size?: "xsmall" | "small"
  state?: "default" | "selected" | "active"
  removable?: boolean
  dropdown?: boolean
  count?: number | string
  class?: string
}

export const chipIconSize: Record<NonNullable<ChipVariants["size"]>, string> = {
  xsmall: "size-[16px]",
  small: "size-[20px]",
}

export const chipCountColor: Record<NonNullable<ChipVariants["state"]>, string> = {
  default: "text-grey-90",
  selected: "text-grey-10",
  active: "text-status-informative",
}
