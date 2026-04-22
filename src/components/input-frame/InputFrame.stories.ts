import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Search } from 'lucide-vue-next'
import InputFrame from './InputFrame.vue'
import InputIcon from './InputIcon.vue'

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

export const WithInputIcon: Story = {
  name: 'With InputIcon',
  render: () => ({
    components: { InputFrame, InputIcon, Search },
    template: `
      <div class="flex w-[360px] flex-col gap-[12px]">
        <InputFrame size="small">
          <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
            <span class="min-w-0 flex-1 text-grey-80 text-size-12">텍스트 (small)</span>
            <InputIcon>
              <Search />
            </InputIcon>
          </div>
        </InputFrame>
        <InputFrame size="regular">
          <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
            <span class="min-w-0 flex-1 text-grey-80 text-size-14">텍스트 (regular)</span>
            <InputIcon>
              <Search />
            </InputIcon>
          </div>
        </InputFrame>
        <InputFrame size="large">
          <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
            <span class="min-w-0 flex-1 text-grey-80 text-size-16">텍스트 (large)</span>
            <InputIcon>
              <Search />
            </InputIcon>
          </div>
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

export const StateActive: Story = {
  name: "State / Active",
  render: () => ({
    components: { InputFrame },
    template: `
      <div class="flex w-[360px] flex-col gap-[12px]">
        <InputFrame size="small">
          <span class="min-w-0 flex-1 text-grey-80 text-size-12">활성 (small)</span>
        </InputFrame>
        <InputFrame size="regular">
          <span class="min-w-0 flex-1 text-grey-80 text-size-14">활성 (regular)</span>
        </InputFrame>
        <InputFrame size="large">
          <span class="min-w-0 flex-1 text-grey-80 text-size-16">활성 (large)</span>
        </InputFrame>
      </div>
    `,
  }),
}

export const StateError: Story = {
  name: "State / Error",
  render: () => ({
    components: { InputFrame },
    template: `
      <div class="flex w-[360px] flex-col gap-[12px]">
        <InputFrame size="small" :error="true">
          <span class="min-w-0 flex-1 text-grey-80 text-size-12">에러 (small)</span>
        </InputFrame>
        <InputFrame size="regular" :error="true">
          <span class="min-w-0 flex-1 text-grey-80 text-size-14">에러 (regular)</span>
        </InputFrame>
        <InputFrame size="large" :error="true">
          <span class="min-w-0 flex-1 text-grey-80 text-size-16">에러 (large)</span>
        </InputFrame>
      </div>
    `,
  }),
}

export const StateReadOnly: Story = {
  name: "State / Read only",
  render: () => ({
    components: { InputFrame },
    template: `
      <div class="flex w-[360px] flex-col gap-[12px]">
        <InputFrame size="small" :readonly="true">
          <span class="min-w-0 flex-1 text-grey-80 text-size-12">읽기 전용 (small)</span>
        </InputFrame>
        <InputFrame size="regular" :readonly="true">
          <span class="min-w-0 flex-1 text-grey-80 text-size-14">읽기 전용 (regular)</span>
        </InputFrame>
        <InputFrame size="large" :readonly="true">
          <span class="min-w-0 flex-1 text-grey-80 text-size-16">읽기 전용 (large)</span>
        </InputFrame>
      </div>
    `,
  }),
}

export const StateDisabled: Story = {
  name: "State / Disabled",
  render: () => ({
    components: { InputFrame },
    template: `
      <div class="flex w-[360px] flex-col gap-[12px]">
        <InputFrame size="small" :disabled="true">
          <span class="min-w-0 flex-1 text-grey-50 text-size-12">비활성 (small)</span>
        </InputFrame>
        <InputFrame size="regular" :disabled="true">
          <span class="min-w-0 flex-1 text-grey-50 text-size-14">비활성 (regular)</span>
        </InputFrame>
        <InputFrame size="large" :disabled="true">
          <span class="min-w-0 flex-1 text-grey-50 text-size-16">비활성 (large)</span>
        </InputFrame>
      </div>
    `,
  }),
}
