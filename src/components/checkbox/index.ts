import type { SelectOption } from "../../lib/options"

export { default as Checkbox } from "./Checkbox.vue"
export { default as CheckboxGroupField } from "./CheckboxGroupField.vue"

export interface CheckboxProps {
  size?: "small" | "regular" | "large"
  error?: boolean
  readOnly?: boolean
  disabled?: boolean
  class?: string
}

export interface CheckboxGroupFieldProps {
  modelValue?: (string | number)[] | null
  options: SelectOption<string | number>[]
  orientation?: "horizontal" | "vertical"
  size?: "small" | "regular" | "large"
  error?: boolean
  readOnly?: boolean
  disabled?: boolean
  class?: string
}
