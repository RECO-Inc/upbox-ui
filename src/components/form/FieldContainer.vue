<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Field } from 'vee-validate'
import { computed, provide, toRef } from 'vue'
import { cn } from '../../lib/utils'
import FormItem from './FormItem.vue'
import FormLabel from './FormLabel.vue'
import FormControl from './FormControl.vue'
import FormDescription from './FormDescription.vue'
import FormMessage from './FormMessage.vue'
import FieldControlProvider from './FieldControlProvider.vue'
import { FORM_SIZE_INJECTION_KEY, type FieldSize } from './injectionKeys'

export interface FieldContainerProps {
  name: string
  rules?: unknown
  modelValue?: unknown
  initialValue?: unknown
  validateOnMount?: boolean
  size?: FieldSize
  label?: string
  description?: string
  required?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<FieldContainerProps>(), {
  size: 'regular',
  required: false,
})

const sizeRef = toRef(props, 'size')
provide(FORM_SIZE_INJECTION_KEY, computed(() => sizeRef.value))

const requiredMarkSize = computed(() =>
  props.size === 'small' ? 'text-size-12' : 'text-size-14',
)
</script>

<template>
  <Field
    v-slot="slotProps"
    :name="name"
    :rules="rules as any"
    :model-value="modelValue"
    :initial-value="initialValue"
    :validate-on-mount="validateOnMount"
  >
    <FormItem :class="props.class">
      <div
        v-if="label || $slots.tooltip"
        class="flex items-center"
      >
        <span
          v-if="required"
          :class="['font-bold text-red-80 mr-[2px]', requiredMarkSize]"
          aria-hidden="true"
        >*</span>
        <FormLabel v-if="label">{{ label }}</FormLabel>
        <span v-if="$slots.tooltip" class="ml-[4px] inline-flex items-center">
          <slot name="tooltip" />
        </span>
      </div>
      <FieldControlProvider :bindings="slotProps.componentField">
        <FormControl>
          <slot v-bind="slotProps" />
        </FormControl>
      </FieldControlProvider>
      <FormMessage />
      <FormDescription v-if="description">{{ description }}</FormDescription>
    </FormItem>
  </Field>
</template>
