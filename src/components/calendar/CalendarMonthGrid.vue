<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { ChevronLeft, ChevronRight } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import { buttonVariants } from "../button"

/** 1 … 12 — 피그마 monthPicker(6×2) 렌더링용 */
const MONTH_NUMBERS = Array.from({ length: 12 }, (_, i) => i + 1)

interface Props {
  class?: HTMLAttributes["class"]
  year: number
  /** 해당 `year`와 동일한 연도 선택일 때만 강조할 월(1–12) */
  selectedMonth?: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: "select", month: number): void
  (e: "prevYear"): void
  (e: "nextYear"): void
  (e: "clickYear"): void
}>()
</script>

<template>
  <div :class="cn(props.class)">
    <div class="flex items-center gap-[8px] px-[16px] pt-[14px]">
      <button
        type="button"
        :class="cn(
          buttonVariants({ variant: 'tertiary', style: 'outlined' }),
          'h-[28px] w-[28px] shrink-0 bg-transparent p-0 opacity-70 hover:opacity-100',
        )"
        aria-label="이전 연"
        @click="emit('prevYear')"
      >
        <ChevronLeft class="h-[16px] w-[16px]" />
      </button>
      <button
        type="button"
        class="flex min-h-[28px] min-w-0 flex-1 items-center justify-center text-size-13 font-bold text-navy-100 select-none hover:text-navy-80"
        @click="emit('clickYear')"
      >
        {{ year }}년
      </button>
      <button
        type="button"
        :class="cn(
          buttonVariants({ variant: 'tertiary', style: 'outlined' }),
          'h-[28px] w-[28px] shrink-0 bg-transparent p-0 opacity-70 hover:opacity-100',
        )"
        aria-label="다음 연"
        @click="emit('nextYear')"
      >
        <ChevronRight class="h-[16px] w-[16px]" />
      </button>
    </div>

    <div class="grid grid-cols-6 gap-x-[12px] gap-y-[12px] px-[16px] pb-[14px] pt-[14px]">
      <button
        v-for="m in MONTH_NUMBERS"
        :key="m"
        type="button"
        :class="cn(
          'flex h-[32px] w-full items-center justify-center rounded-sm text-size-13 font-semibold transition-colors',
          m === props.selectedMonth
            ? 'bg-blue-80 text-grey-10 hover:bg-blue-90'
            : 'text-grey-90 hover:bg-grey-30',
        )"
        @click="emit('select', m)"
      >
        {{ m }}
      </button>
    </div>
  </div>
</template>
