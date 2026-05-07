<script setup lang="ts">
import type { TabsTriggerProps as RekaTabsTriggerProps } from "reka-ui"
import type { TabsTriggerProps } from "."
import { reactiveOmit } from "@vueuse/core"
import { TabsTrigger, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import { tabsTriggerVariants } from "."

interface Props extends RekaTabsTriggerProps, TabsTriggerProps {}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  color: "navy",
  size: "regular",
})

const delegatedProps = reactiveOmit(props, "class", "variant", "color", "size")

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="cn(tabsTriggerVariants({ variant, color, size }), props.class)"
  >
    <span class="truncate">
      <slot />
    </span>
  </TabsTrigger>
</template>
