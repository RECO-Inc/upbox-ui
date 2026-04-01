import { VariantProps } from 'class-variance-authority';
export { default as Fab } from './Fab';
export declare const fabVariants: (props?: ({
    fabStyle?: "basic" | "colorfilled" | null | undefined;
    size?: "small" | "xsmall" | "regular" | "medium" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type FabVariants = VariantProps<typeof fabVariants>;
