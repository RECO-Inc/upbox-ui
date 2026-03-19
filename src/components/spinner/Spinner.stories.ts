import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Spinner from './Spinner.vue'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-center gap-[16px]">
        <Spinner class="size-[16px]" />
        <Spinner class="size-[24px]" />
        <Spinner class="size-[32px]" />
        <Spinner class="size-[48px]" />
      </div>
    `,
  }),
}

export const Colored: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div class="flex items-center gap-[16px]">
        <Spinner class="size-[24px] text-navy-80" />
        <Spinner class="size-[24px] text-blue-80" />
        <Spinner class="size-[24px] text-green-80" />
        <Spinner class="size-[24px] text-red-80" />
      </div>
    `,
  }),
}
