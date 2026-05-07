import { Component } from 'vue';
import { VariantProps } from 'class-variance-authority';
export { default as Toggle } from './Toggle';
export declare const toggleTrackVariants: (props?: ({
    size?: "3xsmall" | "2xsmall" | "4xsmall" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const toggleThumbVariants: (props?: ({
    size?: "3xsmall" | "2xsmall" | "4xsmall" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const toggleLabelVariants: (props?: ({
    size?: "3xsmall" | "2xsmall" | "4xsmall" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ToggleTrackVariants = VariantProps<typeof toggleTrackVariants>;
export interface ToggleProps {
    modelValue?: boolean;
    defaultValue?: boolean;
    size?: "4xsmall" | "3xsmall" | "2xsmall";
    disabled?: boolean;
    required?: boolean;
    name?: string;
    value?: string;
    id?: string;
    label?: string;
    asChild?: boolean;
    as?: string | Component;
    class?: string;
}
export interface ToggleEmits {
    "update:modelValue": [value: boolean];
}
