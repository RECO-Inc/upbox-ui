import { HTMLAttributes } from 'vue';
import { Time } from '@internationalized/date';
type __VLS_Props = {
    modelValue?: Time | null;
    class?: HTMLAttributes["class"];
    /** "선택 안함" 체크박스 노출 여부 */
    showSkip?: boolean;
    /** 완료 버튼 노출 여부 */
    showFooter?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: Time | null) => any;
    change: (value: Time | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: Time | null) => any) | undefined;
    onChange?: ((value: Time | null) => any) | undefined;
}>, {
    modelValue: Time | null;
    showFooter: boolean;
    showSkip: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
