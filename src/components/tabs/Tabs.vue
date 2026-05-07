<script setup lang="ts">
import { TabsRoot, useForwardPropsEmits } from "reka-ui"
import type { TabsEmits, TabsProps } from "."

const props = defineProps<TabsProps>()
const emits = defineEmits<TabsEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <TabsRoot v-bind="forwarded">
    <slot />
  </TabsRoot>
</template>
