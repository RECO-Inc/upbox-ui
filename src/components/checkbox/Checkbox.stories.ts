import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { computed, ref } from 'vue'
import Checkbox from './Checkbox.vue'
import { Label } from '../label'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'regular', 'large'],
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Checkbox, Label },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div class="flex items-center gap-[8px]">
        <Checkbox id="cb" v-model="checked" v-bind="args" />
        <Label for="cb" class="cursor-pointer">Accept terms</Label>
      </div>
    `,
  }),
}
export const Sizes: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const a = ref(true)
      const b = ref(true)
      const c = ref(true)
      return { a, b, c }
    },
    template: `
      <div class="flex items-center gap-[24px]">
        <div class="flex items-center gap-[8px]">
          <Checkbox id="s" size="small" v-model="a" />
          <Label for="s">Small</Label>
        </div>
        <div class="flex items-center gap-[8px]">
          <Checkbox id="r" size="regular" v-model="b" />
          <Label for="r">Regular</Label>
        </div>
        <div class="flex items-center gap-[8px]">
          <Checkbox id="l" size="large" v-model="c" />
          <Label for="l">Large</Label>
        </div>
      </div>
    `,
  }),
}

export const ErrorState: Story = {
  args: { error: true },
  render: (args) => ({
    components: { Checkbox, Label },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div class="flex items-center gap-[8px]">
        <Checkbox id="err" v-model="checked" v-bind="args" />
        <Label for="err" class="text-red-80">Required field</Label>
      </div>
    `,
  }),
}

export const Indeterminate: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const value = ref<'indeterminate' | boolean>('indeterminate')
      return { value }
    },
    template: `
      <div class="flex items-center gap-[8px]">
        <Checkbox id="ind" v-model="value" />
        <Label for="ind">일부 항목 선택(부분 선택)</Label>
      </div>
    `,
  }),
}

/**
 * 전체 선택의 사용 케이스
 * - 하나라도 선택 됨 -> 부분 선택
 * - 모두 선택 됨 -> 체크
 * - 모두 해제 됨 -> 미체크
 */
export const SelectAllWithItems: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const item1 = ref(false)
      const item2 = ref(true)
      const item3 = ref(false)
      const selectAll = computed<boolean | 'indeterminate'>({
        get() {
          const n = Number(item1.value) + Number(item2.value) + Number(item3.value)
          if (n === 3) return true
          if (n === 0) return false
          return 'indeterminate'
        },
        set(v: boolean | 'indeterminate') {
          const on = v === true
          item1.value = on
          item2.value = on
          item3.value = on
        },
      })
      return { item1, item2, item3, selectAll }
    },
    template: `
      <div class="flex w-full min-w-[280px] max-w-md flex-col gap-3 p-1">
        <div class="flex min-h-6 w-full items-center gap-2">
          <Checkbox id="demo-cb-all" v-model="selectAll" />
          <Label for="demo-cb-all" class="cursor-pointer text-size-14 font-medium">전체 선택</Label>
        </div>
        <ul class="m-0 flex list-none flex-col gap-2 border-l-2 border-grey-40 pl-3">
          <li class="flex w-full min-h-6 items-center gap-2">
            <Checkbox id="demo-cb-1" v-model="item1" />
            <Label for="demo-cb-1" class="cursor-pointer text-size-14">선택 항목 1</Label>
          </li>
          <li class="flex w-full min-h-6 items-center gap-2">
            <Checkbox id="demo-cb-2" v-model="item2" />
            <Label for="demo-cb-2" class="cursor-pointer text-size-14">선택 항목 2</Label>
          </li>
          <li class="flex w-full min-h-6 items-center gap-2">
            <Checkbox id="demo-cb-3" v-model="item3" />
            <Label for="demo-cb-3" class="cursor-pointer text-size-14">선택 항목 3</Label>
          </li>
        </ul>
      </div>
    `,
  }),
}


export const Disabled: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const a = ref(false)
      const b = ref(true)
      const c = ref<'indeterminate' | boolean>('indeterminate')
      return { a, b, c }
    },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div class="flex items-center gap-[8px]">
          <Checkbox id="d-off" v-model="a" :disabled="true" />
          <Label for="d-off">비활성(미체크)</Label>
        </div>
        <div class="flex items-center gap-[8px]">
          <Checkbox id="d-on" v-model="b" :disabled="true" />
          <Label for="d-on">비활성(체크)</Label>
        </div>
        <div class="flex items-center gap-[8px]">
          <Checkbox id="d-ind" v-model="c" :disabled="true" />
          <Label for="d-ind">비활성(부분 선택)</Label>
        </div>
      </div>
    `,
  }),
}

const FIGMA_CHECKBOX_KEY =
  'https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/-%EC%B5%9C%EC%A2%85-Component-_v02?node-id=6207-3250'

type MatrixCol = {
  key: string
  modelValue: boolean | 'indeterminate'
  disabled: boolean
  readOnly: boolean
}

const figmaCheckBoxMatrix: {
  colLabels: { key: string; label: string }[]
  rows: { size: 'small' | 'regular' | 'large'; label: string; cells: MatrixCol[] }[]
} = {
  colLabels: [
    { key: 'c1', label: '활성/미' },
    { key: 'c2', label: '활성/체' },
    { key: 'c3', label: '활성/부' },
    { key: 'c4', label: '비활/미' },
    { key: 'c5', label: '비활/체' },
    { key: 'c6', label: '비활/부' },
    { key: 'c7', label: '읽전·미' },
    { key: 'c8', label: '읽전/체' },
    { key: 'c9', label: '읽전/부' },
  ],
  rows: [
    {
      size: 'small',
      label: '12px(3xsmall)',
      cells: [
        { key: 'r0c0', modelValue: false, disabled: false, readOnly: false },
        { key: 'r0c1', modelValue: true, disabled: false, readOnly: false },
        { key: 'r0c2', modelValue: 'indeterminate', disabled: false, readOnly: false },
        { key: 'r0c3', modelValue: false, disabled: true, readOnly: false },
        { key: 'r0c4', modelValue: true, disabled: true, readOnly: false },
        { key: 'r0c5', modelValue: 'indeterminate', disabled: true, readOnly: false },
        { key: 'r0c6', modelValue: false, disabled: false, readOnly: true },
        { key: 'r0c7', modelValue: true, disabled: false, readOnly: true },
        { key: 'r0c8', modelValue: 'indeterminate', disabled: false, readOnly: true },
      ],
    },
    {
      size: 'regular',
      label: '16px(2xsmall)',
      cells: [
        { key: 'r1c0', modelValue: false, disabled: false, readOnly: false },
        { key: 'r1c1', modelValue: true, disabled: false, readOnly: false },
        { key: 'r1c2', modelValue: 'indeterminate', disabled: false, readOnly: false },
        { key: 'r1c3', modelValue: false, disabled: true, readOnly: false },
        { key: 'r1c4', modelValue: true, disabled: true, readOnly: false },
        { key: 'r1c5', modelValue: 'indeterminate', disabled: true, readOnly: false },
        { key: 'r1c6', modelValue: false, disabled: false, readOnly: true },
        { key: 'r1c7', modelValue: true, disabled: false, readOnly: true },
        { key: 'r1c8', modelValue: 'indeterminate', disabled: false, readOnly: true },
      ],
    },
    {
      size: 'large',
      label: '20px(xsmall)',
      cells: [
        { key: 'r2c0', modelValue: false, disabled: false, readOnly: false },
        { key: 'r2c1', modelValue: true, disabled: false, readOnly: false },
        { key: 'r2c2', modelValue: 'indeterminate', disabled: false, readOnly: false },
        { key: 'r2c3', modelValue: false, disabled: true, readOnly: false },
        { key: 'r2c4', modelValue: true, disabled: true, readOnly: false },
        { key: 'r2c5', modelValue: 'indeterminate', disabled: true, readOnly: false },
        { key: 'r2c6', modelValue: false, disabled: false, readOnly: true },
        { key: 'r2c7', modelValue: true, disabled: false, readOnly: true },
        { key: 'r2c8', modelValue: 'indeterminate', disabled: false, readOnly: true },
      ],
    },
  ],
}

/** 한판에 보기: 3(크기)×9(활성/비활성/읽기전용 × 미/체/부) */
export const FigmaComponentSet: Story = {
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        story: `Figma [checkBox](${FIGMA_CHECKBOX_KEY}) 참고. 열은 활성/비활성/읽기전용마다 미체크/체크/부분선택(3)씩 그룹입니다.`,
      },
    },
  },
  render: () => ({
    components: { Checkbox },
    setup() {
      return { board: figmaCheckBoxMatrix }
    },
    template: `
      <div class="max-w-full overflow-x-auto">
        <p class="text-size-13 text-grey-60 mb-[16px]">
          3(크기)×9 — 활성 / 비활성 / 읽기전용 × (미체크·체크·부분)
        </p>
        <div
          class="inline-grid"
          :style="{
            gridTemplateColumns: '88px repeat(9, 40px)',
            columnGap: '0',
            rowGap: '0',
            alignItems: 'center',
            justifyItems: 'center',
          }"
        >
          <div />
          <div
            v-for="c in board.colLabels"
            :key="c.key"
            class="h-[32px] flex items-end justify-center px-0.5 text-center text-size-10 text-grey-50 leading-tight w-[40px] box-border"
          >
            {{ c.label }}
          </div>
          <template v-for="row in board.rows" :key="row.size">
            <div class="h-[32px] flex items-center pr-[8px] text-size-12 text-grey-60 whitespace-nowrap">
              {{ row.label }}
            </div>
            <div
              v-for="cell in row.cells"
              :key="cell.key"
              class="h-[32px] w-[40px] box-border flex items-center justify-center"
            >
              <Checkbox
                :id="'figma-cb-' + cell.key"
                :size="row.size"
                :model-value="cell.modelValue"
                :disabled="cell.disabled"
                :read-only="cell.readOnly"
              />
            </div>
          </template>
        </div>
      </div>
    `,
  }),
}
