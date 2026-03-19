<script setup lang="ts">
import type { PaginationLastProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronRightIcon } from "lucide-vue-next"
import { PaginationLast, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<PaginationLastProps & {
  class?: HTMLAttributes["class"]
}>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardProps(delegatedProps)
</script>

<template>
  <PaginationLast
    data-slot="pagination-last"
    :class="cn(
      'inline-flex items-center justify-center h-[36px] px-[10px] text-size-14 font-medium text-grey-80 bg-transparent border-none hover:bg-grey-20 transition-colors gap-[4px] sm:pr-[10px]',
      props.class
    )"
    v-bind="forwarded"
  >
    <slot>
      <span class="hidden sm:block">Last</span>
      <ChevronRightIcon class="h-[16px] w-[16px]" />
    </slot>
  </PaginationLast>
</template>
