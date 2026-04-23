import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import DateMove from "./DateMove.vue"
import { DatePicker } from "../date-picker"
import { DatePeriodPicker } from "../date-period-picker"
import type { DatePeriodValue } from "../date-period-picker/datePeriodTypes"

const meta = {
  title: "Components/Date/DateMove",
  component: DateMove,
  tags: ["autodocs"],
} satisfies Meta<typeof DateMove>

export default meta
type Story = StoryObj<typeof meta>

/**
 * DateMove + DatePicker
 */
export const WithDatePicker: Story = {
  name: "With DatePicker",
  render: () => ({
    components: { DateMove, DatePicker },
    setup() {
      const d = ref<CalendarDate | null>(null)
      return { d }
    },
    template: `
      <div class="w-[400px] space-y-[8px] text-size-12 text-grey-60">
        <DateMove v-model="d" class="items-stretch">
          <DatePicker v-model="d" />
        </DateMove>
      </div>
    `,
  }),
}

/**
 * DateMove + DatePeriodPicker
 */
export const WithDatePeriodPicker: Story = {
  name: "With DatePeriodPicker",
  render: () => ({
    components: { DateMove, DatePeriodPicker },
    setup() {
      const p = ref<DatePeriodValue | null>({ start: null, end: null })
      return { p }
    },
    template: `
      <div class="w-[480px] space-y-[8px] text-size-12 text-grey-60">
        <DateMove v-model="p" class="items-stretch">
          <DatePeriodPicker v-model="p" />
        </DateMove>
      </div>
    `,
  }),
}

/**
 * 날짜 이동도 막힘
 */
export const Disabled: Story = {
  name: "Disabled",
  render: () => ({
    components: { DateMove, DatePicker, DatePeriodPicker },
    setup() {
      const d = ref<CalendarDate | null>(new CalendarDate(2024, 4, 15))
      const p = ref<DatePeriodValue | null>({
        start: new CalendarDate(2024, 4, 1),
        end: new CalendarDate(2024, 4, 30),
      })
      return { d, p }
    },
    template: `
      <div class="w-[480px] space-y-[16px] text-size-12 text-grey-60">
        <div class="space-y-[6px]">
          <p class="font-bold text-grey-80">DatePicker (단일)</p>
          <DateMove v-model="d" disabled class="items-stretch">
            <DatePicker v-model="d" />
          </DateMove>
        </div>
        <div class="space-y-[6px]">
          <p class="font-bold text-grey-80">DatePeriodPicker (기간)</p>
          <DateMove v-model="p" disabled class="items-stretch">
            <DatePeriodPicker v-model="p" />
          </DateMove>
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  name: "Size (small / regular / large)",
  render: () => ({
    components: { DateMove, DatePicker, DatePeriodPicker },
    setup() {
      const d = ref<CalendarDate | null>(null)
      const p = ref<DatePeriodValue | null>({ start: null, end: null })
      return { d, p }
    },
    template: `
      <div class="w-[480px] space-y-[20px] text-size-12 text-grey-60">
        <div class="space-y-[8px]">
          <p class="font-bold text-grey-80">small</p>
          <DateMove v-model="d" size="small" class="items-stretch">
            <DatePicker v-model="d" />
          </DateMove>
        </div>
        <div class="space-y-[8px]">
          <p class="font-bold text-grey-80">regular (기본)</p>
          <DateMove v-model="d" class="items-stretch">
            <DatePicker v-model="d" />
          </DateMove>
        </div>
        <div class="space-y-[8px]">
          <p class="font-bold text-grey-80">large</p>
          <DateMove v-model="d" size="large" class="items-stretch">
            <DatePicker v-model="d" />
          </DateMove>
        </div>
      </div>
    `,
  }),
}
