import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

export const badgeVariants = cva(
  "inline-flex gap-[2px] items-center justify-center rounded-[3px] box-border whitespace-nowrap font-semibold",
  {
    variants: {
      variant: {
        base: "border-grey-80",
        primary: "border-navy-80",
        info: "border-blue-90",
        positive: "border-green-90",
        error: "border-red-80",
        warning: "border-orange-70",
      },
      size: {
        "xxsmall": "h-[16px] px-[6px] text-size-11",       // height: 16px, padding: 0 6px
        xsmall: "h-[20px] px-[6px] py-[2px] text-size-11", // height: 20px, padding: 2px 6px
        small: "h-[24px] px-[6px] py-[4px] text-size-12",    // height: 24px, padding: 4px 6px
        regular: "h-[32px] px-[8px] py-[6px] text-size-14",  // height: 32px, padding: 6px 8px
      },
      deep: {
        true: "",
        false: "",
      },
      outline: {
        true: "bg-grey-10 border border-solid",
        false: "",
      },
    },
    compoundVariants: [
      // Light variants (deep: false)
      { variant: "base", deep: false, outline: false, class: "bg-grey-30 text-grey-80" },
      { variant: "primary", deep: false, outline: false, class: "bg-navy-20 text-navy-80" },
      { variant: "info", deep: false, outline: false, class: "bg-blue-30 text-blue-90" },
      { variant: "positive", deep: false, outline: false, class: "bg-green-30 text-green-90" },
      { variant: "error", deep: false, outline: false, class: "bg-red-30 text-red-80" },
      { variant: "warning", deep: false, outline: false, class: "bg-orange-20 text-orange-70" },
      // Deep variants (deep: true)
      { variant: "base", deep: true, class: "bg-grey-80 text-grey-10" },
      { variant: "primary", deep: true, class: "bg-navy-80 text-grey-10" },
      { variant: "info", deep: true, class: "bg-blue-80 text-grey-10" },
      { variant: "positive", deep: true, class: "bg-green-80 text-grey-10" },
      { variant: "error", deep: true, class: "bg-red-80 text-grey-10" },
      { variant: "warning", deep: true, class: "bg-orange-70 text-grey-10" },
      // Outline variants - text color only
      { variant: "base", outline: true, class: "text-grey-80" },
      { variant: "primary", outline: true, class: "text-navy-80" },
      { variant: "info", outline: true, class: "text-blue-90" },
      { variant: "positive", outline: true, class: "text-green-90" },
      { variant: "error", outline: true, class: "text-red-80" },
      { variant: "warning", outline: true, class: "text-orange-70" },
    ],
    defaultVariants: {
      variant: "base",
      size: "small",
      deep: false,
      outline: false,
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>
