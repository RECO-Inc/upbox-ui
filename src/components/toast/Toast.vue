<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner"
import { Toaster } from "vue-sonner"

const props = withDefaults(defineProps<ToasterProps>(), {
  position: "top-center",
})
</script>

<template>
  <Toaster
    class="toaster group"
    v-bind="props"
    :toast-options="{
      unstyled: true,
      classes: {
        toast:
          'group flex items-start gap-[4px] w-[396px] rounded-[8px] px-[16px] py-[8px] shadow-[0_4px_15px_rgba(85,92,108,0.1)]',
        content: 'flex flex-col gap-[2px] flex-1 min-w-0',
        title: 'text-size-16 leading-[24px] font-bold tracking-[-0.16px] text-grey-10',
        description: 'text-size-13 leading-[20px] font-normal tracking-[-0.13px] text-grey-10',
        icon: 'size-[24px] shrink-0 text-grey-10 inline-flex items-center justify-center [&_svg]:size-full',
        default: 'bg-grey-90',
        success: 'bg-status-positive',
        error: 'bg-status-negative',
        info: 'bg-status-informative',
        warning: 'bg-status-warning',
        actionButton:
          'ml-auto shrink-0 underline font-bold text-size-16 leading-[24px] text-grey-10 capitalize cursor-pointer',
        cancelButton:
          'shrink-0 text-size-16 leading-[24px] font-bold text-grey-10 cursor-pointer',
        closeButton:
          'size-[24px] shrink-0 inline-flex items-center justify-center text-grey-10 bg-transparent border-0 cursor-pointer',
      },
    }"
  />
</template>
