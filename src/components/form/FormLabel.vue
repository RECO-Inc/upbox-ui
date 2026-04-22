<script lang="ts" setup>
import type { LabelProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { computed, inject } from "vue"
import { cn } from "../../lib/utils"
import { Label } from '../label'
import { FORM_SIZE_INJECTION_KEY } from "./injectionKeys"
import { useFormField } from "./useFormField"

const props = defineProps<LabelProps & { class?: HTMLAttributes["class"] }>()

const { error, formItemId } = useFormField()
const size = inject(FORM_SIZE_INJECTION_KEY, computed(() => "regular" as const))

const sizeClasses = computed(() => {
  switch (size.value) {
    case "small":
      return "text-size-12"
    case "large":
    case "regular":
    default:
      return "text-size-14"
  }
})
</script>

<template>
  <Label
    :class="cn(
      'font-bold text-grey-90 leading-none',
      sizeClasses,
      error && 'text-red-80',
      props.class,
    )"
    :for="formItemId"
  >
    <slot />
  </Label>
</template>
