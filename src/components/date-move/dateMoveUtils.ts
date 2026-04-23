import { CalendarDate, endOfMonth, getLocalTimeZone, today } from "@internationalized/date"
import type { DatePeriodValue } from "../date-period-picker/datePeriodTypes"

/**
 * 단일인 경우 CalendarDate
 * 기간인 경우 DatePeriodValue
 */
export type DateMoveModel = CalendarDate | DatePeriodValue | null

export function isDatePeriodValue(v: unknown): v is DatePeriodValue {
  return v !== null && typeof v === "object" && "start" in v && "end" in v
}

/**
 * 음수 허용. 말일 +1달은 해당 월 말로 클램프(예: 1/31 +1 → 2/28)
 */
export function addMonthsToCalendarDate(date: CalendarDate, months: number): CalendarDate {
  const y = date.year
  const m0 = date.month - 1
  const total = y * 12 + m0 + months
  const newYear = Math.floor(total / 12)
  const newMonth = (total % 12) + 1
  const first = new CalendarDate(newYear, newMonth, 1)
  const last = endOfMonth(first)
  const day = Math.min(date.day, last.day)
  return new CalendarDate(newYear, newMonth, day)
}

/**
 * # 날짜를 월단위로 이동
 * @param v modelValue
 * @param months 
 * @returns 
 */
export function shiftDateMoveModel(
  v: DateMoveModel | undefined,
  months: number,
): DateMoveModel {
  const anchor = today(getLocalTimeZone())
  if (v === null || v === undefined) {
    const next = addMonthsToCalendarDate(anchor, months)
    return next
  }
  if (isDatePeriodValue(v)) {
    if (v.start == null && v.end == null) {
      const d = addMonthsToCalendarDate(anchor, months)
      return { start: d, end: d } satisfies DatePeriodValue
    }
    return {
      start: v.start != null
        ? addMonthsToCalendarDate(v.start, months)
        : null,
      end: v.end != null
        ? addMonthsToCalendarDate(v.end, months)
        : null,
    } satisfies DatePeriodValue
  }
  return addMonthsToCalendarDate(v, months)
}
