import type { ComputedRef, InjectionKey, Ref } from "vue"

export type FieldSize = "small" | "regular" | "large"

export interface FieldControlBindings {
  modelValue?: unknown
  "onUpdate:modelValue"?: (value: unknown) => void
  onBlur?: (e?: Event) => void
}

export const FORM_ITEM_INJECTION_KEY
  = Symbol() as InjectionKey<string>

export const FORM_ERROR_INJECTION_KEY
  = Symbol() as InjectionKey<ComputedRef<boolean>>

export const FORM_SIZE_INJECTION_KEY
  = Symbol() as InjectionKey<ComputedRef<FieldSize>>

export const FIELD_CONTROL_INJECTION_KEY
  = Symbol() as InjectionKey<Ref<FieldControlBindings>>
