import { VariantProps } from 'class-variance-authority';
export { default as Sheet } from './Sheet';
export { default as SheetClose } from './SheetClose';
export { default as SheetContent } from './SheetContent';
export { default as SheetDescription } from './SheetDescription';
export { default as SheetFooter } from './SheetFooter';
export { default as SheetHeader } from './SheetHeader';
export { default as SheetTitle } from './SheetTitle';
export { default as SheetTrigger } from './SheetTrigger';
export declare const sheetVariants: (props?: ({
    side?: "bottom" | "left" | "right" | "top" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SheetVariants = VariantProps<typeof sheetVariants>;
export interface SheetContentProps {
    side?: "top" | "bottom" | "left" | "right";
    class?: string;
}
