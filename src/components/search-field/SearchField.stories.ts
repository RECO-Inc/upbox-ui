import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import SearchField from "./SearchField.vue"
import Select from "../select/Select.vue"
import SelectContent from "../select/SelectContent.vue"
import SelectItem from "../select/SelectItem.vue"
import SelectTrigger from "../select/SelectTrigger.vue"
import SelectValue from "../select/SelectValue.vue"

const meta = {
  title: "Components/Form/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["basic", "filter"],
    },
    size: {
      control: "select",
      options: ["small", "regular", "large"],
    },
    error: { control: "boolean" },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" },
    clearable: { control: "boolean" },
  },
} satisfies Meta<typeof SearchField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "검색어를 입력하세요...",
    clearable: true,
  },
}

export const Variants: Story = {
  render: () => ({
    components: { SearchField },
    setup() {
      const basic = ref("")
      const filter = ref("")
      return { basic, filter }
    },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <p class="text-size-12 text-grey-60">basic</p>
        <SearchField v-model="basic" variant="basic" placeholder="검색어를 입력하세요..." />
        <p class="text-size-12 text-grey-60">filter</p>
        <SearchField v-model="filter" variant="filter" placeholder="검색어를 입력하세요...">
          <template #filter>
            <span class="px-[8px] text-size-14 text-grey-60 whitespace-nowrap">전체</span>
          </template>
        </SearchField>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { SearchField },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <SearchField size="small" placeholder="Small (h=32)" />
        <SearchField size="regular" placeholder="Regular (h=40)" />
        <SearchField size="large" placeholder="Large (h=48)" />
      </div>
    `,
  }),
}

export const States: Story = {
  render: () => ({
    components: { SearchField },
    template: `
      <div class="flex flex-col gap-[12px] w-[320px]">
        <SearchField placeholder="Enabled" model-value="" />
        <SearchField placeholder="With value" model-value="검색어" />
        <SearchField placeholder="Disabled" disabled model-value="Cannot edit" />
        <SearchField placeholder="Readonly" readonly model-value="Read only" />
        <SearchField placeholder="Error" error model-value="오류 상태" />
      </div>
    `,
  }),
}

export const ClearableDemo: Story = {
  render: () => ({
    components: { SearchField },
    setup() {
      const value = ref("삭제해보세요")
      return { value }
    },
    template: `
      <div class="flex flex-col gap-[8px] w-[320px]">
        <p class="text-size-12 text-grey-60">값 입력 후 X 버튼으로 지우기</p>
        <SearchField v-model="value" clearable placeholder="입력 후 X 버튼 클릭" />
        <p class="text-size-12 text-grey-60">현재 값: {{ value || '(비어있음)' }}</p>
      </div>
    `,
  }),
}

export const FilterVariantDemo: Story = {
  render: () => ({
    components: { SearchField, Select, SelectContent, SelectItem, SelectTrigger, SelectValue },
    setup() {
      const value = ref("")
      const category = ref("all")
      return { value, category }
    },
    template: `
      <div class="flex flex-col gap-[12px] w-[400px]">
        <p class="text-size-12 text-grey-60">filter variant — #filter 슬롯에 upbox-ui Select</p>
        <SearchField v-model="value" variant="filter" placeholder="검색어를 입력하세요...">
          <template #filter>
            <Select v-model="category">
              <SelectTrigger inline>
                <SelectValue placeholder="전체" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="title">제목</SelectItem>
                <SelectItem value="content">내용</SelectItem>
                <SelectItem value="author">작성자</SelectItem>
              </SelectContent>
            </Select>
          </template>
        </SearchField>
        <p class="text-size-12 text-grey-60">카테고리: {{ category }} / 검색어: {{ value || '(비어있음)' }}</p>
      </div>
    `,
  }),
}

export const Matrix: Story = {
  render: () => ({
    components: { SearchField },
    template: `
      <div class="flex flex-col gap-[24px] w-[360px]">
        <div v-for="size in ['small', 'regular', 'large']" :key="size" class="flex flex-col gap-[8px]">
          <p class="text-size-12 font-medium text-grey-80 capitalize">{{ size }}</p>
          <SearchField :size="size" placeholder="기본" />
          <SearchField :size="size" placeholder="값 있음" model-value="검색어" />
          <SearchField :size="size" placeholder="Error" error model-value="오류" />
          <SearchField :size="size" placeholder="Disabled" disabled model-value="비활성" />
          <SearchField :size="size" placeholder="Readonly" readonly model-value="읽기전용" />
        </div>
      </div>
    `,
  }),
}
