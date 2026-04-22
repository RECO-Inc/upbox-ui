import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { reactive, ref } from 'vue'
import RadioGroup from './RadioGroup.vue'
import RadioGroupItem from './RadioGroupItem.vue'
import { Label } from '../label'

const FIGMA_RADIO_PARTS_KEY
  = 'https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/-%EC%B5%9C%EC%A2%85-Component-_v02?node-id=12266-12938'

const FIGMA_ON = 'on' as const

type MatrixCell = {
  key: string
  /** 선택된 상태(스펙 셀) */
  selected: boolean
  disabled: boolean
  readOnly: boolean
}

const figmaRadioMatrix: {
  colLabels: { key: string; label: string }[]
  rows: { size: 'small' | 'regular' | 'large'; label: string; cells: MatrixCell[] }[]
} = {
  colLabels: [
    { key: 'c1', label: '활/미' },
    { key: 'c2', label: '활/선' },
    { key: 'c3', label: '비/미' },
    { key: 'c4', label: '비/선' },
    { key: 'c5', label: '읽/미' },
    { key: 'c6', label: '읽/선' },
  ],
  rows: [
    {
      size: 'small',
      label: '12(3xsmall)',
      cells: [
        { key: 'r0c0', selected: false, disabled: false, readOnly: false },
        { key: 'r0c1', selected: true, disabled: false, readOnly: false },
        { key: 'r0c2', selected: false, disabled: true, readOnly: false },
        { key: 'r0c3', selected: true, disabled: true, readOnly: false },
        { key: 'r0c4', selected: false, disabled: false, readOnly: true },
        { key: 'r0c5', selected: true, disabled: false, readOnly: true },
      ],
    },
    {
      size: 'regular',
      label: '16(2xsmall)',
      cells: [
        { key: 'r1c0', selected: false, disabled: false, readOnly: false },
        { key: 'r1c1', selected: true, disabled: false, readOnly: false },
        { key: 'r1c2', selected: false, disabled: true, readOnly: false },
        { key: 'r1c3', selected: true, disabled: true, readOnly: false },
        { key: 'r1c4', selected: false, disabled: false, readOnly: true },
        { key: 'r1c5', selected: true, disabled: false, readOnly: true },
      ],
    },
    {
      size: 'large',
      label: '20(xsmall)',
      cells: [
        { key: 'r2c0', selected: false, disabled: false, readOnly: false },
        { key: 'r2c1', selected: true, disabled: false, readOnly: false },
        { key: 'r2c2', selected: false, disabled: true, readOnly: false },
        { key: 'r2c3', selected: true, disabled: true, readOnly: false },
        { key: 'r2c4', selected: false, disabled: false, readOnly: true },
        { key: 'r2c5', selected: true, disabled: false, readOnly: true },
      ],
    },
  ],
}

function buildFigmaGroupModels() {
  const o: Record<string, typeof FIGMA_ON | undefined> = {}
  for (const row of figmaRadioMatrix.rows) {
    for (const c of row.cells) {
      o[c.key] = c.selected ? FIGMA_ON : undefined
    }
  }
  return reactive(o)
}

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const value = ref('option1')
      return { value }
    },
    template: `
      <RadioGroup v-model="value">
        <div class="flex items-center gap-[8px]">
          <RadioGroupItem id="r1" value="option1" />
          <Label for="r1">Option 1</Label>
        </div>
        <div class="flex items-center gap-[8px]">
          <RadioGroupItem id="r2" value="option2" />
          <Label for="r2">Option 2</Label>
        </div>
        <div class="flex items-center gap-[8px]">
          <RadioGroupItem id="r3" value="option3" />
          <Label for="r3">Option 3</Label>
        </div>
      </RadioGroup>
    `,
  }),
}

export const Error: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const value = ref('option1')
      return { value }
    },
    template: `
      <div class="flex flex-col gap-[8px] w-[280px]">
        <RadioGroup v-model="value">
          <div class="flex items-center gap-[8px]">
            <RadioGroupItem id="err-r1" value="option1" :error="true" />
            <Label for="err-r1" class="cursor-pointer">Option 1</Label>
          </div>
          <div class="flex items-center gap-[8px]">
            <RadioGroupItem id="err-r2" value="option2" :error="true" />
            <Label for="err-r2" class="cursor-pointer">Option 2</Label>
          </div>
          <div class="flex items-center gap-[8px]">
            <RadioGroupItem id="err-r3" value="option3" :error="true" />
            <Label for="err-r3" class="cursor-pointer">Option 3</Label>
          </div>
        </RadioGroup>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const v1 = ref('a')
      const v2 = ref('a')
      const v3 = ref('a')
      return { v1, v2, v3 }
    },
    template: `
      <div class="flex gap-[32px]">
        <div>
          <p class="text-size-12 text-grey-60 mb-[8px]">Small</p>
          <RadioGroup v-model="v1">
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="a" size="small" />
              <Label>A</Label>
            </div>
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="b" size="small" />
              <Label>B</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <p class="text-size-12 text-grey-60 mb-[8px]">Regular</p>
          <RadioGroup v-model="v2">
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="a" size="regular" />
              <Label>A</Label>
            </div>
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="b" size="regular" />
              <Label>B</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <p class="text-size-12 text-grey-60 mb-[8px]">Large</p>
          <RadioGroup v-model="v3">
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="a" size="large" />
              <Label>A</Label>
            </div>
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="b" size="large" />
              <Label>B</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    `,
  }),
}

/**
 * Figma `Radio_parts`(12266:12938) 3(크기)×6(활성·비활성·읽기전용 × 미선택/선택) 격자.
 * 셀마다 `RadioGroup` 1개·옵션 `on` 1개로 격리된 상태를 표시합니다.
 */
export const FigmaComponentSet: Story = {
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    docs: {
      description: {
        story: `Figma [Radio_parts](${FIGMA_RADIO_PARTS_KEY}) — 행: 크기(3xsmall/2xsmall/xsmall), 열: 활성·비활성·읽기전용 × (미/선).`,
      },
    },
  },
  render: () => ({
    components: { RadioGroup, RadioGroupItem },
    setup() {
      const board = figmaRadioMatrix
      const groupModels = buildFigmaGroupModels()
      return { board, groupModels, figmaValue: FIGMA_ON }
    },
    template: `
      <div class="max-w-full overflow-x-auto">
        <p class="text-size-13 text-grey-60 mb-[16px]">
          3×6 — Radio_parts(12266:12938)
        </p>
        <div
          class="inline-grid"
          :style="{
            gridTemplateColumns: '100px repeat(6, 44px)',
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
            class="h-[40px] flex items-end justify-center px-0.5 text-center text-size-10 text-grey-50 leading-tight w-[44px] box-border"
          >
            {{ c.label }}
          </div>
          <template v-for="row in board.rows" :key="row.size">
            <div class="h-[40px] flex items-center pr-[8px] text-size-12 text-grey-60 whitespace-nowrap justify-end">
              {{ row.label }}
            </div>
            <div
              v-for="cell in row.cells"
              :key="cell.key"
              class="h-[40px] w-[44px] box-border flex items-center justify-center"
            >
              <RadioGroup
                v-model="groupModels[cell.key]"
                as="div"
                class="inline-flex"
                :name="'figma-rg-' + cell.key"
              >
                <RadioGroupItem
                  :id="'figma-ri-' + cell.key"
                  :value="figmaValue"
                  :size="row.size"
                  :disabled="cell.disabled"
                  :read-only="cell.readOnly"
                />
              </RadioGroup>
            </div>
          </template>
        </div>
      </div>
    `,
  }),
}
