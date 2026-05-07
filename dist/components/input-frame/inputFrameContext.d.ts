import { ComputedRef, InjectionKey } from 'vue';
import { InputFrameVariantProps } from './inputFrameVariants';
export type InputFrameContextSize = NonNullable<InputFrameVariantProps["size"]>;
export type InputFrameContextVariant = NonNullable<InputFrameVariantProps["variant"]>;
export interface InputFrameContext {
    variant: ComputedRef<InputFrameContextVariant>;
    size: ComputedRef<InputFrameContextSize>;
    error: ComputedRef<boolean>;
    readonly: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
}
export declare const INPUT_FRAME_CONTEXT_KEY: InjectionKey<InputFrameContext>;
export type InputFrameDesignProps = {
    variant?: InputFrameVariantProps["variant"];
    size?: InputFrameVariantProps["size"];
    error?: boolean;
    readonly?: boolean;
    disabled?: boolean;
};
/**
 * # 공통 디자인 속성 추출
 * - variant, size, error, readonly, disabled 속성을 추출
 * @param p 컴포넌트 props
 * @returns 공통 디자인 속성
 */
export declare function pickInputFrameDesign(p: InputFrameDesignProps & Record<string, unknown>): InputFrameDesignProps;
/**
 * props 를 넘기지 않은 필드(`undefined`)는 inject 된 상위 디자인을 쓴다. (최소 변경 useInputFrameDesign 쪽과 동일 규칙)
 */
export declare function useInputFrameDesign(getLocal: () => InputFrameDesignProps): InputFrameContext;
/**
 * inject → 병합 → provide 를 한 번에. InputFrame, DateMove, DatePicker 래퍼 등.
 */
export declare function useInputFrameInjectProvide(getLocal: () => InputFrameDesignProps): InputFrameContext;
