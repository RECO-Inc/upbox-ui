import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import RadioGroupField from './RadioGroupField.vue'

const meta = {
  title: 'Components/Form/RadioGroupField',
  component: RadioGroupField as any,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'inline-radio', options: ['vertical', 'horizontal'] },
    size: { control: 'select', options: ['small', 'regular', 'large'] },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioGroupField>

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
    components: { RadioGroupField },
    setup() {
      const value = ref<string | number | null>('active')
      return { value, args, options }
    },
    template: `
      <RadioGroupField v-model="value" :options="options" v-bind="args" />
      <p class="mt-[12px] text-size-12 text-grey-60">value: {{ JSON.stringify(value) }}</p>
    `,
  }),
}

export const Horizontal: Story = {
  name: '가로 배치',
  render: () => ({
    components: { RadioGroupField },
    setup() {
      const value = ref<string | number | null>('all')
      return { value, options }
    },
    template: `
      <RadioGroupField v-model="value" :options="options" orientation="horizontal" />
      <p class="mt-[12px] text-size-12 text-grey-60">value: {{ JSON.stringify(value) }}</p>
    `,
  }),
}

export const NumberValues: Story = {
  name: '숫자 value (타입 보존)',
  render: () => ({
    components: { RadioGroupField },
    setup() {
      const value = ref<string | number | null>(1)
      const numOptions = [
        { label: '낮음', value: 1 },
        { label: '보통', value: 2 },
        { label: '높음', value: 3 },
      ]
      return { value, numOptions }
    },
    template: `
      <RadioGroupField v-model="value" :options="numOptions" orientation="horizontal" />
      <p class="mt-[12px] text-size-12 text-grey-60">value: {{ JSON.stringify(value) }} ({{ typeof value }})</p>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { RadioGroupField },
    setup() {
      const a = ref<string | number | null>('active')
      const b = ref<string | number | null>('active')
      const c = ref<string | number | null>('active')
      return { a, b, c, options }
    },
    template: `
      <div class="flex flex-col gap-[20px]">
        <RadioGroupField v-model="a" :options="options" size="small" orientation="horizontal" />
        <RadioGroupField v-model="b" :options="options" size="regular" orientation="horizontal" />
        <RadioGroupField v-model="c" :options="options" size="large" orientation="horizontal" />
      </div>
    `,
  }),
}
