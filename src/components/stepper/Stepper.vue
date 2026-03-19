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
      'flex flex-wrap items-center justify-center bg-navy-100 rounded-md p-[12px] sm:p-[16px] gap-x-[16px] sm:gap-x-[44px] gap-y-[8px] text-size-13',
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
          <CheckCircle class="w-[18px] h-[18px] text-grey-10 shrink-0" />
        </template>
        <!-- Step Number -->
        <template v-else>
          <span
            class="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-grey-10 text-navy-80 text-size-11 shrink-0"
          >
            {{ stepIdx + 1 }}
          </span>
        </template>

        <!-- Label -->
        <span class="ml-[8px] text-grey-10 whitespace-nowrap">{{ step.label }}</span>
      </div>

      <!-- Divider -->
      <div
        v-if="stepIdx !== steps.length - 1"
        class="w-px h-[12px] bg-grey-30 opacity-40 hidden sm:block"
      />
    </template>
  </div>
</template>
