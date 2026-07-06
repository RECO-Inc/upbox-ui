<script setup lang="ts">
import { computed } from 'vue'
import { Download, ListX, Trash2 } from 'lucide-vue-next'
import { cn } from '../../lib/utils'
import TextButton from '../text-button/TextButton.vue'

export interface ToolbarProps {
  /** 선택된 항목 수 — "N개 선택됨" 표기 */
  selectedCount?: number
  /** light: 흰 배경 + 보더 + 그림자 / dark: 짙은 배경(플로팅 스낵바 톤) */
  variant?: 'light' | 'dark'
  /** 다운로드 버튼 노출 여부 (옵션) */
  downloadable?: boolean
  /** 삭제 버튼 노출 여부 (옵션) */
  deletable?: boolean
  class?: string
}

const props = withDefaults(defineProps<ToolbarProps>(), {
  selectedCount: 0,
  variant: 'light',
  downloadable: false,
  deletable: false,
})

const emit = defineEmits<{
  deselect: []
  download: []
  delete: []
}>()

const isDark = computed(() => props.variant === 'dark')

// 항목 사이 자동 세로 구분선 — 형제 요소(+ *) 앞에 before 로 그린다(슬롯 액션 포함).
// 구분선 양옆 간격 8px: gap 17px(8 + 선 1 + 8), 선은 요소 왼쪽 -9px(선 오른쪽이 -8px) 위치.
const groupClass = computed(() =>
  cn(
    'flex items-center gap-[17px]',
    "[&>*+*]:relative [&>*+*]:before:absolute [&>*+*]:before:-left-[9px] [&>*+*]:before:top-1/2 [&>*+*]:before:h-[10px] [&>*+*]:before:w-px [&>*+*]:before:-translate-y-1/2 [&>*+*]:before:content-['']",
    isDark.value ? '[&>*+*]:before:bg-grey-70' : '[&>*+*]:before:bg-grey-40'
  )
)

// dark 배경에서는 TextButton secondary(grey-60)가 묻히므로 흰색으로 오버라이드.
const buttonClass = computed(() => (isDark.value ? 'text-grey-10 hover:bg-grey-80' : undefined))
</script>

<template>
  <div
    :class="
      cn(
        'flex h-[40px] items-center justify-between rounded-[4px] px-[16px]',
        isDark ? 'bg-grey-90' : 'bg-grey-10 border border-grey-40 shadow-small',
        props.class
      )
    "
  >
    <div :class="groupClass">
      <p
        class="whitespace-nowrap text-size-13 font-semibold leading-[20px]"
        :class="isDark ? 'text-grey-10' : 'text-grey-80'"
      >
        <span :class="isDark ? 'text-blue-60' : 'text-blue-80'">{{ selectedCount }}</span
        >개 선택됨
      </p>
      <!-- 아이콘-텍스트 간격은 TextButton gap-[2px]만 적용되도록 붙여 쓴다(개행 공백 방지). -->
      <TextButton size="2xsmall" :class="buttonClass" @click="emit('deselect')">
        <ListX />선택 해제
      </TextButton>
    </div>

    <div :class="groupClass">
      <!-- 화면별 커스텀 액션(TextButton 나열) — 구분선은 자동 -->
      <slot name="actions" />
      <TextButton v-if="downloadable" size="2xsmall" :class="buttonClass" @click="emit('download')">
        <Download />다운로드
      </TextButton>
      <TextButton v-if="deletable" size="2xsmall" variant="destructive" @click="emit('delete')">
        <Trash2 />삭제
      </TextButton>
    </div>
  </div>
</template>
