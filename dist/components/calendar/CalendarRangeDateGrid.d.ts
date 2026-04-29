import { RangeCalendarRootProps } from 'reka-ui';
import { WeekStartsOn } from 'reka-ui/date';
import { HTMLAttributes } from 'vue';
type __VLS_Props = {
    class?: HTMLAttributes["class"];
    locale: string;
    weekStartsOn: WeekStartsOn;
    placeholder: RangeCalendarRootProps["placeholder"];
    /** 다중 월 패널 배치용 (`RangeCalendar.numberOfMonths` 와 함께) */
    numberOfMonths?: number;
    datetime?: boolean;
    seconds?: boolean;
    showQuickPresets?: boolean;
    showFooter?: boolean;
};
type __VLS_PublicProps = {
    "hour": number;
    "minute": number;
    "second"?: number;
} & __VLS_Props;
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
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    done: () => any;
    reset: () => any;
    shortcutSelect: (months: number) => any;
    clickHeading: () => any;
    "update:placeholder": (value: import('reka-ui').DateValue | undefined) => any;
    "update:hour": (value: number) => any;
    "update:minute": (value: number) => any;
    "update:second": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onDone?: (() => any) | undefined;
    onReset?: (() => any) | undefined;
    onShortcutSelect?: ((months: number) => any) | undefined;
    onClickHeading?: (() => any) | undefined;
    "onUpdate:placeholder"?: ((value: import('reka-ui').DateValue | undefined) => any) | undefined;
    "onUpdate:hour"?: ((value: number) => any) | undefined;
    "onUpdate:minute"?: ((value: number) => any) | undefined;
    "onUpdate:second"?: ((value: number) => any) | undefined;
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
