import { VariantProps } from 'class-variance-authority';
export { default as Badge } from './Badge';
export declare const badgeVariants: (props?: ({
    variant?: "base" | "error" | "primary" | "info" | "positive" | "warning" | null | undefined;
    size?: "small" | "xxsmall" | "xsmall" | "regular" | null | undefined;
    deep?: boolean | null | undefined;
    outline?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
