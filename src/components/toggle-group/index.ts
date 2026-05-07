export { default as ToggleGroup } from "./ToggleGroup.vue"
export { default as ToggleGroupItem } from "./ToggleGroupItem.vue"

export interface ToggleGroupExtraProps {
  variant?: "default" | "outline"
  size?: "regular" | "small" | "large"
  class?: string
}
