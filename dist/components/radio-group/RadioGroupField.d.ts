import { HTMLAttributes } from 'vue';
import { SelectOption } from '../../lib/options';
/** reka RadioGroup 은 string value 기반 → 내부에서 String 매핑, emit 시 원본 타입 복원 */
type RadioValue = string | number;
type __VLS_Props = {
    modelValue?: RadioValue | null;
    options: SelectOption<RadioValue>[];
    /** 배치 방향 (default: vertical) */
    orientation?: "horizontal" | "vertical";
    size?: "small" | "regular" | "large";
    /** 미지정 시 RadioGroupItem 이 Form 에러 컨텍스트로 fallback */
    error?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    name?: string;
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: RadioValue) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: RadioValue) => any) | undefined;
}>, {
    disabled: boolean;
    orientation: "horizontal" | "vertical";
    size: "small" | "regular" | "large";
    readOnly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
