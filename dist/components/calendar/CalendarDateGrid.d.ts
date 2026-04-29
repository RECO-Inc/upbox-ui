import { CalendarRootProps } from 'reka-ui';
import { WeekStartsOn } from 'reka-ui/date';
import { HTMLAttributes } from 'vue';
import { DateValue } from '@internationalized/date';
type __VLS_Props = {
    class?: HTMLAttributes["class"];
    locale: string;
    weekStartsOn: WeekStartsOn;
    placeholder: CalendarRootProps["placeholder"];
    showQuickPresets?: boolean;
    showFooter?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        reset?(_: {
            onReset: () => void;
        }): any;
        done?(_: {
            onDone: () => void;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    done: () => any;
    reset: () => any;
    shortcutSelect: (months: number) => any;
    clickHeading: () => any;
    "update:placeholder": (value: DateValue | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onDone?: (() => any) | undefined;
    onReset?: (() => any) | undefined;
    onShortcutSelect?: ((months: number) => any) | undefined;
    onClickHeading?: (() => any) | undefined;
    "onUpdate:placeholder"?: ((value: DateValue | undefined) => any) | undefined;
}>, {
    showQuickPresets: boolean;
    showFooter: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
