import { CalendarRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { DateValue } from '@internationalized/date';
import { CalendarShortcutItem } from './calendarShortcutItems';
export interface Props extends CalendarRootProps {
    class?: HTMLAttributes["class"];
    showFooter?: boolean;
    showQuickPresets?: boolean;
    /** 단축 막대에 노출할 항목. 정책상 일부만 필요하면 골라서 넘긴다. */
    shortcutItems?: CalendarShortcutItem[];
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        shortcut?(_: {
            items: {
                disabled: boolean;
                label: string;
                months: number;
            }[];
            select: (months: number) => void;
        }): any;
        reset?(_: {
            onReset: () => void;
        }): any;
        done?(_: {
            onDone: () => void;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: DateValue | DateValue[] | undefined) => any;
    reset: () => any;
    "update:placeholder": (value: DateValue | undefined) => any;
    change: (value: Date | null) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: DateValue | DateValue[] | undefined) => any) | undefined;
    onReset?: (() => any) | undefined;
    "onUpdate:placeholder"?: ((value: DateValue | undefined) => any) | undefined;
    onChange?: ((value: Date | null) => any) | undefined;
}>, {
    showQuickPresets: boolean;
    showFooter: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
