<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"
import { Button } from "../button"
import { RotateCcw } from "lucide-vue-next"
import { useI18n } from "vue-i18n"

interface Props {
  class?: HTMLAttributes["class"]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'reset'): void
  (e: 'done'): void
}>()

const { t } = useI18n()
</script>

<template>
  <div
    :class="cn(
      'flex items-center justify-between gap-2.5 px-4 pb-2',
      props.class
    )"
  >
    <slot name="reset" :on-reset="() => emit('reset')">
      <Button
        variant="assistant"
        style="text"
        size="xsmall"
        @focus.prevent
        @focusout.prevent.stop
        @mousedown.prevent
        @click="emit('reset')"
      >
        <RotateCcw class="w-4 h-4 mr-1" />
        {{ t('word.reset') }}
      </Button>
    </slot>
    <slot name="done" :on-done="() => emit('done')">
      <Button
        variant="primary"
        size="small"
        @focus.prevent
        @focusout.prevent.stop
        @mousedown.prevent
        @click="emit('done')"
      >
        {{ t('word.done') }}
      </Button>
    </slot>
  </div>
</template>
