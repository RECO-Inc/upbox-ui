export type DataTableRowKey = string | number

export interface DataTableColumn<Row = any> {
  /** 행 객체에서 기본 셀 값을 읽을 속성명 */
  key: string
  /** 헤더 라벨 */
  label: string
  /** 컬럼 너비 (number → px) */
  width?: string | number
  /** 셀/헤더 정렬 (default: left) */
  align?: "left" | "center" | "right"
  /** 헤더 라벨 옆 question-mark tooltip */
  headTooltip?: string
  /** 기본 셀 값 변환 (#cell-<key> 슬롯 미사용 시) */
  format?: (value: any, row: Row, index: number) => string | number
}
