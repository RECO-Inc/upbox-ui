<script lang="ts" setup>
import type { CalendarHeadingProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CalendarHeading, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"

interface Props extends CalendarHeadingProps {
  class?: HTMLAttributes["class"]
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  clickable: false
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

defineSlots<{
  default: (props: { headingValue: string }) => any
}>()

const delegatedProps = reactiveOmit(props, "class", "clickable")

const forwardedProps = useForwardProps(delegatedProps)

function handleClick() {
  if (props.clickable) {
    emit('click')
  }
}
</script>

<template>
  <CalendarHeading
    v-slot="{ headingValue }"
    :class="cn(
      'text-sm font-bold text-base-90',
      props.clickable && 'cursor-pointer select-none hover:text-primary-80',
      props.class
    )"
    v-bind="forwardedProps"
    @click="handleClick"
  >
    <slot :heading-value>
      {{ headingValue }}
    </slot>
  </CalendarHeading>
</template>
