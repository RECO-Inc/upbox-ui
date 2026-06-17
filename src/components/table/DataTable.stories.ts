import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import DataTable from './DataTable.vue'
import type { DataTableColumn } from './dataTableTypes'

const meta = {
  title: 'Components/DataTable',
  component: DataTable as any,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'regular', 'large'] },
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
  },
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

interface CarRow { id: number, name: string, status: string, amount: number }

const columns: DataTableColumn<CarRow>[] = [
  { key: 'id', label: 'ID', width: 80 },
  { key: 'name', label: '차량명' },
  { key: 'status', label: '상태', align: 'center', headTooltip: '계약 상태입니다' },
  { key: 'amount', label: '수거량', align: 'right', format: v => `${v.toLocaleString()}kg` },
]

const rows: CarRow[] = [
  { id: 1, name: '12가 3456', status: '진행중', amount: 1200 },
  { id: 2, name: '34나 5678', status: '완료', amount: 980 },
  { id: 3, name: '56다 7890', status: '보류', amount: 0 },
]

/** columns + rows 만으로 끝 (레거시 49곳에서 반복되던 thead/tbody v-for 제거) */
export const Default: Story = {
  render: args => ({
    components: { DataTable },
    setup: () => ({ args, columns, rows }),
    template: `<DataTable :columns="columns" :rows="rows" row-key="id" v-bind="args" />`,
  }),
}

/** 체크박스 선택 — v-model:selected (헤더 전체선택 + indeterminate 자동) */
export const Selectable: Story = {
  name: '선택 (v-model:selected)',
  render: () => ({
    components: { DataTable },
    setup() {
      const selected = ref<(string | number)[]>([2])
      return { selected, columns, rows }
    },
    template: `
      <DataTable :columns="columns" :rows="rows" row-key="id" selectable v-model:selected="selected" />
      <p class="mt-[12px] text-size-12 text-grey-60">selected: {{ JSON.stringify(selected) }}</p>
    `,
  }),
}

/** 커스텀 셀 — #cell-<key> 슬롯 (Badge/버튼 등) */
export const CustomCell: Story = {
  name: '커스텀 셀 (#cell-status)',
  render: () => ({
    components: { DataTable },
    setup: () => ({ columns, rows }),
    template: `
      <DataTable :columns="columns" :rows="rows" row-key="id">
        <template #cell-status="{ value }">
          <span
            class="inline-block rounded-full px-[8px] py-[2px] text-size-12"
            :class="value === '완료' ? 'bg-navy-20 text-navy-90' : value === '보류' ? 'bg-grey-30 text-grey-70' : 'bg-blue-20 text-blue-90'"
          >{{ value }}</span>
        </template>
      </DataTable>
    `,
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { DataTable },
    setup: () => ({ columns }),
    template: `<DataTable :columns="columns" :rows="[]" row-key="id" loading />`,
  }),
}

export const Empty: Story = {
  render: () => ({
    components: { DataTable },
    setup: () => ({ columns }),
    template: `<DataTable :columns="columns" :rows="[]" row-key="id" empty-text="조회 결과가 없습니다." />`,
  }),
}
