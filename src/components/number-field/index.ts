export { default as NumberField } from "./NumberField.vue"
export { default as NumberFieldRoot } from "./NumberFieldRoot.vue"
export { default as NumberFieldContent } from "./NumberFieldContent.vue"
export { default as NumberFieldDecrement } from "./NumberFieldDecrement.vue"
export { default as NumberFieldIncrement } from "./NumberFieldIncrement.vue"
export { default as NumberFieldInput } from "./NumberFieldInput.vue"

export interface NumberFieldProps {
  modelValue?: number
  defaultValue?: number
  variant?: "center" | "side"
  size?: "small" | "regular" | "large"
  error?: boolean
  disabled?: boolean
  readonly?: boolean
  min?: number
  max?: number
  step?: number
  /** Intl.NumberFormat 옵션 (소수 자릿수, 천단위 구분, 단위, 통화 등) */
  formatOptions?: Intl.NumberFormatOptions
  placeholder?: string
  name?: string
  id?: string
  required?: boolean
  class?: string
}
