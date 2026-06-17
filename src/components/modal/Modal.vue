<script setup lang="ts">
import { computed } from "vue"
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
  closeOnOverlay: true,
  closeOnEscape: true,
  confirmText: "확인",
  cancelText: "닫기",
  destructive: false,
  confirmLoading: false,
  confirmDisabled: false,
  hideCancel: false,
  hideConfirm: false,
  footerButtonGrow: false,
  persistOnConfirm: false,
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
  emit("confirm")
  if (!props.persistOnConfirm) close()
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
      :class="props.class"
      @interact-outside="onInteractOutside"
      @escape-key-down="onEscapeKeyDown"
    >
      <DialogHeader v-if="title || description || slots.header">
        <slot name="header">
          <DialogTitle v-if="title">
            {{ title }}
          </DialogTitle>
          <DialogDescription v-if="description">
            {{ description }}
          </DialogDescription>
        </slot>
      </DialogHeader>

      <slot />

      <DialogFooter v-if="hasFooter" :class="footerClass">
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
