<script setup lang="ts">
import { provide, toRef } from 'vue'
import { FIELD_CONTROL_INJECTION_KEY, type FieldControlBindings } from './injectionKeys'

const props = defineProps<{
  bindings: FieldControlBindings
}>()

provide(FIELD_CONTROL_INJECTION_KEY, toRef(props, 'bindings'))
</script>

<template>
  <slot />
</template>
