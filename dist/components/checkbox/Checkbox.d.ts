import { CheckboxRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { VariantProps } from 'class-variance-authority';
declare const checkboxVariants: (props?: ({
    size?: "small" | "large" | "regular" | null | undefined;
    error?: boolean | null | undefined;
    readOnly?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type CheckboxVariants = VariantProps<typeof checkboxVariants>;
export interface Props extends Omit<CheckboxRootProps, "disabled"> {
    class?: HTMLAttributes["class"];
    size?: CheckboxVariants["size"];
    error?: CheckboxVariants["error"];
    readOnly?: CheckboxVariants["readOnly"];
    disabled?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLSpanElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: boolean | "indeterminate") => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "large" | "regular" | null;
    error: boolean | null;
    readOnly: boolean | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
