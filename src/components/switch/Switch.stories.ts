import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Switch from './Switch.vue'
import { Label } from '../label'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'regular', 'large'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Switch, Label },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div class="flex items-center gap-3">
        <Switch id="sw" v-model="checked" v-bind="args" />
        <Label for="sw">{{ checked ? 'On' : 'Off' }}</Label>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Switch, Label },
    setup() {
      const a = ref(true)
      const b = ref(true)
      const c = ref(true)
      return { a, b, c }
    },
    template: `
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <Switch size="small" v-model="a" />
          <Label>Small</Label>
        </div>
        <div class="flex items-center gap-2">
          <Switch size="regular" v-model="b" />
          <Label>Regular</Label>
        </div>
        <div class="flex items-center gap-2">
          <Switch size="large" v-model="c" />
          <Label>Large</Label>
        </div>
      </div>
    `,
  }),
}
