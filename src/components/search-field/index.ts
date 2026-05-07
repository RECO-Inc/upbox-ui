export { default as SearchField } from "./SearchField.vue"

export interface SearchFieldProps {
  modelValue?: string
  defaultValue?: string
  variant?: "basic" | "filter"
  size?: "small" | "regular" | "large"
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  error?: boolean
  /** clear 버튼 표시 여부 (default: true) */
  clearable?: boolean
  class?: string
  // form integration
  name?: string
  id?: string
  autofocus?: boolean
}
