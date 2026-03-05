<script setup lang="ts">
import { cn } from '../../lib/utils'
import { CheckCircle } from 'lucide-vue-next'

export interface StepItem {
  /** Step unique identifier */
  value: string | number
  /** Step label text */
  label: string
  /** Whether this step is completed */
  isComplete: boolean
}

export interface StepperProps {
  /** List of steps */
  steps: StepItem[]
  /** Additional classes */
  class?: string
}

const props = defineProps<StepperProps>()

const currentStep = defineModel<string | number>({ required: true })

function onClickStep(step: StepItem) {
  // 완료된 단계만 클릭 가능
  if (step.isComplete) {
    currentStep.value = step.value
  }
}
</script>

<template>
  <div
    :class="cn(
      'flex flex-wrap items-center justify-center bg-primary-100 rounded-md p-3 sm:p-4 gap-x-4 sm:gap-x-11 gap-y-2 text-size-13',
      props.class
    )"
  >
    <template v-for="(step, stepIdx) in steps" :key="`stepper-item-${step.value}`">
      <div
        class="flex items-center select-none shrink-0"
        :class="[
          currentStep !== step.value && !step.isComplete && 'opacity-50',
          currentStep === step.value && 'font-bold opacity-100',
          step.isComplete && 'opacity-100 cursor-pointer',
        ]"
        @click="onClickStep(step)"
      >
        <!-- Complete Icon -->
        <template v-if="step.isComplete">
          <CheckCircle class="w-[18px] h-[18px] text-base-10 shrink-0" />
        </template>
        <!-- Step Number -->
        <template v-else>
          <span
            class="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-base-10 text-primary-80 text-size-11 shrink-0"
          >
            {{ stepIdx + 1 }}
          </span>
        </template>

        <!-- Label -->
        <span class="ml-2 text-base-10 whitespace-nowrap">{{ step.label }}</span>
      </div>

      <!-- Divider -->
      <div
        v-if="stepIdx !== steps.length - 1"
        class="w-px h-3 bg-base-30 opacity-40 hidden sm:block"
      />
    </template>
  </div>
</template>
