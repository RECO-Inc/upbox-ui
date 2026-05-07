import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import MonthCalendar from "./MonthCalendar.vue"

const meta = {
  title: "Components/Date/MonthCalendar",
  component: MonthCalendar,
  tags: ["autodocs"],
} satisfies Meta<typeof MonthCalendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MonthCalendar },
    setup() {
      const v = ref<CalendarDate | null>(
        new CalendarDate(2022, 4, 1),
      )
      return { v, onDone: () => {} }
    },
    template: `
      <div class="flex justify-center p-[16px]">
        <MonthCalendar v-model="v" @done="onDone" />
      </div>
    `,
  }),
}
