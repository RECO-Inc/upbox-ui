import { HTMLAttributes } from 'vue';
import { CalendarDate } from '@internationalized/date';
import { InputFrameVariantProps } from '../input-frame';
type __VLS_Props = {
    modelValue?: CalendarDate | null;
    variant?: InputFrameVariantProps["variant"];
    size?: InputFrameVariantProps["size"];
    error?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (value: CalendarDate | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: CalendarDate | null) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: CalendarDate | null;
    size: "small" | "large" | "regular" | null;
    error: boolean;
    variant: "default" | "filled" | "bottomline" | null;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
