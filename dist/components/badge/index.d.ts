import { VariantProps } from 'class-variance-authority';
export { default as Badge } from './Badge';
export declare const badgeVariants: (props?: ({
    variant?: "neutral" | "negative" | "positive" | "informative" | "warning" | null | undefined;
    tone?: "subtle" | "solid" | "outline" | null | undefined;
    shape?: "square" | "round" | null | undefined;
    size?: "3xsmall" | "2xsmall" | "xsmall" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
export declare const badgeCountVariants: (props?: ({
    variant?: "neutral" | "negative" | "positive" | "informative" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeCountVariants = VariantProps<typeof badgeCountVariants>;
