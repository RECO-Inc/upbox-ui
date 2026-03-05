import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Badge from './Badge.vue'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['base', 'primary', 'info', 'positive', 'error', 'warning'],
    },
    size: {
      control: 'select',
      options: ['xxsmall', 'xsmall', 'small', 'regular'],
    },
    deep: { control: 'boolean' },
    outline: { control: 'boolean' },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'primary' },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">Badge</Badge>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="base">Base</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="positive">Positive</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="warning">Warning</Badge>
      </div>
    `,
  }),
}

export const Deep: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="base" deep>Base</Badge>
        <Badge variant="primary" deep>Primary</Badge>
        <Badge variant="info" deep>Info</Badge>
        <Badge variant="positive" deep>Positive</Badge>
        <Badge variant="error" deep>Error</Badge>
        <Badge variant="warning" deep>Warning</Badge>
      </div>
    `,
  }),
}

export const Outline: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2">
        <Badge variant="base" outline>Base</Badge>
        <Badge variant="primary" outline>Primary</Badge>
        <Badge variant="info" outline>Info</Badge>
        <Badge variant="positive" outline>Positive</Badge>
        <Badge variant="error" outline>Error</Badge>
        <Badge variant="warning" outline>Warning</Badge>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="primary" size="xxsmall">XXSmall</Badge>
        <Badge variant="primary" size="xsmall">XSmall</Badge>
        <Badge variant="primary" size="small">Small</Badge>
        <Badge variant="primary" size="regular">Regular</Badge>
      </div>
    `,
  }),
}
