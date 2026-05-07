<script setup lang="ts">
import { computed, inject, ref } from "vue"
import { useVModel } from "@vueuse/core"
import { Search, X } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import { FIELD_CONTROL_INJECTION_KEY } from "../form/injectionKeys"
import { InputFrame, InputIcon, useInputFrameInjectProvide } from "../input-frame"
import type { SearchFieldProps } from "./index"

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<SearchFieldProps>(), {
  variant: "basic",
  size: "regular",
  disabled: false,
  readonly: false,
  error: false,
  clearable: true,
})

const emits = defineEmits<{
  (e: "update:modelValue", value: string): void
  (e: "submit", value: string): void
  (e: "clear"): void
}>()

// --- inject/provide InputFrame design context ---
useInputFrameInjectProvide(() => ({
  variant: "default",
  size: props.size,
  error: props.error,
  readonly: props.readonly,
  disabled: props.disabled,
}))

// --- form integration ---
const fieldControl = inject(FIELD_CONTROL_INJECTION_KEY, null)
const localVModel = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue ?? "",
})

const modelValue = computed<string>({
  get: () => (fieldControl
    ? (fieldControl.value.modelValue as string)
    : localVModel.value) ?? "",
  set: (v) => {
    if (fieldControl) {
      fieldControl.value["onUpdate:modelValue"]?.(v)
    }
    else {
      localVModel.value = v
    }
  },
})

const handleBlur = () => {
  fieldControl?.value.onBlur?.()
}

// --- clear ---
const showClearButton = computed(() =>
  props.clearable && !!modelValue.value && !props.disabled && !props.readonly,
)

const handleClear = () => {
  modelValue.value = ""
  emits("clear")
}

// --- submit on Enter ---
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    emits("submit", modelValue.value)
  }
}

// --- focus tracking for clear button visibility ---
const isFocused = ref(false)
const handleFocus = () => { isFocused.value = true }
const handleInputBlur = (e: FocusEvent) => {
  isFocused.value = false
  handleBlur()
}
</script>

<template>
  <div :class="cn('relative w-full', props.disabled && 'cursor-not-allowed')">
    <InputFrame
      :size="props.size"
      :error="props.error"
      :readonly="props.readonly"
      :disabled="props.disabled"
      class="relative w-full"
    >
      <div class="flex h-full w-full min-w-0 items-center">
        <!-- filter variant: left slot + divider -->
        <template v-if="props.variant === 'filter'">
          <div class="flex h-full shrink-0 items-center">
            <slot name="filter" />
          </div>
          <!-- vertical divider -->
          <div class="mx-[8px] h-[12px] w-px shrink-0 bg-grey-40" />
        </template>

        <!-- basic variant: search icon on the left -->
        <template v-if="props.variant === 'basic'">
          <InputIcon class="mr-[8px] shrink-0 text-grey-50">
            <Search />
          </InputIcon>
        </template>

        <!-- input -->
        <input
          v-bind="$attrs"
          v-model="modelValue"
          type="search"
          :id="props.id"
          :name="props.name"
          :disabled="props.disabled"
          :readonly="props.readonly"
          :placeholder="props.placeholder"
          :autofocus="props.autofocus"
          :class="cn(
            'min-h-0 h-full min-w-0 flex-1 border-0 bg-transparent',
            'text-inherit outline-none',
            'placeholder:text-inherit',
            'disabled:cursor-not-allowed',
            '[&::-webkit-search-cancel-button]:hidden',
            '[&::-webkit-search-decoration]:hidden',
          )"
          @focus="handleFocus"
          @blur="handleInputBlur"
          @keydown="handleKeydown"
        />

        <!-- basic variant: clear button (when value exists) -->
        <template v-if="props.variant === 'basic'">
          <button
            v-if="showClearButton"
            type="button"
            class="ml-[8px] shrink-0 text-grey-50 transition-opacity hover:opacity-80"
            @click="handleClear"
          >
            <InputIcon>
              <X />
            </InputIcon>
          </button>
        </template>

        <!-- filter variant: search icon on the right -->
        <template v-if="props.variant === 'filter'">
          <InputIcon class="ml-[8px] shrink-0 text-grey-50">
            <Search />
          </InputIcon>
        </template>
      </div>
    </InputFrame>
  </div>
</template>
