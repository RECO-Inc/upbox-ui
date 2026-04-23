import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import DatePeriodPicker from "./DatePeriodPicker.vue"
import type { DatePeriodValue } from "./datePeriodTypes"

const meta = {
  title: "Components/Date/DatePeriodPicker",
  component: DatePeriodPicker,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "regular", "large"] },
  },
} satisfies Meta<typeof DatePeriodPicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { DatePeriodPicker },
    setup() {
      const v = ref<DatePeriodValue | null>({ start: null, end: null })
      return { v }
    },
    template: `
      <div class="w-[420px]">
        <DatePeriodPicker v-model="v" />
      </div>
    `,
  }),
}

const same = new CalendarDate(2023, 7, 6)

export const StatesAndSizes: Story = {
  name: "States & sizes",
  render: () => ({
    components: { DatePeriodPicker },
    setup() {
      const empty = ref<DatePeriodValue | null>({ start: null, end: null })
      const selected = ref<DatePeriodValue | null>({ start: same, end: same })
      const errVal = ref<DatePeriodValue | null>({ start: same, end: same })
      const disVal = ref<DatePeriodValue | null>({ start: same, end: same })
      const roVal = ref<DatePeriodValue | null>({ start: same, end: same })
      return { empty, selected, errVal, disVal, roVal }
    },
    template: `
      <div class="grid w-full max-w-[760px] grid-cols-2 gap-x-[32px] gap-y-[4px]">
        <div class="flex min-w-0 flex-col gap-[20px]">
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">빈 값</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <DatePeriodPicker v-model="empty" size="small" />
              <DatePeriodPicker v-model="empty" size="regular" />
              <DatePeriodPicker v-model="empty" size="large" />
            </div>
          </div>
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">선택됨</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <DatePeriodPicker v-model="selected" size="small" />
              <DatePeriodPicker v-model="selected" size="regular" />
              <DatePeriodPicker v-model="selected" size="large" />
            </div>
          </div>
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">에러</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <DatePeriodPicker v-model="errVal" size="small" error />
              <DatePeriodPicker v-model="errVal" size="regular" error />
              <DatePeriodPicker v-model="errVal" size="large" error />
            </div>
          </div>
        </div>
        <div class="flex min-w-0 flex-col gap-[20px]">
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">비활성</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <DatePeriodPicker v-model="disVal" size="small" disabled />
              <DatePeriodPicker v-model="disVal" size="regular" disabled />
              <DatePeriodPicker v-model="disVal" size="large" disabled />
            </div>
          </div>
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">읽기 전용</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <DatePeriodPicker v-model="roVal" size="small" readonly />
              <DatePeriodPicker v-model="roVal" size="regular" readonly />
              <DatePeriodPicker v-model="roVal" size="large" readonly />
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
