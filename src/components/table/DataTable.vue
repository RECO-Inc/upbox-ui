<script setup lang="ts" generic="Row extends Record<string, any> = Record<string, any>">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { Checkbox } from "../checkbox"
import Table from "./Table.vue"
import TableBody from "./TableBody.vue"
import TableCell from "./TableCell.vue"
import TableEmpty from "./TableEmpty.vue"
import TableHead from "./TableHead.vue"
import TableHeader from "./TableHeader.vue"
import TableRow from "./TableRow.vue"
import type { DataTableColumn, DataTableRowKey } from "./dataTableTypes"

const props = withDefaults(defineProps<{
  columns: DataTableColumn<Row>[]
  rows: Row[]
  /** 행 고유키: 속성명 또는 (row) => key */
  rowKey: string | ((row: Row) => DataTableRowKey)
  size?: "small" | "regular" | "large"
  loading?: boolean
  emptyText?: string
  /** 체크박스 선택 컬럼 노출 (v-model:selected 와 함께 사용) */
  selectable?: boolean
  /** v-model:selected — 선택된 행 key 배열 */
  selected?: DataTableRowKey[]
  /** 행 클릭/선택 비활성 조건 */
  rowDisabled?: (row: Row) => boolean
  class?: HTMLAttributes["class"]
}>(), {
  size: "regular",
  loading: false,
  emptyText: "조회 결과가 없습니다.",
  selectable: false,
  selected: () => [],
})

const emit = defineEmits<{
  "update:selected": [keys: DataTableRowKey[]]
  "row-click": [payload: { row: Row, index: number }]
}>()

function keyOf(row: Row): DataTableRowKey {
  return typeof props.rowKey === "function" ? props.rowKey(row) : (row[props.rowKey] as DataTableRowKey)
}

const colCount = computed(() => props.columns.length + (props.selectable ? 1 : 0))

function alignClass(align?: "left" | "center" | "right") {
  return align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left"
}

function colWidth(width?: string | number) {
  if (width == null) return undefined
  return typeof width === "number" ? `${width}px` : width
}

function cellValue(column: DataTableColumn<Row>, row: Row, index: number) {
  const raw = row[column.key]
  return column.format ? column.format(raw, row, index) : raw
}

// ── 선택 상태 ──
const selectedSet = computed(() => new Set(props.selected))
function isSelected(row: Row) {
  return selectedSet.value.has(keyOf(row))
}
const selectableRows = computed(() => props.rows.filter((row) => !props.rowDisabled?.(row)))
const allSelected = computed(
  () => selectableRows.value.length > 0 && selectableRows.value.every((row) => selectedSet.value.has(keyOf(row))),
)
const someSelected = computed(() => selectableRows.value.some((row) => selectedSet.value.has(keyOf(row))))
const headerState = computed<boolean | "indeterminate">(() =>
  allSelected.value ? true : someSelected.value ? "indeterminate" : false,
)

function toggleAll(value: boolean | "indeterminate") {
  const visible = new Set(selectableRows.value.map(keyOf))
  if (value === true) {
    const next = new Set(props.selected)
    visible.forEach((key) => next.add(key))
    emit("update:selected", [...next])
  }
  else {
    emit("update:selected", props.selected.filter((key) => !visible.has(key)))
  }
}

function toggleRow(row: Row, value: boolean | "indeterminate") {
  const key = keyOf(row)
  if (value === true) emit("update:selected", [...props.selected, key])
  else emit("update:selected", props.selected.filter((existing) => existing !== key))
}

function onRowClick(row: Row, index: number) {
  if (props.rowDisabled?.(row)) return
  emit("row-click", { row, index })
}
</script>

<template>
  <div class="relative w-full">
    <!-- 로딩: 상단 indeterminate bar 오버레이 (행은 유지) -->
    <div v-if="loading" class="ui-dt-progress" role="progressbar" aria-label="Loading">
      <span class="ui-dt-progress__bar" />
    </div>

    <Table :class="props.class">
      <colgroup>
        <col v-if="selectable" style="width: 48px">
        <col v-for="col in columns" :key="col.key" :style="{ width: colWidth(col.width) }">
      </colgroup>

      <TableHeader>
        <TableRow>
          <TableHead v-if="selectable" :size="size" align="center" class="w-[48px] px-0">
            <Checkbox
              :model-value="headerState"
              :disabled="loading || selectableRows.length === 0"
              @update:model-value="toggleAll"
            />
          </TableHead>
          <TableHead
            v-for="col in columns"
            :key="col.key"
            :size="size"
            :align="col.align"
            :tooltip="col.headTooltip"
          >
            <slot :name="`header-${col.key}`" :column="col">{{ col.label }}</slot>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableEmpty v-if="rows.length === 0 && !loading" :colspan="colCount">
          <span class="text-grey-60 text-size-13">{{ emptyText }}</span>
        </TableEmpty>
        <!-- 로딩 + 데이터 없음: bar 가 떠 있도록 빈 높이만 유지 -->
        <TableEmpty v-else-if="rows.length === 0 && loading" :colspan="colCount">
          <span class="block h-[20px]" />
        </TableEmpty>

        <template v-else>
          <TableRow
            v-for="(row, index) in rows"
            :key="keyOf(row)"
            :data-state="isSelected(row) ? 'selected' : undefined"
            :class="rowDisabled?.(row) ? 'opacity-50' : 'cursor-pointer'"
            @click="onRowClick(row, index)"
          >
            <TableCell v-if="selectable" :size="size" class="w-[48px] px-0 text-center" @click.stop>
              <Checkbox
                :model-value="isSelected(row)"
                :disabled="rowDisabled?.(row)"
                @update:model-value="(value) => toggleRow(row, value)"
              />
            </TableCell>
            <TableCell
              v-for="col in columns"
              :key="col.key"
              :size="size"
              :class="alignClass(col.align)"
            >
              <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]" :index="index">
                {{ cellValue(col, row, index) }}
              </slot>
            </TableCell>
          </TableRow>
        </template>
      </TableBody>
    </Table>
  </div>
</template>

<!--
  로딩 bar: 레거시 LoadingBar 와 동일한 MD indeterminate 모션. 테이블 상단에 오버레이.
  소비 앱의 tailwindcss important 충돌을 피하려 유틸 대신 scoped @keyframes 로 소유.
-->
<style scoped>
.ui-dt-progress {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  overflow: hidden;
  background-color: var(--color-grey-30);
  z-index: 10;
}
.ui-dt-progress__bar {
  position: absolute;
  inset: 0;
}
.ui-dt-progress__bar::before,
.ui-dt-progress__bar::after {
  content: "";
  position: absolute;
  inset: 0;
  background-color: var(--color-blue-80);
  transform-origin: 0 0;
  will-change: transform;
}
.ui-dt-progress__bar::before {
  animation: ui-dt-indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
.ui-dt-progress__bar::after {
  transform: translate3d(-101%, 0, 0);
  animation: ui-dt-indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  animation-delay: 1.15s;
}
@keyframes ui-dt-indeterminate {
  0% { transform: translate3d(-35%, 0, 0) scale3d(0.35, 1, 1); }
  60% { transform: translate3d(100%, 0, 0) scale3d(0.9, 1, 1); }
  100% { transform: translate3d(100%, 0, 0) scale3d(0.9, 1, 1); }
}
@keyframes ui-dt-indeterminate-short {
  0% { transform: translate3d(-101%, 0, 0) scaleZ(1); }
  60% { transform: translate3d(107%, 0, 0) scale3d(0.01, 1, 1); }
  100% { transform: translate3d(107%, 0, 0) scale3d(0.01, 1, 1); }
}
@media (prefers-reduced-motion: reduce) {
  .ui-dt-progress__bar::before,
  .ui-dt-progress__bar::after {
    animation-duration: 0.01ms;
  }
}
</style>
