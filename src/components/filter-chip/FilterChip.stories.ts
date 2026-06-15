import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import FilterChip from "./FilterChip.vue"
import Badge from "../badge/Badge.vue"

/**
 * Figma `filterChips` — 조회용 드롭다운 필터 칩.
 * 생성·수정용 선택 UI 는 SelectField 를 쓴다.
 */
const meta = {
  title: "Components/FilterChip",
  component: FilterChip,
  tags: ["autodocs"],
  argTypes: {
    round: { control: "boolean" },
    device: { control: "inline-radio", options: ["web", "mobile"] },
    state: { control: "inline-radio", options: ["placeholder", "typed"] },
    count: { control: "text" },
    chevron: { control: "boolean" },
  },
} satisfies Meta<typeof FilterChip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    round: false,
    device: "web",
    state: "placeholder",
    chevron: true,
  },
  render: args => ({
    components: { FilterChip },
    setup: () => ({ args }),
    template: '<FilterChip v-bind="args">필터</FilterChip>',
  }),
}

export const States: Story = {
  name: "placeholder / typed",
  render: () => ({
    components: { FilterChip },
    template: `
      <div class="flex flex-wrap gap-[8px] items-center">
        <FilterChip state="placeholder">전체</FilterChip>
        <FilterChip state="typed">소형</FilterChip>
        <FilterChip state="typed" :count="2">소형</FilterChip>
      </div>
    `,
  }),
}

export const Device: Story = {
  name: "web / mobile",
  render: () => ({
    components: { FilterChip },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div class="flex flex-col gap-[8px]">
          <p class="text-size-12 text-grey-60">web — 흰 배경 + 회색 보더</p>
          <div class="flex flex-wrap gap-[8px] items-center">
            <FilterChip device="web" state="placeholder">전체</FilterChip>
            <FilterChip device="web" state="typed" :count="2">소형</FilterChip>
          </div>
        </div>
        <div class="flex flex-col gap-[8px]">
          <p class="text-size-12 text-grey-60">mobile — 보더 없는 채움</p>
          <div class="flex flex-wrap gap-[8px] items-center">
            <FilterChip device="mobile" state="placeholder">전체</FilterChip>
            <FilterChip device="mobile" state="typed" :count="2">소형</FilterChip>
          </div>
        </div>
      </div>
    `,
  }),
}

export const Shapes: Story = {
  name: "square / circle",
  render: () => ({
    components: { FilterChip },
    template: `
      <div class="flex flex-wrap gap-[8px] items-center">
        <FilterChip>square</FilterChip>
        <FilterChip round>circle</FilterChip>
        <FilterChip round state="typed" :count="3">circle</FilterChip>
      </div>
    `,
  }),
}

export const WithBadge: Story = {
  render: () => ({
    components: { FilterChip, Badge },
    template: `
      <div class="flex flex-wrap gap-[8px] items-center">
        <FilterChip>
          <template #badge>
            <Badge size="3xsmall" tone="soft" variant="neutral">NEW</Badge>
          </template>
          카테고리
        </FilterChip>
        <FilterChip state="typed" :count="2">
          <template #badge>
            <Badge size="3xsmall" tone="soft" variant="informative">필터</Badge>
          </template>
          카테고리
        </FilterChip>
      </div>
    `,
  }),
}

export const FilterUsage: Story = {
  name: "사용 가이드 — 필터 트리거",
  render: () => ({
    components: { FilterChip },
    setup() {
      const sizeCount = ref(2)
      const colorCount = ref(0)
      return { sizeCount, colorCount }
    },
    template: `
      <div class="flex flex-col gap-[8px]">
        <p class="text-size-12 text-grey-60">값이 있으면 typed + count, 없으면 placeholder.</p>
        <div class="flex flex-wrap gap-[8px] items-center">
          <FilterChip
            :state="sizeCount > 0 ? 'typed' : 'placeholder'"
            :count="sizeCount > 0 ? sizeCount : undefined"
          >사이즈</FilterChip>
          <FilterChip
            :state="colorCount > 0 ? 'typed' : 'placeholder'"
            :count="colorCount > 0 ? colorCount : undefined"
          >색상</FilterChip>
          <FilterChip state="placeholder">가격</FilterChip>
        </div>
      </div>
    `,
  }),
}

export const Matrix: Story = {
  render: () => ({
    components: { FilterChip },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div v-for="device in ['web', 'mobile']" :key="device" class="flex flex-col gap-[8px]">
          <p class="text-size-12 text-grey-60">{{ device }}</p>
          <div v-for="r in [false, true]" :key="String(r)" class="flex flex-wrap gap-[8px] items-center">
            <FilterChip :device="device" :round="r" state="placeholder">{{ r ? 'circle' : 'square' }}</FilterChip>
            <FilterChip :device="device" :round="r" state="typed">{{ r ? 'circle' : 'square' }}</FilterChip>
            <FilterChip :device="device" :round="r" state="typed" :count="2">{{ r ? 'circle' : 'square' }}</FilterChip>
          </div>
        </div>
      </div>
    `,
  }),
}
