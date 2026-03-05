import type { Meta, StoryObj } from '@storybook/vue3-vite'
import InputGroup from './InputGroup.vue'
import InputGroupAddon from './InputGroupAddon.vue'
import InputGroupButton from './InputGroupButton.vue'
import InputGroupInput from './InputGroupInput.vue'
import InputGroupText from './InputGroupText.vue'
import InputGroupTextarea from './InputGroupTextarea.vue'

const meta = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText },
    template: `
      <div class="w-80">
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="example.com" />
        </InputGroup>
      </div>
    `,
  }),
}

export const InlineStartAddon: Story = {
  render: () => ({
    components: { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText },
    template: `
      <div class="flex flex-col gap-4 w-80">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Amount" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="username" />
        </InputGroup>
      </div>
    `,
  }),
}

export const InlineEndAddon: Story = {
  render: () => ({
    components: { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText },
    template: `
      <div class="flex flex-col gap-4 w-80">
        <InputGroup>
          <InputGroupInput placeholder="Price" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>.00</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Search" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>kg</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    `,
  }),
}

export const BothSideAddons: Story = {
  render: () => ({
    components: { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText },
    template: `
      <div class="w-80">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    `,
  }),
}

export const WithButton: Story = {
  render: () => ({
    components: { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton },
    template: `
      <div class="flex flex-col gap-4 w-80">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Search</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupButton>Copy</InputGroupButton>
          </InputGroupAddon>
          <InputGroupInput placeholder="URL" />
        </InputGroup>
      </div>
    `,
  }),
}

export const BlockStartAddon: Story = {
  render: () => ({
    components: { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText },
    template: `
      <div class="w-80">
        <InputGroup>
          <InputGroupAddon align="block-start">
            <InputGroupText>Label</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="Enter value..." />
        </InputGroup>
      </div>
    `,
  }),
}

export const BlockEndAddon: Story = {
  render: () => ({
    components: { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText },
    template: `
      <div class="w-80">
        <InputGroup>
          <InputGroupInput placeholder="Enter value..." />
          <InputGroupAddon align="block-end">
            <InputGroupText>Hint text below</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    `,
  }),
}

export const WithTextarea: Story = {
  render: () => ({
    components: { InputGroup, InputGroupAddon, InputGroupTextarea, InputGroupText },
    template: `
      <div class="w-80">
        <InputGroup>
          <InputGroupAddon align="block-start">
            <InputGroupText>Description</InputGroupText>
          </InputGroupAddon>
          <InputGroupTextarea placeholder="Enter a long description..." />
        </InputGroup>
      </div>
    `,
  }),
}
