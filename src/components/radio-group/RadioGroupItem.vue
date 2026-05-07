<script setup lang="ts">
import type { RadioGroupItemProps } from "reka-ui"
import { computed } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  RadioGroupIndicator,
  RadioGroupItem,
  useForwardProps,
} from "reka-ui"
import { cn } from "../../lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const radioVariants = cva(
  [
    "peer aspect-square rounded-full border-2",
    "transition-colors",
    "focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-80",
    "bg-grey-10",
    "data-[state=checked]:text-grey-10",
  ].join(" "),
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
      readOnly: {
        true: [
          "cursor-default",
          "bg-grey-30",
          "border-grey-40",
          "text-grey-70",
          "data-[state=checked]:!border-grey-30 data-[state=checked]:!bg-grey-30 data-[state=checked]:!text-grey-70",
        ].join(" "),
        false: "",
      },
      disabled: {
        true: [
          "cursor-not-allowed",
          "bg-grey-30",
          "border-grey-30",
          "text-grey-50",
          "data-[state=checked]:!border-grey-30 data-[state=checked]:!bg-grey-30 data-[state=checked]:!text-grey-50",
        ].join(" "),
        false: "",
      },
    },
    defaultVariants: {
      size: "regular",
      error: false,
      readOnly: false,
      disabled: false,
    },
    compoundVariants: [
      {
        readOnly: true,
        size: "small",
        class: "border-[1.5px]",
      },
      {
        readOnly: true,
        size: "regular",
        class: "border-[2px]",
      },
      {
        readOnly: true,
        size: "large",
        class: "border-[2.5px]",
      },
      {
        readOnly: true,
        error: true,
        class: "data-[state=checked]:!border-red-80 data-[state=checked]:!bg-red-80",
      },
    ],
  }
)

type RadioVariants = VariantProps<typeof radioVariants>

interface Props extends RadioGroupItemProps {
  class?: string
  size?: "small" | "regular" | "large"
  error?: boolean
  readOnly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: "regular",
  error: false,
  readOnly: false,
})

const rootInert = computed(() => props.readOnly && !props.disabled)

const delegatedProps = reactiveOmit(props, "class", "size", "error", "readOnly")
const forwardedProps = useForwardProps(delegatedProps)

const indicatorSize = computed(() => {
  switch (props.size) {
    case "small": return "h-[4px] w-[4px]"      // 4px
    case "large": return "h-[8px] w-[8px]"      // 8px
    default: return "h-[6px] w-[6px]"       // 6px
  }
})

/** Checkbox 인디케이터와 토큰 정렬(비활성·읽기전용 선택 시) */
const indicatorFillClass = computed(() => {
  if (props.disabled) return "bg-grey-50"
  if (props.readOnly) return "bg-grey-70"
  return "bg-grey-10"
})
</script>

<template>
  <span
    class="inline-flex"
    :inert="rootInert ? true : undefined"
  >
    <RadioGroupItem
      v-bind="forwardedProps"
      :disabled="disabled"
      :aria-readonly="readOnly ? true : undefined"
      :class="cn(radioVariants({ size, error, readOnly, disabled }), props.class)"
    >
      <RadioGroupIndicator class="flex items-center justify-center">
        <span
          :class="['rounded-full', indicatorSize, indicatorFillClass]"
        />
      </RadioGroupIndicator>
    </RadioGroupItem>
  </span>
</template>
