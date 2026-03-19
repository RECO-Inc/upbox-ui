<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { cn } from '../../lib/utils'

export interface EmptyProps {
  /** Additional classes */
  class?: string
}

const props = defineProps<EmptyProps>()

const { t } = useI18n()
</script>

<template>
  <div
    :class="cn(
      'flex items-center justify-center w-full p-[16px] bg-grey-20 text-size-14 text-grey-60',
      props.class
    )"
  >
    <slot>{{ t('ui.empty') }}</slot>
  </div>
</template>
