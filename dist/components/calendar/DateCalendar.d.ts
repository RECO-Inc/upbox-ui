import { CalendarRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { DateValue } from '@internationalized/date';
export interface Props extends CalendarRootProps {
    class?: HTMLAttributes["class"];
    showFooter?: boolean;
    showQuickPresets?: boolean;
}
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
