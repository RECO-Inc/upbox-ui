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
  fullscreen: false,
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

const hasHeader = computed(() => !!props.title || !!props.description || !!slots.header)

const footerClass = computed(() => (props.footerButtonGrow ? "[&>*]:flex-1" : undefined))

/**
 * 진짜 배경(dim) 을 건드린 것인지 판별한다.
 *
 * reka 기준 "바깥" 은 DialogContent 밖 전부라, body 로 포털되는 모달 **내부** 컨트롤
 * 까지 바깥으로 잡힌다 — 소비 앱의 레거시 Select 는 옵션 목록을 `<teleport to="body">`
 * 로 내보내고, DS 의 Select/Dropdown/Popover 도 `[data-reka-popper-content-wrapper]`
 * 로 body 에 붙는다. 그대로 두면 모달 안 Select 에서 옵션을 고르는 순간 모달이 닫힌다.
 *
 * 포털되는 루트를 열거하면 새 컴포넌트가 생길 때마다 빠지므로, 반대로
 * "오버레이를 직접 건드렸을 때만 배경" 으로 판정한다.
 */
function isBackdropInteraction(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest(".ui-dialog-overlay") !== null
}

function onInteractOutside(event: Event) {
  if (!props.closeOnOverlay) {
    event.preventDefault()
    return
  }
  const detail = (event as CustomEvent<{ originalEvent?: Event }>).detail
  const target = detail?.originalEvent?.target ?? event.target
  if (!isBackdropInteraction(target)) event.preventDefault()
}

function onEscapeKeyDown(event: KeyboardEvent) {
  if (!props.closeOnEscape) event.preventDefault()
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent
      :size="size"
      :fullscreen="fullscreen"
      :hide-close="!showClose"
      :class="cn(
        // 패딩은 DialogContent 가 아니라 각 섹션이 갖는다(아래 참고). p-0 으로 걷어낸다.
        'flex flex-col p-0',
        // 전체화면은 뷰포트를 채우므로 높이 상한을 두지 않는다
        !fullscreen && 'max-h-[calc(var(--vh,1vh)*94)]',
        props.class,
      )"
      @interact-outside="onInteractOutside"
      @escape-key-down="onEscapeKeyDown"
    >
      <DialogHeader v-if="hasHeader" class="shrink-0 px-[24px] pt-[24px]">
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

        `grid-cols-[minmax(0,1fr)]` 는 세로쪽 `min-h-0` 의 가로쪽 짝이다. 암시적 컬럼은
        `auto` 라 최소 폭이 내용의 min-content 로 잡히는데, 줄바꿈되지 않는 넓은 내용
        (`white-space: nowrap` 이 걸린 목록 카드의 긴 이름 등)이 들어오면 그만큼 컬럼이
        벌어져 본문에 가로 스크롤이 생긴다. 안쪽에서 `truncate` 를 걸어도 min-content
        기여는 줄지 않아 소비처가 스스로 막을 수 없다. 최소 폭을 0 으로 열어 준다.
        소비처가 `bodyClass` 로 `grid-cols-*` 를 주면 tailwind-merge 가 그쪽을 남긴다.
      -->
      <div
        :class="cn(
          'grid grid-cols-[minmax(0,1fr)] content-start gap-[16px] min-h-0 overflow-y-auto text-size-15 text-grey-90',
          // 좌우 패딩은 본문이 소유한다 → bodyClass 의 px-0 이 실제로 가장자리까지 붙는다
          'px-[24px]',
          // 헤더/푸터가 없으면 그쪽 24px 을 본문이 대신 갖는다(기존 여백 유지)
          !hasHeader && 'pt-[24px]',
          !hasFooter && 'pb-[24px]',
          // 전체화면에서는 본문이 남는 높이를 모두 차지해야 푸터가 바닥에 붙는다
          fullscreen && 'flex-1',
          props.bodyClass,
        )"
      >
        <slot />
      </div>

      <DialogFooter v-if="hasFooter" :class="cn('shrink-0 px-[24px] pb-[24px]', footerClass)">
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
