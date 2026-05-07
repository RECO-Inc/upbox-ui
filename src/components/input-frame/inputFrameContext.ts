import type { ComputedRef, InjectionKey } from "vue"
import { computed, inject, provide } from "vue"
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

export type InputFrameDesignProps = {
  variant?: InputFrameVariantProps["variant"]
  size?: InputFrameVariantProps["size"]
  error?: boolean
  readonly?: boolean
  disabled?: boolean
}

/**
 * # 공통 디자인 속성 추출
 * - variant, size, error, readonly, disabled 속성을 추출
 * @param p 컴포넌트 props
 * @returns 공통 디자인 속성
 */
export function pickInputFrameDesign(
  p: InputFrameDesignProps & Record<string, unknown>,
): InputFrameDesignProps {
  return {
    variant: p.variant,
    size: p.size,
    error: p.error,
    readonly: p.readonly,
    disabled: p.disabled,
  }
}

/**
 * # 공통 디자인 속성 병합
 * @param getLocal 컴포넌트 props 
 * @param parent inject 된 상위 디자인
 * @returns 공통 디자인 속성
 */
function buildInputFrameContext(
  getLocal: () => InputFrameDesignProps,
  parent: InputFrameContext | null,
): InputFrameContext {
  return {
    variant: computed(
      () => getLocal().variant
        ?? parent?.variant.value
        ?? "default",
    ),
    size: computed(
      () => getLocal().size
        ?? parent?.size.value
        ?? "regular",
    ),
    error: computed(
      () => getLocal().error
        ?? parent?.error.value
        ?? false,
    ),
    readonly: computed(
      () => getLocal().readonly
        ?? parent?.readonly.value
        ?? false,
    ),
    disabled: computed(
      () => getLocal().disabled
        ?? parent?.disabled.value
        ?? false,
    ),
  }
}

/**
 * props 를 넘기지 않은 필드(`undefined`)는 inject 된 상위 디자인을 쓴다. (최소 변경 useInputFrameDesign 쪽과 동일 규칙)
 */
export function useInputFrameDesign(
  getLocal: () => InputFrameDesignProps,
): InputFrameContext {
  const parent = inject(INPUT_FRAME_CONTEXT_KEY, null)
  return buildInputFrameContext(getLocal, parent)
}

/**
 * inject → 병합 → provide 를 한 번에. InputFrame, DateMove, DatePicker 래퍼 등.
 */
export function useInputFrameInjectProvide(
  getLocal: () => InputFrameDesignProps,
): InputFrameContext {
  const parent = inject(INPUT_FRAME_CONTEXT_KEY, null)
  const design = buildInputFrameContext(getLocal, parent)
  provide(INPUT_FRAME_CONTEXT_KEY, design)
  return design
}
