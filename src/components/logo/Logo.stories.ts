import type { Meta, StoryObj } from "@storybook/vue3-vite"
import Logo from "./Logo.vue"

const meta = {
  title: "Components/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["full", "icon"],
    },
  },
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

export const Full: Story = {
  args: { variant: "full" },
  render: (args) => ({
    components: { Logo },
    setup: () => ({ args }),
    template: '<Logo v-bind="args" class="h-[40px]" />',
  }),
}

export const Icon: Story = {
  args: { variant: "icon" },
  render: (args) => ({
    components: { Logo },
    setup: () => ({ args }),
    template: '<Logo v-bind="args" class="h-[40px]" />',
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Logo },
    template: `
      <div class="flex flex-col gap-[24px]">
        <div class="flex items-end gap-[24px]">
          <Logo variant="full" class="h-[24px]" />
          <Logo variant="full" class="h-[32px]" />
          <Logo variant="full" class="h-[40px]" />
          <Logo variant="full" class="h-[56px]" />
        </div>
        <div class="flex items-end gap-[24px]">
          <Logo variant="icon" class="h-[24px]" />
          <Logo variant="icon" class="h-[32px]" />
          <Logo variant="icon" class="h-[40px]" />
          <Logo variant="icon" class="h-[56px]" />
        </div>
      </div>
    `,
  }),
}

export const Colors: Story = {
  name: "색상 (currentColor)",
  render: () => ({
    components: { Logo },
    template: `
      <div class="flex flex-col gap-[16px]">
        <p class="text-size-12 text-grey-60">로고는 currentColor 기반. text-* 유틸리티로 색 변경 가능. (B 자만 #F5CA45 고정 골드)</p>
        <div class="flex items-center gap-[24px] p-[16px] bg-grey-10">
          <Logo class="h-[32px] text-grey-90" />
          <Logo class="h-[32px] text-grey-100" />
          <Logo class="h-[32px] text-navy-80" />
        </div>
        <div class="flex items-center gap-[24px] p-[16px] bg-navy-100">
          <Logo class="h-[32px] text-grey-10" />
        </div>
      </div>
    `,
  }),
}
