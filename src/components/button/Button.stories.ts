import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { ChevronLeft, ChevronRight, Search, Plus } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import Button from './Button.vue'
import Toast from '../toast/Toast.vue'

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
            <Button variant="primary" theme="outlined">Primary</Button>
            <Button variant="destructive" theme="outlined">Destructive</Button>
            <Button variant="secondary" theme="outlined">Secondary</Button>
            <Button variant="tertiary" theme="outlined">Tertiary</Button>
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
            <Button variant="primary" theme="outlined" disabled>Primary</Button>
            <Button variant="destructive" theme="outlined" disabled>Destructive</Button>
            <Button variant="secondary" theme="outlined" disabled>Secondary</Button>
            <Button variant="tertiary" theme="outlined" disabled>Tertiary</Button>
          </div>
        </div>
      </div>
    `,
  }),
}

/**
 * 특정 조건에 걸려 액션을 수행할 수 없는 경우에는 버튼을 `disabled` 로 막지 않는다.
 * 버튼은 **enabled 상태를 유지**하고, 클릭 시 왜 수행할 수 없는지 **토스트로 안내**한다.
 *
 * - `disabled` 는 "이 화면 맥락에서 애초에 눌러선 안 되는" 순수 시각/구조적 비활성에만 사용한다.
 * - "조건 미충족(권한 없음·미선택·한도 초과 등)" 처럼 사유를 알려줘야 하는 경우는 enabled + 토스트.
 * - 토스트를 띄우려면 앱 루트에 `<Toast />` 가 마운트되어 있어야 한다.
 */
export const BlockedActionShowsToast: Story = {
  render: () => ({
    components: { Button, Toast },
    setup() {
      const hasPermission = false
      function submit() {
        if (!hasPermission) {
          toast.error('권한이 없어 실행할 수 없습니다', {
            description: '관리자에게 권한을 요청하세요.',
          })
          return
        }
        toast.success('실행되었습니다')
      }
      return { submit }
    },
    template: `
      <div class="flex flex-col gap-[12px] items-start">
        <Button variant="primary" @click="submit">실행</Button>
        <p class="text-size-13 text-grey-60">
          조건 미충족 시에도 버튼은 enabled 상태이며, 클릭하면 사유를 토스트로 안내합니다.
        </p>
        <Toast />
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
        <Button theme="outlined">
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
