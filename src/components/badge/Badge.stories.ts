import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { Check } from "lucide-vue-next"
import Badge from "./Badge.vue"

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "negative", "positive", "informative", "warning"],
    },
    tone: {
      control: "select",
      options: ["subtle", "solid", "outline"],
    },
    shape: {
      control: "select",
      options: ["square", "round"],
    },
    size: {
      control: "select",
      options: ["3xsmall", "2xsmall", "xsmall"],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: "neutral", tone: "subtle", shape: "square", size: "2xsmall" },
  render: (args) => ({
    components: { Badge },
    setup: () => ({ args }),
    template: '<Badge v-bind="args">Badge</Badge>',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="neutral">neutral</Badge>
          <Badge variant="negative">negative</Badge>
          <Badge variant="positive">positive</Badge>
          <Badge variant="informative">informative</Badge>
          <Badge variant="warning">warning</Badge>
        </div>
      </div>
    `,
  }),
}

export const Tones: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="neutral" tone="subtle">subtle</Badge>
          <Badge variant="neutral" tone="solid">solid</Badge>
          <Badge variant="neutral" tone="outline">outline</Badge>
        </div>
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="negative" tone="subtle">subtle</Badge>
          <Badge variant="negative" tone="solid">solid</Badge>
          <Badge variant="negative" tone="outline">outline</Badge>
        </div>
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="positive" tone="subtle">subtle</Badge>
          <Badge variant="positive" tone="solid">solid</Badge>
          <Badge variant="positive" tone="outline">outline</Badge>
        </div>
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="informative" tone="subtle">subtle</Badge>
          <Badge variant="informative" tone="solid">solid</Badge>
          <Badge variant="informative" tone="outline">outline</Badge>
        </div>
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="warning" tone="subtle">subtle</Badge>
          <Badge variant="warning" tone="solid">solid</Badge>
          <Badge variant="warning" tone="outline">outline</Badge>
        </div>
      </div>
    `,
  }),
}

export const Shapes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="positive" shape="square">square</Badge>
          <Badge variant="positive" shape="round">round</Badge>
        </div>
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="informative" tone="solid" shape="square">square</Badge>
          <Badge variant="informative" tone="solid" shape="round">round</Badge>
        </div>
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="warning" tone="outline" shape="square">square</Badge>
          <Badge variant="warning" tone="outline" shape="round">round</Badge>
        </div>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-wrap gap-[8px] items-center">
        <Badge variant="informative" size="3xsmall">3xsmall</Badge>
        <Badge variant="informative" size="2xsmall">2xsmall</Badge>
        <Badge variant="informative" size="xsmall">xsmall</Badge>
      </div>
    `,
  }),
}

export const WithIcon: Story = {
  render: () => ({
    components: { Badge, Check },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="positive" size="xsmall">
            xsmall
            <template #icon><Check :size="12" /></template>
          </Badge>
          <Badge variant="informative" size="2xsmall">
            2xsmall
            <template #icon><Check :size="12" /></template>
          </Badge>
        </div>
      </div>
    `,
  }),
}

export const WithCount: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-col gap-[12px]">
        <div class="flex flex-wrap gap-[8px] items-center">
          <Badge variant="positive" size="xsmall">
            xsmall
            <template #count>10</template>
          </Badge>
          <Badge variant="negative" size="xsmall">
            xsmall
            <template #count>99+</template>
          </Badge>
          <Badge variant="informative" size="2xsmall">
            2xsmall
            <template #count>3</template>
          </Badge>
        </div>
      </div>
    `,
  }),
}

export const WithIconAndCount: Story = {
  render: () => ({
    components: { Badge, Check },
    template: `
      <div class="flex flex-wrap gap-[8px] items-center">
        <Badge variant="positive" size="xsmall">
          xsmall
          <template #icon><Check :size="12" /></template>
          <template #count>10</template>
        </Badge>
      </div>
    `,
  }),
}

export const Matrix: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div class="flex flex-col gap-[16px]">
        <div v-for="variant in ['neutral', 'negative', 'positive', 'informative', 'warning']" :key="variant" class="flex flex-wrap gap-[8px] items-center">
          <Badge :variant="variant" tone="subtle" size="3xsmall">3xs</Badge>
          <Badge :variant="variant" tone="subtle" size="2xsmall">2xs</Badge>
          <Badge :variant="variant" tone="subtle" size="xsmall">xs</Badge>
          <Badge :variant="variant" tone="solid" size="3xsmall">3xs</Badge>
          <Badge :variant="variant" tone="solid" size="2xsmall">2xs</Badge>
          <Badge :variant="variant" tone="solid" size="xsmall">xs</Badge>
          <Badge :variant="variant" tone="outline" size="3xsmall">3xs</Badge>
          <Badge :variant="variant" tone="outline" size="2xsmall">2xs</Badge>
          <Badge :variant="variant" tone="outline" size="xsmall">xs</Badge>
          <Badge :variant="variant" tone="subtle" shape="round" size="2xsmall">round</Badge>
          <Badge :variant="variant" tone="solid" shape="round" size="2xsmall">round</Badge>
          <Badge :variant="variant" tone="outline" shape="round" size="2xsmall">round</Badge>
        </div>
      </div>
    `,
  }),
}
