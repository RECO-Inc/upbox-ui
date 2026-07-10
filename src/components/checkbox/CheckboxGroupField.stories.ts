import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { expect, userEvent, within } from 'storybook/test'
import { ref } from 'vue'
import CheckboxGroupField from './CheckboxGroupField.vue'

const meta = {
  title: 'Components/Form/CheckboxGroupField',
  component: CheckboxGroupField as any,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
    size: { control: 'select', options: ['small', 'regular', 'large'] },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
} satisfies Meta<typeof CheckboxGroupField>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: '전체', value: 'all' },
  { label: '진행중', value: 'active' },
  { label: '완료', value: 'done' },
  { label: '보류', value: 'hold', disabled: true },
]

export const Default: Story = {
  render: args => ({
    components: { CheckboxGroupField },
    setup() {
      const value = ref<(string | number)[]>(['active'])
      return { value, args, options }
    },
    template: `
      <CheckboxGroupField v-model="value" :options="options" v-bind="args" />
      <p class="mt-[12px] text-size-12 text-grey-60">value: {{ JSON.stringify(value) }}</p>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const boxes = canvas.getAllByRole('checkbox')

    // 초기값 ['active'] → 두 번째만 checked
    await expect(boxes[0]).toHaveAttribute('data-state', 'unchecked')
    await expect(boxes[1]).toHaveAttribute('data-state', 'checked')

    // 라벨 텍스트 클릭으로도 토글돼야 한다(<label> 래핑)
    await userEvent.click(canvas.getByText('전체'))
    await expect(boxes[0]).toHaveAttribute('data-state', 'checked')

    // 다중 선택 — 기존 선택이 유지된다(라디오와의 핵심 차이)
    await expect(boxes[1]).toHaveAttribute('data-state', 'checked')

    // 같은 항목 재클릭 시 해제
    await userEvent.click(canvas.getByText('전체'))
    await expect(boxes[0]).toHaveAttribute('data-state', 'unchecked')

    // disabled 옵션은 토글되지 않는다
    await userEvent.click(canvas.getByText('보류'))
    await expect(boxes[3]).toHaveAttribute('data-state', 'unchecked')
  },
}

export const Horizontal: Story = {
  args: { orientation: 'horizontal' } as any,
  render: args => ({
    components: { CheckboxGroupField },
    setup() {
      const value = ref<(string | number)[]>(['all', 'done'])
      return { value, args, options }
    },
    template: `
      <CheckboxGroupField v-model="value" :options="options" v-bind="args" />
      <p class="mt-[12px] text-size-12 text-grey-60">value: {{ JSON.stringify(value) }}</p>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { CheckboxGroupField },
    setup() {
      const small = ref<(string | number)[]>(['active'])
      const regular = ref<(string | number)[]>(['active'])
      const large = ref<(string | number)[]>(['active'])
      return { small, regular, large, options }
    },
    template: `
      <div class="flex flex-col gap-[24px]">
        <CheckboxGroupField v-model="small" :options="options" size="small" />
        <CheckboxGroupField v-model="regular" :options="options" size="regular" />
        <CheckboxGroupField v-model="large" :options="options" size="large" />
      </div>
    `,
  }),
}

/** 에러 시 체크박스 영역만 빨개지고 라벨 텍스트는 grey-90 을 유지한다 */
export const ErrorState: Story = {
  args: { error: true } as any,
  render: args => ({
    components: { CheckboxGroupField },
    setup() {
      const value = ref<(string | number)[]>([])
      return { value, args, options }
    },
    template: `
      <CheckboxGroupField v-model="value" :options="options" v-bind="args" />
      <p class="mt-[4px] text-size-12 text-red-80">최소 1개를 선택해주세요</p>
    `,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // 체크박스 영역만 빨개진다
    await expect(canvas.getAllByRole('checkbox')[0]).toHaveClass(/border-red-80/)

    // 라벨 텍스트는 grey-90 유지 (에러 색이 텍스트로 번지지 않는다)
    await expect(canvas.getByText('전체')).toHaveClass(/text-grey-90/)
    await expect(canvas.getByText('전체')).not.toHaveClass(/text-red-80/)
  },
}

/** number value 도 String 매핑 없이 원본 타입으로 emit 된다 */
export const NumberValues: Story = {
  render: () => ({
    components: { CheckboxGroupField },
    setup() {
      const value = ref<(string | number)[]>([2])
      const numberOptions = [
        { label: '1순위', value: 1 },
        { label: '2순위', value: 2 },
        { label: '3순위', value: 3 },
      ]
      return { value, numberOptions }
    },
    template: `
      <CheckboxGroupField v-model="value" :options="numberOptions" />
      <p class="mt-[12px] text-size-12 text-grey-60">value: {{ JSON.stringify(value) }}</p>
    `,
  }),
}

export const ReadOnlyAndDisabled: Story = {
  render: () => ({
    components: { CheckboxGroupField },
    setup() {
      const a = ref<(string | number)[]>(['active'])
      const b = ref<(string | number)[]>(['active'])
      return { a, b, options }
    },
    template: `
      <div class="flex flex-col gap-[24px]">
        <CheckboxGroupField v-model="a" :options="options" read-only />
        <CheckboxGroupField v-model="b" :options="options" disabled />
      </div>
    `,
  }),
}
