import { HTMLAttributes } from 'vue';
import { InputFrameVariantProps } from '../input-frame';
import { DatePeriodValue } from './datePeriodTypes';
type __VLS_Props = {
    modelValue?: DatePeriodValue | null;
    startPlaceholder?: string;
    endPlaceholder?: string;
    variant?: InputFrameVariantProps["variant"];
    size?: InputFrameVariantProps["size"];
    error?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    class?: HTMLAttributes["class"];
    popoverContentClass?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: DatePeriodValue | null | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: DatePeriodValue | null | undefined) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: DatePeriodValue | null;
    size: "small" | "large" | "regular" | null;
    error: boolean;
    variant: "default" | "filled" | "bottomline" | null;
    readonly: boolean;
    startPlaceholder: string;
    endPlaceholder: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
