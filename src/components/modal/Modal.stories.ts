import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Modal from './Modal.vue'
import { Button } from '../button'

const meta = {
  title: 'Components/Modal',
  component: Modal as any,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'regular', 'large', 'xlarge', 'full'] },
    showClose: { control: 'boolean' },
    closeOnOverlay: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
    footerButtonGrow: { control: 'boolean' },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

/** 기본: 취소 + 확인 (가장 흔한 케이스) */
export const Default: Story = {
  render: args => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      return { open, args }
    },
    template: `
      <Button @click="open = true">모달 열기</Button>
      <Modal
        v-model:open="open"
        title="회원을 삭제할까요?"
        description="삭제하면 되돌릴 수 없습니다."
        v-bind="args"
        @confirm="open = false"
      />
    `,
  }),
}

/** 삭제 확인 — destructive 로 빨간 확인 버튼, 라벨 변경 */
export const Destructive: Story = {
  name: '삭제 확인 (destructive)',
  render: () => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <Button variant="destructive" @click="open = true">삭제</Button>
      <Modal
        v-model:open="open"
        title="정말 삭제하시겠어요?"
        description="이 작업은 취소할 수 없습니다."
        destructive
        confirm-text="삭제"
        cancel-text="유지"
        @confirm="open = false"
      />
    `,
  }),
}

/** 단일 버튼(alert) — hideCancel */
export const SingleButton: Story = {
  name: '버튼 1개 (alert)',
  render: () => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <Button @click="open = true">완료 알림 열기</Button>
      <Modal
        v-model:open="open"
        title="회원생성 완료"
        description="회원생성이 성공적으로 완료되었습니다."
        confirm-text="확인"
        hide-cancel
        @confirm="open = false"
      />
    `,
  }),
}

/** 버튼 N개 — footer 슬롯으로 직접 구성 */
export const MultipleButtons: Story = {
  name: '버튼 여러 개 (#footer 슬롯)',
  render: () => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      const result = ref('')
      function pick(label: string, close: () => void) {
        result.value = label
        close()
      }
      return { open, result, pick }
    },
    template: `
      <Button @click="open = true">3-버튼 모달 열기</Button>
      <Modal
        v-model:open="open"
        title="변경사항을 저장할까요?"
        description="저장하지 않은 내용은 사라집니다."
      >
        <template #footer="{ close }">
          <Button variant="secondary" theme="outlined" @click="pick('취소', close)">취소</Button>
          <Button variant="tertiary" @click="pick('임시저장', close)">임시저장</Button>
          <Button @click="pick('저장', close)">저장</Button>
        </template>
      </Modal>
      <p class="mt-[8px] text-size-12 text-grey-60">마지막 클릭: {{ result || '-' }}</p>
    `,
  }),
}

/** 비동기 제출 — 확인은 닫지 않고 emit만. 성공 시 부모가 open=false (기본 동작) */
export const AsyncConfirm: Story = {
  name: '비동기 확인',
  render: () => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      const loading = ref(false)
      function onConfirm() {
        loading.value = true
        setTimeout(() => {
          loading.value = false
          open.value = false
        }, 1200)
      }
      return { open, loading, onConfirm }
    },
    template: `
      <Button @click="open = true">제출 모달 열기</Button>
      <Modal
        v-model:open="open"
        title="제출하시겠어요?"
        confirm-text="제출"
        :confirm-loading="loading"
        @confirm="onConfirm"
      />
    `,
  }),
}

/** 커스텀 바디 + footer 슬롯 (compound escape hatch) */
export const CustomBodyAndFooter: Story = {
  name: '커스텀 바디 / footer 슬롯',
  render: () => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <Button @click="open = true">커스텀 모달 열기</Button>
      <Modal v-model:open="open" title="상세 정보" size="large">
        <div class="grid grid-cols-2 gap-[8px] text-size-14">
          <span class="text-grey-60">ID</span><span>2025-0001</span>
          <span class="text-grey-60">상태</span><span>진행중</span>
        </div>
        <template #footer="{ close }">
          <Button variant="secondary" theme="outlined" @click="close">닫기</Button>
        </template>
      </Modal>
    `,
  }),
}

/** 데스크탑 사이즈 — small(328) / regular(564) / large(934) / xlarge(1124) / full */
export const Sizes: Story = {
  name: '사이즈별 (desktop)',
  render: () => ({
    components: { Modal, Button },
    setup() {
      const sizes = ['small', 'regular', 'large', 'xlarge', 'full'] as const
      const openSize = ref<string | null>(null)
      return { sizes, openSize }
    },
    template: `
      <div class="flex flex-wrap gap-[8px]">
        <Button v-for="s in sizes" :key="s" variant="secondary" theme="outlined" @click="openSize = s">
          {{ s }}
        </Button>
      </div>
      <Modal
        v-for="s in sizes"
        :key="s"
        :open="openSize === s"
        :size="s"
        :title="'size = ' + s"
        description="문구가 들어갑니다."
        @update:open="(v) => { if (!v) openSize = null }"
        @confirm="openSize = null"
      />
    `,
  }),
}

/** 모바일 — 가장 작은 size(small) + footer 버튼 grow. Figma modal/alert/mobile 대응 */
export const Mobile: Story = {
  name: '모바일 (small + grow)',
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  render: () => ({
    components: { Modal, Button },
    setup() {
      const open = ref(false)
      const openDanger = ref(false)
      return { open, openDanger }
    },
    template: `
      <div class="flex gap-[8px]">
        <Button @click="open = true">일반</Button>
        <Button variant="destructive" @click="openDanger = true">삭제</Button>
      </div>

      <Modal
        v-model:open="open"
        size="small"
        footer-button-grow
        title="타이틀"
        description="문구가 들어갑니다."
        confirm-text="버튼명"
        cancel-text="버튼명"
        @confirm="open = false"
      />

      <Modal
        v-model:open="openDanger"
        size="small"
        footer-button-grow
        destructive
        title="타이틀"
        description="문구가 들어갑니다."
        confirm-text="버튼명"
        cancel-text="버튼명"
        @confirm="openDanger = false"
      />
    `,
  }),
}
