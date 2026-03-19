<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Check, Minus } from "lucide-vue-next"
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui"
import { cva, type VariantProps } from "class-variance-authority"

const checkboxVariants = cva(
  "grid place-content-center peer shrink-0 rounded border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-80 disabled:cursor-not-allowed bg-grey-10 data-[state=checked]:text-grey-10 data-[state=indeterminate]:text-grey-10",
  {
    variants: {
      size: {
        small: "h-[12px] w-[12px] rounded-[3px]",      // 12px
        regular: "h-[16px] w-[16px] rounded",           // 16px
        large: "h-[20px] w-[20px] rounded-[5px]",       // 20px
      },
      error: {
        true: "border-red-80 data-[state=checked]:border-red-80 data-[state=checked]:bg-red-80 data-[state=indeterminate]:border-red-80 data-[state=indeterminate]:bg-red-80",
        false: "border-grey-40 data-[state=checked]:border-navy-80 data-[state=checked]:bg-navy-80 data-[state=indeterminate]:border-navy-80 data-[state=indeterminate]:bg-navy-80",
      },
    },
    defaultVariants: {
      size: "regular",
      error: false,
    },
  }
)

type CheckboxVariants = VariantProps<typeof checkboxVariants>

interface Props extends CheckboxRootProps {
  class?: HTMLAttributes["class"]
  size?: CheckboxVariants["size"]
  error?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: "regular",
  error: false,
})

const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = reactiveOmit(props, "class", "size", "error")
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const iconSize = computed(() => {
  switch (props.size) {
    case "small": return "h-[10px] w-[10px]"   // 10px
    case "large": return "h-[16px] w-[16px]"       // 16px
    default: return "h-[14px] w-[14px]"        // 14px
  }
})
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="[
      checkboxVariants({ size, error }),
      'disabled:bg-grey-30 disabled:border-grey-40',
      props.class
    ]"
  >
    <CheckboxIndicator class="grid place-content-center text-current">
      <slot>
        <Minus v-if="forwarded.checked === 'indeterminate'" :class="iconSize" stroke-width="3" />
        <Check v-else :class="iconSize" stroke-width="3" />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
