import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import ToggleGroup from './ToggleGroup.vue'
import ToggleGroupItem from './ToggleGroupItem.vue'

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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

export const Multiple: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem },
    setup() {
      const value = ref<string[]>(['bold'])
      return { value }
    },
    template: `
      <div class="flex flex-col gap-3">
        <p class="text-size-13 text-base-60">Selected: {{ value.join(', ') || 'none' }}</p>
        <ToggleGroup type="multiple" v-model="value">
          <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
          <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
          <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
          <ToggleGroupItem value="strikethrough">Strike</ToggleGroupItem>
        </ToggleGroup>
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem },
    template: `
      <div class="flex flex-col gap-4">
        <div>
          <p class="text-size-13 font-bold mb-2 text-base-80">Default variant</p>
          <ToggleGroup type="single" default-value="a" variant="default">
            <ToggleGroupItem value="a">Option A</ToggleGroupItem>
            <ToggleGroupItem value="b">Option B</ToggleGroupItem>
            <ToggleGroupItem value="c">Option C</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-size-13 font-bold mb-2 text-base-80">Outline variant</p>
          <ToggleGroup type="single" default-value="a" variant="outline">
            <ToggleGroupItem value="a">Option A</ToggleGroupItem>
            <ToggleGroupItem value="b">Option B</ToggleGroupItem>
            <ToggleGroupItem value="c">Option C</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem },
    template: `
      <div class="flex flex-col gap-4">
        <div>
          <p class="text-size-13 font-bold mb-2 text-base-80">Small</p>
          <ToggleGroup type="single" default-value="a" size="sm">
            <ToggleGroupItem value="a">Small A</ToggleGroupItem>
            <ToggleGroupItem value="b">Small B</ToggleGroupItem>
            <ToggleGroupItem value="c">Small C</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-size-13 font-bold mb-2 text-base-80">Default</p>
          <ToggleGroup type="single" default-value="a" size="default">
            <ToggleGroupItem value="a">Default A</ToggleGroupItem>
            <ToggleGroupItem value="b">Default B</ToggleGroupItem>
            <ToggleGroupItem value="c">Default C</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-size-13 font-bold mb-2 text-base-80">Large</p>
          <ToggleGroup type="single" default-value="a" size="lg">
            <ToggleGroupItem value="a">Large A</ToggleGroupItem>
            <ToggleGroupItem value="b">Large B</ToggleGroupItem>
            <ToggleGroupItem value="c">Large C</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem },
    template: `
      <div class="flex flex-col gap-4">
        <div>
          <p class="text-size-13 font-bold mb-2 text-base-80">Group disabled</p>
          <ToggleGroup type="single" default-value="a" :disabled="true">
            <ToggleGroupItem value="a">Option A</ToggleGroupItem>
            <ToggleGroupItem value="b">Option B</ToggleGroupItem>
            <ToggleGroupItem value="c">Option C</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-size-13 font-bold mb-2 text-base-80">Individual item disabled</p>
          <ToggleGroup type="single" default-value="a">
            <ToggleGroupItem value="a">Option A</ToggleGroupItem>
            <ToggleGroupItem value="b" :disabled="true">Disabled</ToggleGroupItem>
            <ToggleGroupItem value="c">Option C</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    `,
  }),
}
