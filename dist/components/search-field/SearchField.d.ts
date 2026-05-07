import { SearchFieldProps } from './index';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        filter?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<SearchFieldProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    clear: () => any;
    "update:modelValue": (value: string) => any;
    submit: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<SearchFieldProps> & Readonly<{
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onSubmit?: ((value: string) => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "regular" | "large";
    error: boolean;
    variant: "basic" | "filter";
    readonly: boolean;
    clearable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
