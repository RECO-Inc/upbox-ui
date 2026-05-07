export { default as Separator } from "./Separator.vue"

// reka-ui의 internal DataOrientation 타입은 public export가 아니라 d.ts emit 시
// portable한 경로로 표현되지 않음. 우리 쪽에서 인라인 정의로 우회.
export interface SeparatorProps {
  orientation?: "horizontal" | "vertical"
  decorative?: boolean
  class?: string
}
