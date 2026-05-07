<script setup lang="ts">
import type { ToggleGroupRootEmits, ToggleGroupRootProps } from "reka-ui"
import type { ToggleGroupExtraProps } from "."
import { reactiveOmit } from "@vueuse/core"
import { ToggleGroupRoot, useForwardPropsEmits } from "reka-ui"
import { provide } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<ToggleGroupRootProps & ToggleGroupExtraProps>()
const emits = defineEmits<ToggleGroupRootEmits>()

provide("toggleGroup", {
  variant: props.variant,
  size: props.size,
})

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToggleGroupRoot v-slot="slotProps" v-bind="forwarded" :class="cn('flex items-center justify-center gap-[4px]', props.class)">
    <slot v-bind="slotProps" />
  </ToggleGroupRoot>
</template>
