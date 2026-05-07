import { VariantProps } from 'class-variance-authority';
import { Component } from 'vue';
export { default as Tabs } from './Tabs';
export { default as TabsContent } from './TabsContent';
export { default as TabsList } from './TabsList';
export { default as TabsTrigger } from './TabsTrigger';
export interface TabsProps {
    defaultValue?: string | number;
    modelValue?: string | number;
    orientation?: "horizontal" | "vertical";
    dir?: "ltr" | "rtl";
    activationMode?: "manual" | "automatic";
    unmountOnHide?: boolean;
    asChild?: boolean;
    as?: string | Component;
}
export interface TabsEmits {
    "update:modelValue": [payload: string | number];
}
export declare const tabsListVariants: (props?: ({
    variant?: "box" | "default" | "round" | null | undefined;
    color?: "navy" | "grey" | null | undefined;
    size?: "small" | "large" | "regular" | "xlarge" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const tabsTriggerVariants: (props?: ({
    variant?: "box" | "default" | "round" | null | undefined;
    color?: "navy" | "grey" | null | undefined;
    size?: "small" | "large" | "regular" | "xlarge" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type TabsListVariants = VariantProps<typeof tabsListVariants>;
export type TabsTriggerVariants = VariantProps<typeof tabsTriggerVariants>;
export interface TabsListProps {
    variant?: "default" | "round" | "box";
    color?: "navy" | "grey";
    size?: "small" | "regular" | "large" | "xlarge";
    class?: string;
}
export interface TabsTriggerProps {
    variant?: "default" | "round" | "box";
    color?: "navy" | "grey";
    size?: "small" | "regular" | "large" | "xlarge";
    class?: string;
}
