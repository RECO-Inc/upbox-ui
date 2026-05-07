import type { InjectionKey, Ref } from "vue"
import type { DateMoveModel } from "../date-period-picker/datePeriodTypes"

export const DATE_MOVE_MODEL_KEY = Symbol() as InjectionKey<Ref<DateMoveModel | undefined>>
