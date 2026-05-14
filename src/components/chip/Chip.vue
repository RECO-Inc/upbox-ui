<script setup lang="ts">
import { computed, useSlots } from "vue"
import { ChevronDown, X } from "lucide-vue-next"
import type { ChipProps } from "."
import { cn } from "../../lib/utils"
import { chipCountColor, chipIconSize, chipVariants } from "."

const props = withDefaults(defineProps<ChipProps>(), {
  round: false,
  size: "xsmall",
  state: "default",
  removable: false,
  dropdown: false,
})

const emit = defineEmits<{
  remove: [event: MouseEvent]
}>()

const slots = useSlots()

const iconClass = computed(() => chipIconSize[props.size])
const countClass = computed(() => chipCountColor[props.state])

function handleRemove(event: MouseEvent) {
  event.stopPropagation()
  emit("remove", event)
}
</script>

<template>
  <div
    :class="cn(chipVariants({ round: props.round, size: props.size, state: props.state }), props.class)"
  >
    <slot name="badge" />
    <span class="inline-flex items-center px-[4px] leading-[16px]">
      <slot />
    </span>
    <span
      v-if="props.count !== undefined && props.count !== null && props.count !== ''"
      :class="cn('font-bold leading-[16px]', countClass)"
    >
      {{ props.count }}
    </span>
    <button
      v-if="props.removable"
      type="button"
      aria-label="제거"
      class="inline-flex items-center justify-center cursor-pointer hover:opacity-80 focus-visible:outline-hidden"
      :class="iconClass"
      @click="handleRemove"
    >
      <X class="size-full" :stroke-width="2" />
    </button>
    <span
      v-if="props.dropdown"
      class="inline-flex items-center justify-center"
      :class="iconClass"
    >
      <ChevronDown class="size-full" :stroke-width="2" />
    </span>
  </div>
</template>
