import type { Meta, StoryObj } from '@storybook/vue3-vite'
import AllComponents from './AllComponents.vue'

const meta: Meta<typeof AllComponents> = {
  title: 'Components/All Components',
  component: AllComponents,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof AllComponents>

export const Default: Story = {}
