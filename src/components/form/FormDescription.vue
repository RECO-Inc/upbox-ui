<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { computed, inject } from "vue"
import { cn } from "../../lib/utils"
import { FORM_ERROR_INJECTION_KEY, FORM_SIZE_INJECTION_KEY } from "./injectionKeys"
import { useFormField } from "./useFormField"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const { formDescriptionId } = useFormField()
const hasError = inject(FORM_ERROR_INJECTION_KEY, computed(() => false))
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
  <p
    v-if="!hasError"
    :id="formDescriptionId"
    :class="cn('text-grey-60', sizeClasses, props.class)"
  >
    <slot />
  </p>
</template>
