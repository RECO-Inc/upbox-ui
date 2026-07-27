<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import type { DateValue } from "@internationalized/date"
import { computed } from "vue"
import { Button } from "../button"
import { cn } from "../../lib/utils"
import {
  DEFAULT_CALENDAR_SHORTCUT_ITEMS,
  isShortcutOutOfRange,
  type CalendarShortcutItem,
} from "./calendarShortcutItems"

defineOptions({ name: "CalendarShortcut" })

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    /** 노출할 단축 목록. 정책상 일부만 필요하면 골라서 넘긴다. */
    items?: CalendarShortcutItem[]
    /** 선택 가능한 최소 날짜(포함). 범위 밖 단축은 숨긴다. */
    minValue?: DateValue | null
    /** 선택 가능한 최대 날짜(포함). 범위 밖 단축은 숨긴다. */
    maxValue?: DateValue | null
  }>(),
  {
    items: () => DEFAULT_CALENDAR_SHORTCUT_ITEMS,
    minValue: undefined,
    maxValue: undefined,
  },
)

const emits = defineEmits<{
  /** 오늘 기준 추가할 개월 수 (0=오늘 … 12=1년) */
  shortcutSelect: [months: number]
}>()

function emitShortcut(months: number) {
  emits("shortcutSelect", months)
}

// 범위 밖 단축은 disabled 로 노출하지 않고 아예 렌더링에서 제외한다.
// (예: max-value=오늘 인 발행일 입력에서 미래 개월 단축은 숨긴다.)
const resolvedItems = computed(() =>
  props.items.filter(
    item => !isShortcutOutOfRange(item.months, props.minValue, props.maxValue),
  ),
)
</script>

<template>
  <div :class="cn('flex flex-wrap gap-[8px] py-[8px]', props.class)">
    <slot :items="resolvedItems" :select="emitShortcut">
      <Button
        v-for="item in resolvedItems"
        :key="item.months"
        variant="tertiary"
        theme="outlined"
        size="xsmall"
        class="font-normal"
        type="button"
        @click="emitShortcut(item.months)"
      >
        {{ item.label }}
      </Button>
    </slot>
  </div>
</template>
