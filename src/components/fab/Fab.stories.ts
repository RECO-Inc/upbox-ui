import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { Plus, Edit, ChevronUp } from 'lucide-vue-next'
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
    components: { Fab, Plus },
    setup: () => ({ args }),
    template: '<Fab v-bind="args"><Plus />추가</Fab>',
  }),
}

export const Styles: Story = {
  render: () => ({
    components: { Fab, Plus, Edit },
    template: `
      <div class="flex flex-wrap gap-[16px] items-center p-[24px] bg-grey-20 rounded-[8px]">
        <Fab fabStyle="basic"><Plus />추가하기</Fab>
        <Fab fabStyle="colorfilled"><Plus />추가하기</Fab>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Fab, Plus },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Basic</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Fab fabStyle="basic" size="xsmall"><Plus />추가</Fab>
            <Fab fabStyle="basic" size="small"><Plus />추가</Fab>
            <Fab fabStyle="basic" size="regular"><Plus />추가</Fab>
            <Fab fabStyle="basic" size="medium"><Plus />추가</Fab>
          </div>
        </div>
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Colorfilled</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Fab fabStyle="colorfilled" size="xsmall"><Plus />추가</Fab>
            <Fab fabStyle="colorfilled" size="small"><Plus />추가</Fab>
            <Fab fabStyle="colorfilled" size="regular"><Plus />추가</Fab>
            <Fab fabStyle="colorfilled" size="medium"><Plus />추가</Fab>
          </div>
        </div>
      </div>
    `,
  }),
}

export const IconOnly: Story = {
  render: () => ({
    components: { Fab, Plus, ChevronUp },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <Fab fabStyle="basic" icon-only><Plus /></Fab>
        <Fab fabStyle="colorfilled" icon-only><Plus /></Fab>
        <Fab fabStyle="basic" icon-only><ChevronUp /></Fab>
        <Fab fabStyle="colorfilled" icon-only><ChevronUp /></Fab>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Fab, Plus },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <Fab fabStyle="basic" disabled><Plus />추가하기</Fab>
        <Fab fabStyle="colorfilled" disabled><Plus />추가하기</Fab>
      </div>
    `,
  }),
}
