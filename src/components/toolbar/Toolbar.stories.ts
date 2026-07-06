import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { fn } from 'storybook/test'
import { Pencil } from 'lucide-vue-next'
import { TextButton } from '../text-button'
import Toolbar from './Toolbar.vue'

const meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  args: {
    onDeselect: fn(),
    onDownload: fn(),
    onDelete: fn(),
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark'],
    },
    selectedCount: { control: 'number' },
    downloadable: { control: 'boolean' },
    deletable: { control: 'boolean' },
  },
} satisfies Meta<typeof Toolbar>

export default meta
type Story = StoryObj<typeof meta>

/** 기본 — 선택 건수 + 선택 해제만. 다운로드/삭제는 옵션(prop)으로 켠다. */
export const Default: Story = {
  args: { selectedCount: 2, variant: 'light' },
  render: (args) => ({
    components: { Toolbar },
    setup: () => ({ args }),
    template: '<Toolbar v-bind="args" />',
  }),
}

/** 다운로드·삭제 옵션 활성 */
export const WithDownloadDelete: Story = {
  args: { selectedCount: 2, variant: 'light', downloadable: true, deletable: true },
  render: (args) => ({
    components: { Toolbar },
    setup: () => ({ args }),
    template: '<Toolbar v-bind="args" />',
  }),
}

/** actions 슬롯 — 화면별 커스텀 액션(TextButton 나열, 구분선 자동) */
export const WithActions: Story = {
  args: { selectedCount: 2, variant: 'light', downloadable: true, deletable: true },
  render: (args) => ({
    components: { Toolbar, TextButton, Pencil },
    setup: () => ({ args }),
    template: `
      <Toolbar v-bind="args">
        <template #actions>
          <TextButton size="2xsmall">스케줄 배정</TextButton>
          <TextButton size="2xsmall"><Pencil />필드 편집</TextButton>
        </template>
      </Toolbar>
    `,
  }),
}

/** dark — 플로팅 스낵바 톤 */
export const Dark: Story = {
  args: { selectedCount: 2, variant: 'dark', downloadable: true, deletable: true },
  render: (args) => ({
    components: { Toolbar, TextButton, Pencil },
    setup: () => ({ args }),
    template: `
      <div class="bg-grey-20 p-[24px]">
        <Toolbar v-bind="args">
          <template #actions>
            <TextButton size="2xsmall" class="text-grey-10 hover:bg-grey-80"><Pencil />편집</TextButton>
          </template>
        </Toolbar>
      </div>
    `,
  }),
}
