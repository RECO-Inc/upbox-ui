import { VariantProps } from 'class-variance-authority';
export { default as Badge } from './Badge';
export declare const badgeVariants: (props?: ({
    variant?: "neutral" | "negative" | "positive" | "informative" | "warning" | null | undefined;
    tone?: "soft" | "solid" | "outline" | null | undefined;
    round?: boolean | null | undefined;
    size?: "3xsmall" | "2xsmall" | "xsmall" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
export interface BadgeProps {
    variant?: "neutral" | "negative" | "positive" | "informative" | "warning";
    tone?: "soft" | "solid" | "outline";
    size?: "3xsmall" | "2xsmall" | "xsmall";
    round?: boolean;
    class?: string;
}
export declare const badgeCountVariants: (props?: ({
    variant?: "neutral" | "negative" | "positive" | "informative" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeCountVariants = VariantProps<typeof badgeCountVariants>;
