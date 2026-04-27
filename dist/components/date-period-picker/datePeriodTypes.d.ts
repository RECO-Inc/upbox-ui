import { CalendarDate } from '@internationalized/date';
export type DatePeriodValue = {
    start: CalendarDate | null;
    end: CalendarDate | null;
};
export type DateMoveModel = CalendarDate | DatePeriodValue | null;
export declare function isDatePeriodValue(v: unknown): v is DatePeriodValue;
