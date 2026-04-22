import { HTMLAttributes } from 'vue';
export interface EnhancedTextareaProps {
    variant?: 'default' | 'filled' | 'bottomline';
    size?: 'small' | 'regular' | 'large';
    error?: boolean;
    modelValue?: string | number;
    defaultValue?: string | number;
    class?: HTMLAttributes['class'];
    counter?: boolean;
    maxLength?: number;
    byteMode?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    autoResize?: boolean;
    minHeight?: number;
    maxHeight?: number;
    rows?: number;
}
declare const _default: import('vue').DefineComponent<EnhancedTextareaProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (payload: string | number) => any;
}, string, import('vue').PublicProps, Readonly<EnhancedTextareaProps> & Readonly<{
    "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "regular" | "large";
    error: boolean;
    variant: "default" | "filled" | "bottomline";
    readonly: boolean;
    byteMode: boolean;
    counter: boolean;
    autoResize: boolean;
    minHeight: number;
    maxHeight: number;
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    textareaRef: HTMLTextAreaElement;
}, any>;
export default _default;
