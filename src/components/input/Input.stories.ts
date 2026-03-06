import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Input from './Input.vue'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'bottomline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
}

export const Variants: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Input variant="default" placeholder="Default" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="bottomline" placeholder="Bottomline" />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Regular" />
        <Input size="lg" placeholder="Large" />
      </div>
    `,
  }),
}

export const Password: Story = {
  args: { type: 'password', placeholder: 'Enter password...' },
}

export const Clearable: Story = {
  args: { clearable: true, placeholder: 'Type to clear...', modelValue: 'Clearable text' },
}

export const ErrorState: Story = {
  args: { error: true, placeholder: 'Error state', modelValue: 'Invalid value' },
}

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled', modelValue: 'Cannot edit' },
}

export const ReadOnly: Story = {
  args: { readonly: true, modelValue: 'Read only value' },
}
