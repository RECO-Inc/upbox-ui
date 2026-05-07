import type { ClassValue } from "clsx"
import { cn } from "../../lib/utils"

const dateCellBaseClass =
  "inline-flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent p-0 text-sm font-normal transition-colors select-none"

const dateCellStateClass = [
  "text-grey-90 hover:bg-grey-30",
  "[&[data-today]:not([data-selected])]:bg-grey-20 [&[data-today]:not([data-selected])]:font-semibold [&[data-today]:not([data-selected])]:text-navy-80",
  "data-[disabled]:cursor-not-allowed data-[disabled]:bg-grey-20 data-[disabled]:text-grey-50",
  "data-[unavailable]:text-red-70 data-[unavailable]:line-through",
  "data-[outside-view]:text-grey-50",
]

/** Figma `date` component: `variant=selected, size=small` */
const selectedDateCellClass =
  "data-[selected]:bg-blue-80 data-[selected]:text-grey-10 data-[selected]:hover:bg-blue-90"

/** Figma `date` component: `variant=durationDate, size=small` */
const durationDateCellClass =
  "[&[data-selected]:not([data-selection-start]):not([data-selection-end])]:bg-transparent [&[data-selected]:not([data-selection-start]):not([data-selection-end])]:text-blue-90"

const rangeSelectedDateCellClass =
  "data-[selection-start]:bg-blue-80 data-[selection-start]:text-grey-10 data-[selection-start]:hover:bg-blue-90 data-[selection-end]:bg-blue-80 data-[selection-end]:text-grey-10 data-[selection-end]:hover:bg-blue-90"

export function getCalendarDateCellTriggerClass(extraClass?: ClassValue) {
  return cn(
    dateCellBaseClass,
    dateCellStateClass,
    selectedDateCellClass,
    extraClass,
  )
}

export function getCalendarRangeDateCellTriggerClass(
  isSunday: boolean,
  extraClass?: ClassValue,
) {
  return cn(
    dateCellBaseClass,
    dateCellStateClass,
    durationDateCellClass,
    rangeSelectedDateCellClass,
    isSunday
    && cn(
      "!text-red-70 data-[outside-view]:text-red-50",
      "[&[data-selection-start]]:!text-grey-10 [&[data-selection-end]]:!text-grey-10",
      "[&[data-selected]:not([data-selection-start]):not([data-selection-end])]:!text-blue-90",
    ),
    extraClass,
  )
}
