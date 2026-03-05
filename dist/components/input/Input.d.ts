import { HTMLAttributes } from 'vue';
export interface EnhancedInputProps {
    variant?: 'default' | 'filled' | 'bottomline';
    size?: 'small' | 'regular' | 'large';
    error?: boolean;
    modelValue?: string | number;
    defaultValue?: string | number;
    class?: HTMLAttributes['class'];
    label?: string;
    required?: boolean;
    clearable?: boolean;
    password?: boolean;
    errorMessage?: string;
    subfix?: string;
    counter?: boolean;
    maxLength?: number;
    byteMode?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    type?: string;
}
declare const _default: import('vue').DefineComponent<EnhancedInputProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (payload: string | number) => any;
}, string, import('vue').PublicProps, Readonly<EnhancedInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
}>, {
    disabled: boolean;
    type: string;
    size: "small" | "regular" | "large";
    error: boolean;
    variant: "default" | "filled" | "bottomline";
    readonly: boolean;
    clearable: boolean;
    password: boolean;
    counter: boolean;
    byteMode: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
