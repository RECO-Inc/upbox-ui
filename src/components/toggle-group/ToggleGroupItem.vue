<script setup lang="ts">
import type { ToggleGroupItemProps } from "reka-ui"
import type { ToggleGroupExtraProps } from "."
import { reactiveOmit } from "@vueuse/core"
import { ToggleGroupItem, useForwardProps } from "reka-ui"
import { inject } from "vue"
import { cn } from "../../lib/utils"
import { toggleVariants } from '../toggle'

const props = defineProps<ToggleGroupItemProps & ToggleGroupExtraProps>()

const context = inject<ToggleGroupExtraProps>("toggleGroup")

const delegatedProps = reactiveOmit(props, "class", "size", "variant")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <ToggleGroupItem
    v-slot="slotProps: any"
    v-bind="forwardedProps" :class="cn(toggleVariants({
      variant: context?.variant || variant,
      size: context?.size || size,
    }), props.class)"
  >
    <slot v-bind="slotProps" />
  </ToggleGroupItem>
</template>
