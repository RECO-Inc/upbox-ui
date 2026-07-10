<script setup lang="ts">
import { cn } from "../../lib/utils"
import { cva } from "class-variance-authority"

export interface InputGroupProps {
  size?: "small" | "regular" | "large"
  error?: boolean
  readonly?: boolean
  disabled?: boolean
  class?: string
}

const props = withDefaults(defineProps<InputGroupProps>(), {
  size: "regular",
  error: false,
  readonly: false,
  disabled: false,
})

const inputGroupVariants = cva(
  [
    "group/input-group relative flex w-full items-center rounded-[4px] border transition-all duration-300 outline-hidden",
    "border-grey-40 bg-grey-10 text-grey-80",
    "min-w-0 has-[>textarea]:h-auto",
    // alignment variants — block-start/end는 가로 size variant의 고정 높이를 덮어쓴다(h-auto)
    "has-[>[data-align=inline-start]]:[&>input]:pl-[8px]",
    "has-[>[data-align=inline-end]]:[&>input]:pr-[8px]",
    "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:items-stretch has-[>[data-align=block-start]]:[&>input]:pb-[12px]",
    "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:items-stretch has-[>[data-align=block-end]]:[&>input]:pt-[12px]",
    // focus state
    "focus-within:border-blue-80 focus-within:ring-1 focus-within:ring-blue-50",
  ].join(" "),
  {
    variants: {
      size: {
        small: "h-[32px] min-h-[32px] px-[8px] text-size-12",
        regular: "h-[40px] min-h-[40px] px-[16px] text-size-14",
        large: "h-[48px] min-h-[48px] px-[16px] text-size-16",
      },
      error: {
        true: "border-red-80 focus-within:border-red-80 focus-within:ring-0",
        false: "",
      },
      readonly: {
        true: "cursor-default focus-within:border-grey-40 focus-within:ring-0 bg-grey-20 border-grey-40",
        false: "",
      },
      disabled: {
        true: "text-grey-40 pointer-events-none cursor-not-allowed border-grey-40 bg-grey-20 focus-within:border-grey-40 focus-within:ring-0",
        false: "",
      },
    },
    defaultVariants: {
      size: "regular",
      error: false,
      readonly: false,
      disabled: false,
    },
  },
)
</script>

<template>
  <div
    data-slot="input-group"
    role="group"
    :data-disabled="props.disabled ? '' : undefined"
    :class="cn(
      inputGroupVariants({
        size: props.size,
        error: props.error,
        readonly: props.readonly,
        disabled: props.disabled,
      }),
      props.class,
    )"
  >
    <slot />
  </div>
</template>
