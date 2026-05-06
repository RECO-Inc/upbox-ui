import { HTMLAttributes } from 'vue';
import { Time } from '@internationalized/date';
type __VLS_Props = {
    modelValue?: Time | null;
    title?: string;
    showClose?: boolean;
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: Time | null) => any;
    change: (value: Time | null) => any;
    close: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: Time | null) => any) | undefined;
    onChange?: ((value: Time | null) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    modelValue: Time | null;
    title: string;
    showClose: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    meridiemCol: HTMLDivElement;
    hourCol: HTMLDivElement;
    minuteCol: HTMLDivElement;
}, HTMLElement>;
export default _default;
