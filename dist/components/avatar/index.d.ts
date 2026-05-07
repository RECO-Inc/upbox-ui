import { VariantProps } from 'class-variance-authority';
export { default as Avatar } from './Avatar';
export { default as AvatarFallback } from './AvatarFallback';
export { default as AvatarImage } from './AvatarImage';
export declare const avatarVariant: (props?: ({
    size?: "small" | "base" | "large" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type AvatarVariants = VariantProps<typeof avatarVariant>;
export interface AvatarProps {
    size?: "small" | "base" | "large";
    shape?: "circle" | "square";
    class?: string;
}
