import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { ref } from "vue"
import Chip from "./Chip.vue"
import Badge from "../badge/Badge.vue"

const meta = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    round: { control: "boolean" },
    size: {
      control: "select",
      options: ["xsmall", "small"],
    },
    state: {
      control: "select",
      options: ["default", "selected", "active"],
    },
    removable: { control: "boolean" },
    dropdown: { control: "boolean" },
    count: { control: "text" },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    round: false,
    size: "xsmall",
    state: "default",
    dropdown: true,
  },
  render: (args) => ({
    components: { Chip },
    setup: () => ({ args }),
    template: '<Chip v-bind="args">필터</Chip>',
  }),
}

export const States: Story = {
  render: () => ({
    components: { Chip },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Chip state="default" dropdown>default</Chip>
          <Chip state="selected">selected</Chip>
          <Chip state="active" dropdown :count="2">active</Chip>
        </div>
      </div>
    `,
  }),
}

export const Shapes: Story = {
  render: () => ({
    components: { Chip },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Chip dropdown>square</Chip>
          <Chip state="selected" removable>square selected</Chip>
          <Chip state="active" dropdown :count="3">square active</Chip>
        </div>
        <div class="flex flex-wrap gap-[8px] items-center">
          <Chip round dropdown>round</Chip>
          <Chip round state="selected" removable>round selected</Chip>
          <Chip round state="active" dropdown :count="3">round active</Chip>
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Chip },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Chip size="xsmall" dropdown>xsmall (PC, 24px)</Chip>
          <Chip size="small" dropdown>small (Mobile, 32px)</Chip>
        </div>
        <div class="flex flex-wrap gap-[8px] items-center">
          <Chip size="xsmall" state="selected" removable>xsmall</Chip>
          <Chip size="small" state="selected" removable>small</Chip>
        </div>
      </div>
    `,
  }),
}

export const SingleSelectFromN: Story = {
  name: "사용 가이드 — N개중 1개 선택",
  render: () => ({
    components: { Chip },
    setup() {
      const value = ref("xsmall")
      return { value }
    },
    template: `
      <div class="flex flex-col gap-[8px]">
        <p class="text-size-12 text-grey-60">N개중 1개를 선택. 선택된 chip만 navy로 채워짐 (라디오와 유사).</p>
        <div class="flex flex-wrap gap-[4px] items-center">
          <Chip
            v-for="opt in ['전체', 'xsmall', 'small', 'medium']"
            :key="opt"
            :state="value === opt ? 'selected' : 'default'"
            @click="value = opt"
          >{{ opt }}</Chip>
        </div>
      </div>
    `,
  }),
}

export const ListedRemovable: Story = {
  name: "사용 가이드 — 나열식 (선택된 N개 표시)",
  render: () => ({
    components: { Chip },
    setup() {
      const items = ref(["xsmall", "small", "medium"])
      const remove = (i: number) => items.value.splice(i, 1)
      return { items, remove }
    },
    template: `
      <div class="flex flex-col gap-[8px]">
        <p class="text-size-12 text-grey-60">선택된 값들을 나열. 각 chip 의 X 로 제거.</p>
        <div class="flex flex-wrap gap-[4px] items-center">
          <Chip
            v-for="(item, i) in items"
            :key="item"
            state="selected"
            removable
            @remove="remove(i)"
          >{{ item }}</Chip>
          <span v-if="!items.length" class="text-size-12 text-grey-60">선택 항목 없음</span>
        </div>
      </div>
    `,
  }),
}

export const MultiSelectPicker: Story = {
  name: "사용 가이드 — 선택식 N개중 N개 (Picker 트리거)",
  render: () => ({
    components: { Chip },
    setup() {
      const sizeCount = ref(2)
      const colorCount = ref(0)
      return { sizeCount, colorCount }
    },
    template: `
      <div class="flex flex-col gap-[8px]">
        <p class="text-size-12 text-grey-60">picker 가 값을 가지면 active(blue) + count, 없으면 default + chevron.</p>
        <div class="flex flex-wrap gap-[4px] items-center">
          <Chip
            :state="sizeCount > 0 ? 'active' : 'default'"
            :count="sizeCount > 0 ? sizeCount : undefined"
            dropdown
          >사이즈</Chip>
          <Chip
            :state="colorCount > 0 ? 'active' : 'default'"
            :count="colorCount > 0 ? colorCount : undefined"
            dropdown
          >색상</Chip>
          <Chip dropdown>가격</Chip>
        </div>
      </div>
    `,
  }),
}

export const WithBadge: Story = {
  render: () => ({
    components: { Chip, Badge },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Chip dropdown>
            <template #badge>
              <Badge size="3xsmall" tone="soft" variant="neutral">NEW</Badge>
            </template>
            카테고리
          </Chip>
          <Chip state="active" dropdown :count="2">
            <template #badge>
              <Badge size="3xsmall" tone="soft" variant="informative">필터</Badge>
            </template>
            카테고리
          </Chip>
        </div>
      </div>
    `,
  }),
}

export const Matrix: Story = {
  render: () => ({
    components: { Chip },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div v-for="r in [false, true]" :key="String(r)" class="flex flex-col gap-[8px]">
          <p class="text-size-12 text-grey-60">{{ r ? 'round' : 'square' }}</p>
          <div v-for="size in ['xsmall', 'small']" :key="size" class="flex flex-wrap gap-[8px] items-center">
            <Chip :round="r" :size="size" state="default" dropdown>{{ size }}</Chip>
            <Chip :round="r" :size="size" state="selected">{{ size }}</Chip>
            <Chip :round="r" :size="size" state="selected" removable>{{ size }}</Chip>
            <Chip :round="r" :size="size" state="active" dropdown :count="2">{{ size }}</Chip>
          </div>
        </div>
      </div>
    `,
  }),
}
