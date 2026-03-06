<script lang="ts" setup>
import type { HTMLAttributes } from "vue"
import { computed, onMounted, ref } from "vue"
import { cn } from "../../lib/utils"
import { useI18n } from "vue-i18n"

interface Props {
  class?: HTMLAttributes["class"]
  showSeconds?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showSeconds: false
})

const hour = defineModel<number>('hour', { required: true })
const minute = defineModel<number>('minute', { required: true })
const second = defineModel<number>('second', { default: 0 })

const { t } = useI18n()

const hourList = computed(() => Array.from({ length: 24 }, (_, i) => i))
const minuteList = computed(() => Array.from({ length: 60 }, (_, i) => i))
const secondList = computed(() => Array.from({ length: 60 }, (_, i) => i))

const hourScroller = ref<HTMLDivElement>()
const minuteScroller = ref<HTMLDivElement>()
const secondScroller = ref<HTMLDivElement>()

function scrollToSelected(scroller: HTMLDivElement | undefined) {
  if (!scroller) return
  const selectedEl = scroller.querySelector('.selected')
  if (selectedEl) {
    const boundingRect = selectedEl.getBoundingClientRect()
    const baseRect = scroller.getBoundingClientRect()
    scroller.scrollTo({ top: boundingRect.top - baseRect.top, behavior: 'smooth' })
  }
}

onMounted(() => {
  scrollToSelected(hourScroller.value)
  scrollToSelected(minuteScroller.value)
  if (props.showSeconds) {
    scrollToSelected(secondScroller.value)
  }
})

function onClickHour(h: number) {
  hour.value = h
}

function onClickMinute(m: number) {
  minute.value = m
}

function onClickSecond(s: number) {
  second.value = s
}
</script>

<template>
  <div :class="cn('flex items-stretch text-center text-base-90', props.class)">
    <!-- Hour -->
    <div class="flex flex-col flex-wrap py-[16px] px-[12px] h-[280px]">
      <label class="h-[24px] text-sm font-bold mr-[14px]">{{ t('word.hours') }}</label>
      <div ref="hourScroller" class="flex-1 overflow-y-auto">
        <div
          v-for="h in hourList"
          :key="`h-${h}`"
          :class="cn(
            'py-[6px] px-[16px] cursor-pointer select-none text-base-90 transition-colors',
            h === hour ? 'selected bg-primary-90 text-base-10' : 'bg-base-10 hover:bg-base-30'
          )"
          @click="onClickHour(h)"
        >
          {{ h }}
        </div>
      </div>
    </div>

    <!-- Minute -->
    <div class="flex flex-col flex-wrap py-[16px] px-[12px] h-[280px]">
      <label class="h-[24px] text-sm font-bold mr-[16px]">{{ t('word.minutes') }}</label>
      <div ref="minuteScroller" class="flex-1 overflow-y-auto">
        <div
          v-for="m in minuteList"
          :key="`m-${m}`"
          :class="cn(
            'py-[6px] px-[16px] cursor-pointer select-none text-base-90 transition-colors',
            m === minute ? 'selected bg-primary-90 text-base-10' : 'bg-base-10 hover:bg-base-30'
          )"
          @click="onClickMinute(m)"
        >
          {{ m }}
        </div>
      </div>
    </div>

    <!-- Second -->
    <div v-if="showSeconds" class="flex flex-col flex-wrap py-[16px] px-[12px] h-[280px]">
      <label class="h-[24px] text-sm font-bold mr-[16px]">{{ t('word.seconds') }}</label>
      <div ref="secondScroller" class="flex-1 overflow-y-auto">
        <div
          v-for="s in secondList"
          :key="`s-${s}`"
          :class="cn(
            'py-[6px] px-[16px] cursor-pointer select-none text-base-90 transition-colors',
            s === second ? 'selected bg-primary-90 text-base-10' : 'bg-base-10 hover:bg-base-30'
          )"
          @click="onClickSecond(s)"
        >
          {{ s }}
        </div>
      </div>
    </div>
  </div>
</template>
