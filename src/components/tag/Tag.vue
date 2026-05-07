<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { X } from "lucide-vue-next"
import type { TagVariants } from "."
import { cn } from "../../lib/utils"
import { tagCloseIconSize, tagVariants } from "."

const props = withDefaults(
  defineProps<{
    state?: TagVariants["state"]
    size?: TagVariants["size"]
    mode?: "view" | "edit"
    class?: HTMLAttributes["class"]
  }>(),
  {
    state: "enabled",
    size: "small",
    mode: "view",
  },
)

const emit = defineEmits<{
  close: []
}>()

const showClose = computed(
  () => props.mode === "edit" && props.state !== "disabled",
)

const closeIconClass = computed(() => tagCloseIconSize[props.size ?? "small"])

const closeBgClass = computed(() =>
  props.state === "error" ? "bg-red-80" : "bg-grey-90",
)

function handleClose(event: MouseEvent) {
  event.stopPropagation()
  emit("close")
}
</script>

<template>
  <div :class="cn(tagVariants({ state: props.state, size: props.size }), props.class)">
    <slot name="badge" />
    <span class="inline-flex items-center">
      <slot />
    </span>
    <button
      v-if="showClose"
      type="button"
      :aria-label="'태그 삭제'"
      class="inline-flex items-center justify-center rounded-full cursor-pointer text-grey-10 hover:opacity-80 focus-visible:outline-hidden"
      :class="[closeIconClass, closeBgClass]"
      @click="handleClose"
    >
      <X class="size-[70%]" :stroke-width="2.5" />
    </button>
  </div>
</template>
