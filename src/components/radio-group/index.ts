export { default as RadioGroup } from "./RadioGroup.vue"
export { default as RadioGroupItem } from "./RadioGroupItem.vue"

export interface RadioGroupItemProps {
  size?: "small" | "regular" | "large"
  error?: boolean
  readOnly?: boolean
  class?: string
}
