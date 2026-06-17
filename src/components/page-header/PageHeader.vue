<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { ChevronLeft } from "lucide-vue-next"
import { cn } from "../../lib/utils"

const props = withDefaults(defineProps<{
  title: string
  /** 제목 옆 보조 설명 (인라인) */
  description?: string
  /** page = 대타이틀(28px), sub = 중타이틀(22px) */
  variant?: "page" | "sub"
  /** 좌측 back(<) 화살표 노출 → @back emit (라우팅은 소비자가 처리) */
  back?: boolean
  class?: HTMLAttributes["class"]
}>(), {
  variant: "page",
  back: false,
})

const emit = defineEmits<{ back: [] }>()

defineSlots<{
  /** 타이틀 우측 배지 등 */
  badge?: () => unknown
  /** 우측 액션 버튼 그룹 */
  actions?: () => unknown
}>()
</script>

<template>
  <div :class="cn('flex items-center justify-between gap-x-[10px] mb-[16px]', props.class)">
    <div class="flex min-w-0 grow items-center gap-x-[8px]">
      <button
        v-if="back"
        type="button"
        aria-label="뒤로"
        class="shrink-0 cursor-pointer text-grey-100 transition-colors hover:text-grey-80"
        @click="emit('back')"
      >
        <ChevronLeft class="size-[24px]" />
      </button>
      <component
        :is="variant === 'sub' ? 'h3' : 'h2'"
        class="truncate text-grey-100"
        :class="variant === 'sub' ? 'text-page-title-3' : 'text-page-title-1'"
      >
        {{ title }}
      </component>
      <slot name="badge" />
      <span v-if="description" class="min-w-0 truncate text-size-12 text-grey-60">{{ description }}</span>
    </div>

    <div v-if="$slots.actions" class="flex shrink-0 items-center gap-x-[8px]">
      <slot name="actions" />
    </div>
  </div>
</template>
