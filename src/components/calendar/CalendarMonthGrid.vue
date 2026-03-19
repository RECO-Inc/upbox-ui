<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { ChevronLeft, ChevronRight } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import { buttonVariants } from "../button"
import { useI18n } from "vue-i18n"

interface Props {
  class?: HTMLAttributes["class"]
  year: number
  selectedMonth?: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'select', month: number): void
  (e: 'prevYear'): void
  (e: 'nextYear'): void
  (e: 'clickYear'): void
}>()

const { t } = useI18n()

const months = computed(() => {
  return Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}${t('word.time.month')}`
  }))
})
</script>

<template>
  <div :class="cn('p-[16px]', props.class)">
    <div class="grid grid-cols-3 gap-[4px]">
      <!-- Header -->
      <button
        :class="cn(
          buttonVariants({ variant: 'assistant', style: 'outlined' }),
          'h-[28px] w-[28px] bg-transparent p-0 opacity-50 hover:opacity-100'
        )"
        @click="emit('prevYear')"
      >
        <ChevronLeft class="h-[16px] w-[16px]" />
      </button>
      <div
        class="flex items-center justify-center text-sm font-bold text-grey-90 cursor-pointer select-none hover:text-navy-80"
        @click="emit('clickYear')"
      >
        {{ year }}년
      </div>
      <button
        :class="cn(
          buttonVariants({ variant: 'assistant', style: 'outlined' }),
          'h-[28px] w-[28px] bg-transparent p-0 opacity-50 hover:opacity-100 justify-self-end'
        )"
        @click="emit('nextYear')"
      >
        <ChevronRight class="h-[16px] w-[16px]" />
      </button>

      <!-- Month cells -->
      <div
        v-for="month in months"
        :key="month.value"
        :class="cn(
          'py-[16px] px-[24px] text-sm font-bold text-grey-90 text-center cursor-pointer select-none transition-colors',
          month.value === selectedMonth
            ? 'bg-navy-90 text-grey-20 rounded hover:bg-navy-70'
            : 'hover:bg-grey-30'
        )"
        @click="emit('select', month.value)"
      >
        {{ month.label }}
      </div>
    </div>
  </div>
</template>
