import { VariantProps } from 'class-variance-authority';
export { default as BadgeDivider } from './BadgeDivider';
export declare const badgeDividerVariants: (props?: ({
    variant?: "navy" | "green" | null | undefined;
    size?: "3xsmall" | "2xsmall" | "xsmall" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeDividerVariants = VariantProps<typeof badgeDividerVariants>;
export interface BadgeDividerProps {
    variant?: "green" | "navy";
    size?: "3xsmall" | "2xsmall" | "xsmall";
    class?: string;
}
