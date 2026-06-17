import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { computed, ref } from 'vue'
import TabsBar from './TabsBar.vue'

const meta = {
  title: 'Components/TabsBar',
  component: TabsBar as any,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'round', 'box'] },
    color: { control: 'inline-radio', options: ['navy', 'grey'] },
    size: { control: 'select', options: ['small', 'regular', 'large', 'xlarge'] },
  },
} satisfies Meta<typeof TabsBar>

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { label: '전체', value: 'all' },
  { label: '진행중', value: 'active' },
  { label: '완료', value: 'done' },
  { label: '보류', value: 'hold', disabled: true },
]

/** 탭 바가 v-model 구동, 내용은 페이지가 v-if 로 렌더 (이 앱 주 패턴) */
export const Default: Story = {
  render: args => ({
    components: { TabsBar },
    setup() {
      const tab = ref<string | number>('all')
      return { tab, args, items }
    },
    template: `
      <TabsBar v-model="tab" :items="items" v-bind="args" />
      <div class="mt-[16px] text-size-14 text-grey-80">선택된 탭: <strong>{{ tab }}</strong></div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { TabsBar },
    setup() {
      const a = ref<string | number>('all')
      const b = ref<string | number>('all')
      const c = ref<string | number>('all')
      return { a, b, c, items }
    },
    template: `
      <div class="flex flex-col gap-[24px]">
        <TabsBar v-model="a" :items="items" variant="default" />
        <TabsBar v-model="b" :items="items" variant="round" />
        <TabsBar v-model="c" :items="items" variant="box" />
      </div>
    `,
  }),
}

/** 콘텐츠 패널까지 묶고 싶으면 slot 안에서 compound TabsContent 사용 */
export const WithContent: Story = {
  name: '콘텐츠 패널 (slot)',
  render: () => ({
    components: { TabsBar },
    setup() {
      const tab = ref<string | number>('all')
      return { tab, items }
    },
    template: `
      <TabsBar v-model="tab" :items="items">
        <div class="mt-[16px] text-size-14 text-grey-80">
          <template v-if="tab === 'all'">전체 내용</template>
          <template v-else-if="tab === 'active'">진행중 내용</template>
          <template v-else>완료 내용</template>
        </div>
      </TabsBar>
    `,
  }),
}
