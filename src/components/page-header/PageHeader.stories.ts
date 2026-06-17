import type { Meta, StoryObj } from '@storybook/vue3-vite'
import PageHeader from './PageHeader.vue'
import { Button } from '../button'
import { Badge } from '../badge'

const meta = {
  title: 'Components/PageHeader',
  component: PageHeader as any,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['page', 'sub'] },
    back: { control: 'boolean' },
  },
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

/** 리스트 페이지: 대타이틀 + 설명 */
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

/** 상세 페이지: 중타이틀 + back + 배지 */
export const SubWithBackAndBadge: Story = {
  name: '상세 (sub + back + badge)',
  render: () => ({
    components: { PageHeader, Button, Badge },
    setup: () => ({ onBack: () => alert('back!') }),
    template: `
      <PageHeader variant="sub" title="상세" description="페이지 설명" back @back="onBack">
        <template #badge><Badge size="xsmall" color="green">xsmall</Badge></template>
        <template #actions>
          <Button variant="secondary" theme="outlined">버튼명</Button>
          <Button>버튼명</Button>
        </template>
      </PageHeader>
    `,
  }),
}

/** 대/중 타이틀 비교 */
export const Variants: Story = {
  render: () => ({
    components: { PageHeader },
    template: `
      <div class="flex flex-col gap-[24px]">
        <PageHeader variant="page" title="페이지 (대)타이틀 28px" description="해당 페이지에 대한 설명 문구" />
        <PageHeader variant="sub" title="페이지 (중)타이틀 22px" description="해당 페이지에 대한 설명 문구" />
      </div>
    `,
  }),
}
