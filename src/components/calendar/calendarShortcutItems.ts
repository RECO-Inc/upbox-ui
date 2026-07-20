import type { DateValue } from "@internationalized/date"
import { getLocalTimeZone, today } from "@internationalized/date"

export interface CalendarShortcutItem {
  /** 버튼에 노출할 문구 */
  label: string
  /** 오늘 기준 더할 개월 수 (0 = 오늘, 12 = 1년) */
  months: number
}

/**
 * 기본 단축 목록. 정책상 일부만 노출하거나 문구를 번역하려면
 * `shortcutItems` 로 직접 골라 넘긴다.
 */
export const DEFAULT_CALENDAR_SHORTCUT_ITEMS: CalendarShortcutItem[] = [
  { label: "오늘", months: 0 },
  { label: "1개월", months: 1 },
  { label: "3개월", months: 3 },
  { label: "6개월", months: 6 },
  { label: "1년", months: 12 },
]

/** 단축이 가리키는 날짜(오늘 + n개월) */
export function resolveShortcutDate(months: number): DateValue {
  return today(getLocalTimeZone()).add({ months })
}

/** min/max 범위 밖이면 true — 해당 단축 버튼을 비활성화한다. */
export function isShortcutOutOfRange(
  months: number,
  minValue?: DateValue | null,
  maxValue?: DateValue | null,
): boolean {
  const target = resolveShortcutDate(months)
  if (minValue && target.compare(minValue) < 0)
    return true
  if (maxValue && target.compare(maxValue) > 0)
    return true
  return false
}
