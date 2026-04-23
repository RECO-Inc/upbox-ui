import { CalendarDate } from '@internationalized/date';
import { DatePeriodValue } from '../date-period-picker/datePeriodTypes';
/**
 * 단일인 경우 CalendarDate
 * 기간인 경우 DatePeriodValue
 */
export type DateMoveModel = CalendarDate | DatePeriodValue | null;
export declare function isDatePeriodValue(v: unknown): v is DatePeriodValue;
/**
 * 음수 허용. 말일 +1달은 해당 월 말로 클램프(예: 1/31 +1 → 2/28)
 */
export declare function addMonthsToCalendarDate(date: CalendarDate, months: number): CalendarDate;
/**
 * # 날짜를 월단위로 이동
 * @param v modelValue
 * @param months
 * @returns
 */
export declare function shiftDateMoveModel(v: DateMoveModel | undefined, months: number): DateMoveModel;
