import { VariantProps } from 'class-variance-authority';
export { default as Button } from './Button';
export declare const buttonVariants: (props?: ({
    variant?: "error" | "primary" | "info" | "positive" | "usually" | "assistant" | null | undefined;
    style?: "text" | "filled" | "outlined" | null | undefined;
    size?: "small" | "large" | "xsmall" | "regular" | "xlarge" | null | undefined;
    block?: boolean | null | undefined;
    round?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
