import { HTMLAttributes } from 'vue';
import { DateValue } from '@internationalized/date';
import { InputFrameDesignProps } from '../input-frame';
import { DatePeriodValue } from '../date-period-picker/datePeriodTypes';
type __VLS_Props = InputFrameDesignProps & {
    modelValue?: DatePeriodValue | null;
    startPlaceholder?: string;
    endPlaceholder?: string;
    class?: HTMLAttributes["class"];
    /** 선택 가능한 최소 날짜(포함). 이전 날짜 셀은 비활성. */
    minValue?: DateValue | null;
    /** 선택 가능한 최대 날짜(포함). 이후 날짜 셀은 비활성.(예: 오늘 → 미래 차단) */
    maxValue?: DateValue | null;
    /**
     * 최대 조회기간(일). 설정 시 시작일을 고른 뒤 그로부터 ±maxRangeDays 를 벗어난 날짜 셀을 비활성한다.
     * 시작일 확정 전에는 제약이 없다.
     */
    maxRangeDays?: number;
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
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: DatePeriodValue | null | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: DatePeriodValue | null | undefined) => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "large" | "regular" | null;
    error: boolean;
    variant: "default" | "filled" | "bottomline" | null;
    maxValue: DateValue | null;
    minValue: DateValue | null;
    readonly: boolean;
    startPlaceholder: string;
    endPlaceholder: string;
    maxRangeDays: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
