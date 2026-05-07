import type { Meta, StoryObj } from "@storybook/vue3-vite"
import Tag from "./Tag.vue"
import Badge from "../badge/Badge.vue"

const meta = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["enabled", "disabled", "error"],
    },
    size: {
      control: "select",
      options: ["3xsmall", "2xsmall", "xsmall", "small"],
    },
    closable: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { state: "enabled", size: "small", closable: true },
  render: (args) => ({
    components: { Tag },
    setup: () => ({ args }),
    template: '<Tag v-bind="args">태그명</Tag>',
  }),
}

export const States: Story = {
  render: () => ({
    components: { Tag },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Tag state="enabled" closable>enabled</Tag>
          <Tag state="disabled">disabled</Tag>
          <Tag state="error" closable>error</Tag>
        </div>
      </div>
    `,
  }),
}

export const Closable: Story = {
  render: () => ({
    components: { Tag },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Tag>읽기 전용</Tag>
          <Tag closable @close="() => alert('close')">닫기 가능</Tag>
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Tag },
    template: `
      <div class="flex flex-wrap gap-[8px] items-center">
        <Tag size="3xsmall">3xsmall</Tag>
        <Tag size="2xsmall" closable>2xsmall</Tag>
        <Tag size="xsmall" closable>xsmall</Tag>
        <Tag size="small" closable>small</Tag>
      </div>
    `,
  }),
}

export const WithBadge: Story = {
  render: () => ({
    components: { Tag, Badge },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Tag size="small">
            <template #badge>
              <Badge size="2xsmall" tone="outline" variant="neutral">태그</Badge>
            </template>
            태그명
          </Tag>
          <Tag size="xsmall" state="disabled">
            <template #badge>
              <Badge size="3xsmall" tone="outline" variant="neutral">태그</Badge>
            </template>
            태그명
          </Tag>
        </div>
      </div>
    `,
  }),
}

export const Matrix: Story = {
  render: () => ({
    components: { Tag },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div v-for="state in ['enabled', 'disabled', 'error']" :key="state" class="flex flex-wrap gap-[8px] items-center">
          <Tag :state="state" size="3xsmall">3xsmall</Tag>
          <Tag :state="state" size="2xsmall" closable>2xsmall</Tag>
          <Tag :state="state" size="xsmall" closable>xsmall</Tag>
          <Tag :state="state" size="small" closable>small</Tag>
        </div>
      </div>
    `,
  }),
}
