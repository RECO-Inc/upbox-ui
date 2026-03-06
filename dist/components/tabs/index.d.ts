import { VariantProps } from 'class-variance-authority';
export { default as Tabs } from './Tabs';
export { default as TabsContent } from './TabsContent';
export { default as TabsList } from './TabsList';
export { default as TabsTrigger } from './TabsTrigger';
export declare const tabsListVariants: (props?: ({
    variant?: "default" | "box" | "round" | null | undefined;
    color?: "navy" | "grey" | null | undefined;
    size?: "sm" | "lg" | "md" | "xl" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export declare const tabsTriggerVariants: (props?: ({
    variant?: "default" | "box" | "round" | null | undefined;
    color?: "navy" | "grey" | null | undefined;
    size?: "sm" | "lg" | "md" | "xl" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export type TabsListVariants = VariantProps<typeof tabsListVariants>;
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>;
