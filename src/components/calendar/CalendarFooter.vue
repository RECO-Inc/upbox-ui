<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"
import { Button } from "../button"
import { RotateCcw } from "lucide-vue-next"
import { useI18n } from "vue-i18n"
import TextButton from "../text-button/TextButton.vue"

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
      'flex items-center justify-between gap-[10px] px-[16px] pb-[8px]',
      props.class
    )"
  >
    <slot name="reset" :on-reset="() => emit('reset')">
      <TextButton
        variant="secondary"
        size="2xsmall"
        @focus.prevent
        @focusout.prevent.stop
        @mousedown.prevent
        @click="emit('reset')"
      >
        <RotateCcw class="w-[16px] h-[16px] mr-[4px]" />
        {{ t('word.reset') }}
      </TextButton>
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
