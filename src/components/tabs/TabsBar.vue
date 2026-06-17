<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import Tabs from "./Tabs.vue"
import TabsList from "./TabsList.vue"
import TabsTrigger from "./TabsTrigger.vue"

export interface TabItem {
  label: string
  value: string | number
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  modelValue?: string | number
  items: TabItem[]
  variant?: "default" | "round" | "box"
  color?: "navy" | "grey"
  size?: "small" | "regular" | "large" | "xlarge"
  class?: HTMLAttributes["class"]
  /** TabsList 에 적용할 추가 class */
  listClass?: string
}>(), {
  variant: "default",
  color: "navy",
  size: "regular",
})

const emit = defineEmits<{ "update:modelValue": [value: string | number] }>()

const model = computed<string | undefined>({
  get: () => (props.modelValue == null ? undefined : String(props.modelValue)),
  set: (raw) => {
    // String 비교로 원본 value(number 등) 타입을 보존해 emit
    const matched = props.items.find((item) => String(item.value) === raw)
    emit("update:modelValue", matched ? matched.value : (raw as string | number))
  },
})
</script>

<template>
  <Tabs v-model="model" :class="props.class">
    <TabsList :variant="variant" :color="color" :size="size" :class="listClass">
      <TabsTrigger
        v-for="item in items"
        :key="String(item.value)"
        :value="String(item.value)"
        :disabled="item.disabled"
        :variant="variant"
        :color="color"
        :size="size"
      >
        {{ item.label }}
      </TabsTrigger>
    </TabsList>
    <!-- 콘텐츠 패널이 필요하면 동일 Tabs root 안에서 compound TabsContent 사용 (escape hatch) -->
    <slot />
  </Tabs>
</template>
