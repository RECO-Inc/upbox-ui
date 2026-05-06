<script setup lang="ts">
/**
 * MobileTimePicker — `TimePicker` 의 모바일 변형.
 * - 트리거 / 입력은 `TimeInput`(+ `TimeTrigger` 의 input frame) 그대로 사용
 * - 팝업 대신 `Drawer` + `MobileTimeDial` 사용
 *
 * 데스크톱은 `TimePicker`.
 */
import type { HTMLAttributes } from "vue"
import { computed, provide, ref, watch } from "vue"
import { Time } from "@internationalized/date"
import { Clock } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import { Drawer, DrawerContent } from "../drawer"
import {
  InputFrame,
  InputIcon,
  pickInputFrameDesign,
  useInputFrameInjectProvide,
  type InputFrameDesignProps,
} from "../input-frame"
import TimeInput from "./TimeInput.vue"
import MobileTimeDial from "./MobileTimeDial.vue"
import { TIME_PICKER_CTX_KEY } from "./timePickerContext"

const localModel = defineModel<Time | null>()
const props = withDefaults(
  defineProps<
    InputFrameDesignProps & {
      class?: HTMLAttributes["class"]
      drawerContentClass?: HTMLAttributes["class"]
      title?: string
    }
  >(),
  {
    variant: undefined,
    size: undefined,
    error: undefined,
    readonly: undefined,
    disabled: undefined,
    title: "시간 선택",
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

const dialDraft = ref<Time | null>(null)

watch(open, (isOpen) => {
  if (isOpen)
    dialDraft.value = model.value ?? null
})

const isLocked = computed(() => design.readonly.value || design.disabled.value)

watch(
  isLocked,
  (locked) => {
    if (locked)
      open.value = false
  },
  { immediate: true },
)

const isTriggerDisabled = computed(
  () => design.disabled.value || design.readonly.value,
)
const frameError = computed(
  () => design.error.value || draftError.value,
)

function onDialChange(t: Time | null) {
  model.value = t
  open.value = false
}

function onOpen() {
  if (isTriggerDisabled.value)
    return
  open.value = true
}
</script>

<template>
  <InputFrame
    :error="frameError"
    :class="cn('w-full min-w-0', props.class)"
  >
    <div class="flex h-full w-full min-w-0 items-center gap-[8px]">
      <slot>
        <TimeInput />
      </slot>
      <button
        v-if="!design.readonly.value"
        type="button"
        :disabled="isTriggerDisabled"
        class="shrink-0 text-grey-60"
        aria-label="시간 선택 열기"
        @click="onOpen"
      >
        <InputIcon class="text-grey-60">
          <Clock />
        </InputIcon>
      </button>
    </div>
  </InputFrame>

  <Drawer v-model:open="open">
    <DrawerContent :class="cn('!border-0 !bg-transparent !p-0', props.drawerContentClass)">
      <MobileTimeDial
        :model-value="dialDraft as Time | null"
        :title="props.title"
        class="mx-auto"
        @update:model-value="(v) => (dialDraft = v)"
        @change="onDialChange"
        @close="open = false"
      />
    </DrawerContent>
  </Drawer>
</template>
