<script lang="ts" setup>
import type { CalendarPrevProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronLeft } from "lucide-vue-next"
import { CalendarPrev, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import { IconButton } from "../icon-button"

const props = defineProps<CalendarPrevProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class", "asChild")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarPrev :as-child="true" v-bind="forwardedProps">
    <IconButton variant="tertiary" size="xsmall" :class="cn('shrink-0', props.class)">
      <slot>
        <ChevronLeft />
      </slot>
    </IconButton>
  </CalendarPrev>
</template>
