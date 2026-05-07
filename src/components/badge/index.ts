import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

export const badgeVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-semibold box-border",
  {
    variants: {
      variant: {
        neutral: "",
        negative: "",
        positive: "",
        informative: "",
        warning: "",
      },
      tone: {
        soft: "",
        solid: "",
        outline: "bg-grey-10 border border-solid",
      },
      round: {
        true: "rounded-full",
        false: "rounded-[3px]",
      },
      size: {
        "3xsmall": "h-[16px] px-[4px] text-size-12 leading-[16px]",
        "2xsmall": "h-[20px] px-[8px] gap-[2px] text-size-12 leading-[16px]",
        xsmall: "h-[24px] px-[8px] gap-[2px] text-size-14 leading-[20px]",
      },
    },
    compoundVariants: [
      // Subtle (filled 50%)
      { variant: "neutral", tone: "soft", class: "bg-grey-30 text-grey-90" },
      { variant: "negative", tone: "soft", class: "bg-red-30 text-red-80" },
      { variant: "positive", tone: "soft", class: "bg-green-30 text-green-80" },
      { variant: "informative", tone: "soft", class: "bg-blue-30 text-blue-80" },
      { variant: "warning", tone: "soft", class: "bg-orange-30 text-orange-80" },
      // Solid (filled 100%)
      { variant: "neutral", tone: "solid", class: "bg-grey-80 text-grey-10" },
      { variant: "negative", tone: "solid", class: "bg-red-80 text-grey-10" },
      { variant: "positive", tone: "solid", class: "bg-green-80 text-grey-10" },
      { variant: "informative", tone: "solid", class: "bg-blue-80 text-grey-10" },
      { variant: "warning", tone: "solid", class: "bg-orange-80 text-grey-10" },
      // Outline
      { variant: "neutral", tone: "outline", class: "border-grey-90 text-grey-90" },
      { variant: "negative", tone: "outline", class: "border-red-80 text-red-80" },
      { variant: "positive", tone: "outline", class: "border-green-80 text-green-80" },
      { variant: "informative", tone: "outline", class: "border-blue-80 text-blue-80" },
      { variant: "warning", tone: "outline", class: "border-orange-80 text-orange-80" },
    ],
    defaultVariants: {
      variant: "neutral",
      tone: "soft",
      round: false,
      size: "2xsmall",
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>

export interface BadgeProps {
  variant?: "neutral" | "negative" | "positive" | "informative" | "warning"
  tone?: "soft" | "solid" | "outline"
  size?: "3xsmall" | "2xsmall" | "xsmall"
  round?: boolean
  class?: string
}

export const badgeCountVariants = cva(
  "inline-flex items-center justify-center h-[14px] min-w-[14px] px-[4px] rounded-full text-[10px] leading-[16px] font-bold text-grey-10 shrink-0",
  {
    variants: {
      variant: {
        neutral: "bg-grey-80",
        negative: "bg-red-80",
        positive: "bg-green-80",
        informative: "bg-blue-80",
        warning: "bg-orange-80",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
)

export type BadgeCountVariants = VariantProps<typeof badgeCountVariants>
