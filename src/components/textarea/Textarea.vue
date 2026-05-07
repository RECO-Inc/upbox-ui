<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject, nextTick, provide, ref, watch } from "vue"
import { useVModel } from "@vueuse/core"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"
import { FIELD_CONTROL_INJECTION_KEY } from "../form/injectionKeys"
import {
  type InputFrameDesignProps,
  pickInputFrameDesign,
  useInputFrameInjectProvide,
} from "../input-frame"
import { TEXTAREA_TRAILING_CONTEXT_KEY } from "./textareaContext"
import TextareaCount from "./TextareaCount.vue"

defineOptions({ inheritAttrs: false })

/**
 * `InputFrame` 과 같은 디자인 토큰을 쓰되, 고정 높이(`h-[N]`)는 빼고 세로 패딩을 갖는다.
 * 멀티라인이라 카운터를 푸터로 둘 수 있게 `flex-col` 로 둔다.
 */
const textareaFrameVariants = cva(
  [
    "relative flex w-full flex-col rounded-[4px] border transition-all duration-300",
    "text-grey-80",
    "focus-within:outline-hidden",
    "focus-within:border-blue-80 focus-within:ring-1 focus-within:ring-blue-50",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-grey-40 bg-grey-10",
        filled: "border-transparent bg-grey-20",
        bottomline:
          "border-0 border-b border-grey-40 rounded-none bg-transparent",
      },
      size: {
        small: "px-[12px] py-[8px] text-size-12",
        regular: "p-[16px] text-size-14",
        large: "px-[16px] py-[12px] text-size-16",
      },
      error: {
        true: "border-red-80 focus-within:border-red-80 focus-within:ring-0",
        false: "",
      },
      readonly: {
        true: "cursor-default focus-within:border-grey-40 focus-within:ring-0 bg-grey-20 border-grey-40",
        false: "",
      },
      disabled: {
        true:
          "text-grey-40 pointer-events-none cursor-not-allowed border-grey-40 bg-grey-20 focus-within:border-grey-40 focus-within:ring-0",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "regular",
      error: false,
      readonly: false,
      disabled: false,
    },
  },
)

export interface TextareaProps extends InputFrameDesignProps {
  modelValue?: string | number
  defaultValue?: string | number
  class?: HTMLAttributes["class"]
  placeholder?: string
  /** 카운터(우하단 `현재/최대`) 표시 */
  counter?: boolean
  /** 카운터 최대값 + `<textarea maxlength>` */
  maxLength?: number
  /** 글자수 대신 byte 단위로 카운트 */
  byteMode?: boolean
  /** 입력 양에 따라 자동 높이 (기본 `true`) */
  autoResize?: boolean
  /** 자동 높이 하한. 미지정 시 size 별 Figma 기본값(small=72, regular=92, large=104) */
  minHeight?: number
  /** 자동 높이 상한 */
  maxHeight?: number
  /** `autoResize=false` 일 때 사용하는 기본 행 수 */
  rows?: number
}

const props = withDefaults(defineProps<TextareaProps>(), {
  variant: undefined,
  size: undefined,
  error: undefined,
  disabled: undefined,
  readonly: undefined,
  counter: false,
  byteMode: false,
  autoResize: true,
  maxHeight: 300,
  rows: 3,
})

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void
}>()

const design = useInputFrameInjectProvide(() => pickInputFrameDesign(props))

const fieldControl = inject(FIELD_CONTROL_INJECTION_KEY, null)

const localVModel = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

/**
 * `byteMode` + `maxLength` 일 때 바이트 한도를 넘지 않도록 잘라낸다.
 * 한 글자가 한도를 넘기는 순간 그 직전까지만 남긴다 (한글 1자=3byte 등 가변폭 대응).
 */
const truncateToBytes = (str: string, maxBytes: number): string => {
  if (new Blob([str]).size <= maxBytes)
    return str
  let out = ""
  let bytes = 0
  for (const ch of str) {
    const cb = new Blob([ch]).size
    if (bytes + cb > maxBytes)
      break
    out += ch
    bytes += cb
  }
  return out
}

const modelValue = computed<string | number>({
  get: () => (fieldControl
    ? (fieldControl.value.modelValue as string | number)
    : localVModel.value) ?? "",
  set: (v) => {
    let next: string | number = v
    if (
      props.byteMode
      && props.maxLength != null
      && typeof next === "string"
    ) {
      next = truncateToBytes(next, props.maxLength)
    }
    if (fieldControl) {
      fieldControl.value["onUpdate:modelValue"]?.(next)
    }
    else {
      localVModel.value = next
    }
  },
})

const handleBlur = () => {
  fieldControl?.value.onBlur?.()
}

/* ------------------------------------------------------------------ */
/* 카운터 컨텍스트                                                     */
/* ------------------------------------------------------------------ */
const getByteLength = (str: string): number => new Blob([str]).size
const currentCount = computed(() => {
  const value = String(modelValue.value || "")
  return props.byteMode ? getByteLength(value) : value.length
})

provide(TEXTAREA_TRAILING_CONTEXT_KEY, {
  currentCount,
  maxLength: computed(() => props.maxLength),
  byteMode: computed(() => props.byteMode),
})

/* ------------------------------------------------------------------ */
/* 자동 높이                                                           */
/* ------------------------------------------------------------------ */
const sizeMinHeight: Record<NonNullable<InputFrameDesignProps["size"]>, number> = {
  small: 72,
  regular: 92,
  large: 104,
}

const effectiveMinHeight = computed(
  () => props.minHeight ?? sizeMinHeight[design.size.value],
)

const textareaRef = ref<HTMLTextAreaElement | null>(null)

const adjustHeight = async () => {
  if (!props.autoResize || !textareaRef.value)
    return
  await nextTick()
  const ta = textareaRef.value
  if (!ta)
    return
  ta.style.height = "auto"
  let h = ta.scrollHeight
  h = Math.max(h, effectiveMinHeight.value)
  if (props.maxHeight)
    h = Math.min(h, props.maxHeight)
  ta.style.height = `${h}px`
  ta.style.overflowY
    = props.maxHeight && ta.scrollHeight > props.maxHeight ? "auto" : "hidden"
}

watch(modelValue, () => {
  adjustHeight()
}, { immediate: true })

watch(textareaRef, () => {
  adjustHeight()
})

/* ------------------------------------------------------------------ */
/* class                                                               */
/* ------------------------------------------------------------------ */
const frameClass = computed(() =>
  cn(
    textareaFrameVariants({
      variant: design.variant.value,
      size: design.size.value,
      error: design.error.value,
      readonly: design.readonly.value,
      disabled: design.disabled.value,
    }),
    props.class,
  ),
)

const textareaStyle = computed(() => {
  if (props.autoResize)
    return undefined
  return { minHeight: `${effectiveMinHeight.value}px` }
})
</script>

<template>
  <div
    :class="frameClass"
    :data-disabled="design.disabled.value ? '' : undefined"
  >
    <textarea
      ref="textareaRef"
      v-bind="$attrs"
      v-model="modelValue"
      :disabled="design.disabled.value"
      :readonly="design.readonly.value"
      :placeholder="placeholder"
      :maxlength="byteMode ? undefined : maxLength"
      :rows="autoResize ? 1 : rows"
      :style="textareaStyle"
      class="block w-full min-w-0 flex-1 resize-none border-0 bg-transparent text-inherit outline-none placeholder:text-grey-50 disabled:cursor-not-allowed"
      @blur="handleBlur"
    />
    <div v-if="counter || $slots.footer" class="flex justify-end pt-[4px]">
      <slot name="footer">
        <TextareaCount v-if="counter" />
      </slot>
    </div>
    <slot />
  </div>
</template>
