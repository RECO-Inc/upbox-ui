import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Textarea from './Textarea.vue'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'bottomline'],
    },
    size: {
      control: 'select',
      options: ['small', 'regular', 'large'],
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Enter text...', rows: 4 },
}

export const Variants: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Textarea variant="default" placeholder="Default" :rows="3" />
        <Textarea variant="filled" placeholder="Filled" :rows="3" />
        <Textarea variant="bottomline" placeholder="Bottomline" :rows="3" />
      </div>
    `,
  }),
}

export const ErrorState: Story = {
  args: { error: true, placeholder: 'Error state', modelValue: 'Invalid content' },
}

export const WithMaxLength: Story = {
  args: { placeholder: 'Max 100 chars', maxLength: 100, counter: true },
}
