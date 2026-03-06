import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Toggle } from "./Toggle.vue"

export const toggleVariants = cva(
  "inline-flex items-center justify-center gap-[8px] rounded-md text-sm font-medium transition-colors hover:bg-base-30 hover:text-base-60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-80 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-base-30 data-[state=on]:text-base-100 [&_svg]:pointer-events-none [&_svg]:size-[16px] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-base-40 bg-transparent shadow-sm hover:bg-base-30 hover:text-base-100",
      },
      size: {
        md: "h-[36px] px-[8px] min-w-[36px]",
        sm: "h-[32px] px-[6px] min-w-[32px]",
        lg: "h-[40px] px-[10px] min-w-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

export type ToggleVariants = VariantProps<typeof toggleVariants>
