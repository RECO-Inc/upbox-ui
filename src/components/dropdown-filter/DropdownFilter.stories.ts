import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import DropdownFilter from './DropdownFilter.vue'

const meta = {
  title: 'Components/DropdownFilter',
  component: DropdownFilter,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'regular', 'large'],
    },
    displayStyle: {
      control: 'select',
      options: ['default', 'filled', 'highlight'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    canAll: { control: 'boolean' },
    single: { control: 'boolean' },
    search: { control: 'boolean' },
  },
} satisfies Meta<typeof DropdownFilter>

export default meta
type Story = StoryObj<typeof meta>

const sampleOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
]

export const Default: Story = {
  render: () => ({
    components: { DropdownFilter },
    setup() {
      const selected = ref([])
      return { selected, sampleOptions }
    },
    template: `
      <div class="p-[32px] w-[256px]">
        <DropdownFilter
          v-model="selected"
          :options="sampleOptions"
          placeholder="Select items"
        />
        <p class="mt-[16px] text-sm text-grey-60">Selected: {{ selected.join(', ') || 'none' }}</p>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { DropdownFilter },
    setup() {
      const selectedSmall = ref([])
      const selectedRegular = ref([])
      const selectedLarge = ref([])
      return { selectedSmall, selectedRegular, selectedLarge, sampleOptions }
    },
    template: `
      <div class="p-[32px] flex flex-col gap-[16px] w-[256px]">
        <div>
          <p class="text-sm font-medium mb-[4px]">Small</p>
          <DropdownFilter v-model="selectedSmall" :options="sampleOptions" placeholder="Small" size="small" />
        </div>
        <div>
          <p class="text-sm font-medium mb-[4px]">Regular</p>
          <DropdownFilter v-model="selectedRegular" :options="sampleOptions" placeholder="Regular" size="regular" />
        </div>
        <div>
          <p class="text-sm font-medium mb-[4px]">Large</p>
          <DropdownFilter v-model="selectedLarge" :options="sampleOptions" placeholder="Large" size="large" />
        </div>
      </div>
    `,
  }),
}

export const DisplayStyles: Story = {
  render: () => ({
    components: { DropdownFilter },
    setup() {
      const selectedDefault = ref(['apple'])
      const selectedFilled = ref(['apple'])
      const selectedHighlight = ref(['apple'])
      return { selectedDefault, selectedFilled, selectedHighlight, sampleOptions }
    },
    template: `
      <div class="p-[32px] flex flex-col gap-[16px] w-[256px]">
        <div>
          <p class="text-sm font-medium mb-[4px]">Default</p>
          <DropdownFilter v-model="selectedDefault" :options="sampleOptions" displayStyle="default" />
        </div>
        <div>
          <p class="text-sm font-medium mb-[4px]">Filled</p>
          <DropdownFilter v-model="selectedFilled" :options="sampleOptions" displayStyle="filled" />
        </div>
        <div>
          <p class="text-sm font-medium mb-[4px]">Highlight</p>
          <DropdownFilter v-model="selectedHighlight" :options="sampleOptions" displayStyle="highlight" />
        </div>
      </div>
    `,
  }),
}

export const SingleSelect: Story = {
  render: () => ({
    components: { DropdownFilter },
    setup() {
      const selected = ref([])
      return { selected, sampleOptions }
    },
    template: `
      <div class="p-[32px] w-[256px]">
        <DropdownFilter
          v-model="selected"
          :options="sampleOptions"
          placeholder="Select one"
          :single="true"
          :can-all="false"
        />
        <p class="mt-[16px] text-sm text-grey-60">Selected: {{ selected[0] ?? 'none' }}</p>
      </div>
    `,
  }),
}

export const WithSearch: Story = {
  render: () => ({
    components: { DropdownFilter },
    setup() {
      const selected = ref([])
      return { selected, sampleOptions }
    },
    template: `
      <div class="p-[32px] w-[256px]">
        <DropdownFilter
          v-model="selected"
          :options="sampleOptions"
          placeholder="Search and filter"
          :search="true"
        />
        <p class="mt-[16px] text-sm text-grey-60">Selected: {{ selected.join(', ') || 'none' }}</p>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { DropdownFilter },
    setup() {
      const selected = ref(['apple'])
      return { selected, sampleOptions }
    },
    template: `
      <div class="p-[32px] w-[256px]">
        <DropdownFilter
          v-model="selected"
          :options="sampleOptions"
          placeholder="Disabled filter"
          :disabled="true"
        />
      </div>
    `,
  }),
}

export const WithPreselected: Story = {
  render: () => ({
    components: { DropdownFilter },
    setup() {
      const selected = ref(['apple', 'banana', 'cherry'])
      return { selected, sampleOptions }
    },
    template: `
      <div class="p-[32px] w-[256px]">
        <DropdownFilter
          v-model="selected"
          :options="sampleOptions"
          placeholder="Select items"
        />
        <p class="mt-[16px] text-sm text-grey-60">Selected: {{ selected.join(', ') }}</p>
      </div>
    `,
  }),
}
