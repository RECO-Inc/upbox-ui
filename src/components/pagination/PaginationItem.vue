<script setup lang="ts">
import type { PaginationListItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { ButtonVariants } from '../button'
import { reactiveOmit } from "@vueuse/core"
import { PaginationListItem } from "reka-ui"
import { cn } from "../../lib/utils"
import { buttonVariants } from '../button'

const props = withDefaults(defineProps<PaginationListItemProps & {
  size?: ButtonVariants["size"]
  class?: HTMLAttributes["class"]
  isActive?: boolean
}>(), {
  size: "small",
})

const delegatedProps = reactiveOmit(props, "class", "size", "isActive")
</script>

<template>
  <PaginationListItem
    data-slot="pagination-item"
    v-bind="delegatedProps"
    :class="cn(
      'inline-flex items-center justify-center w-[30px] h-[30px] min-w-[30px] rounded-[4px] text-size-14 cursor-pointer select-none transition-colors',
      isActive ? 'bg-blue-30 text-blue-90 hover:bg-blue-30' : 'text-grey-90',
      props.class)"
  >
    <slot />
  </PaginationListItem>
</template>
