<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { X } from "lucide-vue-next"
import {
  DialogClose,
  DialogContent,

  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "../../lib/utils"

export type DialogSize = "small" | "regular" | "large" | "xlarge" | "full"

const DIALOG_SIZE_MAP: Record<DialogSize, string> = {
  small: "max-w-[328px]",
  regular: "max-w-[564px]",
  large: "max-w-[934px]",
  xlarge: "max-w-[1124px]",
  full: "max-w-[100vw]",
}

const props = withDefaults(defineProps<DialogContentProps & {
  class?: HTMLAttributes["class"]
  size?: DialogSize
}>(), {
  size: "regular",
})
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, "class", "size")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          'fixed left-1/2 top-1/2 z-50 grid w-[92%] -translate-x-1/2 -translate-y-1/2 gap-[16px] border border-grey-30 bg-grey-10 p-[24px] shadow-lg rounded-[8px] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
          DIALOG_SIZE_MAP[size],
          props.class,
        )"
    >
      <slot />

      <DialogClose
        class="absolute right-[16px] top-[16px] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-navy-80 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-grey-20 data-[state=open]:text-grey-60"
      >
        <X class="w-[16px] h-[16px] text-grey-90" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
