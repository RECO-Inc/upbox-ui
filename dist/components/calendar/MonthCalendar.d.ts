import { HTMLAttributes } from 'vue';
import { CalendarDate } from '@internationalized/date';
type __VLS_Props = {
    class?: HTMLAttributes["class"];
};
type __VLS_PublicProps = {
    modelValue?: CalendarDate | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: CalendarDate | null) => any;
    done: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: CalendarDate | null) => any) | undefined;
    onDone?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
