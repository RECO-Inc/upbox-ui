<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { Check, Minus } from "lucide-vue-next"
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui"
import { cva, type VariantProps } from "class-variance-authority"


const checkboxVariants = cva(
  [
    "grid place-content-center peer shrink-0",
    "rounded-[2px] border-2",
    "bg-grey-10",
    "text-grey-10",
    "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-80",
    "transition-colors",
    "data-[state=checked]:border-navy-70 data-[state=checked]:bg-navy-70 data-[state=checked]:text-grey-10",
    "data-[state=indeterminate]:border-navy-70 data-[state=indeterminate]:bg-navy-70 data-[state=indeterminate]:text-grey-10",
  ].join(" "),
  {
    variants: {
      size: {
        small: "h-[12px] w-[12px]",       // 12px
        regular: "h-[16px] w-[16px]",     // 16px
        large: "h-[20px] w-[20px]",       // 20px
      },
      error: {
        true: "border-red-80 data-[state=checked]:border-red-80 data-[state=checked]:bg-red-80 data-[state=indeterminate]:border-red-80 data-[state=indeterminate]:bg-red-80",
        false: "",
      },
      readOnly: {
        true: [
          "cursor-default",
          "bg-grey-30",
          "border-grey-40",
          "text-grey-70",
          "data-[state=checked]:!border-grey-30 data-[state=checked]:!bg-grey-30 data-[state=checked]:!text-grey-70",
          "data-[state=indeterminate]:!border-grey-30 data-[state=indeterminate]:!bg-grey-30 data-[state=indeterminate]:!text-grey-70",
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
          "data-[state=indeterminate]:!border-grey-30 data-[state=indeterminate]:!bg-grey-30 data-[state=indeterminate]:!text-grey-50",
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
        readOnly: true, size: "small",
        class: [ "border-[1.5px]", ].join(" "),
      },
      {
        readOnly: true, size: "regular",
        class: [ "border-[2px]", ].join(" "),
      },
      {
        readOnly: true, size: "large",
        class: [ "border-[2.5px]", ].join(" "),
      },
    ],
  }
)

type CheckboxVariants = VariantProps<typeof checkboxVariants>
export interface Props extends Omit<CheckboxRootProps, "disabled"> {
  class?: HTMLAttributes["class"]
  size?: CheckboxVariants["size"]
  error?: CheckboxVariants["error"]
  readOnly?: CheckboxVariants["readOnly"]
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  size: "regular",
  error: false,
  readOnly: false,
  disabled: false,
})
const emits = defineEmits<CheckboxRootEmits>()
const delegatedProps = reactiveOmit(props, "class", "size", "error", "readOnly", "disabled")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
/**
 * # 부분 선택 여부
 * - modelValue === "indeterminate" 일 때 부분 선택임
 */
const isIndeterminate = computed( () => props.modelValue === "indeterminate", );
const rootInert = computed(() => props.readOnly && !props.disabled)
/**
 * # 체크 표시 아이콘
 */
const iconSize = computed(() => {
  switch (props.size) {
    case "small": return "h-[8px] w-[8px]"   // 10px
    case "large": return "h-[12px] w-[12px]"   // 16px
    default: return "h-[10px] w-[10px]"        // 14px
  }
})
</script>

<template>
  <span
    class="inline-flex"
    :inert="rootInert ? true : undefined"
  >
    <CheckboxRoot
      v-bind="forwarded"
      :disabled="disabled"
      :aria-readonly="readOnly ? true : undefined"
      :class="[
        checkboxVariants({ size, error, readOnly, disabled }),
        props.class,
      ]"
    >
      <CheckboxIndicator class="grid place-content-center text-current">
        <slot>
          <Minus v-if="isIndeterminate" :class="iconSize" stroke-width="3" />
          <Check v-else :class="iconSize" stroke-width="3" />
        </slot>
      </CheckboxIndicator>
    </CheckboxRoot>
  </span>
</template>
