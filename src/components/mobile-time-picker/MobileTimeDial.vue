<script setup lang="ts">
/**
 * MobileTimeDial — Figma `timePicker` 모바일 (node `12247:8598`) 정렬 wheel-pick 패널
 * - 3 컬럼 (오전·오후 / 시 1~12 / 분 00~59) 휠 스크롤
 * - 가운데 행이 선택값. 스크롤 멈추면 가장 가까운 값에 스냅한다.
 * - 푸터: `선택 안함` (tertiary outlined) + `저장` (primary)
 *
 * 데스크톱 단일 시각은 `TimePanel`.
 */
import type { HTMLAttributes } from "vue"
import { Time } from "@internationalized/date"
import { computed, nextTick, onMounted, ref, watch } from "vue"
import { X } from "lucide-vue-next"
import { cn } from "../../lib/utils"
import { Button } from "../button"

defineOptions({ name: "MobileTimeDial" })

const props = withDefaults(
  defineProps<{
    modelValue?: Time | null
    title?: string
    showClose?: boolean
    class?: HTMLAttributes["class"]
  }>(),
  {
    modelValue: null,
    title: "시간 선택",
    showClose: true,
  },
)

const emit = defineEmits<{
  "update:modelValue": [value: Time | null]
  "change": [value: Time | null]
  "close": []
}>()

type Meridiem = "AM" | "PM"

/** 휠 셀 높이 — Figma 56px 비율을 유지 */
const ITEM_H = 56
/** 위·아래 padding 셀 수 (가운데 정렬용) */
const PAD = 1

const meridiems: Meridiem[] = ["AM", "PM"]
const hours = Array.from({ length: 12 }, (_, i) => i + 1) // 1..12
const minutes = Array.from({ length: 60 }, (_, i) => i)

function to12h(hour24: number): { h12: number, m: Meridiem } {
  const m: Meridiem = hour24 >= 12 ? "PM" : "AM"
  const h = hour24 % 12 === 0 ? 12 : hour24 % 12
  return { h12: h, m }
}

function from12h(h12: number, m: Meridiem): number {
  const base = h12 % 12
  return m === "PM" ? base + 12 : base
}

const selMeridiem = ref<Meridiem>("AM")
const selHour = ref<number>(12)
const selMinute = ref<number>(0)

function syncFromModel(v: Time | null | undefined) {
  if (!v) {
    /* 빈 값일 때는 휠 위치는 보존하되 (현재 selHour 등 그대로) 모델만 null */
    return
  }
  const { h12, m } = to12h(v.hour)
  selMeridiem.value = m
  selHour.value = h12
  selMinute.value = v.minute
}

watch(() => props.modelValue, (v) => syncFromModel(v ?? null), { immediate: true })

const meridiemCol = ref<HTMLDivElement | null>(null)
const hourCol = ref<HTMLDivElement | null>(null)
const minuteCol = ref<HTMLDivElement | null>(null)

function scrollToIndex(el: HTMLDivElement | null, index: number, smooth: boolean) {
  if (!el)
    return
  el.scrollTo({ top: index * ITEM_H, behavior: smooth ? "smooth" : "auto" })
}

function syncScrollToSelection(smooth = false) {
  scrollToIndex(meridiemCol.value, meridiems.indexOf(selMeridiem.value), smooth)
  scrollToIndex(hourCol.value, hours.indexOf(selHour.value), smooth)
  scrollToIndex(minuteCol.value, minutes.indexOf(selMinute.value), smooth)
}

onMounted(() => {
  nextTick(() => syncScrollToSelection(false))
})

watch([selMeridiem, selHour, selMinute], () => {
  /* 외부 model 갱신은 저장 누를 때만 — 여기서는 휠 정렬만 유지 */
})

/** 스크롤 정지 후 가장 가까운 셀 인덱스로 스냅 */
function snapAfterScroll<T>(
  el: HTMLDivElement | null,
  list: T[],
  apply: (next: T) => void,
  current: T,
) {
  if (!el)
    return
  const idx = Math.round(el.scrollTop / ITEM_H)
  const clamped = Math.max(0, Math.min(list.length - 1, idx))
  const next = list[clamped]!
  if (next !== current)
    apply(next)
  /** 살짝 어긋난 스냅 보정 */
  const target = clamped * ITEM_H
  if (Math.abs(el.scrollTop - target) > 1)
    el.scrollTo({ top: target, behavior: "smooth" })
}

/** 디바운스용 타이머 (스크롤 종료 검출) */
const meridiemTimer = ref<number | null>(null)
const hourTimer = ref<number | null>(null)
const minuteTimer = ref<number | null>(null)

function debounceSnap(timerRef: { value: number | null }, fn: () => void) {
  if (timerRef.value !== null)
    window.clearTimeout(timerRef.value)
  timerRef.value = window.setTimeout(() => {
    timerRef.value = null
    fn()
  }, 90)
}

function onMeridiemScroll() {
  debounceSnap(meridiemTimer, () => {
    snapAfterScroll(meridiemCol.value, meridiems, (v) => (selMeridiem.value = v), selMeridiem.value)
  })
}

function onHourScroll() {
  debounceSnap(hourTimer, () => {
    snapAfterScroll(hourCol.value, hours, (v) => (selHour.value = v), selHour.value)
  })
}

function onMinuteScroll() {
  debounceSnap(minuteTimer, () => {
    snapAfterScroll(minuteCol.value, minutes, (v) => (selMinute.value = v), selMinute.value)
  })
}

function onClickMeridiem(m: Meridiem) {
  selMeridiem.value = m
  scrollToIndex(meridiemCol.value, meridiems.indexOf(m), true)
}

function onClickHour(h: number) {
  selHour.value = h
  scrollToIndex(hourCol.value, hours.indexOf(h), true)
}

function onClickMinute(m: number) {
  selMinute.value = m
  scrollToIndex(minuteCol.value, minutes.indexOf(m), true)
}

function buildTime(): Time {
  return new Time(from12h(selHour.value, selMeridiem.value), selMinute.value)
}

function onSave() {
  const t = buildTime()
  emit("update:modelValue", t)
  emit("change", t)
}

function onSkip() {
  emit("update:modelValue", null)
  emit("change", null)
}

function onClose() {
  emit("close")
}

const dialBodyHeight = ITEM_H * (1 + 2 * PAD)
const padPx = ITEM_H * PAD

const meridiemLabel = (m: Meridiem) => (m === "AM" ? "오전" : "오후")
const minuteLabel = (m: number) => String(m).padStart(2, "0")

const cellTextClass = (isActive: boolean) =>
  cn(
    "flex items-center justify-center select-none snap-center",
    "text-size-18 leading-[24px] tracking-[-0.01em] tabular-nums",
    isActive ? "text-grey-90 font-bold" : "text-grey-50",
  )

const colClass = computed(() =>
  cn(
    "flex-1 min-w-0 overflow-y-scroll snap-y snap-mandatory",
    "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  ),
)
</script>

<template>
  <section
    :class="cn(
      'mobile-time-dial w-[360px] max-w-full bg-grey-10 rounded-t-[16px] flex flex-col gap-[16px] px-[16px] py-[24px]',
      props.class,
    )"
  >
    <header class="flex items-center justify-between h-[24px]">
      <h3 class="text-size-18 font-bold text-grey-90 tracking-[-0.01em]">
        {{ props.title }}
      </h3>
      <button
        v-if="props.showClose"
        type="button"
        class="flex size-[24px] items-center justify-center text-grey-60"
        aria-label="닫기"
        @click="onClose"
      >
        <X class="size-[20px]" />
      </button>
    </header>

    <div
      class="relative w-full"
      :style="{ height: `${dialBodyHeight}px` }"
    >
      <!-- 가운데 선택 표시 배경 -->
      <div
        class="pointer-events-none absolute inset-x-0 rounded-[8px] bg-blue-20"
        :style="{ top: `${padPx}px`, height: `${ITEM_H}px` }"
      />

      <div class="relative flex h-full">
        <!-- AM/PM -->
        <div
          ref="meridiemCol"
          :class="colClass"
          @scroll="onMeridiemScroll"
        >
          <div :style="{ height: `${padPx}px` }" />
          <div
            v-for="m in meridiems"
            :key="m"
            :class="cellTextClass(m === selMeridiem)"
            :style="{ height: `${ITEM_H}px` }"
            @click="onClickMeridiem(m)"
          >
            {{ meridiemLabel(m) }}
          </div>
          <div :style="{ height: `${padPx}px` }" />
        </div>

        <!-- Hour -->
        <div
          ref="hourCol"
          :class="colClass"
          @scroll="onHourScroll"
        >
          <div :style="{ height: `${padPx}px` }" />
          <div
            v-for="h in hours"
            :key="h"
            :class="cellTextClass(h === selHour)"
            :style="{ height: `${ITEM_H}px` }"
            @click="onClickHour(h)"
          >
            {{ String(h).padStart(2, "0") }}
          </div>
          <div :style="{ height: `${padPx}px` }" />
        </div>

        <!-- Minute -->
        <div
          ref="minuteCol"
          :class="colClass"
          @scroll="onMinuteScroll"
        >
          <div :style="{ height: `${padPx}px` }" />
          <div
            v-for="m in minutes"
            :key="m"
            :class="cellTextClass(m === selMinute)"
            :style="{ height: `${ITEM_H}px` }"
            @click="onClickMinute(m)"
          >
            {{ minuteLabel(m) }}
          </div>
          <div :style="{ height: `${padPx}px` }" />
        </div>
      </div>
    </div>

    <div class="flex items-stretch gap-[8px] w-full">
      <Button
        variant="tertiary"
        theme="outlined"
        size="xlarge"
        class="flex-1"
        @click="onSkip"
      >
        선택 안함
      </Button>
      <Button
        variant="primary"
        theme="filled"
        size="xlarge"
        class="flex-1"
        @click="onSave"
      >
        저장
      </Button>
    </div>
  </section>
</template>
