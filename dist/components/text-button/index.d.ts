import { VariantProps } from 'class-variance-authority';
export { default as TextButton } from './TextButton';
export declare const textButtonVariants: (props?: ({
    variant?: "destructive" | "secondary" | null | undefined;
    size?: "small" | "xsmall" | "2xsmall" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TextButtonVariants = VariantProps<typeof textButtonVariants>;
