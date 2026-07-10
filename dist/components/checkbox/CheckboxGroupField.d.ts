import { HTMLAttributes } from 'vue';
import { SelectOption } from '../../lib/options';
/** reka CheckboxGroupRoot 는 AcceptableValue 제네릭 → number 도 String 매핑 없이 그대로 보존된다 */
type CheckboxValue = string | number;
type __VLS_Props = {
    modelValue?: CheckboxValue[] | null;
    options: SelectOption<CheckboxValue>[];
    /** 배치 방향 (default: vertical) */
    orientation?: "horizontal" | "vertical";
    size?: "small" | "regular" | "large";
    /** 미지정 시 Checkbox 가 Form 에러 컨텍스트로 fallback */
    error?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    class?: HTMLAttributes["class"];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: CheckboxValue[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: CheckboxValue[]) => any) | undefined;
}>, {
    disabled: boolean;
    orientation: "horizontal" | "vertical";
    size: "small" | "regular" | "large";
    readOnly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
