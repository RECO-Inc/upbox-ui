import { DateValue } from '@internationalized/date';
export interface CalendarShortcutItem {
    /** 버튼에 노출할 문구 */
    label: string;
    /** 오늘 기준 더할 개월 수 (0 = 오늘, 12 = 1년) */
    months: number;
}
/**
 * 기본 단축 목록. 정책상 일부만 노출하거나 문구를 번역하려면
 * `shortcutItems` 로 직접 골라 넘긴다.
 */
export declare const DEFAULT_CALENDAR_SHORTCUT_ITEMS: CalendarShortcutItem[];
/** 단축이 가리키는 날짜(오늘 + n개월) */
export declare function resolveShortcutDate(months: number): DateValue;
/** min/max 범위 밖이면 true — 해당 단축 버튼을 비활성화한다. */
export declare function isShortcutOutOfRange(months: number, minValue?: DateValue | null, maxValue?: DateValue | null): boolean;
