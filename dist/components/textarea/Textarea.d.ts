import { HTMLAttributes } from 'vue';
import { InputFrameDesignProps } from '../input-frame';
export interface TextareaProps extends InputFrameDesignProps {
    modelValue?: string | number;
    defaultValue?: string | number;
    class?: HTMLAttributes["class"];
    placeholder?: string;
    /** 카운터(우하단 `현재/최대`) 표시 */
    counter?: boolean;
    /** 카운터 최대값 + `<textarea maxlength>` */
    maxLength?: number;
    /** 글자수 대신 byte 단위로 카운트 */
    byteMode?: boolean;
    /** 입력 양에 따라 자동 높이 (기본 `true`) */
    autoResize?: boolean;
    /** 자동 높이 하한. 미지정 시 size 별 Figma 기본값(small=72, regular=92, large=104) */
    minHeight?: number;
    /** 자동 높이 상한 */
    maxHeight?: number;
    /** `autoResize=false` 일 때 사용하는 기본 행 수 */
    rows?: number;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        footer?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {
        textareaRef: HTMLTextAreaElement;
    };
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TextareaProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (payload: string | number) => any;
}, string, import('vue').PublicProps, Readonly<TextareaProps> & Readonly<{
    "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "large" | "regular" | null;
    error: boolean;
    variant: "default" | "filled" | "bottomline" | null;
    readonly: boolean;
    byteMode: boolean;
    counter: boolean;
    autoResize: boolean;
    maxHeight: number;
    rows: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    textareaRef: HTMLTextAreaElement;
}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
