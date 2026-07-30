<script setup lang="ts">
import type { CheckboxRootEmits, CheckboxRootProps } from "reka-ui"
import { computed, inject } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from "reka-ui"
import { cva, type VariantProps } from "class-variance-authority"
import { FORM_ERROR_INJECTION_KEY } from "../form/injectionKeys"


const checkboxVariants = cva(
  [
    "grid place-content-center peer shrink-0",
    "rounded-[2px] border-2",
    "bg-grey-10",
    "text-grey-10",
    "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-navy-80",
    "transition-colors",
  ].join(" "),
  {
    variants: {
      size: {
        small: "h-[12px] w-[12px]",       // 12px
        regular: "h-[16px] w-[16px]",     // 16px
        large: "h-[20px] w-[20px]",       // 20px
      },
      // RadioGroupItem 과 동일한 구조: 선택 색과 미선택 테두리를 여기서 함께 정한다.
      // 이전에는 false 가 빈 문자열이라 미선택 테두리가 style.css 의 전역 fallback(grey-30)을
      // 받아 흰 배경 대비 1.17:1 로 거의 보이지 않았다.
      error: {
        true: "border-red-80 data-[state=checked]:border-red-80 data-[state=checked]:bg-red-80 data-[state=indeterminate]:border-red-80 data-[state=indeterminate]:bg-red-80",
        false: "border-grey-40 data-[state=checked]:border-navy-80 data-[state=checked]:bg-navy-80 data-[state=indeterminate]:border-navy-80 data-[state=indeterminate]:bg-navy-80",
      },
      readOnly: {
        true: [
          "cursor-default",
          "bg-grey-30",
          "border-grey-40",
          "text-grey-70",
          "data-[state=checked]:border-grey-30 data-[state=checked]:bg-grey-30 data-[state=checked]:text-grey-70",
          "data-[state=indeterminate]:border-grey-30 data-[state=indeterminate]:bg-grey-30 data-[state=indeterminate]:text-grey-70",
        ].join(" "),
        false: "",
      },
      disabled: {
        true: [
          "cursor-not-allowed",
          "bg-grey-30",
          "border-grey-30",
          "text-grey-50",
          "data-[state=checked]:border-grey-30 data-[state=checked]:bg-grey-30 data-[state=checked]:text-grey-50",
          "data-[state=indeterminate]:border-grey-30 data-[state=indeterminate]:bg-grey-30 data-[state=indeterminate]:text-grey-50",
        ].join(" "),
        false: "",
      },
    },
    defaultVariants: {
      size: "regular",
      error: false,
      readOnly: false,
      disabled: false,
    },
    compoundVariants: [
      {
        readOnly: true, size: "small",
        class: [ "border-[1.5px]", ].join(" "),
      },
      {
        readOnly: true, size: "regular",
        class: [ "border-[2px]", ].join(" "),
      },
      {
        readOnly: true, size: "large",
        class: [ "border-[2.5px]", ].join(" "),
      },
    ],
  }
)

type CheckboxVariants = VariantProps<typeof checkboxVariants>
export interface Props extends Omit<CheckboxRootProps, "disabled"> {
  class?: string
  size?: "small" | "regular" | "large"
  error?: boolean
  readOnly?: boolean
  disabled?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  size: "regular",
  readOnly: false,
  disabled: false,
})
const emits = defineEmits<CheckboxRootEmits>()
const delegatedProps = reactiveOmit(props, "class", "size", "error", "readOnly", "disabled")
const forwarded = useForwardPropsEmits(delegatedProps, emits)

const formError = inject(FORM_ERROR_INJECTION_KEY, null)
const isError = computed<boolean>(() => props.error ?? formError?.value ?? false)
/**
 * # 부분 선택 여부
 * - modelValue === "indeterminate" 일 때 부분 선택임
 */
const isIndeterminate = computed( () => props.modelValue === "indeterminate", );
const rootInert = computed(() => props.readOnly && !props.disabled)
/**
 * # 체크 표시
 *
 * 아이콘 세트(`IconCheck` / `IconMinus`)를 쓰지 않고 여기서 직접 그린다.
 * 세트의 체크는 fill 기반이라 획 두께가 viewBox 기준 약 2/24 인데, 체크박스가 쓰는
 * 8~12px 박스에서는 실제 0.7~1.0px 로 떨어져 안티에일리어싱 회색이 되어 흐려 보인다.
 * (측정: 8px 에서 최대 농도 148/255, lucide 시절 stroke-width=3 은 185/255)
 *
 * stroke 로 그리면 두께를 박스 크기와 무관하게 고정할 수 있어 어떤 사이즈에서도 또렷하다.
 * 라디오 점을 CSS 원으로 그린 것과 같은 이유의 예외 처리다.
 * 근본 해결은 Figma 에서 Material `weight` 축을 올리는 것 — upbox-icon/docs/figma-icon-issues.md 참고.
 */
const iconSize = computed(() => {
  switch (props.size) {
    case "small": return "h-[8px] w-[8px]"     // 체크박스 10px
    case "large": return "h-[12px] w-[12px]"   // 체크박스 16px
    default: return "h-[10px] w-[10px]"        // 체크박스 14px
  }
})

/**
 * viewBox(24) 기준 획 두께. 렌더 크기가 작을수록 키워야 화면상 두께가 유지된다.
 * 목표는 약 1.4px — `1.4 / 박스크기 * 24`.
 */
const checkStrokeWidth = computed(() => {
  switch (props.size) {
    case "small": return 4.2   // 1.4 /  8 * 24
    case "large": return 2.8   // 1.4 / 12 * 24
    default: return 3.4        // 1.4 / 10 * 24
  }
})
</script>

<template>
  <span
    class="inline-flex"
    :inert="rootInert ? true : undefined"
  >
    <CheckboxRoot
      v-bind="forwarded"
      :disabled="disabled"
      :aria-readonly="readOnly ? true : undefined"
      :class="[
        checkboxVariants({ size, error: isError, readOnly, disabled }),
        props.class,
      ]"
    >
      <CheckboxIndicator class="grid place-content-center text-current">
        <slot>
          <svg
            :class="iconSize"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            :stroke-width="checkStrokeWidth"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path v-if="isIndeterminate" d="M5 12h14" />
            <path v-else d="M20 6 9 17l-5-5" />
          </svg>
        </slot>
      </CheckboxIndicator>
    </CheckboxRoot>
  </span>
</template>
