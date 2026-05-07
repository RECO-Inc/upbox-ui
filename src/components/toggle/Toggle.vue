<script setup lang="ts">
import type { ToggleEmits, ToggleProps as RekaToggleProps } from "reka-ui"
import type { ToggleProps } from "."
import { reactiveOmit } from "@vueuse/core"
import { Toggle, useForwardPropsEmits } from "reka-ui"
import { cn } from "../../lib/utils"
import { toggleVariants } from "."

const props = withDefaults(defineProps<RekaToggleProps & ToggleProps>(), {
  variant: "default",
  size: "regular",
  disabled: false,
})

const emits = defineEmits<ToggleEmits>()

const delegatedProps = reactiveOmit(props, "class", "size", "variant")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Toggle
    v-slot="slotProps: any"
    v-bind="forwarded"
    :class="cn(toggleVariants({ variant, size }), props.class)"
  >
    <slot v-bind="slotProps" />
  </Toggle>
</template>
