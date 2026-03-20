<script setup lang="ts">
import type { SelectItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Check } from "lucide-vue-next"
import {
  SelectItem,
  SelectItemIndicator,

  SelectItemText,
  useForwardProps,
} from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<SelectItemProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <SelectItem
    v-bind="forwardedProps"
    :class="
      cn(
        'relative flex w-full cursor-pointer select-none items-center justify-between rounded-[4px] py-[8px] px-[12px] text-size-12 text-grey-90 tracking-tight outline-hidden hover:bg-grey-20 focus:bg-grey-20 data-[state=checked]:text-blue-80 data-[state=checked]:font-bold data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:bg-grey-20 data-[disabled]:text-grey-60',
        props.class,
      )
    "
  >
    <span class="flex h-[20px] w-[20px] items-center justify-center shrink-0 order-1">
      <SelectItemIndicator>
        <Check class="h-[20px] w-[20px] text-blue-80" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
