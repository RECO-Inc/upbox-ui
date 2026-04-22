<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { PanelLeft } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import IconButton from '../icon-button/IconButton.vue'
import { useSidebar } from "./utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <IconButton
    data-sidebar="trigger"
    variant="secondary"
    size="small"
    :class="cn('size-[28px] rounded-[4px] [&_svg]:size-[16px]', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeft class="text-grey-90" />
    <span class="sr-only">Toggle Sidebar</span>
  </IconButton>
</template>
