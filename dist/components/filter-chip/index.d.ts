import { VariantProps } from 'class-variance-authority';
export { default as FilterChip } from './FilterChip';
/**
 * Figma `filterChips` (조회용 드롭다운 필터 칩).
 * 축: variant(square/circle) · state(placeholder/typed) · device(web/mobile).
 * - web   : 흰 배경(grey-10) + 회색 보더(grey-40), 12px regular, justify-between
 * - mobile: 보더 없는 채움(placeholder=grey-20 / typed=blue-20), 13px semibold, justify-center
 * 생성·수정용 선택 UI 는 SelectField 를 쓴다.
 */
export declare const filterChipVariants: (props?: ({
    round?: boolean | null | undefined;
    device?: "web" | "mobile" | null | undefined;
    state?: "placeholder" | "typed" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type FilterChipVariants = VariantProps<typeof filterChipVariants>;
export interface FilterChipProps {
    /** square(false) / circle(true) */
    round?: boolean;
    /** web=흰배경+보더 / mobile=채움. 기본 web */
    device?: "web" | "mobile";
    /** placeholder=미선택(회색) / typed=값 있음. 기본 placeholder */
    state?: "placeholder" | "typed";
    /** typed 시 라벨 옆 `+N` (informative 색) */
    count?: number | string;
    /** 우측 chevron 표시 (드롭다운 필터). 기본 true */
    chevron?: boolean;
    class?: string;
}
/** 라벨 텍스트 색 — device × state 조합 */
export declare const filterChipLabelColor: Record<NonNullable<FilterChipProps["device"]>, Record<NonNullable<FilterChipProps["state"]>, string>>;
