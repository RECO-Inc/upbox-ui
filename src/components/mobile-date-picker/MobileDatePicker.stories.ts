import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import MobileDatePicker from "./MobileDatePicker.vue"

const meta = {
  title: "Components/Date/MobileDatePicker",
  component: MobileDatePicker,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "regular", "large"] },
  },
} satisfies Meta<typeof MobileDatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MobileDatePicker },
    setup() {
      const v = ref<CalendarDate | null>(null)
      return { v }
    },
    template: `
      <div class="w-[360px]">
        <MobileDatePicker v-model="v" size="large" />
      </div>
    `,
  }),
}

export const Preselected: Story = {
  render: () => ({
    components: { MobileDatePicker },
    setup() {
      const v = ref<CalendarDate | null>(new CalendarDate(2026, 5, 6))
      return { v }
    },
    template: `
      <div class="w-[360px]">
        <MobileDatePicker v-model="v" size="large" />
      </div>
    `,
  }),
}
