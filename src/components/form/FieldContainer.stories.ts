import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { Form } from 'vee-validate'
import FieldContainer from './FieldContainer.vue'
import TextField from '../text-field/TextField.vue'
import Textarea from '../textarea/Textarea.vue'
import Select from '../select/Select.vue'
import SelectTrigger from '../select/SelectTrigger.vue'
import SelectValue from '../select/SelectValue.vue'
import SelectContent from '../select/SelectContent.vue'
import SelectItem from '../select/SelectItem.vue'
import Button from '../button/Button.vue'

const meta = {
  title: 'Components/FieldContainer',
  component: FieldContainer,
  tags: ['autodocs'],
  args: { name: 'field' },
  argTypes: {
    size: { control: 'select', options: ['small', 'regular', 'large'] },
    label: { control: 'text' },
    description: { control: 'text' },
    required: { control: 'boolean' },
  },
} satisfies Meta<typeof FieldContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => ({
    components: { Form, FieldContainer, TextField },
    template: `
      <Form class="w-full max-w-sm">
        <FieldContainer
          name="email"
          label="Email"
          description="등록된 이메일 주소를 입력하세요"
        >
          <TextField type="email" placeholder="you@example.com" />
        </FieldContainer>
      </Form>
    `,
  }),
}

export const Sizes: Story = {
  args: {},
  render: () => ({
    components: { Form, FieldContainer, TextField },
    template: `
      <Form class="w-full max-w-sm space-y-[20px]">
        <FieldContainer size="small" name="small" label="Small (32px)" description="도움말이 들어갑니다" required>
          <TextField size="small" placeholder="텍스트를 입력하세요" />
        </FieldContainer>
        <FieldContainer size="regular" name="regular" label="Regular (40px)" description="도움말이 들어갑니다" required>
          <TextField size="regular" placeholder="텍스트를 입력하세요" />
        </FieldContainer>
        <FieldContainer size="large" name="large" label="Large (48px)" description="도움말이 들어갑니다" required>
          <TextField size="large" placeholder="텍스트를 입력하세요" />
        </FieldContainer>
      </Form>
    `,
  }),
}

export const WithValidation: Story = {
  args: {},
  render: () => ({
    components: { Form, FieldContainer, TextField, Button },
    setup() {
      function required(value: string) {
        return value ? true : '필수 입력 항목입니다'
      }
      function minLength(value: string) {
        return value && value.length >= 8 ? true : '8자 이상 입력하세요'
      }
      return { required, minLength }
    },
    template: `
      <Form class="w-full max-w-sm space-y-[20px]">
        <FieldContainer name="username" label="Username" description="로그인에 사용될 아이디" :rules="required" required>
          <TextField placeholder="아이디를 입력하세요" />
        </FieldContainer>
        <FieldContainer name="password" label="Password" description="8자 이상 영문 숫자 조합" :rules="minLength" required>
          <TextField type="password" placeholder="••••••••" />
        </FieldContainer>
        <Button type="submit" variant="primary" class="w-full">제출</Button>
      </Form>
    `,
  }),
}

export const ErrorOverridesDescription: Story = {
  args: {},
  render: () => ({
    components: { Form, FieldContainer, TextField, Button },
    setup() {
      function required(value: string) {
        return value ? true : '오류 메세지가 들어갑니다'
      }
      return { required }
    },
    template: `
      <div class="space-y-[8px] text-size-12 text-grey-70">
        <p>검증 실행 버튼을 누르면 description이 error로 교체됩니다.</p>
        <Form class="w-full max-w-sm space-y-[16px]" v-slot="{ validate }">
          <FieldContainer name="email" label="Label" description="도움말이 들어갑니다" :rules="required" required>
            <TextField type="email" placeholder="텍스트를 입력하세요" />
          </FieldContainer>
          <Button type="button" variant="primary" @click="validate">검증 실행</Button>
        </Form>
      </div>
    `,
  }),
}

export const WithTextarea: Story = {
  args: {},
  render: () => ({
    components: { Form, FieldContainer, Textarea },
    template: `
      <Form class="w-full max-w-sm">
        <FieldContainer name="bio" label="자기소개" description="본인을 간단히 소개해주세요">
          <Textarea placeholder="안녕하세요..." :rows="4" />
        </FieldContainer>
      </Form>
    `,
  }),
}

export const WithSelect: Story = {
  args: {},
  render: () => ({
    components: {
      Form,
      FieldContainer,
      Select,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectItem,
    },
    template: `
      <Form class="w-full max-w-sm">
        <FieldContainer name="country" label="국가" description="거주 국가를 선택하세요" required>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="선택하세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kr">대한민국</SelectItem>
              <SelectItem value="us">미국</SelectItem>
              <SelectItem value="jp">일본</SelectItem>
            </SelectContent>
          </Select>
        </FieldContainer>
      </Form>
    `,
  }),
}

export const AccessibleWithoutVisualLabel: Story = {
  args: {},
  render: () => ({
    components: { Form, FieldContainer, TextField },
    template: `
      <Form class="w-full max-w-sm">
        <FieldContainer name="search" description="라벨 없이 aria-label로 스크린리더 대응">
          <TextField aria-label="검색" placeholder="검색..." />
        </FieldContainer>
      </Form>
    `,
  }),
}

export const Disabled: Story = {
  args: {},
  render: () => ({
    components: { Form, FieldContainer, TextField },
    template: `
      <Form class="w-full max-w-sm">
        <FieldContainer name="readonly" label="읽기 전용 필드" description="TextField 자체의 disabled가 시각/상호작용 모두 담당" initial-value="고정 값">
          <TextField disabled />
        </FieldContainer>
      </Form>
    `,
  }),
}

export const PlainInput: Story = {
  args: {},
  render: () => ({
    components: { Form, FieldContainer },
    template: `
      <Form class="w-full max-w-sm">
        <FieldContainer
          name="plain"
          label="Plain HTML input"
          description="커스텀 컴포넌트 없이 native input 사용 (v-slot 패턴)"
          v-slot="{ field }"
        >
          <input
            v-bind="field"
            type="text"
            class="w-full h-[40px] px-[16px] border border-grey-40 bg-grey-10 rounded-[4px] text-size-14 text-grey-80 focus:outline-hidden focus:border-blue-80"
          />
        </FieldContainer>
      </Form>
    `,
  }),
}
