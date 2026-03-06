<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Check, Minus } from "lucide-vue-next"
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui"
import { cva, type VariantProps } from "class-variance-authority"

const checkboxVariants = cva(
  "grid place-content-center peer shrink-0 rounded border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-80 disabled:cursor-not-allowed bg-base-10 data-[state=checked]:text-base-10 data-[state=indeterminate]:text-base-10",
  {
    variants: {
      size: {
        sm: "h-[12px] w-[12px] rounded-[3px]",      // 12px
        md: "h-[16px] w-[16px] rounded",           // 16px
        lg: "h-[20px] w-[20px] rounded-[5px]",       // 20px
      },
      error: {
        true: "border-error-80 data-[state=checked]:border-error-80 data-[state=checked]:bg-error-80 data-[state=indeterminate]:border-error-80 data-[state=indeterminate]:bg-error-80",
        false: "border-base-40 data-[state=checked]:border-primary-80 data-[state=checked]:bg-primary-80 data-[state=indeterminate]:border-primary-80 data-[state=indeterminate]:bg-primary-80",
      },
    },
    defaultVariants: {
      size: "md",
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
  size: "md",
  error: false,
})

const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = reactiveOmit(props, "class", "size", "error")
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const iconSize = computed(() => {
  switch (props.size) {
    case "sm": return "h-[10px] w-[10px]"   // 10px
    case "lg": return "h-[16px] w-[16px]"       // 16px
    default: return "h-[14px] w-[14px]"        // 14px
  }
})
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="[
      checkboxVariants({ size, error }),
      'disabled:bg-base-30 disabled:border-base-40',
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
