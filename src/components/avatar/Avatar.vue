<script setup lang="ts">
import type { AvatarProps } from "."
import { AvatarRoot } from "reka-ui"
import { cn } from "../../lib/utils"
import { avatarVariant } from "."

const props = withDefaults(defineProps<AvatarProps>(), {
  size: "small",
  shape: "circle",
})
</script>

<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot />
  </AvatarRoot>
</template>
