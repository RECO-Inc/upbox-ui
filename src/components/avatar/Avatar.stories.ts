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
      options: ['sm', 'base', 'lg'],
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
        <AvatarFallback class="bg-primary-20 text-primary-80 font-semibold">JH</AvatarFallback>
      </Avatar>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Avatar, AvatarFallback },
    template: `
      <div class="flex items-end gap-4">
        <Avatar size="sm">
          <AvatarFallback class="bg-primary-20 text-primary-80 font-semibold">SM</AvatarFallback>
        </Avatar>
        <Avatar size="base">
          <AvatarFallback class="bg-info-30 text-info-80 font-semibold">MD</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback class="bg-positive-30 text-positive-80 font-semibold">LG</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}

export const Shapes: Story = {
  render: () => ({
    components: { Avatar, AvatarFallback },
    template: `
      <div class="flex items-center gap-4">
        <Avatar shape="circle">
          <AvatarFallback class="bg-primary-20 text-primary-80 font-semibold">C</AvatarFallback>
        </Avatar>
        <Avatar shape="square">
          <AvatarFallback class="bg-primary-20 text-primary-80 font-semibold">S</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}
