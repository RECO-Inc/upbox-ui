import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { Search, Trash2, ChevronRight } from 'lucide-vue-next'
import TextButton from './TextButton.vue'

const meta = {
  title: 'Components/TextButton',
  component: TextButton,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: 'select',
      options: ['destructive', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['2xsmall', 'xsmall', 'small'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof TextButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'secondary', size: 'small' },
  render: (args) => ({
    components: { TextButton },
    setup: () => ({ args }),
    template: '<TextButton v-bind="args">텍스트 버튼</TextButton>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { TextButton },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <TextButton variant="secondary">Secondary</TextButton>
        <TextButton variant="destructive">Destructive</TextButton>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { TextButton },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Secondary</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <TextButton size="2xsmall">2XSmall</TextButton>
            <TextButton size="xsmall">XSmall</TextButton>
            <TextButton size="small">Small</TextButton>
          </div>
        </div>
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Destructive</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <TextButton variant="destructive" size="2xsmall">2XSmall</TextButton>
            <TextButton variant="destructive" size="xsmall">XSmall</TextButton>
            <TextButton variant="destructive" size="small">Small</TextButton>
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { TextButton, Search, Trash2, ChevronRight },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <TextButton>
          <Search />
          검색
        </TextButton>
        <TextButton variant="destructive">
          <Trash2 />
          삭제
        </TextButton>
        <TextButton>
          더보기
          <ChevronRight />
        </TextButton>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { TextButton },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <TextButton disabled>Secondary Disabled</TextButton>
        <TextButton variant="destructive" disabled>Destructive Disabled</TextButton>
      </div>
    `,
  }),
}
