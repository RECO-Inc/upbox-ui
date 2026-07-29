import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { IconPlus, IconPen, IconChevronUp } from "../../icons"
import Fab from './Fab.vue'

const meta = {
  title: 'Components/Fab',
  component: Fab,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    fabStyle: {
      control: 'select',
      options: ['basic', 'colorfilled'],
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'regular', 'medium'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Fab>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { fabStyle: 'basic', size: 'regular' },
  render: (args) => ({
    components: { Fab, IconPlus },
    setup: () => ({ args }),
    template: '<Fab v-bind="args"><IconPlus />추가</Fab>',
  }),
}

export const Styles: Story = {
  render: () => ({
    components: { Fab, IconPlus, IconPen },
    template: `
      <div class="flex flex-wrap gap-[16px] items-center p-[24px] bg-grey-20 rounded-[8px]">
        <Fab fabStyle="basic"><IconPlus />추가하기</Fab>
        <Fab fabStyle="colorfilled"><IconPlus />추가하기</Fab>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Fab, IconPlus },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Basic</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Fab fabStyle="basic" size="xsmall"><IconPlus />추가</Fab>
            <Fab fabStyle="basic" size="small"><IconPlus />추가</Fab>
            <Fab fabStyle="basic" size="regular"><IconPlus />추가</Fab>
            <Fab fabStyle="basic" size="medium"><IconPlus />추가</Fab>
          </div>
        </div>
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Colorfilled</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Fab fabStyle="colorfilled" size="xsmall"><IconPlus />추가</Fab>
            <Fab fabStyle="colorfilled" size="small"><IconPlus />추가</Fab>
            <Fab fabStyle="colorfilled" size="regular"><IconPlus />추가</Fab>
            <Fab fabStyle="colorfilled" size="medium"><IconPlus />추가</Fab>
          </div>
        </div>
      </div>
    `,
  }),
}

export const IconOnly: Story = {
  render: () => ({
    components: { Fab, IconPlus, IconChevronUp },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <Fab fabStyle="basic" icon-only><IconPlus /></Fab>
        <Fab fabStyle="colorfilled" icon-only><IconPlus /></Fab>
        <Fab fabStyle="basic" icon-only><IconChevronUp /></Fab>
        <Fab fabStyle="colorfilled" icon-only><IconChevronUp /></Fab>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Fab, IconPlus },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <Fab fabStyle="basic" disabled><IconPlus />추가하기</Fab>
        <Fab fabStyle="colorfilled" disabled><IconPlus />추가하기</Fab>
      </div>
    `,
  }),
}
