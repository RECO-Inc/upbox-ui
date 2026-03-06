import { VariantProps } from 'class-variance-authority';
export { default as Toggle } from './Toggle';
export declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export type ToggleVariants = VariantProps<typeof toggleVariants>;
