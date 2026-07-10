import { HTMLAttributes } from 'vue';
import { DateValue } from '@internationalized/date';
import { DatePeriodValue } from '../date-period-picker/datePeriodTypes';
export type DatePeriodPreset = "1m" | "3m" | "1y" | "custom";
type __VLS_Props = {
    modelValue?: DatePeriodValue | null;
    preset?: DatePeriodPreset;
    title?: string;
    doneText?: string;
    startPlaceholder?: string;
    endPlaceholder?: string;
    showClose?: boolean;
    class?: HTMLAttributes["class"];
    /** 직접 설정 캘린더의 선택 가능한 최소 날짜(포함). */
    minValue?: DateValue | null;
    /** 직접 설정 캘린더의 선택 가능한 최대 날짜(포함).(예: 오늘 → 미래 차단) */
    maxValue?: DateValue | null;
    /** 최대 조회기간(일). 시작일로부터 초과 범위의 날짜 셀 비활성 + 완료 버튼 검증. */
    maxRangeDays?: number;
    /** maxRangeDays 초과 시 입력 하단에 노출할 인라인 에러 문구. 미지정이면 표시하지 않는다. */
    maxRangeMessage?: string;
    /** 캘린더 드로어 패널 클래스(폭 제한 등) */
    drawerContentClass?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: DatePeriodValue | null) => any;
    done: (value: DatePeriodValue) => any;
    close: () => any;
    "update:preset": (value: DatePeriodPreset) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: DatePeriodValue | null) => any) | undefined;
    onDone?: ((value: DatePeriodValue) => any) | undefined;
    onClose?: (() => any) | undefined;
    "onUpdate:preset"?: ((value: DatePeriodPreset) => any) | undefined;
}>, {
    modelValue: DatePeriodValue | null;
    title: string;
    maxValue: DateValue | null;
    minValue: DateValue | null;
    showClose: boolean;
    startPlaceholder: string;
    endPlaceholder: string;
    maxRangeDays: number;
    drawerContentClass: string | false | Record<string, any> | import('vue').ClassValue[] | null;
    preset: DatePeriodPreset;
    doneText: string;
    maxRangeMessage: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
