import { HTMLAttributes } from 'vue';
import { InputFrameVariantProps } from '../input-frame';
import { DateMoveModel } from './dateMoveUtils';
/**
 * # 이전/다음 달로 `modelValue` 를 월 단위 이동한다.
 * - DatePicker 혹은 DatePeriodPicker 를 품는다. 그 데이터를 이동시킴.
 */
type __VLS_Props = {
    modelValue?: DateMoveModel;
    variant?: InputFrameVariantProps["variant"];
    size?: InputFrameVariantProps["size"];
    error?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    class?: HTMLAttributes["class"];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            size: import('vue').ComputedRef<import('../input-frame').InputFrameContextSize>;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: DateMoveModel) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: DateMoveModel) => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "large" | "regular" | null;
    error: boolean;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
