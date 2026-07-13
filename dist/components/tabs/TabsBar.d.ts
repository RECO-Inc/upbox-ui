import { HTMLAttributes } from 'vue';
export interface TabItem {
    label: string;
    value: string | number | null;
    disabled?: boolean;
}
type __VLS_Props = {
    modelValue?: string | number | null;
    items: TabItem[];
    variant?: "default" | "round" | "box";
    color?: "navy" | "grey";
    size?: "small" | "regular" | "large" | "xlarge";
    class?: HTMLAttributes["class"];
    /** TabsList 에 적용할 추가 class */
    listClass?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
}>, {
    size: "small" | "regular" | "large" | "xlarge";
    color: "navy" | "grey";
    variant: "default" | "round" | "box";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
