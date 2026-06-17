export type DataTableRowKey = string | number

export interface DataTableColumn<Row = any> {
  /** 행 객체에서 기본 셀 값을 읽을 속성명 */
  key: string
  /** 헤더 라벨 */
  label: string
  /** 컬럼 너비 (number → px) */
  width?: string | number
  /** 컬럼 최소 너비 (number → px). table-layout auto 에서 컬럼이 최소 이 폭을 유지 */
  minWidth?: string | number
  /** 컬럼 최대 너비 (number → px). 초과 내용은 셀에서 wrap/clamp */
  maxWidth?: string | number
  /** 셀/헤더 정렬 (default: left) */
  align?: "left" | "center" | "right"
  /** 헤더 라벨 옆 question-mark tooltip */
  headTooltip?: string
  /** 기본 셀 값 변환 (#cell-<key> 슬롯 미사용 시) */
  format?: (value: any, row: Row, index: number) => string | number
}
