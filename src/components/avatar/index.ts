import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Avatar } from "./Avatar.vue"
export { default as AvatarFallback } from "./AvatarFallback.vue"
export { default as AvatarImage } from "./AvatarImage.vue"

export const avatarVariant = cva(
  "inline-flex items-center justify-center font-normal text-base-100 select-none shrink-0 bg-base-20 overflow-hidden",
  {
    variants: {
      size: {
        small: "h-[40px] w-[40px] text-xs",
        base: "h-[64px] w-[64px] text-2xl",
        large: "h-[128px] w-[128px] text-5xl",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-md",
      },
    },
  },
)

export type AvatarVariants = VariantProps<typeof avatarVariant>
