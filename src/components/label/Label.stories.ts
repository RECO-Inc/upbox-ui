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
      <div class="flex flex-col gap-2">
        <Label for="email">Email</Label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          class="px-3 py-2 border border-base-40 rounded text-size-14 text-base-80 focus:outline-none focus:border-primary-80"
        />
      </div>
    `,
  }),
}

export const MultipleLabels: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <Label for="name">Full Name</Label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            class="px-3 py-2 border border-base-40 rounded text-size-14 text-base-80 focus:outline-none focus:border-primary-80"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Label for="email2">Email Address</Label>
          <input
            id="email2"
            type="email"
            placeholder="Enter your email"
            class="px-3 py-2 border border-base-40 rounded text-size-14 text-base-80 focus:outline-none focus:border-primary-80"
          />
        </div>
        <div class="flex flex-col gap-2">
          <Label for="phone">Phone Number</Label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            class="px-3 py-2 border border-base-40 rounded text-size-14 text-base-80 focus:outline-none focus:border-primary-80"
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
      <div class="flex items-center gap-2">
        <input id="terms" type="checkbox" class="w-4 h-4 accent-primary-80" />
        <Label for="terms">I agree to the terms and conditions</Label>
      </div>
    `,
  }),
}
