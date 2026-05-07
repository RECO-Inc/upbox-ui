<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core"
import { Separator } from "reka-ui"
import type { SeparatorProps } from "."
import { cn } from "../../lib/utils"

const props = withDefaults(defineProps<SeparatorProps>(), {
  orientation: "horizontal",
  decorative: true,
})

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
  <Separator
    v-bind="delegatedProps"
    :class="
      cn(
        'shrink-0 bg-grey-40',
        props.orientation === 'horizontal' ? 'h-px w-full' : 'w-px h-full',
        props.class,
      )
    "
  />
</template>
