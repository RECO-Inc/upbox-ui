<script setup lang="ts">
import type { SwitchRootEmits, SwitchRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  SwitchRoot,
  SwitchThumb,
  useForwardPropsEmits,
} from "reka-ui"
import { cva, type VariantProps } from "class-variance-authority"

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-grey-10 focus-visible:ring-navy-80 disabled:cursor-not-allowed data-[state=checked]:bg-navy-80 data-[state=unchecked]:bg-grey-50 disabled:bg-grey-40",
  {
    variants: {
      size: {
        small: "h-[14px] w-[24px]",     // 24x14
        regular: "h-[18px] w-[30px]",   // 30x18
        large: "h-[22px] w-[38px]",     // 38x22
      },
    },
    defaultVariants: {
      size: "regular",
    },
  }
)

const thumbVariants = cva(
  "pointer-events-none block rounded-full ring-0 transition-transform bg-grey-10",
  {
    variants: {
      size: {
        small: "h-[10px] w-[10px] data-[state=checked]:translate-x-[10px] data-[state=unchecked]:translate-x-[2px]",
        regular: "h-[14px] w-[14px] data-[state=checked]:translate-x-[12px] data-[state=unchecked]:translate-x-[2px]",
        large: "h-[16px] w-[16px] data-[state=checked]:translate-x-[17px] data-[state=unchecked]:translate-x-[3px]",
      },
    },
    defaultVariants: {
      size: "regular",
    },
  }
)

type SwitchVariants = VariantProps<typeof switchVariants>

export interface Props extends SwitchRootProps {
  class?: string
  size?: "small" | "regular" | "large"
}

const props = withDefaults(defineProps<Props>(), {
  size: "regular",
})

const emits = defineEmits<SwitchRootEmits>()

const delegatedProps = reactiveOmit(props, "class", "size")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SwitchRoot
    v-bind="forwarded"
    :class="[switchVariants({ size }), props.class]"
  >
    <SwitchThumb :class="thumbVariants({ size })">
      <slot name="thumb" />
    </SwitchThumb>
  </SwitchRoot>
</template>
