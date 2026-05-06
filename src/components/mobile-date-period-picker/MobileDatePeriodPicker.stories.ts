import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import MobileDatePeriodPicker from "./MobileDatePeriodPicker.vue"
import type { DatePeriodValue } from "../date-period-picker/datePeriodTypes"

const meta = {
  title: "Components/Date/MobileDatePeriodPicker",
  component: MobileDatePeriodPicker,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "regular", "large"] },
  },
} satisfies Meta<typeof MobileDatePeriodPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MobileDatePeriodPicker },
    setup() {
      const v = ref<DatePeriodValue | null>({ start: null, end: null })
      return { v }
    },
    template: `
      <div class="w-[360px]">
        <MobileDatePeriodPicker v-model="v" size="large" />
      </div>
    `,
  }),
}

export const Preselected: Story = {
  render: () => ({
    components: { MobileDatePeriodPicker },
    setup() {
      const v = ref<DatePeriodValue | null>({
        start: new CalendarDate(2026, 4, 17),
        end: new CalendarDate(2026, 5, 17),
      })
      return { v }
    },
    template: `
      <div class="w-[360px]">
        <MobileDatePeriodPicker v-model="v" size="large" />
      </div>
    `,
  }),
}
