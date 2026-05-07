import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import Toggle from "./Toggle.vue"

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["4xsmall", "3xsmall", "2xsmall"],
    },
    disabled: { control: "boolean" },
    modelValue: { control: "boolean" },
    label: { control: "text" },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: "2xsmall" },
  render: (args) => ({
    components: { Toggle },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: `<Toggle v-bind="args" v-model="checked" />`,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const a = ref(true)
      const b = ref(true)
      const c = ref(true)
      return { a, b, c }
    },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div class="flex items-center gap-[12px]">
          <Toggle size="4xsmall" v-model="a" />
          <span class="text-size-12 text-grey-60">4xsmall</span>
        </div>
        <div class="flex items-center gap-[12px]">
          <Toggle size="3xsmall" v-model="b" />
          <span class="text-size-12 text-grey-60">3xsmall</span>
        </div>
        <div class="flex items-center gap-[12px]">
          <Toggle size="2xsmall" v-model="c" />
          <span class="text-size-12 text-grey-60">2xsmall</span>
        </div>
      </div>
    `,
  }),
}

export const States: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const on = ref(true)
      const off = ref(false)
      return { on, off }
    },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex items-center gap-[12px]">
          <Toggle v-model="off" />
          <span class="text-size-14 text-grey-80">unchecked</span>
        </div>
        <div class="flex items-center gap-[12px]">
          <Toggle v-model="on" />
          <span class="text-size-14 text-grey-80">checked</span>
        </div>
        <div class="flex items-center gap-[12px]">
          <Toggle :model-value="false" disabled />
          <span class="text-size-14 text-grey-80">disabled (off)</span>
        </div>
        <div class="flex items-center gap-[12px]">
          <Toggle :model-value="true" disabled />
          <span class="text-size-14 text-grey-80">disabled (on)</span>
        </div>
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const a = ref(true)
      const b = ref(false)
      const c = ref(true)
      return { a, b, c }
    },
    template: `
      <div class="flex flex-col gap-[12px]">
        <Toggle size="4xsmall" v-model="a" label="알림 받기" />
        <Toggle size="3xsmall" v-model="b" label="자동 저장" />
        <Toggle size="2xsmall" v-model="c" label="다크 모드" />
      </div>
    `,
  }),
}

export const LabelSlot: Story = {
  render: () => ({
    components: { Toggle },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: `
      <Toggle v-model="checked">
        <template #label>
          <span class="font-bold text-navy-80">슬롯으로 커스텀 라벨 →</span>
        </template>
      </Toggle>
    `,
  }),
}

export const Matrix: Story = {
  render: () => ({
    components: { Toggle },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div v-for="size in ['4xsmall', '3xsmall', '2xsmall']" :key="size" class="flex items-center gap-[16px]">
          <span class="w-[80px] text-size-12 text-grey-60">{{ size }}</span>
          <Toggle :size="size" :model-value="false" />
          <Toggle :size="size" :model-value="true" />
          <Toggle :size="size" :model-value="false" disabled />
          <Toggle :size="size" :model-value="true" disabled />
        </div>
      </div>
    `,
  }),
}
