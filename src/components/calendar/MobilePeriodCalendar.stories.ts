import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import type { DateRange } from "reka-ui"
import MobilePeriodCalendar from "./MobilePeriodCalendar.vue"

const meta = {
  title: "Components/Date/MobilePeriodCalendar",
  component: MobilePeriodCalendar,
  tags: ["autodocs"],
} satisfies Meta<typeof MobilePeriodCalendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MobilePeriodCalendar },
    setup() {
      const v = ref<DateRange>({ start: undefined, end: undefined })
      return { v }
    },
    template: `
      <div class="flex justify-center bg-grey-30 p-[16px]">
        <MobilePeriodCalendar v-model="v" />
      </div>
    `,
  }),
}

export const WithSelectedRange: Story = {
  render: () => ({
    components: { MobilePeriodCalendar },
    setup() {
      const v = ref<DateRange>({
        start: new CalendarDate(2026, 3, 21),
        end: new CalendarDate(2026, 4, 7),
      })
      return { v }
    },
    template: `
      <div class="flex justify-center bg-grey-30 p-[16px]">
        <MobilePeriodCalendar v-model="v" />
      </div>
    `,
  }),
}

export const ThreeMonths: Story = {
  render: () => ({
    components: { MobilePeriodCalendar },
    setup() {
      const v = ref<DateRange>({ start: undefined, end: undefined })
      return { v }
    },
    template: `
      <div class="flex justify-center bg-grey-30 p-[16px]">
        <MobilePeriodCalendar v-model="v" :number-of-months="3" />
      </div>
    `,
  }),
}

export const NoFooter: Story = {
  render: () => ({
    components: { MobilePeriodCalendar },
    setup() {
      const v = ref<DateRange>({ start: undefined, end: undefined })
      return { v }
    },
    template: `
      <div class="flex justify-center bg-grey-30 p-[16px]">
        <MobilePeriodCalendar v-model="v" :show-footer="false" />
      </div>
    `,
  }),
}
