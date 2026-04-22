import type { ComputedRef, InjectionKey } from "vue"
import type { InputFrameVariantProps } from "./inputFrameVariants"

export type InputFrameContextSize = NonNullable<InputFrameVariantProps["size"]>

export interface InputFrameContext {
  size: ComputedRef<InputFrameContextSize>
}

export const INPUT_FRAME_CONTEXT_KEY
  = Symbol() as InjectionKey<InputFrameContext>
