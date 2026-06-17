import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Label from './Label.vue'
import { Checkbox } from '../checkbox'

const meta = {
  title: 'Components/Form/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: [
          '폼 컨트롤용 저수준 **라벨 primitive** (reka `Label` 래퍼). `<label>` 을 렌더하며 `peer-disabled` 스타일을 내장합니다.',
          '',
          '- **vee-validate 폼 필드**에는 직접 쓰지 마세요 → `FieldContainer`(내부적으로 `FormLabel`)를 사용하면 라벨·필수표시·설명·에러를 자동 처리합니다.',
          '- `Label` 직접 사용은 **FieldContainer 범위 밖의 단독 컨트롤**(Checkbox / RadioGroupItem / Toggle 등)에 라벨을 붙일 때만 사용합니다.',
          '- 컨트롤과 연결: `for`/`id` 로 연결하거나, `<Label>` 로 컨트롤을 **감싸면**(nesting) 라벨 클릭으로 토글/포커스됩니다.',
        ].join('\n'),
      },
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

/** 단독 컨트롤에 라벨 — Label 로 Checkbox 를 감싸면 라벨 클릭으로 토글됨 */
export const WithCheckbox: Story = {
  name: 'DS 컨트롤 라벨 (nesting)',
  render: () => ({
    components: { Label, Checkbox },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: `
      <Label class="flex items-center gap-[8px] cursor-pointer">
        <Checkbox v-model="checked" />
        약관에 동의합니다
      </Label>
      <p class="mt-[8px] text-size-12 text-grey-60">checked: {{ checked }}</p>
    `,
  }),
}

/** for/id 연결 — 비-DS(직접 만든) 컨트롤에 라벨을 연결할 때 */
export const ForIdAssociation: Story = {
  name: 'for/id 연결',
  render: () => ({
    components: { Label },
    template: `
      <div class="flex flex-col gap-[8px]">
        <Label for="email">이메일</Label>
        <input
          id="email"
          type="email"
          placeholder="name@example.com"
          class="px-[12px] py-[8px] border border-grey-40 rounded-sm text-size-14 text-grey-80 focus:outline-hidden focus:border-navy-80"
        />
      </div>
    `,
  }),
}
