import { cva, type VariantProps } from "class-variance-authority"

/**
 * input·select·date 등 “값이 들어가는 한 줄 필드”의 공통 껍데기.
 * 포커스는 자식(input·button)에 맞추기 위해 `focus-within` 사용.
 */
export const inputFrameVariants = cva(
  [
    "flex w-full items-center gap-0 rounded-[4px] border transition-all duration-300",
    "hover:border-grey-50",
    "focus-within:outline-hidden",
    "focus-within:border-blue-80 focus-within:ring-2 focus-within:ring-blue-40",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-grey-40 bg-grey-10",
        filled: "border-transparent bg-grey-20",
        bottomline:
          "border-0 border-b border-grey-40 rounded-none bg-transparent hover:border-grey-50",
      },
      size: {
        small: "h-[32px] min-h-[32px] px-[8px] text-size-12",
        regular: "h-[40px] min-h-[40px] px-[16px] text-size-14",
        large: "h-[48px] min-h-[48px] px-[16px] text-size-16",
      },
      error: {
        true: "border-red-80 focus-within:border-red-80 focus-within:ring-0 hover:border-red-80",
        false: "",
      },
      readonly: {
        true: "cursor-default focus-within:border-grey-40 focus-within:ring-0 bg-grey-20 border-grey-40 hover:border-grey-40",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "regular",
      error: false,
      readonly: false,
    },
  },
)

export type InputFrameVariantProps = VariantProps<typeof inputFrameVariants>
