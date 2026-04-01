import { VariantProps } from 'class-variance-authority';
export { default as Button } from './Button';
export declare const buttonVariants: (props?: ({
    variant?: "primary" | "destructive" | "secondary" | "tertiary" | null | undefined;
    style?: "filled" | "outlined" | null | undefined;
    size?: "small" | "large" | "xsmall" | "regular" | "xlarge" | null | undefined;
    block?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
