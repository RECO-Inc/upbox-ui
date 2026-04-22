<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { PanelLeft } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import { Button } from '../button'
import { useSidebar } from "./utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { toggleSidebar } = useSidebar()
</script>

<template>
  <Button
    data-sidebar="trigger"
    variant="secondary"
    :class="cn('h-[28px] w-[28px]', props.class)"
    @click="toggleSidebar"
  >
    <PanelLeft class="h-[16px] w-[16px] text-grey-90" />
    <span class="sr-only">Toggle Sidebar</span>
  </Button>
</template>
