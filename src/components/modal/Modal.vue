<script setup lang="ts">
import { computed } from "vue"
import { cn } from "../../lib/utils"
import { Button } from "../button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../dialog"
import type { ModalProps } from "./modalProps"

const props = withDefaults(defineProps<ModalProps>(), {
  size: "regular",
  showClose: true,
  closeOnOverlay: false,
  closeOnEscape: true,
  confirmText: "확인",
  cancelText: "닫기",
  destructive: false,
  confirmLoading: false,
  confirmDisabled: false,
  hideCancel: false,
  hideConfirm: false,
  footerButtonGrow: false,
})

const emit = defineEmits<{
  "update:open": [value: boolean]
  confirm: []
  cancel: []
}>()

const slots = defineSlots<{
  /** 모달 바디 */
  default?: () => unknown
  /** 헤더 영역 전체 override (title/description 대신) */
  header?: () => unknown
  /** footer 영역 전체 override. close/confirm/cancel 헬퍼 제공 */
  footer?: (props: { close: () => void, confirm: () => void, cancel: () => void }) => unknown
}>()

const open = computed({
  get: () => props.open ?? false,
  set: (value: boolean) => emit("update:open", value),
})

function close() {
  open.value = false
}

function onCancel() {
  emit("cancel")
  close()
}

function onConfirm() {
  // 확인은 emit만 — 닫기는 소비자가 open(v-model)으로 결정한다 (shadcn AlertDialogAction 패턴).
  // 취소/overlay/ESC 는 dismiss 라 자동 닫힘.
  emit("confirm")
}

const showDefaultFooter = computed(() => !props.hideConfirm || !props.hideCancel)

const hasFooter = computed(() => !!slots.footer || showDefaultFooter.value)

const footerClass = computed(() => (props.footerButtonGrow ? "[&>*]:flex-1" : undefined))

function onInteractOutside(event: Event) {
  if (!props.closeOnOverlay) event.preventDefault()
}

function onEscapeKeyDown(event: KeyboardEvent) {
  if (!props.closeOnEscape) event.preventDefault()
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent
      :size="size"
      :hide-close="!showClose"
      :class="cn('flex flex-col max-h-[calc(var(--vh,1vh)*94)]', props.class)"
      @interact-outside="onInteractOutside"
      @escape-key-down="onEscapeKeyDown"
    >
      <DialogHeader v-if="title || description || slots.header" class="shrink-0">
        <slot name="header">
          <DialogTitle v-if="title">
            {{ title }}
          </DialogTitle>
          <DialogDescription v-if="description">
            {{ description }}
          </DialogDescription>
        </slot>
      </DialogHeader>

      <!--
        본문만 스크롤한다. 헤더/푸터는 고정.
        `grid gap-[16px]` 인 이유: 예전에는 본문 내용이 DialogContent(grid) 의 직접
        자식이라 최상위 요소끼리 16px 간격을 가졌다. 그냥 div 로 감싸면 그 간격이
        사라지므로 wrapper 가 같은 grid/gap 을 이어받는다.
        높이 상한은 앱의 `--vh`(모바일 주소창 보정)를 쓰되 없으면 94vh 로 떨어진다.

        본문 타이포(`text-size-15 text-grey-90`)를 Modal 이 소유한다. 지정하지 않으면
        브라우저 기본 16px 를 상속해서, 소비 앱의 base 설정에 따라 팝업마다 본문
        크기가 달라진다. 자식이 자기 `text-*` 를 주면 그쪽이 이긴다.
      -->
      <div class="grid content-start gap-[16px] min-h-0 overflow-y-auto text-size-15 text-grey-90">
        <slot />
      </div>

      <DialogFooter v-if="hasFooter" :class="cn('shrink-0', footerClass)">
        <slot name="footer" :close="close" :confirm="onConfirm" :cancel="onCancel">
          <Button
            v-if="!hideCancel"
            variant="secondary"
            theme="outlined"
            @click="onCancel"
          >
            {{ cancelText }}
          </Button>
          <Button
            v-if="!hideConfirm"
            :variant="destructive ? 'destructive' : 'primary'"
            :loading="confirmLoading"
            :disabled="confirmDisabled"
            @click="onConfirm"
          >
            {{ confirmText }}
          </Button>
        </slot>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
