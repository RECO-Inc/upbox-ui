<script lang="ts" setup>
import type { CalendarGridRowProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarGridRow, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<CalendarGridRowProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarGridRow
    :class="cn('calendar-grid-row flex', props.class)"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarGridRow>
</template>

<style scoped>
/* Sunday (first column) - red color for date cells */
.calendar-grid-row :deep(> td:first-child button) {
  color: var(--color-error-70) !important;
}
.calendar-grid-row :deep(> td:first-child button[data-outside-view]) {
  color: var(--color-error-50) !important;
}
.calendar-grid-row :deep(> td:first-child button[data-selected]) {
  color: var(--color-base-10) !important;
}
/* Sunday header (first column) */
.calendar-grid-row :deep(> th:first-child) {
  color: var(--color-error-70) !important;
}
</style>
