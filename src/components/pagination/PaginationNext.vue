<script setup lang="ts">
import type { PaginationNextProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { IconChevronRight } from "../../icons"
import { PaginationNext, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<PaginationNextProps & {
  class?: HTMLAttributes["class"]
}>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationNext
    data-slot="pagination-next"
    :class="cn(
      'inline-flex items-center justify-center w-[30px] h-[30px] min-w-[30px] rounded-[4px] text-size-14 text-grey-90 bg-transparent border border-grey-80 cursor-pointer select-none transition-colors ml-[2px] disabled:border-grey-40 disabled:cursor-not-allowed',
      props.class
    )"
    v-bind="forwarded"
  >
    <slot>
      <IconChevronRight class="h-[16px] w-[16px]" />
    </slot>
  </PaginationNext>
</template>
