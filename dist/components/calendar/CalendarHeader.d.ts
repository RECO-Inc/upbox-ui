import { CalendarHeaderProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { CalendarDate } from '@internationalized/date';
type __VLS_Props = CalendarHeaderProps & {
    class?: HTMLAttributes["class"];
    placeholder: CalendarDate;
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
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    prevYear: (delta: number) => any;
    nextYear: (delta: number) => any;
    clickHeading: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onPrevYear?: ((delta: number) => any) | undefined;
    onNextYear?: ((delta: number) => any) | undefined;
    onClickHeading?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
