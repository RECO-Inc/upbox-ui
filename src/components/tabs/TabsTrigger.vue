<script setup lang="ts">
import type { TabsTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { TabsTriggerVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { TabsTrigger, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import { tabsTriggerVariants } from "."

interface Props extends TabsTriggerProps {
  class?: HTMLAttributes["class"]
  variant?: TabsTriggerVariants["variant"]
  color?: TabsTriggerVariants["color"]
  size?: TabsTriggerVariants["size"]
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  color: "navy",
  size: "md",
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
