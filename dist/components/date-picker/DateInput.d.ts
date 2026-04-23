import { HTMLAttributes } from 'vue';
import { CalendarDate } from '@internationalized/date';
import { InputFrameVariantProps } from '../input-frame';
type __VLS_Props = {
    modelValue?: CalendarDate | null;
    size?: InputFrameVariantProps["size"];
    readonly?: boolean;
    disabled?: boolean;
    /** 비어 있을 때(입력 가능할 때)만 표시. 미지정이면 YYYY-MM-DD */
    placeholder?: string;
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: CalendarDate | null) => any;
    "update:draftError": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: CalendarDate | null) => any) | undefined;
    "onUpdate:draftError"?: ((value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    modelValue: CalendarDate | null;
    size: "small" | "large" | "regular" | null;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
