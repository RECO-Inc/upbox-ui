<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { PanelLeft } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import { useSidebar } from "./utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <button
    type="button"
    data-sidebar="trigger"
    :class="cn(
      'inline-flex size-[28px] items-center justify-center rounded-[4px] text-grey-90 cursor-pointer transition-colors',
      'hover:bg-grey-20 active:bg-grey-30',
      'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-cta-primary',
      'disabled:pointer-events-none disabled:opacity-50',
      props.class,
    )"
    @click="toggleSidebar"
  >
    <PanelLeft class="size-[20px]" />
    <span class="sr-only">Toggle Sidebar</span>
  </button>
</template>
