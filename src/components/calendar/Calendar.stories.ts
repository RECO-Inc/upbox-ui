import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Calendar from './Calendar.vue'

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Calendar },
    template: `
      <div class="flex justify-center">
        <Calendar />
      </div>
    `,
  }),
}

export const WithDateTime: Story = {
  render: () => ({
    components: { Calendar },
    template: `
      <div class="flex justify-center">
        <Calendar datetime />
      </div>
    `,
  }),
}

export const WithDateTimeAndSeconds: Story = {
  render: () => ({
    components: { Calendar },
    template: `
      <div class="flex justify-center">
        <Calendar datetime seconds />
      </div>
    `,
  }),
}

export const WithFooter: Story = {
  render: () => ({
    components: { Calendar },
    template: `
      <div class="flex justify-center">
        <Calendar show-footer />
      </div>
    `,
  }),
}

export const NoDate: Story = {
  render: () => ({
    components: { Calendar },
    template: `
      <div class="flex justify-center">
        <Calendar no-date />
      </div>
    `,
  }),
}
