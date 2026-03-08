import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'vue';
import { ButtonVariants } from '../button';
export { default as InputGroup } from './InputGroup';
export { default as InputGroupAddon } from './InputGroupAddon';
export { default as InputGroupButton } from './InputGroupButton';
export { default as InputGroupInput } from './InputGroupInput';
export { default as InputGroupText } from './InputGroupText';
export { default as InputGroupTextarea } from './InputGroupTextarea';
export declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export type InputGroupVariants = VariantProps<typeof inputGroupAddonVariants>;
export declare const inputGroupButtonVariants: (props?: ({
    size?: "small" | "xsmall" | "icon-xs" | "icon-sm" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export type InputGroupButtonVariants = VariantProps<typeof inputGroupButtonVariants>;
export interface InputGroupButtonProps {
    variant?: ButtonVariants["variant"] | null;
    size?: InputGroupButtonVariants["size"];
    class?: HTMLAttributes["class"];
}
