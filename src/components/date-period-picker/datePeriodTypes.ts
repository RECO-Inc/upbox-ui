import type { CalendarDate } from "@internationalized/date"

export type DatePeriodValue = { start: CalendarDate | null; end: CalendarDate | null }
export type DateMoveModel = CalendarDate | DatePeriodValue | null

export function isDatePeriodValue(v: unknown): v is DatePeriodValue {
  return v !== null && typeof v === "object" && "start" in v && "end" in v
}
