import type { Meta, StoryObj } from '@storybook/vue3-vite'
import SpacingTokens from './SpacingTokens.vue'

const meta: Meta<typeof SpacingTokens> = {
  title: 'Tokens/Spacing',
  component: SpacingTokens,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof SpacingTokens>

export const Default: Story = {}
