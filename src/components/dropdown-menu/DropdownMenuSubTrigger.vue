<script setup lang="ts">
import type { DropdownMenuSubTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { IconChevronRight } from "../../icons"
import {
  DropdownMenuSubTrigger,
  useForwardProps,
} from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="cn(
      'flex cursor-default select-none items-center rounded-sm px-[8px] py-[6px] text-sm outline-hidden focus:bg-grey-30 data-[state=open]:bg-grey-30',
      props.class,
    )"
  >
    <slot />
    <IconChevronRight class="ml-auto h-[16px] w-[16px]" />
  </DropdownMenuSubTrigger>
</template>
