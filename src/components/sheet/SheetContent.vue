<script setup lang="ts">
import type { DialogContentEmits, DialogContentProps } from "reka-ui"
import type { SheetContentProps as SheetContentVariantProps } from "."
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
import { sheetVariants } from "."

interface SheetContentProps extends DialogContentProps, SheetContentVariantProps {}

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<SheetContentProps>()

const emits = defineEmits<DialogContentEmits>()

const delegatedProps = reactiveOmit(props, "class", "side")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DialogPortal>
    <!--
      `ui-sheet-overlay` 는 소비자가 "진짜 배경(dim) 을 건드렸는가" 를 판정하기 위한
      훅이다. `DialogContent` 의 `ui-dialog-overlay` 와 대칭.

      reka 기준 "바깥" 은 SheetContent 밖 전부라, body 로 포털되는 시트 **내부** 컨트롤
      (Select 옵션 목록 등)까지 바깥으로 잡힌다. 소비자가 배경 클릭 닫기를 켠 채로
      그걸 걸러내려면 오버레이를 특정할 안정적인 이름이 필요한데, 유틸리티 클래스만
      있으면 잡을 수가 없다. 오버레이는 포털 내부라 바깥에서 클래스를 주입할 수도 없다.
    -->
    <DialogOverlay
      class="ui-sheet-overlay fixed inset-0 z-50 bg-grey-90/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <DialogContent
      :class="cn(sheetVariants({ side }), props.class)"
      v-bind="{ ...forwarded, ...$attrs }"
    >
      <slot />

      <DialogClose
        class="absolute right-[16px] top-[16px] rounded-sm opacity-70 ring-offset-grey-10 transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-navy-80 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-grey-20"
      >
        <X class="w-[16px] h-[16px]" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
