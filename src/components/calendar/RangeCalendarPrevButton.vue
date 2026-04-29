<script lang="ts" setup>
import type { RangeCalendarPrevProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronLeft } from "lucide-vue-next"
import { RangeCalendarPrev, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import { IconButton } from "../icon-button"

const props = defineProps<RangeCalendarPrevProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class", "asChild")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <RangeCalendarPrev :as-child="true" v-bind="forwardedProps">
    <IconButton variant="tertiary" size="xsmall" :class="cn('shrink-0', props.class)">
      <slot>
        <ChevronLeft />
      </slot>
    </IconButton>
  </RangeCalendarPrev>
</template>
