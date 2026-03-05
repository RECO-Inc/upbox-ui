import { CalendarHeadingProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
interface Props extends CalendarHeadingProps {
    class?: HTMLAttributes["class"];
    clickable?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        default: (props: {
            headingValue: string;
        }) => any;
    }> & {
        default: (props: {
            headingValue: string;
        }) => any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: (() => any) | undefined;
}>, {
    clickable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
