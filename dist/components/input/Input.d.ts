import { HTMLAttributes } from 'vue';
export interface EnhancedInputProps {
    variant?: 'default' | 'filled' | 'bottomline';
    size?: 'small' | 'regular' | 'large';
    error?: boolean;
    modelValue?: string | number;
    defaultValue?: string | number;
    class?: HTMLAttributes['class'];
    clearable?: boolean;
    password?: boolean;
    maxLength?: number;
    byteMode?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    placeholder?: string;
    type?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<EnhancedInputProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
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
    byteMode: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
