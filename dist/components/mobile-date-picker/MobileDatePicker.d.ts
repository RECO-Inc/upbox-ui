import { HTMLAttributes } from 'vue';
import { DateValue, CalendarDate } from '@internationalized/date';
import { InputFrameDesignProps } from '../input-frame';
type __VLS_Props = InputFrameDesignProps & {
    class?: HTMLAttributes["class"];
    /** 선택 가능한 최소 날짜(포함). 이전 날짜 셀은 비활성. */
    minValue?: DateValue | null;
    /** 선택 가능한 최대 날짜(포함). 이후 날짜 셀은 비활성.(예: 오늘 → 미래 차단) */
    maxValue?: DateValue | null;
};
type __VLS_PublicProps = {
    modelValue?: CalendarDate | null;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: CalendarDate | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: CalendarDate | null) => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "large" | "regular" | null;
    error: boolean;
    variant: "default" | "filled" | "bottomline" | null;
    minValue: DateValue | null;
    maxValue: DateValue | null;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
