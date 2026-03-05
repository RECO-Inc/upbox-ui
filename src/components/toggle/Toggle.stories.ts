import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Toggle from './Toggle.vue'
import { ToggleGroup, ToggleGroupItem } from '../toggle-group'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const pressed = ref(false)
      return { pressed }
    },
    template: `
      <Toggle v-model:pressed="pressed">
        {{ pressed ? 'On' : 'Off' }}
      </Toggle>
    `,
  }),
}

export const Group: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem },
    setup() {
      const value = ref('center')
      return { value }
    },
    template: `
      <ToggleGroup type="single" v-model="value">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center">Center</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
}
