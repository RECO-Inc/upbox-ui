import type { Meta, StoryObj } from "@storybook/vue3-vite"
import BadgeDivider from "./BadgeDivider.vue"

const meta = {
  title: "Components/BadgeDivider",
  component: BadgeDivider,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["green", "navy"],
    },
    size: {
      control: "select",
      options: ["3xsmall", "2xsmall", "xsmall"],
    },
  },
} satisfies Meta<typeof BadgeDivider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: "green", size: "2xsmall" },
  render: (args) => ({
    components: { BadgeDivider },
    setup: () => ({ args }),
    template: '<BadgeDivider v-bind="args">단일청구서</BadgeDivider>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { BadgeDivider },
    template: `
      <div class="flex flex-wrap gap-[16px] items-center">
        <BadgeDivider variant="green">단일청구서</BadgeDivider>
        <BadgeDivider variant="navy">통합청구서</BadgeDivider>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { BadgeDivider },
    template: `
      <div class="flex flex-col gap-[8px] items-start">
        <BadgeDivider variant="green" size="3xsmall">3xsmall</BadgeDivider>
        <BadgeDivider variant="green" size="2xsmall">2xsmall</BadgeDivider>
        <BadgeDivider variant="green" size="xsmall">xsmall</BadgeDivider>
      </div>
    `,
  }),
}

export const UsageExample: Story = {
  name: "Usage / 그룹 라벨",
  render: () => ({
    components: { BadgeDivider },
    template: `
      <div class="grid grid-cols-4 gap-x-[40px] gap-y-[4px] items-center">
        <BadgeDivider variant="green">단일청구서</BadgeDivider>
        <BadgeDivider variant="green">매입(별도거래)</BadgeDivider>
        <BadgeDivider variant="green">할인</BadgeDivider>
        <BadgeDivider variant="green">정액</BadgeDivider>
        <BadgeDivider variant="navy">통합청구서</BadgeDivider>
        <BadgeDivider variant="navy">매출(일반) 매출(상계)</BadgeDivider>
        <BadgeDivider variant="navy">할증</BadgeDivider>
        <BadgeDivider variant="navy">정률</BadgeDivider>
      </div>
    `,
  }),
}
