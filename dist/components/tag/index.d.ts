import { VariantProps } from 'class-variance-authority';
export { default as Tag } from './Tag';
export declare const tagVariants: (props?: ({
    state?: "disabled" | "error" | "enabled" | null | undefined;
    size?: "small" | "3xsmall" | "2xsmall" | "xsmall" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TagVariants = VariantProps<typeof tagVariants>;
export declare const tagCloseIconSize: Record<NonNullable<TagVariants["size"]>, string>;
