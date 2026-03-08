import { TabsTriggerProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { TabsTriggerVariants } from '.';
interface Props extends TabsTriggerProps {
    class?: HTMLAttributes["class"];
    variant?: TabsTriggerVariants["variant"];
    color?: TabsTriggerVariants["color"];
    size?: TabsTriggerVariants["size"];
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
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "small" | "large" | "regular" | "xlarge" | null;
    color: "navy" | "grey" | null;
    variant: "default" | "box" | "round" | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
