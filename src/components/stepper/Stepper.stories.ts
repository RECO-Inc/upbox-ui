import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Stepper from './Stepper.vue'

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { modelValue: "", steps: [] },
  render: () => ({
    components: { Stepper },
    setup() {
      const current = ref('step2')
      const steps = [
        { value: 'step1', label: 'Account', isComplete: true },
        { value: 'step2', label: 'Profile', isComplete: false },
        { value: 'step3', label: 'Review', isComplete: false },
      ]
      return { current, steps }
    },
    template: '<Stepper v-model="current" :steps="steps" />',
  }),
}

export const AllComplete: Story = {
  args: { modelValue: "", steps: [] },
  render: () => ({
    components: { Stepper },
    setup() {
      const current = ref('step3')
      const steps = [
        { value: 'step1', label: 'Step 1', isComplete: true },
        { value: 'step2', label: 'Step 2', isComplete: true },
        { value: 'step3', label: 'Step 3', isComplete: true },
      ]
      return { current, steps }
    },
    template: '<Stepper v-model="current" :steps="steps" />',
  }),
}
