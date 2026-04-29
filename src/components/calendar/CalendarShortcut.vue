<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { Button } from "../button"
import { cn } from "../../lib/utils"

defineOptions({ name: "CalendarShortcut" })

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
  }>(),
  {},
)

const emits = defineEmits<{
  /** 오늘 기준 추가할 개월 수 (1개월 … 12=1년) */
  shortcutSelect: [months: number]
}>()

function emitShortcut(months: number) {
  emits("shortcutSelect", months)
}
</script>

<template>
  <div :class="cn('flex flex-wrap gap-[8px] py-[8px]', props.class)">
    <Button
      variant="tertiary"
      theme="filled"
      size="xsmall"
      class="rounded-[32px] font-normal"
      type="button"
      @click="emitShortcut(1)"
    >
      1개월
    </Button>
    <Button
      variant="tertiary"
      theme="filled"
      size="xsmall"
      class="rounded-[32px] font-normal"
      type="button"
      @click="emitShortcut(3)"
    >
      3개월
    </Button>
    <Button
      variant="tertiary"
      theme="filled"
      size="xsmall"
      class="rounded-[32px] font-normal"
      type="button"
      @click="emitShortcut(6)"
    >
      6개월
    </Button>
    <Button
      variant="tertiary"
      theme="filled"
      size="xsmall"
      class="rounded-[32px] font-normal"
      type="button"
      @click="emitShortcut(12)"
    >
      1년
    </Button>
  </div>
</template>
