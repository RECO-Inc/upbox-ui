<script setup lang="ts">
import { computed, useSlots } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { SwitchRoot, SwitchThumb, useForwardPropsEmits } from "reka-ui"
import type { ToggleEmits, ToggleProps } from "."
import { cn } from "../../lib/utils"
import { toggleLabelVariants, toggleThumbVariants, toggleTrackVariants } from "."

const props = withDefaults(defineProps<ToggleProps>(), {
  size: "2xsmall",
  disabled: false,
})

const emits = defineEmits<ToggleEmits>()

const slots = useSlots()
const hasLabel = computed(() => !!props.label || !!slots.label)

const delegatedProps = reactiveOmit(props, "class", "size", "label")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <label
    v-if="hasLabel"
    :class="cn('inline-flex items-center gap-[8px]', !disabled && 'cursor-pointer', props.class)"
  >
    <SwitchRoot
      v-bind="forwarded"
      :class="toggleTrackVariants({ size })"
    >
      <SwitchThumb :class="toggleThumbVariants({ size })" />
    </SwitchRoot>
    <span :class="toggleLabelVariants({ size })">
      <slot name="label">{{ label }}</slot>
    </span>
  </label>

  <SwitchRoot
    v-else
    v-bind="forwarded"
    :class="cn(toggleTrackVariants({ size }), props.class)"
  >
    <SwitchThumb :class="toggleThumbVariants({ size })" />
  </SwitchRoot>
</template>
