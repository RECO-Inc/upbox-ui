import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { Time } from "@internationalized/date"
import TimePicker from "./TimePicker.vue"
import TimeInput from "./TimeInput.vue"

const meta = {
  title: "Components/Time/TimePicker",
  component: TimePicker,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "regular", "large"] },
    variant: { control: "select", options: ["default", "filled", "bottomline"] },
    error: { control: "boolean" },
    readonly: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof TimePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { TimePicker },
    setup() {
      const v = ref<Time | null>(null)
      return { v, args }
    },
    template: `
      <div class="w-[240px]">
        <TimePicker v-model="v" v-bind="args" />
      </div>
    `,
  }),
}

/**
 * 슬롯에 TimeInput 을 명시적으로 넣는 방법.
 * placeholder 등 TimeInput 전용 props 를 직접 제어할 수 있다.
 */
export const WithExplicitTimeInput: Story = {
  name: "With explicit TimeInput slot",
  render: () => ({
    components: { TimePicker, TimeInput },
    setup() {
      const v = ref<Time | null>(null)
      return { v }
    },
    template: `
      <div class="w-[240px]">
        <TimePicker v-model="v">
          <TimeInput placeholder="HH:MM" />
        </TimePicker>
      </div>
    `,
  }),
}

const sampleTime = new Time(9, 30)

export const StatesAndSizes: Story = {
  name: "States & sizes",
  render: () => ({
    components: { TimePicker },
    setup() {
      const empty = ref<Time | null>(null)
      const selected = ref<Time | null>(sampleTime)
      const errVal = ref<Time | null>(sampleTime)
      const disVal = ref<Time | null>(sampleTime)
      const roVal = ref<Time | null>(sampleTime)
      return { empty, selected, errVal, disVal, roVal }
    },
    template: `
      <div class="grid w-full max-w-[760px] grid-cols-2 gap-x-[32px] gap-y-[4px]">
        <div class="flex min-w-0 flex-col gap-[20px]">
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">빈 값</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <TimePicker v-model="empty" size="small" />
              <TimePicker v-model="empty" size="regular" />
              <TimePicker v-model="empty" size="large" />
            </div>
          </div>
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">선택됨</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <TimePicker v-model="selected" size="small" />
              <TimePicker v-model="selected" size="regular" />
              <TimePicker v-model="selected" size="large" />
            </div>
          </div>
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">에러</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <TimePicker v-model="errVal" size="small" error />
              <TimePicker v-model="errVal" size="regular" error />
              <TimePicker v-model="errVal" size="large" error />
            </div>
          </div>
        </div>
        <div class="flex min-w-0 flex-col gap-[20px]">
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">비활성</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <TimePicker v-model="disVal" size="small" disabled />
              <TimePicker v-model="disVal" size="regular" disabled />
              <TimePicker v-model="disVal" size="large" disabled />
            </div>
          </div>
          <div class="flex min-w-0 flex-col gap-[8px]">
            <p class="text-size-12 text-grey-60">읽기 전용</p>
            <div class="flex min-w-0 flex-col gap-[12px]">
              <TimePicker v-model="roVal" size="small" readonly />
              <TimePicker v-model="roVal" size="regular" readonly />
              <TimePicker v-model="roVal" size="large" readonly />
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
