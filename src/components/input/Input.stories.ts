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
  args: { error: true, placeholder: 'Error state', modelValue: 'Invalid value' },
}

export const Disabled: Story = {
  args: { disabled: true, placeholder: 'Disabled', modelValue: 'Cannot edit' },
}

export const ReadOnly: Story = {
  args: { readonly: true, modelValue: 'Read only value' },
}


export const Password: Story = {
  args: { type: 'password', placeholder: 'Enter password...' },
}

export const Clearable: Story = {
  args: { clearable: true, placeholder: 'Type to clear...', modelValue: 'Clearable text' },
}

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
