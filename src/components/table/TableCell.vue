<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { computed, onBeforeUnmount, onMounted, onUpdated, ref } from "vue"
import { TextAlignStart } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip"

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes["class"]
    /**
     * 셀 내용을 clampLines 줄에서 말줄임하고, 실제로 잘렸을 때만 전문 보기 아이콘을 노출한다.
     * 아이콘에 hover 하면 잘리지 않은 전체 텍스트가 툴팁으로 뜬다.
     */
    truncate?: boolean
    /** truncate 시 노출할 최대 줄 수 */
    clampLines?: number
    /**
     * 셀 내용 정렬 (default: left).
     * 내부 flex 컨테이너를 justify 하므로 text-align 보다 안전하다. TableHead 의 align 과 대응한다.
     */
    align?: "left" | "center" | "right"
  }>(),
  {
    truncate: false,
    clampLines: 2,
  },
)

/** align 이나 truncate 가 필요하면 내부 flex 래퍼를 렌더한다 */
const needsWrapper = computed(() => props.truncate || props.align != null)

const justifyClass = computed(() =>
  props.align === "center" ? "justify-center" : props.align === "right" ? "justify-end" : "justify-start",
)

defineSlots<{
  default?: () => any
  /** 전문 보기 아이콘 교체용. 미지정 시 lucide TextAlignStart */
  "tooltip-icon"?: () => any
}>()

const textRef = ref<HTMLElement>()
const isTruncated = ref(false)
const tooltipText = ref("")

/**
 * 말줄임 발생 여부 감지.
 * scrollHeight > clientHeight 이면 clamp 로 잘린 상태다.
 * 툴팁 텍스트는 textContent 로 뽑아 슬롯에 커스텀 마크업이 들어와도 전문이 잡히게 한다.
 */
function checkTruncation() {
  if (!props.truncate || !textRef.value) return
  isTruncated.value = textRef.value.scrollHeight > textRef.value.clientHeight
  if (isTruncated.value) {
    tooltipText.value = textRef.value.textContent?.trim() ?? ""
  }
}

// 컬럼 리사이즈처럼 CSS 너비만 바뀌는 경우는 렌더가 없으므로 ResizeObserver 로 잡는다.
let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  checkTruncation()
  if (props.truncate && textRef.value) {
    resizeObserver = new ResizeObserver(checkTruncation)
    resizeObserver.observe(textRef.value)
  }
})

onUpdated(checkTruncation) // 데이터 변경 시 재감지

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})

/**
 * 패딩은 단일 값이다(size prop 없음).
 * 시안(Component _v02)의 table 은 singleline / doubleLine variant 만 있고 밀도 축이 없다.
 * 1줄 행 높이 32px = line-height 20px + 6px * 2 이므로 세로 6px / 가로 8px 로 고정한다.
 * 2줄 이상은 콘텐츠가 늘어난 결과이므로 별도 prop 없이 자연스럽게 높아진다.
 */
</script>

<template>
  <td
    :class="
      cn(
        'align-middle text-grey-90 text-size-13 break-words max-w-full py-[6px] px-[8px] [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5',
        props.class,
      )
    "
  >
    <div v-if="needsWrapper" :class="['flex items-center gap-[4px]', justifyClass]">
      <!--
        display / box-orient 는 클래스로 준다. 벤더 프리픽스를 JS 스타일 객체로 넘기면
        환경에 따라 조용히 누락될 수 있는데, -webkit-box-orient 가 빠지면 line-clamp 가
        아예 동작하지 않는다(브라우저 실측 확인). 줄 수만 동적이라 인라인으로 남긴다.
        flex-1 을 주지 않는 이유 — 짧은 내용은 폭을 차지하지 않아야 align 이 먹고,
        긴 내용은 flex: 0 1 auto 로 남는 폭까지 늘어난 뒤 줄바꿈된다.
      -->
      <div
        v-if="truncate"
        ref="textRef"
        class="min-w-0 overflow-hidden [-webkit-box-orient:vertical] [display:-webkit-box]"
        :style="{ WebkitLineClamp: String(clampLines) }"
      >
        <slot />
      </div>
      <slot v-else />
      <TooltipProvider v-if="truncate && isTruncated">
        <Tooltip>
          <TooltipTrigger as-child>
            <!-- 행 클릭 핸들러가 있는 테이블에서 아이콘 조작이 행 클릭으로 새지 않게 막는다 -->
            <span
              class="inline-flex shrink-0 cursor-pointer items-center select-none"
              @click.stop
              @mousedown.stop
            >
              <slot name="tooltip-icon">
                <TextAlignStart class="h-[20px] w-[20px] text-grey-40" />
              </slot>
            </span>
          </TooltipTrigger>
          <TooltipContent side="top" align="center" :side-offset="6" class="max-w-[224px]">
            <p class="whitespace-pre-line">{{ tooltipText }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
    <slot v-else-if="!needsWrapper" />
  </td>
</template>
