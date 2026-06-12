import type { Meta, StoryObj } from "@storybook/vue3-vite"
import Panel from "./Panel.vue"

const meta = {
  title: "Components/Panel",
  component: Panel,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["negative", "warning", "informative", "positive"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    icon: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Panel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: "negative", size: "small", icon: true },
  render: (args) => ({
    components: { Panel },
    setup: () => ({ args }),
    template: '<Panel v-bind="args">실패 및 오류를 나타낼 때 사용</Panel>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Panel },
    template: `
      <div class="flex flex-col gap-[12px] w-[420px]">
        <Panel variant="negative">실패 및 오류를 나타낼 때 사용</Panel>
        <Panel variant="warning">경고 및 주의를 나타낼 때 사용</Panel>
        <Panel variant="informative">공지, 일반적인 안내에 사용</Panel>
        <Panel variant="positive">액션이 성공적으로 이루어졌을때 사용</Panel>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Panel },
    template: `
      <div class="flex flex-col gap-[12px] w-[420px]">
        <Panel variant="informative" size="small">Small</Panel>
        <Panel variant="informative" size="medium">Medium</Panel>
        <Panel variant="informative" size="large">Large</Panel>
      </div>
    `,
  }),
}

export const NoIcon: Story = {
  args: { variant: "informative", size: "small", icon: false },
  render: (args) => ({
    components: { Panel },
    setup: () => ({ args }),
    template: '<Panel v-bind="args">아이콘 없는 안내 패널</Panel>',
  }),
}
