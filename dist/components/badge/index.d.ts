import { VariantProps } from 'class-variance-authority';
export { default as Badge } from './Badge';
export declare const badgeVariants: (props?: ({
    variant?: "error" | "base" | "primary" | "positive" | "info" | "warning" | null | undefined;
    size?: "small" | "regular" | "xsmall" | "xxsmall" | null | undefined;
    deep?: boolean | null | undefined;
    outline?: boolean | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
