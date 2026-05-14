import { VariantProps } from 'class-variance-authority';
export { default as Chip } from './Chip';
export declare const chipVariants: (props?: ({
    round?: boolean | null | undefined;
    size?: "small" | "xsmall" | null | undefined;
    state?: "default" | "selected" | "active" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ChipVariants = VariantProps<typeof chipVariants>;
export interface ChipProps {
    round?: boolean;
    size?: "xsmall" | "small";
    state?: "default" | "selected" | "active";
    removable?: boolean;
    dropdown?: boolean;
    count?: number | string;
    class?: string;
}
export declare const chipIconSize: Record<NonNullable<ChipVariants["size"]>, string>;
export declare const chipCountColor: Record<NonNullable<ChipVariants["state"]>, string>;
