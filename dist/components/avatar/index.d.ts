import { VariantProps } from 'class-variance-authority';
export { default as Avatar } from './Avatar';
export { default as AvatarFallback } from './AvatarFallback';
export { default as AvatarImage } from './AvatarImage';
export declare const avatarVariant: (props?: ({
    size?: "sm" | "base" | "lg" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export type AvatarVariants = VariantProps<typeof avatarVariant>;
