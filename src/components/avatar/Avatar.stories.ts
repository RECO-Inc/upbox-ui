import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Avatar from './Avatar.vue'
import AvatarImage from './AvatarImage.vue'
import AvatarFallback from './AvatarFallback.vue'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'base', 'large'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithFallback: Story = {
  render: () => ({
    components: { Avatar, AvatarFallback },
    template: `
      <Avatar>
        <AvatarFallback class="bg-navy-20 text-navy-80 font-semibold">JH</AvatarFallback>
      </Avatar>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Avatar, AvatarFallback },
    template: `
      <div class="flex items-end gap-[16px]">
        <Avatar size="small">
          <AvatarFallback class="bg-navy-20 text-navy-80 font-semibold">SM</AvatarFallback>
        </Avatar>
        <Avatar size="base">
          <AvatarFallback class="bg-blue-30 text-blue-80 font-semibold">MD</AvatarFallback>
        </Avatar>
        <Avatar size="large">
          <AvatarFallback class="bg-green-30 text-green-80 font-semibold">LG</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}

export const Shapes: Story = {
  render: () => ({
    components: { Avatar, AvatarFallback },
    template: `
      <div class="flex items-center gap-[16px]">
        <Avatar shape="circle">
          <AvatarFallback class="bg-navy-20 text-navy-80 font-semibold">C</AvatarFallback>
        </Avatar>
        <Avatar shape="square">
          <AvatarFallback class="bg-navy-20 text-navy-80 font-semibold">S</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}
