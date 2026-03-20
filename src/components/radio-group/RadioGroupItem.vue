<script setup lang="ts">
import type { RadioGroupItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Circle } from "lucide-vue-next"
import {
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardProps,
} from "reka-ui"
import { cva, type VariantProps } from "class-variance-authority"

const radioVariants = cva(
  "peer aspect-square rounded-full border-2 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-80 disabled:cursor-not-allowed disabled:opacity-50 bg-grey-10 data-[state=checked]:text-grey-10",
  {
    variants: {
      size: {
        small: "h-[12px] w-[12px]",      // 12px
        regular: "h-[16px] w-[16px]",    // 16px
        large: "h-[20px] w-[20px]",      // 20px
      },
      error: {
        true: "border-red-80 data-[state=checked]:border-red-80 data-[state=checked]:bg-red-80",
        false: "border-grey-40 data-[state=checked]:border-navy-80 data-[state=checked]:bg-navy-80",
      },
    },
    defaultVariants: {
      size: "regular",
      error: false,
    },
  }
)

type RadioVariants = VariantProps<typeof radioVariants>

interface Props extends RadioGroupItemProps {
  class?: HTMLAttributes["class"]
  size?: RadioVariants["size"]
  error?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: "regular",
  error: false,
})

const delegatedProps = reactiveOmit(props, "class", "size", "error")
const forwardedProps = useForwardProps(delegatedProps)

const indicatorSize = computed(() => {
  switch (props.size) {
    case "small": return "h-[4px] w-[4px]"      // 4px
    case "large": return "h-[8px] w-[8px]"      // 8px
    default: return "h-[6px] w-[6px]"       // 6px
  }
})
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="[
      radioVariants({ size, error }),
      'disabled:bg-grey-30 disabled:border-grey-40',
      props.class,
    ]"
  >
    <RadioGroupIndicator class="flex items-center justify-center">
      <span :class="['rounded-full bg-grey-10', indicatorSize]" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
