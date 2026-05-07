import { HTMLAttributes } from 'vue';
import { Time } from '@internationalized/date';
import { InputFrameVariantProps } from '../input-frame';
type __VLS_Props = {
    size?: InputFrameVariantProps["size"];
    readonly?: boolean;
    disabled?: boolean;
    /** 비어 있을 때(입력 가능할 때)만 표시. 미지정이면 "시간 선택" */
    placeholder?: string;
    class?: HTMLAttributes["class"];
};
type __VLS_PublicProps = {
    modelValue?: Time | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: Time | null) => any;
    "update:draftError": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: Time | null) => any) | undefined;
    "onUpdate:draftError"?: ((value: boolean) => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "large" | "regular" | null;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
export default _default;
