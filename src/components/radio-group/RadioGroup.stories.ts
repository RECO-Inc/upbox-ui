import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import RadioGroup from './RadioGroup.vue'
import RadioGroupItem from './RadioGroupItem.vue'
import { Label } from '../label'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const value = ref('option1')
      return { value }
    },
    template: `
      <RadioGroup v-model="value">
        <div class="flex items-center gap-[8px]">
          <RadioGroupItem id="r1" value="option1" />
          <Label for="r1">Option 1</Label>
        </div>
        <div class="flex items-center gap-[8px]">
          <RadioGroupItem id="r2" value="option2" />
          <Label for="r2">Option 2</Label>
        </div>
        <div class="flex items-center gap-[8px]">
          <RadioGroupItem id="r3" value="option3" />
          <Label for="r3">Option 3</Label>
        </div>
      </RadioGroup>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const v1 = ref('a')
      const v2 = ref('a')
      const v3 = ref('a')
      return { v1, v2, v3 }
    },
    template: `
      <div class="flex gap-[32px]">
        <div>
          <p class="text-size-12 text-grey-60 mb-[8px]">Small</p>
          <RadioGroup v-model="v1">
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="a" size="small" />
              <Label>A</Label>
            </div>
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="b" size="small" />
              <Label>B</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <p class="text-size-12 text-grey-60 mb-[8px]">Regular</p>
          <RadioGroup v-model="v2">
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="a" size="regular" />
              <Label>A</Label>
            </div>
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="b" size="regular" />
              <Label>B</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <p class="text-size-12 text-grey-60 mb-[8px]">Large</p>
          <RadioGroup v-model="v3">
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="a" size="large" />
              <Label>A</Label>
            </div>
            <div class="flex items-center gap-[8px]">
              <RadioGroupItem value="b" size="large" />
              <Label>B</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    `,
  }),
}
