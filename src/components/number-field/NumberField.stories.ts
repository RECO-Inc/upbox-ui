import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import NumberField from './NumberField.vue'
import NumberFieldContent from './NumberFieldContent.vue'
import NumberFieldInput from './NumberFieldInput.vue'
import NumberFieldDecrement from './NumberFieldDecrement.vue'
import NumberFieldIncrement from './NumberFieldIncrement.vue'

const meta = {
  title: 'Components/NumberField',
  component: NumberField,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
} satisfies Meta<typeof NumberField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      NumberField,
      NumberFieldContent,
      NumberFieldInput,
      NumberFieldDecrement,
      NumberFieldIncrement,
    },
    setup() {
      const value = ref(0)
      return { value }
    },
    template: `
      <div class="p-8 w-48">
        <NumberField v-model="value">
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <p class="mt-4 text-sm text-base-60">Value: {{ value }}</p>
      </div>
    `,
  }),
}

export const WithMinMax: Story = {
  render: () => ({
    components: {
      NumberField,
      NumberFieldContent,
      NumberFieldInput,
      NumberFieldDecrement,
      NumberFieldIncrement,
    },
    setup() {
      const value = ref(5)
      return { value }
    },
    template: `
      <div class="p-8 w-48">
        <NumberField v-model="value" :min="0" :max="10">
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <p class="mt-4 text-sm text-base-60">Value: {{ value }} (min: 0, max: 10)</p>
      </div>
    `,
  }),
}

export const WithStep: Story = {
  render: () => ({
    components: {
      NumberField,
      NumberFieldContent,
      NumberFieldInput,
      NumberFieldDecrement,
      NumberFieldIncrement,
    },
    setup() {
      const value = ref(0)
      return { value }
    },
    template: `
      <div class="p-8 w-48">
        <NumberField v-model="value" :step="5">
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <p class="mt-4 text-sm text-base-60">Value: {{ value }} (step: 5)</p>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: {
      NumberField,
      NumberFieldContent,
      NumberFieldInput,
      NumberFieldDecrement,
      NumberFieldIncrement,
    },
    setup() {
      const value = ref(42)
      return { value }
    },
    template: `
      <div class="p-8 w-48">
        <NumberField v-model="value" disabled>
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: {
      NumberField,
      NumberFieldContent,
      NumberFieldInput,
      NumberFieldDecrement,
      NumberFieldIncrement,
    },
    setup() {
      const quantity = ref(1)
      const price = ref(100)
      return { quantity, price }
    },
    template: `
      <div class="p-8 flex flex-col gap-4 w-48">
        <div>
          <label class="text-sm font-medium block mb-1">Quantity</label>
          <NumberField v-model="quantity" :min="1" :max="99">
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
        </div>
        <div>
          <label class="text-sm font-medium block mb-1">Price ($)</label>
          <NumberField v-model="price" :min="0" :step="10">
            <NumberFieldContent>
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
        </div>
      </div>
    `,
  }),
}

export const InputOnly: Story = {
  render: () => ({
    components: {
      NumberField,
      NumberFieldContent,
      NumberFieldInput,
    },
    setup() {
      const value = ref(0)
      return { value }
    },
    template: `
      <div class="p-8 w-48">
        <NumberField v-model="value">
          <NumberFieldContent>
            <NumberFieldInput />
          </NumberFieldContent>
        </NumberField>
        <p class="mt-4 text-sm text-base-60">Input only (no buttons)</p>
      </div>
    `,
  }),
}
