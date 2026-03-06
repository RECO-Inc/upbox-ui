import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Separator from './Separator.vue'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="w-[240px]">
        <div class="text-size-14 font-semibold">Title</div>
        <Separator class="my-[12px]" />
        <div class="text-size-14 text-base-60">Content below separator.</div>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex items-center gap-[12px] h-[24px]">
        <span class="text-size-14">Left</span>
        <Separator orientation="vertical" />
        <span class="text-size-14">Right</span>
      </div>
    `,
  }),
}
