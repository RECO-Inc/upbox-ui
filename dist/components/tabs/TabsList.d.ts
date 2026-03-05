import { TabsListProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { TabsListVariants } from '.';
interface Props extends TabsListProps {
    class?: HTMLAttributes["class"];
    variant?: TabsListVariants["variant"];
    color?: TabsListVariants["color"];
    size?: TabsListVariants["size"];
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
    size: "small" | "regular" | "large" | "xlarge" | null;
    variant: "default" | "box" | "round" | null;
    color: "navy" | "grey" | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
