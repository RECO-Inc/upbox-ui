import type { HTMLAttributes } from "vue"
import type { SelectOption } from "../../lib/options"

export interface SelectFieldProps<V = unknown> {
  modelValue?: V | null
  options: SelectOption<V>[]
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  /** InputFrame design props (FieldPattern.mdx 표준) */
  variant?: "default" | "filled" | "bottomline"
  size?: "small" | "regular" | "large"
  /** 미지정 시 FieldContainer 에러 컨텍스트 자동 fallback */
  error?: boolean
  name?: string
  required?: boolean
  class?: HTMLAttributes["class"]
}
