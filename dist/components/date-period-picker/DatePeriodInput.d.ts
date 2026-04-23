import { HTMLAttributes } from 'vue';
import { InputFrameVariantProps } from '../input-frame';
import { DatePeriodValue } from './datePeriodTypes';
type __VLS_Props = {
    modelValue?: DatePeriodValue | null;
    size?: InputFrameVariantProps["size"];
    readonly?: boolean;
    disabled?: boolean;
    startPlaceholder?: string;
    endPlaceholder?: string;
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: DatePeriodValue | null) => any;
    "update:draftError": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: DatePeriodValue | null) => any) | undefined;
    "onUpdate:draftError"?: ((value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: DatePeriodValue | null;
    size: "small" | "large" | "regular" | null;
    readonly: boolean;
    startPlaceholder: string;
    endPlaceholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
