import { HTMLAttributes } from 'vue';
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
    startPlaceholder: string;
    endPlaceholder: string;
    preset: DatePeriodPreset;
    doneText: string;
    showClose: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
