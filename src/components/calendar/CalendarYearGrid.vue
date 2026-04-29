<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { cn } from "../../lib/utils"

interface Props {
  class?: HTMLAttributes["class"]
  selectedYear?: number
  startYear?: number
  yearLength?: number
}

const props = withDefaults(defineProps<Props>(), {
  startYear: new Date().getFullYear() + 3,
  yearLength: new Date().getFullYear() + 3 - 2018,
})

const emit = defineEmits<{
  (e: "select", year: number): void
}>()

const years = computed(() => {
  const result: { value: number; label: string }[] = []
  for (let i = 0; i < props.yearLength; i++) {
    result.push({
      value: props.startYear - i,
      label: `${props.startYear - i}`,
    })
  }
  return result
})
</script>

<template>
  <div :class="cn('p-[12px]', props.class)">
    <div class="grid grid-cols-4 gap-[4px]">
      <button
        v-for="year in years"
        :key="year.value"
        type="button"
        :class="cn(
          'min-h-[32px] px-[8px] py-[6px] text-size-12 font-semibold transition-colors',
          year.value === selectedYear
            ? 'rounded-sm bg-blue-80 text-grey-10 shadow-small hover:bg-blue-90'
            : 'rounded-sm text-grey-90 hover:bg-grey-30',
        )"
        @click="emit('select', year.value)"
      >
        {{ year.label }}
      </button>
    </div>
  </div>
</template>
