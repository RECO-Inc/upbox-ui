import { VariantProps } from 'class-variance-authority';
/**
 * input·select·date 등 “값이 들어가는 한 줄 필드”의 공통 껍데기.
 * 포커스는 자식(input·button)에 맞추기 위해 `focus-within` 사용.
 */
export declare const inputFrameVariants: (props?: ({
    variant?: "default" | "filled" | "bottomline" | null | undefined;
    size?: "small" | "large" | "regular" | null | undefined;
    error?: boolean | null | undefined;
    readonly?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type InputFrameVariantProps = VariantProps<typeof inputFrameVariants>;
