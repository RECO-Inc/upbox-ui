import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Skeleton from './Skeleton.vue'

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="flex items-center gap-[16px]">
        <Skeleton class="h-[48px] w-[48px] rounded-full" />
        <div class="space-y-[8px]">
          <Skeleton class="h-[16px] w-[250px]" />
          <Skeleton class="h-[16px] w-[200px]" />
        </div>
      </div>
    `,
  }),
}

export const CardSkeleton: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div class="w-[320px] space-y-[16px] p-[16px] border rounded-xl">
        <Skeleton class="h-[180px] w-full rounded-lg" />
        <div class="space-y-[8px]">
          <Skeleton class="h-[16px] w-3/4" />
          <Skeleton class="h-[16px] w-1/2" />
        </div>
        <Skeleton class="h-[40px] w-full" />
      </div>
    `,
  }),
}
