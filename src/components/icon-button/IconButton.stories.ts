import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { IconSearch, IconPlus, IconClose, IconTrash, IconSettings } from "../../icons"
import IconButton from './IconButton.vue'

const meta = {
  title: 'Components/Button/IconButton',
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
    components: { IconButton, IconPlus },
    setup: () => ({ args }),
    template: '<IconButton v-bind="args"><IconPlus /></IconButton>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { IconButton, IconPlus, IconTrash, IconSettings, IconClose },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <IconButton variant="primary"><IconPlus /></IconButton>
        <IconButton variant="destructive"><IconTrash /></IconButton>
        <IconButton variant="secondary"><IconSettings /></IconButton>
        <IconButton variant="tertiary"><IconClose /></IconButton>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { IconButton, IconPlus },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Primary</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <IconButton size="2xsmall"><IconPlus /></IconButton>
            <IconButton size="xsmall"><IconPlus /></IconButton>
            <IconButton size="small"><IconPlus /></IconButton>
            <IconButton size="regular"><IconPlus /></IconButton>
            <IconButton size="large"><IconPlus /></IconButton>
            <IconButton size="xlarge"><IconPlus /></IconButton>
          </div>
        </div>
      </div>
    `,
  }),
}

export const AllVariantsGrid: Story = {
  render: () => ({
    components: { IconButton, IconPlus, IconTrash, IconSettings, IconClose, IconSearch },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div v-for="variant in ['primary', 'destructive', 'secondary', 'tertiary']" :key="variant">
          <p class="text-size-13 text-grey-60 mb-[8px] capitalize">{{ variant }}</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <IconButton :variant="variant" size="2xsmall"><IconPlus /></IconButton>
            <IconButton :variant="variant" size="xsmall"><IconPlus /></IconButton>
            <IconButton :variant="variant" size="small"><IconPlus /></IconButton>
            <IconButton :variant="variant" size="regular"><IconPlus /></IconButton>
            <IconButton :variant="variant" size="large"><IconPlus /></IconButton>
            <IconButton :variant="variant" size="xlarge"><IconPlus /></IconButton>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { IconButton, IconPlus, IconTrash, IconSettings, IconClose },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <IconButton variant="primary" disabled><IconPlus /></IconButton>
        <IconButton variant="destructive" disabled><IconTrash /></IconButton>
        <IconButton variant="secondary" disabled><IconSettings /></IconButton>
        <IconButton variant="tertiary" disabled><IconClose /></IconButton>
      </div>
    `,
  }),
}
