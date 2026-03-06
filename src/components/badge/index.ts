import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

export const badgeVariants = cva(
  "inline-flex gap-[2px] items-center justify-center rounded-[3px] box-border whitespace-nowrap font-semibold",
  {
    variants: {
      variant: {
        base: "border-base-80",
        primary: "border-primary-80",
        info: "border-info-90",
        positive: "border-positive-90",
        error: "border-error-80",
        warning: "border-warning-70",
      },
      size: {
        xxsmall: "h-[16px] px-[6px] text-size-11",       // height: 16px, padding: 0 6px
        xsmall: "h-[20px] px-[6px] py-[2px] text-size-11", // height: 20px, padding: 2px 6px
        small: "h-[24px] px-[6px] py-[4px] text-size-12",    // height: 24px, padding: 4px 6px
        regular: "h-[32px] px-[8px] py-[6px] text-size-14",  // height: 32px, padding: 6px 8px
      },
      deep: {
        true: "",
        false: "",
      },
      outline: {
        true: "bg-base-10 border border-solid",
        false: "",
      },
    },
    compoundVariants: [
      // Light variants (deep: false)
      { variant: "base", deep: false, outline: false, class: "bg-base-30 text-base-80" },
      { variant: "primary", deep: false, outline: false, class: "bg-primary-20 text-primary-80" },
      { variant: "info", deep: false, outline: false, class: "bg-info-30 text-info-90" },
      { variant: "positive", deep: false, outline: false, class: "bg-positive-30 text-positive-90" },
      { variant: "error", deep: false, outline: false, class: "bg-error-30 text-error-80" },
      { variant: "warning", deep: false, outline: false, class: "bg-warning-20 text-warning-70" },
      // Deep variants (deep: true)
      { variant: "base", deep: true, class: "bg-base-80 text-base-10" },
      { variant: "primary", deep: true, class: "bg-primary-80 text-base-10" },
      { variant: "info", deep: true, class: "bg-info-80 text-base-10" },
      { variant: "positive", deep: true, class: "bg-positive-80 text-base-10" },
      { variant: "error", deep: true, class: "bg-error-80 text-base-10" },
      { variant: "warning", deep: true, class: "bg-warning-70 text-base-10" },
      // Outline variants - text color only
      { variant: "base", outline: true, class: "text-base-80" },
      { variant: "primary", outline: true, class: "text-primary-80" },
      { variant: "info", outline: true, class: "text-info-90" },
      { variant: "positive", outline: true, class: "text-positive-90" },
      { variant: "error", outline: true, class: "text-error-80" },
      { variant: "warning", outline: true, class: "text-warning-70" },
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
