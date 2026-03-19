<script setup lang="ts">
import type { PaginationEllipsisProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { MoreHorizontal } from "lucide-vue-next"
import { PaginationEllipsis } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <PaginationEllipsis
    data-slot="pagination-ellipsis"
    v-bind="delegatedProps"
    :class="cn('inline-flex items-center justify-center w-[30px] h-[30px] min-w-[30px] text-size-14 text-grey-90', props.class)"
  >
    <slot>
      ···
    </slot>
  </PaginationEllipsis>
</template>
