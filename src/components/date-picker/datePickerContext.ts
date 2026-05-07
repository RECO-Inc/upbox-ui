import type { InjectionKey, Ref } from "vue"
import type { CalendarDate } from "@internationalized/date"

export interface DatePickerContext {
  model: Ref<CalendarDate | null | undefined>
  draftError: Ref<boolean>
}

export const DATE_PICKER_CTX_KEY = Symbol() as InjectionKey<DatePickerContext>
