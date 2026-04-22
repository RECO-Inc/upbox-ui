import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { Search } from 'lucide-vue-next'
import { InputIcon } from '../input-frame'
import Input from './Input.vue'
import InputCount from './InputCount.vue'
import InputUnit from './InputUnit.vue'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'bottomline'],
    },
    size: {
      control: 'select',
      options: ['small', 'regular', 'large'],
    },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    clearable: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
}

export const Variants: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Input variant="default" placeholder="Default" />
        <Input variant="filled" placeholder="Filled" />
        <Input variant="bottomline" placeholder="Bottomline" />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Input size="small" placeholder="Small" />
        <Input size="regular" placeholder="Regular" />
        <Input size="large" placeholder="Large" />
      </div>
    `,
  }),
}

export const ErrorState: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Input size="small" error placeholder="Error state" model-value="Invalid value" />
        <Input size="regular" error placeholder="Error state" model-value="Invalid value" />
        <Input size="large" error placeholder="Error state" model-value="Invalid value" />
      </div>
    `,
  }),
}

/**
 * - 드래그, 포커싱, 입력 모두 불가능함
 * - 서버에 전달도 안됨
 */
export const Disabled: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Input size="small" disabled placeholder="Disabled" model-value="Cannot edit" />
        <Input size="regular" disabled placeholder="Disabled" model-value="Cannot edit" />
        <Input size="large" disabled placeholder="Disabled" model-value="Cannot edit" />
      </div>
    `,
  }),
}

/**
 * - readonly 속성은 드래그, 포커싱은 가능
 * - 대신 입력 불가능함
 * - 서버에 값도 전달되는 속성임
 */
export const ReadOnly: Story = {
  render: () => ({
    components: { Input },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Input size="small" readonly model-value="Read only value" />
        <Input size="regular" readonly model-value="Read only value" />
        <Input size="large" readonly model-value="Read only value" />
      </div>
    `,
  }),
}

/**
 * - 눈 표시 있음. 눈 누르면 비밀번호 토글됨
 * - type=password, 네이티브만
 * 
 */
export const Password: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const withToggle = ref('secret1')
      const withoutToggle = ref('secret2')
      return { withToggle, withoutToggle }
    },
    template: `
      <div class="flex w-[360px] flex-col gap-[16px]">
        <div class="flex flex-col gap-[8px]">
          <p class="text-size-12 text-grey-60">눈 표시 있음 (password 토글)</p>
          <div class="flex flex-col gap-[12px]">
            <Input v-model="withToggle" size="small" password placeholder="Enter password..." />
            <Input v-model="withToggle" size="regular" password placeholder="Enter password..." />
            <Input v-model="withToggle" size="large" password placeholder="Enter password..." />
          </div>
        </div>
        <div class="flex flex-col gap-[8px]">
          <p class="text-size-12 text-grey-60">눈 표시 없음 (type=password, 네이티브만)</p>
          <div class="flex flex-col gap-[12px]">
            <Input v-model="withoutToggle" size="small" type="password" placeholder="Enter password..." />
            <Input v-model="withoutToggle" size="regular" type="password" placeholder="Enter password..." />
            <Input v-model="withoutToggle" size="large" type="password" placeholder="Enter password..." />
          </div>
        </div>
      </div>
    `,
  }),
}

/**
 * - 지우기 버튼 누르면 값 지워짐
 */
export const Clearable: Story = {
  args: { clearable: true, placeholder: 'Type to clear...', modelValue: 'Clearable text' },
}

/**
 * - `<InputIcon>` 를 활용
 * - 아이콘 크기는 `<Input>` 의 크기에 맞춰서 자동 조정됨
 */
export const WithSuffixIcon: Story = {
  render: () => ({
    components: { Input, InputIcon, Search },
    template: `
      <div class="w-[320px]">
        <Input placeholder="검색 (기본 슬롯 = 오른쪽)">
          <InputIcon>
            <Search />
          </InputIcon>
        </Input>
      </div>
    `,
  }),
}

/**
 * - `<InputCount>` 를 활용
 * - count 는 `<Input>` 에서 관리함 (maxLength, byteMode 등을 provide 함~)
 */
export const WithCount: Story = {
  render: () => ({
    components: { Input, InputCount },
    setup() {
      const a = ref('')
      const b = ref('')
      const c = ref('여기는 25글자밖에 안들어가나요??여기는 25')
      return { a, b, c }
    },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Input v-model="a" size="small" :maxLength="25" placeholder="텍스트를 입력하세요.">
          <InputCount />
        </Input>
        <Input v-model="b" size="regular" :maxLength="25" placeholder="텍스트를 입력하세요.">
          <InputCount />
        </Input>
        <Input v-model="c" size="large" :maxLength="25" placeholder="텍스트를 입력하세요.">
          <InputCount />
        </Input>
      </div>
    `,
  }),
}

/**
 * - `<InputUnit>` 를 활용
 * - Unit 은 아무거나 넣어주면 됨~
 */
export const WithUnit: Story = {
  render: () => ({
    components: { Input, InputUnit },
    setup() {
      const a = ref('')
      const b = ref('')
      const c = ref('')
      return { a, b, c }
    },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Input v-model="a" size="small" type="text" inputmode="numeric" placeholder="숫자만 입력 가능">
          <InputUnit>원</InputUnit>
        </Input>
        <Input v-model="b" size="regular" type="text" inputmode="numeric" placeholder="숫자만 입력 가능">
          <InputUnit>원</InputUnit>
        </Input>
        <Input v-model="c" size="large" type="text" inputmode="numeric" placeholder="숫자만 입력 가능">
          <InputUnit>원</InputUnit>
        </Input>
      </div>
    `,
  }),
}
