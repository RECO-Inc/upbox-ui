<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, inject } from "vue"
import { cn } from "../../lib/utils"
import { INPUT_TRAILING_CONTEXT_KEY } from "./inputContext"

const props = withDefaults(
  defineProps<{
    /**
     * 부모 `Input` 밖에서 쓸 때만. `Input` 자식이면 `Input`의 model·`maxLength`·`byteMode`가 우선
     */
    current?: number
    maxLength?: number
    byteMode?: boolean
    class?: HTMLAttributes["class"]
  }>(),
  {},
)

const context = inject(INPUT_TRAILING_CONTEXT_KEY, null)

const current = computed(() => {
  if (context)
    return context.currentCount.value
  return props.current ?? 0
})

const maxLength = computed(() => {
  if (context)
    return context.maxLength.value
  return props.maxLength
})

const isByte = computed(() => {
  if (context)
    return context.byteMode.value
  return props.byteMode ?? false
})
</script>

<template>
  <span
    :class="cn(
      'shrink-0 text-right text-size-10 leading-[16px] whitespace-nowrap text-grey-60',
      props.class,
    )"
  >
    <span>{{ current }}</span>
    <span v-if="maxLength" class="text-grey-90">/{{ maxLength }}</span>
    <span v-if="isByte" class="text-grey-60"> byte</span>
  </span>
</template>
