<script setup lang="ts">
import type { DropdownMenuRadioItemEmits, DropdownMenuRadioItemProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "../../lib/utils"

const props = defineProps<DropdownMenuRadioItemProps & { class?: HTMLAttributes["class"] }>()

const emits = defineEmits<DropdownMenuRadioItemEmits>()

const delegatedProps = reactiveOmit(props, "class")

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="forwarded"
    :class="cn(
      'relative flex cursor-default select-none items-center rounded-sm py-[6px] pl-[32px] pr-[8px] text-sm outline-hidden transition-colors focus:bg-grey-30 focus:text-grey-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      props.class,
    )"
  >
    <span class="absolute left-[8px] flex h-[14px] w-[14px] items-center justify-center">
      <DropdownMenuItemIndicator>
        <!--
          아이콘 세트에 단일 점 글리프가 없어 CSS 원으로 그린다.
          기존 lucide `Circle`(r=10 + stroke 2 → 지름 22/24)을 16px 박스에 넣어 약 14.7px 였으므로
          슬롯(14px)을 채우는 14px 로 맞춘다.
        -->
        <span class="size-[14px] rounded-full bg-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
