<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "../../lib/utils"

const props = defineProps<{ class?: HTMLAttributes["class"] }>()
</script>

<template>
  <!--
    좁은 화면에서도 가로 배치를 유지한다.

    shadcn 원본은 `flex-col-reverse sm:flex-row ... sm:gap-x-[8px]` 였는데, 간격이
    `sm:` 에만 걸려 있어 640px 미만에서 버튼이 **간격 없이** 세로로 붙었다. 게다가
    `col-reverse` 라 확인/취소 순서까지 뒤집혔다. 모바일 팝업이 실제로 그렇게 보였다.

    이 DS 의 확인 다이얼로그는 시안상 좁은 화면에서도 두 버튼이 나란히 놓인다.
    버튼을 폭에 꽉 채워야 하면 `Modal` 의 `footerButtonGrow` 를 쓴다.
  -->
  <div
    :class="
      cn(
        'flex flex-row items-center justify-end gap-x-[8px]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
