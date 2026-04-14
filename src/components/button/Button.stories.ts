import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { ChevronLeft, ChevronRight, Search, Plus } from 'lucide-vue-next'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    // Design 패널(Figma 임베드) — @storybook/addon-designs
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/-%EC%B5%9C%EC%A2%85-Component-_v02?node-id=3220-15782&t=JDvcCjmuA9iRUQDV-4',
    },
    figma: {
      // Code Connect 등 — Figma에서 "Copy link to selection" URL
      url: 'https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/-%EC%B5%9C%EC%A2%85-Component-_v02?node-id=3220-15782&t=JDvcCjmuA9iRUQDV-4',
      // Figma 프로퍼티 → Vue prop 매핑 (Figma 패널의 실제 프로퍼티명 확인 후 수정)
      propMapping: {
        'Variant':  'variant',   // primary | error | positive | usually | assistant | info
        'Style':    'buttonStyle', // filled | outlined | text
        'Size':     'size',      // xsmall | small | regular | large | xlarge
        'Label':    '(slot)',    // default slot
        'Disabled': 'disabled',
        'Loading':  'loading',
        'Block':    'block',
      },
    },
  },
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'error', 'positive', 'usually', 'assistant', 'info'],
    },
    buttonStyle: {
      control: 'select',
      options: ['filled', 'outlined', 'text'],
    },
    size: {
      control: 'select',
      options: ['xsmall', 'small', 'regular', 'large', 'xlarge'],
    },
    block: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', size: 'regular' },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Button</Button>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="error">Error</Button>
        <Button variant="positive">Positive</Button>
        <Button variant="usually">Usually</Button>
        <Button variant="assistant">Assistant</Button>
        <Button variant="info">Info</Button>
      </div>
    `,
  }),
}

export const Styles: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <Button variant="primary" buttonStyle="filled">Filled</Button>
        <Button variant="primary" buttonStyle="outlined">Outlined</Button>
        <Button variant="primary" buttonStyle="text">Text</Button>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-wrap gap-[12px] items-end">
        <Button size="xsmall">XSmall</Button>
        <Button size="small">Small</Button>
        <Button size="regular">Regular</Button>
        <Button size="large">Large</Button>
        <Button size="xlarge">XLarge</Button>
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: { variant: 'primary', loading: true },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Loading</Button>',
  }),
}

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button v-bind="args">Disabled</Button>',
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { Button, ChevronLeft, ChevronRight, Search, Plus },
    setup: () => ({}),
    template: `
      <div class="flex flex-wrap gap-[12px] items-center">
        <Button>
          <ChevronLeft class="w-[16px] h-[16px] mr-[4px]" />
          Icon Left
        </Button>
        <Button>
          Icon Right
          <ChevronRight class="w-[16px] h-[16px] ml-[4px]" />
        </Button>
        <Button>
          <Search class="w-[16px] h-[16px]" />
        </Button>
        <Button buttonStyle="outlined">
          <Plus class="w-[16px] h-[16px] mr-[4px]" />
          Add Item
        </Button>
      </div>
    `,
  }),
}

export const Block: Story = {
  args: { variant: 'primary', block: true },
  render: (args) => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<div class="w-[320px]"><Button v-bind="args">Block Button</Button></div>',
  }),
}
