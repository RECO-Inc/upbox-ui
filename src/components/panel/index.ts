import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Panel } from "./Panel.vue"

// Figma: "Pannel" (node 4957:26039). state(fail/nagative…) → variant, 3 sizes, optional icon.
export const panelVariants = cva("flex items-start gap-[8px] rounded-[8px]", {
  variants: {
    variant: {
      negative: "bg-red-20",
      warning: "bg-orange-20",
      informative: "bg-blue-20",
      positive: "bg-green-20",
    },
    size: {
      small: "p-[12px]",
      medium: "p-[12px]",
      large: "p-[16px]",
    },
  },
  defaultVariants: {
    variant: "negative",
    size: "small",
  },
})

export const panelIconVariants = cva(
  "shrink-0 inline-flex items-center justify-center [&_svg]:size-full",
  {
    variants: {
      variant: {
        negative: "text-red-80",
        warning: "text-orange-80",
        informative: "text-blue-80",
        positive: "text-green-80",
      },
      size: {
        small: "size-[16px]",
        medium: "size-[20px]",
        large: "size-[24px]",
      },
    },
    defaultVariants: {
      variant: "negative",
      size: "small",
    },
  },
)

export const panelTextVariants = cva("min-w-0 break-words font-normal text-grey-90", {
  variants: {
    size: {
      small: "text-size-12 leading-[16px] tracking-[-0.12px]",
      medium: "text-size-14 leading-[20px] tracking-[-0.14px]",
      large: "text-size-16 leading-[24px] tracking-[-0.16px]",
    },
  },
  defaultVariants: {
    size: "small",
  },
})

export type PanelVariants = VariantProps<typeof panelVariants>

export interface PanelProps {
  /** 상태 색상 (Figma state) — fail→negative / warning / processing→informative / success→positive */
  variant?: "negative" | "warning" | "informative" | "positive"
  size?: "small" | "medium" | "large"
  /** 상태 아이콘 노출 여부 (기본 true) */
  icon?: boolean
  class?: string
}
