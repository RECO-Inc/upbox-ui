import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { ChevronLeft, ChevronRight, Search, Plus } from 'lucide-vue-next'
import Button from './Button.vue'

const meta = {
  title: 'Components/Button/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'destructive', 'secondary', 'tertiary'],
    },
    theme: {
      control: 'select',
      options: ['filled', 'outlined'],
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
      <div class="flex flex-col gap-[24px]">
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Filled</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="tertiary">Tertiary</Button>
          </div>
        </div>
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Outlined</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Button variant="primary" buttonStyle="outlined">Primary</Button>
            <Button variant="destructive" buttonStyle="outlined">Destructive</Button>
            <Button variant="secondary" buttonStyle="outlined">Secondary</Button>
            <Button variant="tertiary" buttonStyle="outlined">Tertiary</Button>
          </div>
        </div>
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
    template: '<Button v-bind="args" />',
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div class="flex flex-col gap-[24px]">
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Filled</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="destructive" disabled>Destructive</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="tertiary" disabled>Tertiary</Button>
          </div>
        </div>
        <div>
          <p class="text-size-13 text-grey-60 mb-[8px]">Outlined</p>
          <div class="flex flex-wrap gap-[12px] items-center">
            <Button variant="primary" buttonStyle="outlined" disabled>Primary</Button>
            <Button variant="destructive" buttonStyle="outlined" disabled>Destructive</Button>
            <Button variant="secondary" buttonStyle="outlined" disabled>Secondary</Button>
            <Button variant="tertiary" buttonStyle="outlined" disabled>Tertiary</Button>
          </div>
        </div>
      </div>
    `,
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

/**
 * # 모든 버튼 한눈에 보기
 * 
 * ## 속성들 3차원으로 표시
 * - enabled, disabled, hovered, pressed
 * - primary, destructive, secondary, tertiary
 * - xsmall, small, regular, large, xlarge
 */
export const Overview: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const sizes = ['xsmall', 'small', 'regular', 'large', 'xlarge']
      const sizePx: Record<string, string> = {
        xsmall: '24px',
        small: '32px',
        regular: '40px',
        large: '48px',
        xlarge: '56px',
      }
      const variants = ['primary', 'destructive', 'secondary', 'tertiary']
      const themes = ['filled', 'outlined']
      const stateRows = ['Enabled', 'Disabled', 'Hovered', 'Pressed']

      const forceClasses: Record<number, Record<string, string>> = {
        2: {
          'primary-filled': 'bg-navy-90 border-navy-90',
          'primary-outlined': 'bg-navy-20',
          'destructive-filled': 'bg-red-90 border-red-90',
          'destructive-outlined': 'bg-red-20',
          'secondary-filled': 'bg-grey-70 border-grey-70',
          'secondary-outlined': 'bg-grey-20',
          'tertiary-filled': 'bg-grey-40 border-grey-40',
          'tertiary-outlined': 'bg-grey-20 border-grey-40',
        },
        3: {
          'primary-filled': 'bg-navy-100 border-navy-100',
          'primary-outlined': 'bg-navy-30',
          'destructive-filled': 'bg-red-100 border-red-100',
          'destructive-outlined': 'bg-red-30',
          'secondary-filled': 'bg-grey-80 border-grey-80',
          'secondary-outlined': 'bg-grey-30',
          'tertiary-filled': 'bg-grey-50 border-grey-50',
          'tertiary-outlined': 'bg-grey-30 border-grey-50',
        },
      }

      const btnClass = (si: number, v: string, t: string) =>
        ((forceClasses[si]?.[`${v}-${t}`] || '') + ' min-w-[68px]').trim()

      return { sizes, sizePx, variants, themes, stateRows, btnClass }
    },
    template: `
<div class="p-[32px] overflow-x-auto">
  <div class="flex items-end mb-[8px]">
    <div class="w-[80px] shrink-0 mr-[20px]"></div>
    <div class="flex gap-[20px]">
      <div v-for="v in variants" :key="v" class="flex flex-col items-center">
        <span class="text-size-12 text-grey-60 mb-[4px]">{{ v }}</span>
        <div class="flex gap-[8px]">
          <span class="text-size-11 text-grey-40 min-w-[68px] text-center">filled</span>
          <span class="text-size-11 text-grey-40 min-w-[68px] text-center">outlined</span>
        </div>
      </div>
    </div>
  </div>

  <div v-for="size in sizes" :key="size" class="flex mb-[24px]">
    <div class="flex flex-col gap-[8px]">
      <div v-for="(label, si) in stateRows" :key="label" class="flex items-center">
        <span class="w-[80px] text-size-12 text-grey-60 mr-[20px] shrink-0">{{ label }}</span>
        <div class="flex gap-[20px]">
          <div v-for="v in variants" :key="v" class="flex gap-[8px]">
            <Button
              v-for="t in themes"
              :key="t"
              :variant="v"
              :theme="t"
              :size="size"
              :disabled="si === 1"
              :class="btnClass(si, v, t)"
            >버튼명</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-[12px] border-l border-t border-b border-grey-30 flex items-center px-[8px]">
      <span class="text-size-11 text-grey-50 whitespace-nowrap">{{ size }}<br/>{{ sizePx[size] }}</span>
    </div>
  </div>
</div>
    `,
  }),
}
