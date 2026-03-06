import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'error', 'positive', 'usually', 'assistant', 'info'],
    },
    btnStyle: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    block: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', size: 'md' },
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
      <div class="flex flex-wrap gap-[12px] items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="error">Error</Button>
        <Button variant="positive">Positive</Button>
        <Button variant="usually">Usually</Button>
        <Button variant="assistant">Assistant</Button>
        <Button variant="info">Info</Button>
      </div>
    `,
  }),
}

export const Styles: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <Button variant="primary" btnStyle="filled">Filled</Button>
        <Button variant="primary" btnStyle="outlined">Outlined</Button>
        <Button variant="primary" btnStyle="text">Text</Button>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-[12px] items-end">
        <Button size="xs">XSmall</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Regular</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">XLarge</Button>
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: { variant: 'primary', loading: true },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Loading</Button>',
  }),
}

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Disabled</Button>',
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
