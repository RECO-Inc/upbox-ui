import type { ComputedRef, InjectionKey } from "vue"
import { computed, inject } from "vue"
import type { InputFrameVariantProps } from "./inputFrameVariants"

export type InputFrameContextSize = NonNullable<InputFrameVariantProps["size"]>
export type InputFrameContextVariant = NonNullable<InputFrameVariantProps["variant"]>

export interface InputFrameContext {
  variant: ComputedRef<InputFrameContextVariant>
  size: ComputedRef<InputFrameContextSize>
  error: ComputedRef<boolean>
  readonly: ComputedRef<boolean>
  disabled: ComputedRef<boolean>
}

export const INPUT_FRAME_CONTEXT_KEY
  = Symbol() as InjectionKey<InputFrameContext>

type InputFrameLocalDesign = {
  variant?: InputFrameVariantProps["variant"]
  size?: InputFrameVariantProps["size"]
  error?: boolean
  readonly?: boolean
  disabled?: boolean
}

/**
 * 상위 `InputFrame`에서 주입된 디자인이 있으면 그 값을 쓰고, 없을 때만 `local`을 사용한다.
 * `InputFrame` 내부·날짜 입력 등 껍데기 밖/안에서 동일한 규칙을 쓰기 위한 composable.
 */
export function useInputFrameDesign(
  getLocal: () => InputFrameLocalDesign,
) {
  const parent = inject(INPUT_FRAME_CONTEXT_KEY, null)

  return {
    variant: computed(
      () => parent?.variant.value
        ?? getLocal().variant
        ?? "default",
    ),
    size: computed(
      () => parent?.size.value
        ?? getLocal().size
        ?? "regular",
    ),
    error: computed(
      () => parent?.error.value
        ?? getLocal().error
        ?? false,
    ),
    readonly: computed(
      () => parent?.readonly.value
        ?? getLocal().readonly
        ?? false,
    ),
    disabled: computed(
      () => parent?.disabled.value
        ?? getLocal().disabled
        ?? false,
    ),
  }
}
