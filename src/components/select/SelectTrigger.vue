<script setup lang="ts">
import type { SelectTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { ChevronDown } from "lucide-vue-next"
import { computed, inject } from "vue"
import { injectSelectRootContext, SelectIcon, SelectTrigger, useForwardProps } from "reka-ui"
import { cn } from "../../lib/utils"
import { InputFrame } from "../input-frame"
import SelectClearIcon from "./SelectClearIcon.vue"
import { SELECT_CLEARABLE_KEY } from "./selectContext"

const props = withDefaults(defineProps<SelectTriggerProps & {
  class?: HTMLAttributes["class"]
  /**
   * SearchField/InputGroup 등 외부 frame을 가진 wrapper 안에 들어갈 때 사용.
   * 자체 InputFrame 없이 transparent inline trigger로 렌더링된다.
   */
  inline?: boolean
  /**
   * InputFrame design props. 미지정(`undefined`)이면 SelectField / FieldContainer
   * 가 provide 한 컨텍스트를 InputFrame 이 inject-merge 해서 따른다.
   * standalone 사용 시 컨텍스트가 없으면 InputFrame 기본값(default/regular).
   */
  variant?: "default" | "filled" | "bottomline"
  size?: "small" | "regular" | "large"
  error?: boolean
  readonly?: boolean
  /**
   * 선택한 항목을 지울 수 있음.
   * 미지정 시 Select root 의 clearable provide 값을 따른다.
   */
  clearable?: boolean
}>(), {
  variant: undefined,
  size: undefined,
  error: undefined,
  readonly: undefined,
  clearable: undefined,
})

const emits = defineEmits<{
  clear: []
}>()

const delegatedProps = reactiveOmit(
  props,
  "class",
  "inline",
  "variant",
  "size",
  "error",
  "readonly",
  "clearable",
)

const forwardedProps = useForwardProps(delegatedProps)

const selectRoot = injectSelectRootContext(null)
const injectedClearable = inject(SELECT_CLEARABLE_KEY, null)

const isClearable = computed(() =>
  props.clearable ?? injectedClearable?.value ?? false,
)

/**
 * # 지우기 버튼 표시
 * - clearable 이고 값이 있으며 disabled/readonly 가 아닐 때
 */
const showClearButton = computed(() => {
  if (!isClearable.value) return false
  if (props.disabled || props.readonly) return false
  if (!selectRoot) return false
  return !selectRoot.isEmptyModelValue.value
})

/**
 * # 선택값 지우기
 * - 드롭다운이 열리지 않도록 pointerdown/click 을 막는다.
 * - reka SelectRoot modelValue 를 undefined 로 비운다.
 */
function handleClear(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  if (!selectRoot || props.disabled || props.readonly) return
  selectRoot.onOpenChange(false)
  selectRoot.modelValue.value = undefined
  emits("clear")
}
</script>

<template>
  <SelectTrigger
    v-if="props.inline"
    v-bind="forwardedProps"
    :class="cn(
      'inline-flex h-full min-h-0 items-center gap-[8px] border-0 bg-transparent px-[8px] text-size-14 text-inherit shadow-none outline-none',
      'whitespace-nowrap text-start',
      'cursor-pointer select-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'focus:outline-hidden focus:ring-0',
      '[&>span]:truncate',
      props.class,
    )"
  >
    <slot />
      <span class="flex shrink-0 items-center gap-[4px]">
      <span
        v-if="showClearButton"
        role="button"
        tabindex="-1"
        class="inline-flex size-[16px] shrink-0 cursor-pointer items-center justify-center text-grey-40 transition-opacity hover:text-grey-60"
        aria-label="Clear"
        @pointerdown="handleClear"
        @click="handleClear"
      >
        <SelectClearIcon />
      </span>
      <SelectIcon as-child>
        <ChevronDown class="size-[16px] shrink-0 text-grey-50" />
      </SelectIcon>
    </span>
  </SelectTrigger>
  <InputFrame
    v-else
    :variant="props.variant"
    :size="props.size"
    :error="props.error"
    :readonly="props.readonly"
    :disabled="props.disabled"
    class="w-full min-w-0"
  >
    <SelectTrigger
      v-bind="forwardedProps"
      :class="cn(
        'flex h-full min-h-0 w-full min-w-0 flex-1 items-center justify-between gap-[8px] border-0 bg-transparent',
        'px-0 py-0 text-size-14 text-inherit shadow-none outline-none transition-none',
        'whitespace-nowrap text-start',
        'cursor-pointer select-none',
        'disabled:cursor-not-allowed disabled:opacity-100',
        'focus:outline-hidden focus:ring-0',
        '[&>span]:truncate',
        props.class,
      )"
    >
      <slot />
      <span class="flex shrink-0 items-center gap-[4px]">
        <span
          v-if="showClearButton"
          role="button"
          tabindex="-1"
          class="inline-flex size-[16px] shrink-0 cursor-pointer items-center justify-center text-grey-40 transition-opacity hover:text-grey-60"
          aria-label="Clear"
          @pointerdown="handleClear"
          @click="handleClear"
        >
          <SelectClearIcon />
        </span>
        <SelectIcon as-child>
          <ChevronDown class="size-[16px] shrink-0 text-grey-50" />
        </SelectIcon>
      </span>
    </SelectTrigger>
  </InputFrame>
</template>
