import { DateRange, RangeCalendarRootProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
import { DateValue } from '@internationalized/date';
interface Props extends RangeCalendarRootProps {
    class?: HTMLAttributes["class"];
    /** 시작·종료 시각 포함 */
    datetime?: boolean;
    /** 초 선택 */
    seconds?: boolean;
    showFooter?: boolean;
    /** 1·3·6개월·1년 단축 (DateCalendar 와 동일) */
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
    "update:modelValue": (value: DateRange) => any;
    reset: () => any;
    "update:placeholder": (value: DateValue | undefined) => any;
    change: (value: {
        first: Date | null;
        last: Date | null;
    }) => any;
    "update:startValue": (value: DateValue | undefined) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: DateRange) => any) | undefined;
    onReset?: (() => any) | undefined;
    "onUpdate:placeholder"?: ((value: DateValue | undefined) => any) | undefined;
    onChange?: ((value: {
        first: Date | null;
        last: Date | null;
    }) => any) | undefined;
    "onUpdate:startValue"?: ((value: DateValue | undefined) => any) | undefined;
}>, {
    showQuickPresets: boolean;
    showFooter: boolean;
    datetime: boolean;
    seconds: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
