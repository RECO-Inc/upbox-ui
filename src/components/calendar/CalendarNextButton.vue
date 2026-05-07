<script lang="ts" setup>
import type { CalendarNextProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronRight } from "lucide-vue-next"
import { CalendarNext, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import { IconButton } from "../icon-button"

const props = defineProps<CalendarNextProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class", "asChild")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarNext :as-child="true" v-bind="forwardedProps">
    <IconButton variant="tertiary" size="xsmall" :class="cn('shrink-0', props.class)">
      <slot>
        <ChevronRight />
      </slot>
    </IconButton>
  </CalendarNext>
</template>
