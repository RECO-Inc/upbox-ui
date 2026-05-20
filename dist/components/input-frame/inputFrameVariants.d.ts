import { VariantProps } from 'class-variance-authority';
/**
 * Field 류(InputFrame 사용)와 DropdownFilter 처럼 칩 형태이지만
 * 같은 height/padding/typography 사이즈 체계를 따라야 하는 트리거가
 * 공유하는 단일 진실 소스(size token).
 *
 * 시각 톤(bg/border/...) 은 각자 다르지만 사이즈 분기는 한 곳에서 관리한다.
 */
export declare const inputFrameSizes: {
    readonly small: "h-[32px] min-h-[32px] px-[8px] text-size-12";
    readonly regular: "h-[40px] min-h-[40px] px-[16px] text-size-14";
    readonly large: "h-[48px] min-h-[48px] px-[16px] text-size-16";
};
export type InputFrameSize = keyof typeof inputFrameSizes;
/**
 * input, select, date 등의 값 표시 부분 공통 껍데기
 * - 혹시나 재사용할까 싶어서..
 */
export declare const inputFrameVariants: (props?: ({
    variant?: "default" | "filled" | "bottomline" | null | undefined;
    size?: "small" | "large" | "regular" | null | undefined;
    error?: boolean | null | undefined;
    readonly?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type InputFrameVariantProps = VariantProps<typeof inputFrameVariants>;
