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

export type DialogSize = "xsmall" | "small" | "regular" | "large" | "xlarge" | "full"

const DIALOG_SIZE_MAP: Record<DialogSize, string> = {
  xsmall: "max-w-[328px]",
  small: "max-w-[364px]",
  regular: "max-w-[564px]",
  large: "max-w-[934px]",
  xlarge: "max-w-[1124px]",
  full: "max-w-[100vw]",
}

const props = withDefaults(defineProps<DialogContentProps & {
  class?: HTMLAttributes["class"]
  size?: DialogSize
  /** 우상단 닫기(X) 버튼 숨김 (default: false) */
  hideClose?: boolean
}>(), {
  size: "regular",
  hideClose: false,
})
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, "class", "size", "hideClose")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="ui-dialog-overlay fixed inset-0 z-50 bg-black/50"
    />
    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          'ui-dialog-content fixed left-1/2 top-1/2 z-50 grid w-[92%] gap-[16px] border border-grey-30 bg-grey-10 p-[24px] shadow-lg rounded-[8px]',
          DIALOG_SIZE_MAP[size],
          props.class,
        )"
    >
      <slot />

      <DialogClose
        v-if="!hideClose"
        class="absolute right-[16px] top-[16px] rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-navy-80 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-grey-20 data-[state=open]:text-grey-60"
      >
        <X class="w-[16px] h-[16px] text-grey-90" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>

<!--
  모션은 컴포넌트에 self-contained 로 둔다.
  소비 앱이 `@import "tailwindcss" important` 인 경우 tw-animate-css 의
  `data-[state]:animate-*` 유틸이 `!important` 가 되는데, CSS 스펙상
  애니메이션은 `!important` 선언(특히 transform 계열 util)을 못 이겨
  reka 의 exit 모션이 깨진다(닫을 때 휙 사라짐). 그래서 유틸 대신
  scoped @keyframes 로 직접 처리 → 어떤 앱에서도 열기/닫기 모두 동작.
  중앙 정렬 transform 도 util(`-translate-*`) 대신 여기서 소유해
  important 충돌을 피한다.
-->
<style scoped>
.ui-dialog-content {
  transform: translate(-50%, -50%);
}

@keyframes ui-dialog-overlay-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes ui-dialog-overlay-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
@keyframes ui-dialog-content-in {
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.96); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}
@keyframes ui-dialog-content-out {
  from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  to { opacity: 0; transform: translate(-50%, -50%) scale(0.96); }
}

.ui-dialog-overlay[data-state="open"] {
  animation: ui-dialog-overlay-in 0.2s ease both;
}
.ui-dialog-overlay[data-state="closed"] {
  animation: ui-dialog-overlay-out 0.2s ease both;
}
.ui-dialog-content[data-state="open"] {
  animation: ui-dialog-content-in 0.2s ease both;
}
.ui-dialog-content[data-state="closed"] {
  animation: ui-dialog-content-out 0.2s ease both;
}

@media (prefers-reduced-motion: reduce) {
  .ui-dialog-overlay[data-state],
  .ui-dialog-content[data-state] {
    animation-duration: 0.01ms;
  }
}
</style>
