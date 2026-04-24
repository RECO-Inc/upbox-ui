import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { CalendarDate } from "@internationalized/date"
import DatePicker from "./DatePicker.vue"

const meta = {
  title: "Components/Date/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "regular", "large"] },
    variant: { control: "select", options: ["default", "filled", "bottomline"] },
    error: { control: "boolean" },
    readonly: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      const v = ref<CalendarDate | null>(null)
      return { v, args }
    },
    template: `
      <div class="w-[360px]">
        <DatePicker v-model="v" v-bind="args" />
      </div>
    `,
  }),
}

const sampleDate = new CalendarDate(2023, 7, 5)

export const StatesAndSizes: Story = {
  name: "States & sizes",
  render: () => ({
    components: { DatePicker },
    setup() {
      const empty = ref<CalendarDate | null>(null)
      const selected = ref<CalendarDate | null>(sampleDate)
      const errVal = ref<CalendarDate | null>(sampleDate)
      const disVal = ref<CalendarDate | null>(sampleDate)
      const roVal = ref<CalendarDate | null>(sampleDate)
      return { empty, selected, errVal, disVal, roVal }
    },
    template: `
      <div class="grid w-full max-w-[760px] grid-cols-2 gap-x-[32px] gap-y-[4px]">
        <div class="flex min-w-0 flex-col gap-[20px]">
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">빈 값</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <DatePicker v-model="empty" size="small" />
              <DatePicker v-model="empty" size="regular" />
              <DatePicker v-model="empty" size="large" />
            </div>
          </div>
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">선택됨</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <DatePicker v-model="selected" size="small" />
              <DatePicker v-model="selected" size="regular" />
              <DatePicker v-model="selected" size="large" />
            </div>
          </div>
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">에러</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <DatePicker v-model="errVal" size="small" error />
              <DatePicker v-model="errVal" size="regular" error />
              <DatePicker v-model="errVal" size="large" error />
            </div>
          </div>
        </div>
        <div class="flex min-w-0 flex-col gap-[20px]">
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">비활성</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <DatePicker v-model="disVal" size="small" disabled />
              <DatePicker v-model="disVal" size="regular" disabled />
              <DatePicker v-model="disVal" size="large" disabled />
            </div>
          </div>
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">읽기 전용</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <DatePicker v-model="roVal" size="small" readonly />
              <DatePicker v-model="roVal" size="regular" readonly />
              <DatePicker v-model="roVal" size="large" readonly />
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
