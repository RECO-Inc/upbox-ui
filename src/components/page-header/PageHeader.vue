<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed } from "vue"
import { ChevronLeft } from "lucide-vue-next"
import { cn } from "../../lib/utils"

const props = withDefaults(defineProps<{
  /** 제목 (default 슬롯으로도 대체 가능) */
  title?: string
  /** 보조 설명 (#description 슬롯으로도 대체 가능) */
  description?: string
  /**
   * 제목 크기. 웹 기본 regular(24px). 모바일은 large(28)/small(22).
   * large=page-title-1(28), regular=page-title-2(24), small=page-title-3(22)
   */
  size?: "small" | "regular" | "large"
  /**
   * description 위치.
   * inline = 제목 우측 12px (웹), block = 제목 아래 14px (모바일/스택)
   */
  descriptionPlacement?: "inline" | "block"
  /** 좌측 back(<) 화살표 노출 → @back emit (라우팅은 소비자가 처리) */
  back?: boolean
  /** 제목 헤딩 태그 (시맨틱 레벨). size 와 독립. default h2 */
  as?: "h1" | "h2" | "h3" | "h4"
  class?: HTMLAttributes["class"]
}>(), {
  size: "regular",
  descriptionPlacement: "inline",
  back: false,
  as: "h2",
})

const emit = defineEmits<{ back: [] }>()

const slots = defineSlots<{
  /** 제목 (title prop 대체) */
  default?: () => unknown
  /** 보조 설명 (description prop 대체) */
  description?: () => unknown
  /** 타이틀 우측 배지 등 */
  badge?: () => unknown
  /** 우측 액션 버튼 그룹 */
  actions?: () => unknown
}>()

const hasDescription = computed(() => !!props.description || !!slots.description)

const titleClass = {
  large: "text-page-title-1",
  regular: "text-page-title-2",
  small: "text-page-title-3",
} as const
</script>

<template>
  <div
    :class="cn(
      'flex justify-between gap-x-[10px] mb-[16px]',
      descriptionPlacement === 'block' ? 'items-start' : 'items-center',
      props.class,
    )"
  >
    <div
      class="flex min-w-0 grow gap-x-[8px]"
      :class="descriptionPlacement === 'block' ? 'items-start' : 'items-center'"
    >
      <button
        v-if="back"
        type="button"
        aria-label="뒤로"
        class="shrink-0 cursor-pointer text-grey-100 transition-colors hover:text-grey-80"
        @click="emit('back')"
      >
        <ChevronLeft class="size-[24px]" />
      </button>

      <div class="flex min-w-0 grow flex-col">
        <div class="flex min-w-0 items-center gap-x-[8px]">
          <component
            :is="as"
            class="text-grey-100"
            :class="[titleClass[size], descriptionPlacement === 'block' ? 'grow min-w-0' : 'min-w-0 truncate']"
          >
            <slot>{{ title }}</slot>
          </component>
          <slot name="badge" />
          <span
            v-if="hasDescription && descriptionPlacement === 'inline'"
            class="min-w-0 truncate text-size-12 text-grey-60"
          ><slot name="description">{{ description }}</slot></span>
        </div>
        <p
          v-if="hasDescription && descriptionPlacement === 'block'"
          class="mt-[8px] text-size-14 text-grey-70"
        ><slot name="description">{{ description }}</slot></p>
      </div>
    </div>

    <div v-if="slots.actions" class="flex shrink-0 items-center gap-x-[8px]">
      <slot name="actions" />
    </div>
  </div>
</template>
