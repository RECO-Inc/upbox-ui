import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Chip } from "./Chip.vue"

/**
 * Figma `filterChips` (조회용 드롭다운 필터 칩).
 * 축: variant(square/circle) · state(placeholder/typed) · device(web/mobile).
 * - web   : 흰 배경(grey-10) + 회색 보더(grey-40), 12px regular, justify-between
 * - mobile: 보더 없는 채움(placeholder=grey-20 / typed=blue-20), 13px semibold, justify-center
 * 생성·수정용 선택 UI 는 SelectField 를 쓴다.
 */
export const chipVariants = cva(
  "inline-flex items-center box-border h-[32px] px-[8px] py-[6px] gap-[4px] whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      round: {
        true: "rounded-full",
        false: "rounded-[4px]",
      },
      device: {
        web: "justify-between border border-solid border-grey-40 bg-grey-10 text-size-12 leading-[16px] font-normal tracking-[-0.12px]",
        mobile: "justify-center border-0 text-size-13 leading-[20px] font-semibold tracking-[-0.13px]",
      },
      state: {
        placeholder: "",
        typed: "",
      },
    },
    compoundVariants: [
      // 배경: web 은 항상 흰색(device 클래스), mobile 만 state 별 채움
      { device: "mobile", state: "placeholder", class: "bg-grey-20" },
      { device: "mobile", state: "typed", class: "bg-blue-20" },
    ],
    defaultVariants: {
      round: false,
      device: "web",
      state: "placeholder",
    },
  },
)

export type ChipVariants = VariantProps<typeof chipVariants>

export interface ChipProps {
  /** square(false) / circle(true) */
  round?: boolean
  /** web=흰배경+보더 / mobile=채움. 기본 web */
  device?: "web" | "mobile"
  /** placeholder=미선택(회색) / typed=값 있음. 기본 placeholder */
  state?: "placeholder" | "typed"
  /** typed 시 라벨 옆 `+N` (informative 색) */
  count?: number | string
  /** 우측 chevron 표시 (드롭다운 필터). 기본 true */
  chevron?: boolean
  class?: string
}

/** 라벨 텍스트 색 — device × state 조합 */
export const chipLabelColor: Record<
  NonNullable<ChipProps["device"]>,
  Record<NonNullable<ChipProps["state"]>, string>
> = {
  web: {
    placeholder: "text-grey-60",
    typed: "text-grey-90",
  },
  mobile: {
    placeholder: "text-grey-60",
    typed: "text-cta-primary",
  },
}
