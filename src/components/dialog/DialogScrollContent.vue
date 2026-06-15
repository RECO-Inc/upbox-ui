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

const props = defineProps<DialogContentProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="ui-dialog-overlay fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/50"
    >
      <DialogContent
        :class="
          cn(
            'ui-dialog-scroll-content relative z-50 grid w-full max-w-lg my-[32px] gap-[16px] border border-border bg-background p-[24px] shadow-lg sm:rounded-lg md:w-full',
            props.class,
          )
        "
        v-bind="forwarded"
        @pointer-down-outside="(event) => {
          const originalEvent = event.detail.originalEvent;
          const target = originalEvent.target as HTMLElement;
          if (originalEvent.offsetX > target.clientWidth || originalEvent.offsetY > target.clientHeight) {
            event.preventDefault();
          }
        }"
      >
        <slot />

        <DialogClose
          class="absolute top-[16px] right-[16px] p-[2px] transition-colors rounded-md hover:bg-secondary"
        >
          <X class="w-[16px] h-[16px]" />
          <span class="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogOverlay>
  </DialogPortal>
</template>

<!-- 모션 self-contained 처리 근거는 DialogContent.vue 참고 -->
<style scoped>
@keyframes ui-dialog-overlay-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes ui-dialog-overlay-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes ui-dialog-scroll-content-in {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes ui-dialog-scroll-content-out {
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.96); }
}

.ui-dialog-overlay[data-state="open"] {
  animation: ui-dialog-overlay-in 0.2s ease both;
}
.ui-dialog-overlay[data-state="closed"] {
  animation: ui-dialog-overlay-out 0.2s ease both;
}
.ui-dialog-scroll-content[data-state="open"] {
  animation: ui-dialog-scroll-content-in 0.2s ease both;
}
.ui-dialog-scroll-content[data-state="closed"] {
  animation: ui-dialog-scroll-content-out 0.2s ease both;
}

@media (prefers-reduced-motion: reduce) {
  .ui-dialog-overlay[data-state],
  .ui-dialog-scroll-content[data-state] {
    animation-duration: 0.01ms;
  }
}
</style>
