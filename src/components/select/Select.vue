<script setup lang="ts">
import type { AcceptableValue, SelectRootEmits, SelectRootProps } from "reka-ui"
import { reactiveOmit } from "@vueuse/core"
import { computed, inject, provide } from "vue"
import { SelectRoot, useForwardPropsEmits } from "reka-ui"
import { FIELD_CONTROL_INJECTION_KEY } from "../form/injectionKeys"
import { SELECT_CLEARABLE_KEY } from "./selectContext"

const props = withDefaults(defineProps<SelectRootProps & {
  /**
   * 선택한 항목을 지울 수 있음.
   * true 이면 SelectTrigger 에 X 버튼이 표시된다.
   */
  clearable?: boolean
}>(), {
  clearable: false,
})
const emits = defineEmits<SelectRootEmits>()

const fieldControl = inject(FIELD_CONTROL_INJECTION_KEY, null)

const forwarded = useForwardPropsEmits(
  reactiveOmit(props, "modelValue", "clearable"),
  emits,
)

const modelValue = computed<AcceptableValue | undefined>(() =>
  fieldControl
    ? (fieldControl.value.modelValue as AcceptableValue | undefined)
    : props.modelValue,
)

function handleUpdate(value: AcceptableValue) {
  if (fieldControl) {
    fieldControl.value["onUpdate:modelValue"]?.(value)
  } else {
    emits("update:modelValue", value)
  }
}

provide(SELECT_CLEARABLE_KEY, computed(() => props.clearable))
</script>

<template>
  <SelectRoot
    v-bind="forwarded"
    :model-value="modelValue"
    @update:model-value="handleUpdate"
  >
    <slot />
  </SelectRoot>
</template>
