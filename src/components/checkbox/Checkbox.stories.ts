import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'
import { Label } from '../label'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Checkbox, Label },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div class="flex items-center gap-[8px]">
        <Checkbox id="cb" v-model="checked" v-bind="args" />
        <Label for="cb" class="cursor-pointer">Accept terms</Label>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const a = ref(true)
      const b = ref(true)
      const c = ref(true)
      return { a, b, c }
    },
    template: `
      <div class="flex items-center gap-[24px]">
        <div class="flex items-center gap-[8px]">
          <Checkbox id="s" size="sm" v-model="a" />
          <Label for="s">Small</Label>
        </div>
        <div class="flex items-center gap-[8px]">
          <Checkbox id="r" size="md" v-model="b" />
          <Label for="r">Regular</Label>
        </div>
        <div class="flex items-center gap-[8px]">
          <Checkbox id="l" size="lg" v-model="c" />
          <Label for="l">Large</Label>
        </div>
      </div>
    `,
  }),
}

export const ErrorState: Story = {
  args: { error: true },
  render: (args) => ({
    components: { Checkbox, Label },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `
      <div class="flex items-center gap-[8px]">
        <Checkbox id="err" v-model="checked" v-bind="args" />
        <Label for="err" class="text-error-80">Required field</Label>
      </div>
    `,
  }),
}
