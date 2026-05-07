import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date"
import MobileDatePeriodSelector, { type DatePeriodPreset } from "./MobileDatePeriodSelector.vue"
import type { DatePeriodValue } from "../date-period-picker/datePeriodTypes"

const meta = {
  title: "Components/Date/MobileDatePeriodSelector",
  component: MobileDatePeriodSelector,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MobileDatePeriodSelector>

export default meta
type Story = StoryObj<typeof meta>

const tz = getLocalTimeZone()
const end = today(tz) as CalendarDate

export const Fixed: Story = {
  name: "variant=fixed (1개월 프리셋)",
  render: () => ({
    components: { MobileDatePeriodSelector },
    setup() {
      const value = ref<DatePeriodValue | null>({
        start: end.subtract({ months: 1 }),
        end,
      })
      function onDone(v: DatePeriodValue) {
        // eslint-disable-next-line no-console
        console.log("done", v)
      }
      return { value, onDone }
    },
    template: `
      <div class="w-[360px]">
        <MobileDatePeriodSelector v-model="value" @done="onDone" @close="() => console.log('close')" />
      </div>
    `,
  }),
}

export const Select: Story = {
  name: "variant=select (직접 설정)",
  render: () => ({
    components: { MobileDatePeriodSelector },
    setup() {
      const value = ref<DatePeriodValue | null>({ start: null, end: null })
      const preset = ref<DatePeriodPreset>("custom")
      function onDone(v: DatePeriodValue) {
        // eslint-disable-next-line no-console
        console.log("done", v)
      }
      return { value, preset, onDone }
    },
    template: `
      <div class="w-[360px]">
        <MobileDatePeriodSelector
          v-model="value"
          v-model:preset="preset"
          @done="onDone"
          @close="() => console.log('close')"
        />
      </div>
    `,
  }),
}

export const Empty: Story = {
  name: "초기값 없음 (자동 custom)",
  render: () => ({
    components: { MobileDatePeriodSelector },
    setup() {
      const value = ref<DatePeriodValue | null>(null)
      return { value }
    },
    template: `
      <div class="w-[360px]">
        <MobileDatePeriodSelector v-model="value" />
      </div>
    `,
  }),
}

export const Preselected3Months: Story = {
  name: "초기값 3개월 (자동 감지)",
  render: () => ({
    components: { MobileDatePeriodSelector },
    setup() {
      const value = ref<DatePeriodValue | null>({
        start: end.subtract({ months: 3 }),
        end,
      })
      return { value }
    },
    template: `
      <div class="w-[360px]">
        <MobileDatePeriodSelector v-model="value" />
      </div>
    `,
  }),
}
