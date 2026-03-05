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
      <div class="w-60">
        <div class="text-size-14 font-semibold">Title</div>
        <Separator class="my-3" />
        <div class="text-size-14 text-base-60">Content below separator.</div>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex items-center gap-3 h-6">
        <span class="text-size-14">Left</span>
        <Separator orientation="vertical" />
        <span class="text-size-14">Right</span>
      </div>
    `,
  }),
}
