import type { Meta, StoryObj } from '@storybook/vue3-vite'
import PageHeader from './PageHeader.vue'
import { Button } from '../button'
import { Badge } from '../badge'

const meta = {
  title: 'Components/PageHeader',
  component: PageHeader as any,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['small', 'regular', 'large'] },
    back: { control: 'boolean' },
  },
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

/** 웹 기본: md(24px) 타이틀 + 설명 */
export const Default: Story = {
  args: { title: '대타이틀', description: '페이지 설명' },
  render: args => ({
    components: { PageHeader },
    setup: () => ({ args }),
    template: `<PageHeader v-bind="args" />`,
  }),
}

/** 우측 액션 버튼 */
export const WithActions: Story = {
  name: '우측 액션',
  render: () => ({
    components: { PageHeader, Button },
    template: `
      <PageHeader title="대타이틀" description="페이지 설명">
        <template #actions>
          <Button variant="secondary" theme="outlined">버튼명</Button>
          <Button>버튼명</Button>
        </template>
      </PageHeader>
    `,
  }),
}

/** 상세 페이지(웹): 같은 24px + back 화살표 + 배지 */
export const DetailWithBackAndBadge: Story = {
  name: '상세 (back + badge)',
  render: () => ({
    components: { PageHeader, Button, Badge },
    setup: () => ({ onBack: () => alert('back!') }),
    template: `
      <PageHeader title="상세" description="페이지 설명" back @back="onBack">
        <template #badge><Badge size="xsmall" color="green">xsmall</Badge></template>
        <template #actions>
          <Button variant="secondary" theme="outlined">버튼명</Button>
          <Button>버튼명</Button>
        </template>
      </PageHeader>
    `,
  }),
}

/** 사이즈 — 웹 md(24) / 모바일 lg(28)·sm(22) */
export const Sizes: Story = {
  render: () => ({
    components: { PageHeader },
    template: `
      <div class="flex flex-col gap-[24px]">
        <PageHeader size="large" title="large 28px (모바일 대타이틀)" description="설명" />
        <PageHeader size="regular" title="regular 24px (웹 기본)" description="설명" />
        <PageHeader size="small" title="small 22px (모바일 중타이틀)" description="설명" />
      </div>
    `,
  }),
}
