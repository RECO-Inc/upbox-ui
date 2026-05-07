import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import MobileDateCalendar from "./MobileDateCalendar.vue"

const meta = {
  title: "Components/Date/MobileDateCalendar",
  component: MobileDateCalendar,
  tags: ["autodocs"],
} satisfies Meta<typeof MobileDateCalendar>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MobileDateCalendar },
    setup() {
      const v = ref<CalendarDate | null>(null)
      return { v }
    },
    template: `
      <div class="flex justify-center bg-grey-30 p-[16px]">
        <MobileDateCalendar v-model="v" />
      </div>
    `,
  }),
}

export const WithSelectedDate: Story = {
  render: () => ({
    components: { MobileDateCalendar },
    setup() {
      const v = ref<CalendarDate | null>(new CalendarDate(2026, 3, 21))
      return { v }
    },
    template: `
      <div class="flex justify-center bg-grey-30 p-[16px]">
        <MobileDateCalendar v-model="v" />
      </div>
    `,
  }),
}

export const NoFooter: Story = {
  render: () => ({
    components: { MobileDateCalendar },
    setup() {
      const v = ref<CalendarDate | null>(null)
      return { v }
    },
    template: `
      <div class="flex justify-center bg-grey-30 p-[16px]">
        <MobileDateCalendar v-model="v" :show-footer="false" />
      </div>
    `,
  }),
}
