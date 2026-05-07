<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, provide, ref, watch } from "vue"
import { Time } from "@internationalized/date"
import { Popover, PopoverContent } from "../popover"
import { cn } from "../../lib/utils"
import {
  pickInputFrameDesign,
  useInputFrameInjectProvide,
  type InputFrameDesignProps,
} from "../input-frame"
import TimeTrigger from "./TimeTrigger.vue"
import TimeInput from "./TimeInput.vue"
import TimePanel from "./TimePanel.vue"
import { TIME_PICKER_CTX_KEY } from "./timePickerContext"

const localModel = defineModel<Time | null>()
const props = withDefaults(
  defineProps<
    InputFrameDesignProps & {
      class?: HTMLAttributes["class"]
      popoverContentClass?: HTMLAttributes["class"]
    }
  >(),
  {
    variant: undefined,
    size: undefined,
    error: undefined,
    readonly: undefined,
    disabled: undefined,
  },
)

const design = useInputFrameInjectProvide(() => pickInputFrameDesign(props))

const model = computed({
  get(): Time | null | undefined {
    return localModel.value
  },
  set(v: Time | null | undefined) {
    localModel.value = v
  },
})

const draftError = ref(false)

provide(TIME_PICKER_CTX_KEY, { model, draftError })

const open = ref(false)

const panelDraft = ref<Time | null>(null)

watch(open, (isOpen) => {
  if (isOpen)
    panelDraft.value = model.value ?? null
})

const isPanelLocked = computed(() => design.readonly.value || design.disabled.value)

watch(
  isPanelLocked,
  (locked) => {
    if (locked)
      open.value = false
  },
  { immediate: true },
)

function onPanelChange(t: Time | null) {
  model.value = t
  open.value = false
}
</script>

<template>
  <Popover v-model:open="open">
    <TimeTrigger :class="props.class">
      <slot>
        <TimeInput />
      </slot>
    </TimeTrigger>
    <PopoverContent
      align="end"
      :class="
        cn(
          '!p-0 w-max max-w-[calc(100vw-16px)] !border-1 !border-grey-40 bg-transparent p-0 shadow-none',
          props.popoverContentClass,
        )
      "
    >
      <TimePanel
        :model-value="panelDraft as Time | null"
        @update:model-value="(v) => (panelDraft = v)"
        @change="onPanelChange"
      />
    </PopoverContent>
  </Popover>
</template>
