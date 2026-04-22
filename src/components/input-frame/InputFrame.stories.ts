import type { Meta, StoryObj } from '@storybook/vue3-vite'
import InputFrame from './InputFrame.vue'

const meta = {
  title: 'Components/InputFrame',
  component: InputFrame,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'bottomline'],
    },
    size: {
      control: 'select',
      options: ['small', 'regular', 'large'],
    },
    error: { control: 'boolean' },
    readonly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof InputFrame>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { InputFrame },
    setup() {
      return { args }
    },
    template: `
      <div class="w-[320px]">
        <InputFrame v-bind="args">
          <span class="min-w-0 flex-1 truncate text-grey-80">슬롯에 들어가는 값 영역</span>
        </InputFrame>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { InputFrame },
    template: `
      <div class="flex w-[360px] flex-col gap-[12px]">
        <InputFrame size="small">
          <span class="min-w-0 flex-1 text-grey-80 text-size-12">small</span>
        </InputFrame>
        <InputFrame size="regular">
          <span class="min-w-0 flex-1 text-grey-80 text-size-14">regular</span>
        </InputFrame>
        <InputFrame size="large">
          <span class="min-w-0 flex-1 text-grey-80 text-size-16">large</span>
        </InputFrame>
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { InputFrame },
    template: `
      <div class="flex w-[360px] flex-col gap-[12px]">
        <InputFrame variant="default">
          <span class="min-w-0 flex-1 text-grey-80">default</span>
        </InputFrame>
        <InputFrame variant="filled">
          <span class="min-w-0 flex-1 text-grey-80">filled</span>
        </InputFrame>
        <InputFrame variant="bottomline">
          <span class="min-w-0 flex-1 text-grey-80">bottomline</span>
        </InputFrame>
      </div>
    `,
  }),
}

export const States: Story = {
  render: () => ({
    components: { InputFrame },
    template: `
      <div class="flex w-[360px] flex-col gap-[12px]">
        <InputFrame>
          <span class="min-w-0 flex-1 text-grey-80">활성</span>
        </InputFrame>
        <InputFrame :error="true">
          <span class="min-w-0 flex-1 text-grey-80">에러</span>
        </InputFrame>
        <InputFrame :readonly="true">
          <span class="min-w-0 flex-1 text-grey-80">읽기 전용</span>
        </InputFrame>
        <InputFrame :disabled="true">
          <span class="min-w-0 flex-1 text-grey-50">비활성</span>
        </InputFrame>
      </div>
    `,
  }),
}
