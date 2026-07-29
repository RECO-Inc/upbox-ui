import type { ComputedRef, InjectionKey } from "vue"

/** Select root 에서 Trigger 로 clearable 여부를 전달 */
export const SELECT_CLEARABLE_KEY
  = Symbol("SelectClearable") as InjectionKey<ComputedRef<boolean>>
