<script setup lang="ts">
import type { TabsListProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import type { TabsListVariants } from "."
import { reactiveOmit } from "@vueuse/core"
import { TabsList } from "reka-ui"
import { cn } from "../../lib/utils"
import { tabsListVariants } from "."

interface Props extends TabsListProps {
  class?: HTMLAttributes["class"]
  variant?: TabsListVariants["variant"]
  color?: TabsListVariants["color"]
  size?: TabsListVariants["size"]
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  color: "navy",
  size: "md",
})

const delegatedProps = reactiveOmit(props, "class", "variant", "color", "size")
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="cn(tabsListVariants({ variant, color, size }), props.class)"
  >
    <slot />
  </TabsList>
</template>
