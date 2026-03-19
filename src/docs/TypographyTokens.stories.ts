import type { Meta, StoryObj } from '@storybook/vue3-vite'
import TypographyTokens from './TypographyTokens.vue'

const meta: Meta<typeof TypographyTokens> = {
  title: 'Tokens/Typography',
  component: TypographyTokens,
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
    actions: { disable: true },
  },
}

export default meta
type Story = StoryObj<typeof TypographyTokens>

export const Default: Story = {}
