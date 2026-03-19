import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ShadowTokens from './ShadowTokens.vue'

const meta: Meta<typeof ShadowTokens> = {
  title: 'Tokens/Shadow',
  component: ShadowTokens,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof ShadowTokens>

export const Default: Story = {}
