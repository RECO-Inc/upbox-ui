import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Empty from './Empty.vue'

const meta = {
  title: 'Components/Empty',
  component: Empty,
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomMessage: Story = {
  render: () => ({
    components: { Empty },
    template: '<Empty>No items found</Empty>',
  }),
}
