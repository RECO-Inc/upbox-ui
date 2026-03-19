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
  yearLength: new Date().getFullYear() + 3 - 2018
})

const emit = defineEmits<{
  (e: 'select', year: number): void
}>()

const years = computed(() => {
  const result = []
  for (let i = 0; i < props.yearLength; i++) {
    result.push({
      value: props.startYear - i,
      label: `${props.startYear - i}`
    })
  }
  return result
})
</script>

<template>
  <div :class="cn('p-[16px]', props.class)">
    <div class="grid grid-cols-4 gap-[4px]">
      <div
        v-for="year in years"
        :key="year.value"
        :class="cn(
          'py-[8px] px-[16px] text-sm font-bold text-grey-90 text-center cursor-pointer select-none transition-colors',
          year.value === selectedYear
            ? 'bg-navy-90 text-grey-20 rounded hover:bg-navy-70'
            : 'hover:bg-grey-30'
        )"
        @click="emit('select', year.value)"
      >
        {{ year.label }}
      </div>
    </div>
  </div>
</template>
