import { HTMLAttributes } from 'vue';
import { CalendarDate } from '@internationalized/date';
import { InputFrameVariantProps } from '../input-frame';
type __VLS_Props = {
    modelValue?: CalendarDate | null;
    placeholder?: string;
    variant?: InputFrameVariantProps["variant"];
    size?: InputFrameVariantProps["size"];
    error?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    class?: HTMLAttributes["class"];
    popoverContentClass?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: CalendarDate | null | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: CalendarDate | null | undefined) => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "large" | "regular" | null;
    placeholder: string;
    error: boolean;
    variant: "default" | "filled" | "bottomline" | null;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
