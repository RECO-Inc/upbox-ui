<script setup lang="ts">
import type { TabsListProps as RekaTabsListProps } from "reka-ui"
import type { TabsListProps } from "."
import { reactiveOmit } from "@vueuse/core"
import { TabsList } from "reka-ui"
import { cn } from "../../lib/utils"
import { tabsListVariants } from "."

interface Props extends RekaTabsListProps, TabsListProps {}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  color: "navy",
  size: "regular",
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
