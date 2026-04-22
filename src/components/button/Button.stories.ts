import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { ChevronLeft, ChevronRight, Search, Plus } from 'lucide-vue-next'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'destructive', 'secondary', 'tertiary'],
    },
    buttonStyle: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'regular', 'large', 'xlarge'],
    },
    block: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', size: 'regular' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Button</Button>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-col gap-[24px]">
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Filled</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
          </div>
        </div>
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Outlined</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Button variant="primary" buttonStyle="outlined">Primary</Button>
            <Button variant="destructive" buttonStyle="outlined">Destructive</Button>
            <Button variant="secondary" buttonStyle="outlined">Secondary</Button>
            <Button variant="tertiary" buttonStyle="outlined">Tertiary</Button>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-[12px] items-end">
        <Button size="xsmall">XSmall</Button>
        <Button size="small">Small</Button>
        <Button size="regular">Regular</Button>
        <Button size="large">Large</Button>
        <Button size="xlarge">XLarge</Button>
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: { variant: 'primary', loading: true },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args" />',
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-col gap-[24px]">
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Filled</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="destructive" disabled>Destructive</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="tertiary" disabled>Tertiary</Button>
          </div>
        </div>
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Outlined</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Button variant="primary" buttonStyle="outlined" disabled>Primary</Button>
            <Button variant="destructive" buttonStyle="outlined" disabled>Destructive</Button>
            <Button variant="secondary" buttonStyle="outlined" disabled>Secondary</Button>
            <Button variant="tertiary" buttonStyle="outlined" disabled>Tertiary</Button>
          </div>
        </div>
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { Button, ChevronLeft, ChevronRight, Search, Plus },
    setup: () => ({}),
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <Button>
          <ChevronLeft class="w-[16px] h-[16px] mr-[4px]" />
          Icon Left
        </Button>
        <Button>
          Icon Right
          <ChevronRight class="w-[16px] h-[16px] ml-[4px]" />
        </Button>
        <Button>
          <Search class="w-[16px] h-[16px]" />
        </Button>
        <Button buttonStyle="outlined">
          <Plus class="w-[16px] h-[16px] mr-[4px]" />
          Add Item
        </Button>
      </div>
    `,
  }),
}

export const Block: Story = {
  args: { variant: 'primary', block: true },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<div class="w-[320px]"><Button v-bind="args">Block Button</Button></div>',
  }),
}
