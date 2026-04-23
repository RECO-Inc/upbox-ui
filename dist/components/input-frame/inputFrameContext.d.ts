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
type InputFrameLocalDesign = {
    variant?: InputFrameVariantProps["variant"];
    size?: InputFrameVariantProps["size"];
    error?: boolean;
    readonly?: boolean;
    disabled?: boolean;
};
/**
 * 상위 `InputFrame`에서 주입된 디자인이 있으면 그 값을 쓰고, 없을 때만 `local`을 사용한다.
 * `InputFrame` 내부·날짜 입력 등 껍데기 밖/안에서 동일한 규칙을 쓰기 위한 composable.
 */
export declare function useInputFrameDesign(getLocal: () => InputFrameLocalDesign): {
    variant: ComputedRef<InputFrameContextVariant>;
    size: ComputedRef<InputFrameContextSize>;
    error: ComputedRef<boolean>;
    readonly: ComputedRef<boolean>;
    disabled: ComputedRef<boolean>;
};
export {};
