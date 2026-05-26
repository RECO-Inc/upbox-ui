import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import SelectField from './SelectField.vue'

const meta = {
  title: 'Components/Form/SelectField',
  component: SelectField as any,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'filled', 'bottomline'] },
    size: { control: 'select', options: ['small', 'regular', 'large'] },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
} satisfies Meta<typeof SelectField>

export default meta
type Story = StoryObj<typeof meta>

const statusOptions = [
  { label: '전체', value: '' },
  { label: '진행중', value: 'active' },
  { label: '완료', value: 'done' },
  { label: '보류', value: 'hold', disabled: true },
]

export const Default: Story = {
  render: args => ({
    components: { SelectField },
    setup() {
      const value = ref<string | null>(null)
      return { value, args, statusOptions }
    },
    template: `
      <div class="w-[240px]">
        <SelectField v-model="value" :options="statusOptions" placeholder="상태 선택" v-bind="args" />
        <p class="mt-[8px] text-size-12 text-grey-60">value: {{ JSON.stringify(value) }}</p>
      </div>
    `,
  }),
}

export const EmptyValueOption: Story = {
  name: '빈 값 옵션("전체")',
  render: () => ({
    components: { SelectField },
    setup() {
      const value = ref<string | null>('')
      return { value, statusOptions }
    },
    template: `
      <div class="w-[240px]">
        <SelectField v-model="value" :options="statusOptions" placeholder="상태 선택" />
        <p class="mt-[8px] text-size-12 text-grey-60">
          value: {{ JSON.stringify(value) }} — "전체" 선택 시 '' 로 round-trip
        </p>
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { SelectField },
    setup() {
      const a = ref<string | null>(null)
      const b = ref<string | null>(null)
      const c = ref<string | null>(null)
      return { a, b, c, statusOptions }
    },
    template: `
      <div class="flex w-[240px] flex-col gap-[12px]">
        <SelectField v-model="a" :options="statusOptions" placeholder="default" variant="default" />
        <SelectField v-model="b" :options="statusOptions" placeholder="filled" variant="filled" />
        <SelectField v-model="c" :options="statusOptions" placeholder="bottomline" variant="bottomline" />
      </div>
    `,
  }),
}
