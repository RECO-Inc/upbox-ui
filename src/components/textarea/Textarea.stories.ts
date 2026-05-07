import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Textarea from './Textarea.vue'
import TextareaCount from './TextareaCount.vue'

const meta = {
  title: 'Components/Form/Textarea',
  component: Textarea,
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
    counter: { control: 'boolean' },
    byteMode: { control: 'boolean' },
    autoResize: { control: 'boolean' },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '내용을 입력하세요.',
    counter: true,
    maxLength: 100,
  },
}

/**
 * Figma `textArea` 매트릭스 — size × state. variant 는 `default` 만 정의되어 있다.
 */
export const FigmaMatrix: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <div class="grid grid-cols-6 gap-[16px] w-[1100px]">
        <Textarea size="small" placeholder="내용을 입력하세요." :counter="true" :maxLength="100" />
        <Textarea size="regular" placeholder="내용을 입력하세요." :counter="true" :maxLength="100" />
        <Textarea size="large" placeholder="내용을 입력하세요." :counter="true" :maxLength="100" />
        <Textarea size="small" placeholder="내용을 입력하세요." :counter="true" :maxLength="100" disabled />
        <Textarea size="regular" placeholder="내용을 입력하세요." :counter="true" :maxLength="100" disabled />
        <Textarea size="large" placeholder="내용을 입력하세요." :counter="true" :maxLength="100" disabled />

        <Textarea size="small" model-value="내용을 입력하세요." :counter="true" :maxLength="100" />
        <Textarea size="regular" model-value="내용을 입력하세요." :counter="true" :maxLength="100" />
        <Textarea size="large" model-value="내용을 입력하세요." :counter="true" :maxLength="100" />
        <Textarea size="small" model-value="내용을 입력하세요." :counter="true" :maxLength="100" readonly />
        <Textarea size="regular" model-value="내용을 입력하세요." :counter="true" :maxLength="100" readonly />
        <Textarea size="large" model-value="내용을 입력하세요." :counter="true" :maxLength="100" readonly />

        <Textarea size="small" model-value="내용을 입력하세요." :counter="true" :maxLength="100" error />
        <Textarea size="regular" model-value="내용을 입력하세요." :counter="true" :maxLength="100" error />
        <Textarea size="large" model-value="내용을 입력하세요." :counter="true" :maxLength="100" error />
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Textarea size="small" placeholder="small" :counter="true" :maxLength="100" />
        <Textarea size="regular" placeholder="regular" :counter="true" :maxLength="100" />
        <Textarea size="large" placeholder="large" :counter="true" :maxLength="100" />
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <Textarea variant="default" placeholder="default" />
        <Textarea variant="filled" placeholder="filled" />
        <Textarea variant="bottomline" placeholder="bottomline" />
      </div>
    `,
  }),
}

export const ErrorState: Story = {
  args: {
    error: true,
    placeholder: '에러 상태',
    modelValue: '잘못된 입력',
    counter: true,
    maxLength: 100,
  },
}

export const Disabled: Story = {
  args: { placeholder: '비활성', disabled: true, counter: true, maxLength: 100 },
}

export const Readonly: Story = {
  args: {
    modelValue: '읽기 전용 텍스트',
    readonly: true,
    counter: true,
    maxLength: 100,
  },
}

export const WithCounter: Story = {
  args: {
    placeholder: '최대 100자',
    counter: true,
    maxLength: 100,
  },
}

export const ByteCounter: Story = {
  args: {
    placeholder: '최대 100 byte',
    counter: true,
    maxLength: 100,
    byteMode: true,
  },
}

export const ManualCount: Story = {
  render: () => ({
    components: { Textarea, TextareaCount },
    template: `
      <Textarea placeholder="footer 슬롯으로 카운터 직접 배치" :maxLength="50" class="w-[320px]">
        <template #footer>
          <div class="flex w-full items-center justify-between">
            <span class="text-size-12 text-grey-60">왼쪽 안내</span>
            <TextareaCount />
          </div>
        </template>
      </Textarea>
    `,
  }),
}

export const FixedRows: Story = {
  args: {
    placeholder: 'autoResize=false, rows=6',
    autoResize: false,
    rows: 6,
  },
}
