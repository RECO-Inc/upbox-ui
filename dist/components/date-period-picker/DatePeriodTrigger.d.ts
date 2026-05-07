import { HTMLAttributes } from 'vue';
import { DatePeriodValue } from './datePeriodTypes';
type __VLS_Props = {
    modelValue?: DatePeriodValue | null;
    startPlaceholder?: string;
    endPlaceholder?: string;
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: DatePeriodValue | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: DatePeriodValue | null) => any) | undefined;
}>, {
    modelValue: DatePeriodValue | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
