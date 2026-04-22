<script lang="ts" setup>
import { ErrorMessage } from "vee-validate"
import { computed, inject, toValue } from "vue"
import { FORM_SIZE_INJECTION_KEY } from "./injectionKeys"
import { useFormField } from "./useFormField"

const { name, formMessageId } = useFormField()
const size = inject(FORM_SIZE_INJECTION_KEY, computed(() => "regular" as const))

const sizeClasses = computed(() => {
  switch (size.value) {
    case "small":
      return "text-size-10 leading-[16px]"
    case "large":
      return "text-size-13"
    case "regular":
    default:
      return "text-size-12"
  }
})
</script>

<template>
  <ErrorMessage
    :id="formMessageId"
    as="p"
    :name="toValue(name)"
    :class="['text-red-80', sizeClasses]"
  />
</template>
