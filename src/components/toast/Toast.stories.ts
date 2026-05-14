import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { toast } from "vue-sonner"
import Toast from "./Toast.vue"
import { Button } from "../button"

const meta = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  decorators: [
    () => ({
      components: { Toast },
      template: `
        <div style="min-height: 240px; position: relative;">
          <story />
          <Toast />
        </div>
      `,
    }),
  ],
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Button },
    setup() {
      function show() {
        toast.success("성공 메세지", {
          description: "메세지 부연 설명이 들어갑니다.",
        })
      }
      return { show }
    },
    template: `<Button variant="primary" @click="show">Show Toast</Button>`,
  }),
}

export const States: Story = {
  name: "상태별 (success / error / info / warning)",
  render: () => ({
    components: { Button },
    setup() {
      const desc = "메세지 부연 설명이 들어갑니다."
      const showSuccess = () => toast.success("성공 메세지", { description: desc })
      const showError = () => toast.error("에러(실패) 메세지", { description: desc })
      const showInfo = () => toast.info("정보(공지) 메세지", { description: desc })
      const showWarning = () => toast.warning("경고 메세지", { description: desc })
      return { showSuccess, showError, showInfo, showWarning }
    },
    template: `
      <div class="flex flex-wrap gap-[12px]">
        <Button variant="positive" @click="showSuccess">Success</Button>
        <Button variant="error" @click="showError">Error</Button>
        <Button variant="info" @click="showInfo">Info</Button>
        <Button variant="usually" @click="showWarning">Warning</Button>
      </div>
    `,
  }),
}

export const TitleOnly: Story = {
  name: "제목만",
  render: () => ({
    components: { Button },
    setup() {
      const show = () => toast.success("성공 메세지")
      return { show }
    },
    template: `<Button variant="primary" @click="show">Title Only</Button>`,
  }),
}

export const WithAction: Story = {
  name: "액션 버튼 포함",
  render: () => ({
    components: { Button },
    setup() {
      function show() {
        toast.success("항목이 삭제되었습니다", {
          description: "삭제된 항목은 휴지통으로 이동합니다.",
          action: {
            label: "되돌리기",
            onClick: () => toast.info("되돌렸습니다"),
          },
        })
      }
      return { show }
    },
    template: `<Button variant="primary" @click="show">Toast with Action</Button>`,
  }),
}

export const PromiseToast: Story = {
  name: "Promise (loading → success/error)",
  render: () => ({
    components: { Button },
    setup() {
      function show() {
        const p = new Promise<{ name: string }>((resolve) => {
          setTimeout(() => resolve({ name: "report.pdf" }), 1500)
        })
        toast.promise(p, {
          loading: "업로드 중...",
          success: (data: any) => `${data.name} 업로드 완료`,
          error: "업로드 실패",
        })
      }
      return { show }
    },
    template: `<Button variant="primary" @click="show">Promise Toast</Button>`,
  }),
}

export const CustomDuration: Story = {
  name: "지속 시간 변경",
  render: () => ({
    components: { Button },
    setup() {
      const showLong = () =>
        toast.info("오래 보이는 알림", {
          description: "10초 동안 유지됩니다.",
          duration: 10000,
        })
      const showShort = () =>
        toast.info("짧게 보이는 알림", { duration: 1500 })
      return { showLong, showShort }
    },
    template: `
      <div class="flex gap-[12px]">
        <Button variant="primary" @click="showLong">Long (10s)</Button>
        <Button variant="usually" @click="showShort">Short (1.5s)</Button>
      </div>
    `,
  }),
}
