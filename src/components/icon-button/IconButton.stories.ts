import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { Search, Plus, X, Trash2, Settings } from 'lucide-vue-next'
import IconButton from './IconButton.vue'

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'destructive', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['2xsmall', 'xsmall', 'small', 'regular', 'large', 'xlarge'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'primary', size: 'regular' },
  render: (args) => ({
    components: { IconButton, Plus },
    setup: () => ({ args }),
    template: '<IconButton v-bind="args"><Plus /></IconButton>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { IconButton, Plus, Trash2, Settings, X },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <IconButton variant="primary"><Plus /></IconButton>
        <IconButton variant="destructive"><Trash2 /></IconButton>
        <IconButton variant="secondary"><Settings /></IconButton>
        <IconButton variant="tertiary"><X /></IconButton>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { IconButton, Plus },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Primary</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <IconButton size="2xsmall"><Plus /></IconButton>
            <IconButton size="xsmall"><Plus /></IconButton>
            <IconButton size="small"><Plus /></IconButton>
            <IconButton size="regular"><Plus /></IconButton>
            <IconButton size="large"><Plus /></IconButton>
            <IconButton size="xlarge"><Plus /></IconButton>
          </div>
        </div>
      </div>
    `,
  }),
}

export const AllVariantsGrid: Story = {
  render: () => ({
    components: { IconButton, Plus, Trash2, Settings, X, Search },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div v-for="variant in ['primary', 'destructive', 'secondary', 'tertiary']" :key="variant">
          <p class="text-size-13 text-grey-60 mb-[8px] capitalize">{{ variant }}</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <IconButton :variant="variant" size="2xsmall"><Plus /></IconButton>
            <IconButton :variant="variant" size="xsmall"><Plus /></IconButton>
            <IconButton :variant="variant" size="small"><Plus /></IconButton>
            <IconButton :variant="variant" size="regular"><Plus /></IconButton>
            <IconButton :variant="variant" size="large"><Plus /></IconButton>
            <IconButton :variant="variant" size="xlarge"><Plus /></IconButton>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { IconButton, Plus, Trash2, Settings, X },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <IconButton variant="primary" disabled><Plus /></IconButton>
        <IconButton variant="destructive" disabled><Trash2 /></IconButton>
        <IconButton variant="secondary" disabled><Settings /></IconButton>
        <IconButton variant="tertiary" disabled><X /></IconButton>
      </div>
    `,
  }),
}
