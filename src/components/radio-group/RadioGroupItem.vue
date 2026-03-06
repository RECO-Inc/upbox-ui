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
  "peer aspect-square rounded-full border-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-80 disabled:cursor-not-allowed disabled:opacity-50 bg-base-10 data-[state=checked]:text-base-10",
  {
    variants: {
      size: {
        sm: "h-[12px] w-[12px]",      // 12px
        md: "h-[16px] w-[16px]",    // 16px
        lg: "h-[20px] w-[20px]",      // 20px
      },
      error: {
        true: "border-error-80 data-[state=checked]:border-error-80 data-[state=checked]:bg-error-80",
        false: "border-base-40 data-[state=checked]:border-primary-80 data-[state=checked]:bg-primary-80",
      },
    },
    defaultVariants: {
      size: "md",
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
  size: "md",
  error: false,
})

const delegatedProps = reactiveOmit(props, "class", "size", "error")
const forwardedProps = useForwardProps(delegatedProps)

const indicatorSize = computed(() => {
  switch (props.size) {
    case "sm": return "h-[4px] w-[4px]"      // 4px
    case "lg": return "h-[8px] w-[8px]"      // 8px
    default: return "h-[6px] w-[6px]"       // 6px
  }
})
</script>

<template>
  <RadioGroupItem
    v-bind="forwardedProps"
    :class="[
      radioVariants({ size, error }),
      'disabled:bg-base-30 disabled:border-base-40',
      props.class,
    ]"
  >
    <RadioGroupIndicator class="flex items-center justify-center">
      <span :class="['rounded-full bg-base-10', indicatorSize]" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
