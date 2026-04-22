<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { useId } from "reka-ui"
import { computed, inject, provide } from "vue"
import { FieldContextKey } from "vee-validate"
import { cn } from "../../lib/utils"
import { FORM_ERROR_INJECTION_KEY, FORM_ITEM_INJECTION_KEY } from "./injectionKeys"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)

const fieldContext = inject(FieldContextKey, null)
const hasError = computed(() => !!fieldContext?.errorMessage.value)
provide(FORM_ERROR_INJECTION_KEY, hasError)
</script>

<template>
  <div :class="cn('flex flex-col gap-[4px]', props.class)">
    <slot />
  </div>
</template>
