<script setup lang="ts" generic="T">
import type { AcceptableValue } from "reka-ui"
import { computed, inject } from "vue"
import { useVModel } from "@vueuse/core"
import { SelectRoot } from "reka-ui"
import { cn } from "../../lib/utils"
import { FIELD_CONTROL_INJECTION_KEY } from "../form/injectionKeys"
import { pickInputFrameDesign, useInputFrameInjectProvide } from "../input-frame"
import type { SelectFieldProps } from "./selectFieldProps"
import SelectContent from "./SelectContent.vue"
import SelectItem from "./SelectItem.vue"
import SelectTrigger from "./SelectTrigger.vue"
import SelectValue from "./SelectValue.vue"

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<SelectFieldProps<T>>(), {
  disabled: false,
  readonly: false,
})

const emits = defineEmits<{
  "update:modelValue": [value: T | null]
}>()

/**
 * 빈 값 sentinel.
 *
 * reka-ui `SelectItem` 은 `''` 를 placeholder sentinel 로 취급해 옵션 값으로 쓸 수 없다.
 * `AcceptableValue` 가 `Record<string, any>` 를 허용하므로, 문자열 충돌이 불가능한
 * 모듈 프라이빗 고유 객체 레퍼런스를 sentinel 로 사용하고 identity 로 역매핑한다.
 * (`'__EMPTY__'` 같은 매직 스트링은 `T extends string` 일 때 충돌 가능)
 */
const EMPTY_SENTINEL = Object.freeze({}) as Record<string, never>

function isEmptyValue(v: unknown): boolean {
  return v === "" || v === null || v === undefined
}

// FieldContainer(vee-validate) 통합. 컴포넌트가 직접 fieldControl 을 소비하므로
// sentinel 변환이 폼 값과 reka 값 사이에 정확히 위치한다. (compound `Select` 미사용)
const fieldControl = inject(FIELD_CONTROL_INJECTION_KEY, null)

const localVModel = useVModel(props, "modelValue", emits, { passive: true })

const currentValue = computed<T | null | undefined>(() =>
  fieldControl
    ? (fieldControl.value.modelValue as T | null | undefined)
    : (localVModel.value as T | null | undefined),
)

function commit(v: T | null) {
  if (fieldControl) {
    fieldControl.value["onUpdate:modelValue"]?.(v)
  }
  else {
    localVModel.value = v as typeof localVModel.value
  }
}

// 빈 옵션은 최대 1개만 지원. 2개 이상이면 역매핑이 모호하므로 경고.
const emptyOptions = computed(() =>
  props.options.filter(o => isEmptyValue(o.value)),
)
const emptyOption = computed(() => emptyOptions.value[0] ?? null)

if (emptyOptions.value.length > 1) {
  // eslint-disable-next-line no-console
  console.warn(
    "[SelectField] 빈 값(''/null/undefined) 옵션은 1개만 지원합니다. "
    + "여러 개를 넘기면 선택값 역매핑이 모호해집니다.",
  )
}

interface InternalOption {
  label: string
  disabled?: boolean
  raw: T
  /** reka-ui 로 넘기는 값 (빈 값이면 sentinel) */
  rk: AcceptableValue
}

const internalOptions = computed<InternalOption[]>(() =>
  props.options.map(o => ({
    label: o.label,
    disabled: o.disabled,
    raw: o.value,
    rk: isEmptyValue(o.value)
      ? EMPTY_SENTINEL
      : (o.value as unknown as AcceptableValue),
  })),
)

const selected = computed<AcceptableValue | undefined>({
  get() {
    const cur = currentValue.value
    if (isEmptyValue(cur)) {
      return emptyOption.value ? EMPTY_SENTINEL : undefined
    }
    const hit = internalOptions.value.find(o => o.raw === cur)
    return hit ? hit.rk : undefined
  },
  set(rk) {
    if (rk === EMPTY_SENTINEL) {
      commit((emptyOption.value ? emptyOption.value.value : null) as T | null)
      return
    }
    const hit = internalOptions.value.find(o => o.rk === rk)
    commit((hit ? hit.raw : (rk as unknown)) as T | null)
  },
})

// reka SelectRoot 에는 readonly 가 없다 → 상호작용은 disabled 로 막고,
// 시각은 InputFrame 에 readonly/disabled 를 분리 제공해 readonly 톤으로 표시.
const interactionDisabled = computed(() => props.disabled || props.readonly)

useInputFrameInjectProvide(() => pickInputFrameDesign(props))
</script>

<template>
  <SelectRoot
    v-model="selected"
    :disabled="interactionDisabled"
    :name="name"
    :required="required"
  >
    <SelectTrigger
      v-bind="$attrs"
      :class="cn('w-full', props.class)"
    >
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem
        v-for="(o, i) in internalOptions"
        :key="i"
        :value="o.rk"
        :disabled="o.disabled"
      >
        {{ o.label }}
      </SelectItem>
    </SelectContent>
  </SelectRoot>
</template>
