import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import DateCalendar from "./DateCalendar.vue"

const meta = {
  title: "Components/Date/DateCalendar",
  component: DateCalendar,
  tags: ["autodocs"],
} satisfies Meta<typeof DateCalendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { DateCalendar },
    setup() {
      const v = ref<CalendarDate | null>(null)
      return { v }
    },
    template: `
      <div class="flex justify-center p-[16px]">
        <DateCalendar v-model="v" />
      </div>
    `,
  }),
}

export const WithFooter: Story = {
  render: () => ({
    components: { DateCalendar },
    template: `
      <div class="flex justify-center p-[16px]">
        <DateCalendar show-footer />
      </div>
    `,
  }),
}
