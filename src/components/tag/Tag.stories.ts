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
    mode: {
      control: "select",
      options: ["view", "edit"],
    },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { state: "enabled", size: "small", mode: "edit" },
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
          <Tag state="enabled" mode="edit">enabled</Tag>
          <Tag state="disabled" mode="view">disabled</Tag>
          <Tag state="error" mode="edit">error</Tag>
        </div>
      </div>
    `,
  }),
}

export const Modes: Story = {
  render: () => ({
    components: { Tag },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Tag mode="view">view 모드</Tag>
          <Tag mode="edit" @close="() => alert('close')">edit 모드</Tag>
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
        <Tag size="3xsmall" mode="view">3xsmall</Tag>
        <Tag size="2xsmall" mode="edit">2xsmall</Tag>
        <Tag size="xsmall" mode="edit">xsmall</Tag>
        <Tag size="small" mode="edit">small</Tag>
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
          <Tag size="small" mode="view">
            <template #badge>
              <Badge size="2xsmall" tone="outline" variant="neutral">태그</Badge>
            </template>
            태그명
          </Tag>
          <Tag size="xsmall" state="disabled" mode="view">
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
          <Tag :state="state" size="3xsmall" mode="view">3xsmall</Tag>
          <Tag :state="state" size="2xsmall" mode="edit">2xsmall</Tag>
          <Tag :state="state" size="xsmall" mode="edit">xsmall</Tag>
          <Tag :state="state" size="small" mode="edit">small</Tag>
        </div>
      </div>
    `,
  }),
}
