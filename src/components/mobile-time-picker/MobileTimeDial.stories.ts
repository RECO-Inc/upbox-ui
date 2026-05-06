import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import { Time } from "@internationalized/date"
import MobileTimeDial from "./MobileTimeDial.vue"

const meta = {
  title: "Components/Time/MobileTimeDial",
  component: MobileTimeDial,
  tags: ["autodocs"],
} satisfies Meta<typeof MobileTimeDial>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { MobileTimeDial },
    setup() {
      const v = ref<Time | null>(null)
      return { v }
    },
    template: `
      <div class="flex justify-center bg-grey-30 p-[16px]">
        <MobileTimeDial v-model="v" @change="(t) => v = t" />
      </div>
    `,
  }),
}

export const WithSelectedTime: Story = {
  render: () => ({
    components: { MobileTimeDial },
    setup() {
      const v = ref<Time | null>(new Time(14, 30))
      return { v }
    },
    template: `
      <div class="flex justify-center bg-grey-30 p-[16px]">
        <MobileTimeDial v-model="v" @change="(t) => v = t" />
      </div>
    `,
  }),
}
