import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { Time } from "@internationalized/date"
import MobileTimePicker from "./MobileTimePicker.vue"
import TimeInput from "./TimeInput.vue"

const meta = {
  title: "Components/Time/MobileTimePicker",
  component: MobileTimePicker,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "regular", "large"] },
    variant: { control: "select", options: ["default", "filled", "bottomline"] },
    error: { control: "boolean" },
    readonly: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof MobileTimePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { MobileTimePicker },
    setup() {
      const v = ref<Time | null>(null)
      return { v, args }
    },
    template: `
      <div class="w-[240px]">
        <MobileTimePicker v-model="v" v-bind="args" />
      </div>
    `,
  }),
}

export const WithExplicitTimeInput: Story = {
  name: "With explicit TimeInput slot",
  render: () => ({
    components: { MobileTimePicker, TimeInput },
    setup() {
      const v = ref<Time | null>(null)
      return { v }
    },
    template: `
      <div class="w-[240px]">
        <MobileTimePicker v-model="v">
          <TimeInput placeholder="HH:MM" />
        </MobileTimePicker>
      </div>
    `,
  }),
}
