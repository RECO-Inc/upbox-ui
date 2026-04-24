import { cva, type VariantProps } from "class-variance-authority"

/**
 * input, select, date 등의 값 표시 부분 공통 껍데기
 * - 혹시나 재사용할까 싶어서..
 */
export const inputFrameVariants = cva(
  [
    "flex w-full items-center gap-0 rounded-[4px] border transition-all duration-300",
    "text-grey-80",
    /* 값 미입력(placeholder) 톤 — 하위는 text-inherit */
    "not-data-[disabled]:has-[input:placeholder-shown]:text-grey-50",
    "not-data-[disabled]:has-[[data-placeholder]]:text-grey-50",
    "not-data-[disabled]:has-[[data-reka-date-field-segment][data-placeholder]]:text-grey-50",
    "focus-within:outline-hidden",
    "focus-within:border-blue-80 focus-within:ring-1 focus-within:ring-blue-50",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-grey-40 bg-grey-10",
        filled: "border-transparent bg-grey-20",
        bottomline:
          "border-0 border-b border-grey-40 rounded-none bg-transparent",
      },
      size: {
        small: "h-[32px] min-h-[32px] px-[8px] text-size-12",
        regular: "h-[40px] min-h-[40px] px-[16px] text-size-14",
        large: "h-[48px] min-h-[48px] px-[16px] text-size-16",
      },
      error: {
        true: "border-red-80 focus-within:border-red-80 focus-within:ring-0",
        false: "",
      },
      readonly: {
        true: "cursor-default focus-within:border-grey-40 focus-within:ring-0 bg-grey-20 border-grey-40",
        false: "",
      },
      disabled: {
        true:
          "text-grey-40 pointer-events-none cursor-not-allowed border-grey-40 bg-grey-20 focus-within:border-grey-40 focus-within:ring-0",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "regular",
      error: false,
      readonly: false,
      disabled: false,
    },
  },
)

export type InputFrameVariantProps = VariantProps<typeof inputFrameVariants>
