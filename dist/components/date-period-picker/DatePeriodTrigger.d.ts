import { HTMLAttributes } from 'vue';
import { InputFrameVariantProps } from '../input-frame';
import { DatePeriodValue } from './datePeriodTypes';
type __VLS_Props = {
    modelValue?: DatePeriodValue | null;
    variant?: InputFrameVariantProps["variant"];
    size?: InputFrameVariantProps["size"];
    error?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    startPlaceholder?: string;
    endPlaceholder?: string;
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: DatePeriodValue | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: DatePeriodValue | null) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: DatePeriodValue | null;
    size: "small" | "large" | "regular" | null;
    error: boolean;
    variant: "default" | "filled" | "bottomline" | null;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
