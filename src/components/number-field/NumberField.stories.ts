import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import NumberField from "./NumberField.vue"

const meta = {
  title: "Components/NumberField",
  component: NumberField,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["center", "side"] },
    size: { control: "select", options: ["small", "regular", "large"] },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
  },
} satisfies Meta<typeof NumberField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: "center", size: "regular" },
  render: (args) => ({
    components: { NumberField },
    setup() {
      const value = ref(3)
      return { args, value }
    },
    template: `
      <div class="w-[160px]">
        <NumberField v-bind="args" v-model="value" />
        <p class="mt-[12px] text-size-12 text-grey-60">Value: {{ value }}</p>
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { NumberField },
    setup() {
      const center = ref(2)
      const side = ref(0)
      return { center, side }
    },
    template: `
      <div class="flex flex-col gap-[20px]">
        <div>
          <p class="mb-[8px] text-size-12 text-grey-60">center</p>
          <div class="w-[160px]">
            <NumberField v-model="center" variant="center" />
          </div>
        </div>
        <div>
          <p class="mb-[8px] text-size-12 text-grey-60">side</p>
          <div class="w-[194px]">
            <NumberField v-model="side" variant="side" :min="0" placeholder="0" />
          </div>
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { NumberField },
    setup() {
      const a = ref(3)
      const b = ref(3)
      const c = ref(3)
      return { a, b, c }
    },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="w-[160px]">
          <NumberField v-model="a" size="small" />
        </div>
        <div class="w-[160px]">
          <NumberField v-model="b" size="regular" />
        </div>
        <div class="w-[160px]">
          <NumberField v-model="c" size="large" />
        </div>
      </div>
    `,
  }),
}

export const States: Story = {
  render: () => ({
    components: { NumberField },
    setup() {
      const a = ref(3)
      return { a }
    },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="w-[160px]">
          <NumberField v-model="a" />
          <p class="mt-[4px] text-size-12 text-grey-60">enabled</p>
        </div>
        <div class="w-[160px]">
          <NumberField v-model="a" error />
          <p class="mt-[4px] text-size-12 text-red-80">error</p>
        </div>
        <div class="w-[160px]">
          <NumberField v-model="a" readonly />
          <p class="mt-[4px] text-size-12 text-grey-60">readonly</p>
        </div>
        <div class="w-[160px]">
          <NumberField v-model="a" disabled />
          <p class="mt-[4px] text-size-12 text-grey-60">disabled</p>
        </div>
      </div>
    `,
  }),
}

export const WithMinMaxStep: Story = {
  render: () => ({
    components: { NumberField },
    setup() {
      const value = ref(50)
      return { value }
    },
    template: `
      <div class="w-[160px]">
        <NumberField v-model="value" :min="0" :max="100" :step="5" />
        <p class="mt-[12px] text-size-12 text-grey-60">min=0 max=100 step=5 → {{ value }}</p>
      </div>
    `,
  }),
}

export const FormatOptions: Story = {
  render: () => ({
    components: { NumberField },
    setup() {
      const currency = ref(1234567)
      const percent = ref(0.45)
      return { currency, percent }
    },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div class="w-[200px]">
          <p class="mb-[4px] text-size-12 text-grey-60">통화 (KRW)</p>
          <NumberField
            v-model="currency"
            variant="side"
            :format-options="{ style: 'currency', currency: 'KRW' }"
            :step="1000"
          />
        </div>
        <div class="w-[160px]">
          <p class="mb-[4px] text-size-12 text-grey-60">퍼센트</p>
          <NumberField
            v-model="percent"
            :format-options="{ style: 'percent', maximumFractionDigits: 0 }"
            :step="0.01"
          />
        </div>
      </div>
    `,
  }),
}

export const Matrix: Story = {
  render: () => ({
    components: { NumberField },
    setup() {
      const v = ref(3)
      return { v }
    },
    template: `
      <div class="flex flex-col gap-[24px]">
        <div v-for="variant in ['center', 'side']" :key="variant" class="flex flex-col gap-[8px]">
          <p class="text-size-12 font-bold text-grey-60">variant={{ variant }}</p>
          <div v-for="size in ['small', 'regular', 'large']" :key="size" class="flex items-center gap-[12px]">
            <span class="w-[60px] text-size-12 text-grey-60">{{ size }}</span>
            <div class="w-[160px]"><NumberField :variant="variant" :size="size" v-model="v" /></div>
            <div class="w-[160px]"><NumberField :variant="variant" :size="size" v-model="v" error /></div>
            <div class="w-[160px]"><NumberField :variant="variant" :size="size" v-model="v" readonly /></div>
            <div class="w-[160px]"><NumberField :variant="variant" :size="size" v-model="v" disabled /></div>
          </div>
        </div>
      </div>
    `,
  }),
}
