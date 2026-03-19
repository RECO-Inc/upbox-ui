<script setup lang="ts">
import type { DropdownMenuItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { DropdownMenuItem, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<DropdownMenuItemProps & { class?: HTMLAttributes["class"], inset?: boolean }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <DropdownMenuItem
    v-bind="forwardedProps"
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm gap-[8px] px-[8px] py-[6px] text-sm outline-none transition-colors focus:bg-grey-30 focus:text-grey-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-[16px] [&>svg]:shrink-0',
      inset && 'pl-[32px]',
      props.class,
    )"
  >
    <slot />
  </DropdownMenuItem>
</template>
