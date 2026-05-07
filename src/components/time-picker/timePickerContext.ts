import type { InjectionKey, Ref } from "vue"
import type { Time } from "@internationalized/date"

export interface TimePickerContext {
  model: Ref<Time | null | undefined>
  draftError: Ref<boolean>
}

export const TIME_PICKER_CTX_KEY = Symbol() as InjectionKey<TimePickerContext>
