import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import type { DateRange } from "reka-ui"
import { CalendarDate } from "@internationalized/date"
import PeriodCalendar from "./PeriodCalendar.vue"

const meta = {
  title: "Components/Date/PeriodCalendar",
  component: PeriodCalendar,
  tags: ["autodocs"],
} satisfies Meta<typeof PeriodCalendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { PeriodCalendar },
    setup() {
      const range = ref<DateRange | undefined>(undefined)
      return { range }
    },
    template: `
      <div class="flex justify-center p-[16px]">
        <PeriodCalendar v-model="range" />
      </div>
    `,
  }),
}

export const SelectedRange: Story = {
  name: "With initial range",
  render: () => ({
    components: { PeriodCalendar },
    setup() {
      const range = ref<DateRange | undefined>({
        start: new CalendarDate(2024, 4, 1),
        end: new CalendarDate(2024, 4, 15),
      })
      return { range }
    },
    template: `
      <div class="flex justify-center p-[16px]">
        <PeriodCalendar v-model="range" />
      </div>
    `,
  }),
}
