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
        small: "h-3 w-3 rounded-[3px]",      // 12px
        regular: "h-4 w-4 rounded",           // 16px
        large: "h-5 w-5 rounded-[5px]",       // 20px
      },
      error: {
        true: "border-error-80 data-[state=checked]:border-error-80 data-[state=checked]:bg-error-80 data-[state=indeterminate]:border-error-80 data-[state=indeterminate]:bg-error-80",
        false: "border-base-40 data-[state=checked]:border-primary-80 data-[state=checked]:bg-primary-80 data-[state=indeterminate]:border-primary-80 data-[state=indeterminate]:bg-primary-80",
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
    case "small": return "h-2.5 w-2.5"   // 10px
    case "large": return "h-4 w-4"       // 16px
    default: return "h-3.5 w-3.5"        // 14px
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
