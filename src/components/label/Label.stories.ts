import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Label from './Label.vue'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Label },
    template: `
      <Label>Email address</Label>
    `,
  }),
}

export const WithInput: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="flex flex-col gap-[8px]">
        <Label for="email">Email</Label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          class="px-[12px] py-[8px] border border-grey-40 rounded-sm text-size-14 text-grey-80 focus:outline-hidden focus:border-navy-80"
        />
      </div>
    `,
  }),
}

export const MultipleLabels: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div class="flex flex-col gap-[8px]">
          <Label for="name">Full Name</Label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            class="px-[12px] py-[8px] border border-grey-40 rounded-sm text-size-14 text-grey-80 focus:outline-hidden focus:border-navy-80"
          />
        </div>
        <div class="flex flex-col gap-[8px]">
          <Label for="email2">Email Address</Label>
          <input
            id="email2"
            type="email"
            placeholder="Enter your email"
            class="px-[12px] py-[8px] border border-grey-40 rounded-sm text-size-14 text-grey-80 focus:outline-hidden focus:border-navy-80"
          />
        </div>
        <div class="flex flex-col gap-[8px]">
          <Label for="phone">Phone Number</Label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            class="px-[12px] py-[8px] border border-grey-40 rounded-sm text-size-14 text-grey-80 focus:outline-hidden focus:border-navy-80"
          />
        </div>
      </div>
    `,
  }),
}

export const WithCheckbox: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="flex items-center gap-[8px]">
        <input id="terms" type="checkbox" class="w-[16px] h-[16px] accent-navy-80" />
        <Label for="terms">I agree to the terms and conditions</Label>
      </div>
    `,
  }),
}
