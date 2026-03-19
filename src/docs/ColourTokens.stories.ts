import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ColourTokens from './ColourTokens.vue'

const meta: Meta<typeof ColourTokens> = {
  title: 'Tokens/Colours',
  component: ColourTokens,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof ColourTokens>

export const Default: Story = {}
