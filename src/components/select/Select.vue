<script setup lang="ts">
import type { AcceptableValue, SelectRootEmits, SelectRootProps } from "reka-ui"
import { reactiveOmit } from "@vueuse/core"
import { computed, inject } from "vue"
import { SelectRoot, useForwardPropsEmits } from "reka-ui"
import { FIELD_CONTROL_INJECTION_KEY } from "../form/injectionKeys"

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()

const fieldControl = inject(FIELD_CONTROL_INJECTION_KEY, null)

const forwarded = useForwardPropsEmits(
  reactiveOmit(props, "modelValue"),
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
