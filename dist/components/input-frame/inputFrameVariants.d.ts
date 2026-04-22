import { VariantProps } from 'class-variance-authority';
/**
 * input, select, date 등의 값 표시 부분 공통 껍데기
 * - 혹시나 재사용할까 싶어서..
 */
export declare const inputFrameVariants: (props?: ({
    variant?: "default" | "filled" | "bottomline" | null | undefined;
    size?: "small" | "large" | "regular" | null | undefined;
    error?: boolean | null | undefined;
    readonly?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type InputFrameVariantProps = VariantProps<typeof inputFrameVariants>;
