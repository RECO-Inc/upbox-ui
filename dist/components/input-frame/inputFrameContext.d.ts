import { ComputedRef, InjectionKey } from 'vue';
import { InputFrameVariantProps } from './inputFrameVariants';
export type InputFrameContextSize = NonNullable<InputFrameVariantProps["size"]>;
export interface InputFrameContext {
    size: ComputedRef<InputFrameContextSize>;
}
export declare const INPUT_FRAME_CONTEXT_KEY: InjectionKey<InputFrameContext>;
