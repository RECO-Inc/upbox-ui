import { SwitchRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { VariantProps } from 'class-variance-authority';
declare const switchVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
type SwitchVariants = VariantProps<typeof switchVariants>;
interface Props extends SwitchRootProps {
    class?: HTMLAttributes["class"];
    size?: SwitchVariants["size"];
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        thumb?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (payload: boolean) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((payload: boolean) => any) | undefined;
}>, {
    size: "sm" | "lg" | "md" | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
