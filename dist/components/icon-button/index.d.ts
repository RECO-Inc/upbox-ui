import { VariantProps } from 'class-variance-authority';
export { default as IconButton } from './IconButton';
export declare const iconButtonVariants: (props?: ({
    variant?: "primary" | "destructive" | "secondary" | "tertiary" | null | undefined;
    size?: "small" | "large" | "2xsmall" | "xsmall" | "regular" | "xlarge" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type IconButtonVariants = VariantProps<typeof iconButtonVariants>;
