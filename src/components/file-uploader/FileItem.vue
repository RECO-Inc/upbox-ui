<script setup lang="ts">
import { computed } from 'vue'
import type { UploaderFile } from './types'
import { cn } from '../../lib/utils'
import { X, Download, Loader2, AlertCircle } from 'lucide-vue-next'

interface Props {
  file: UploaderFile
  readonly?: boolean
  downloadable?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  readonly: false,
  downloadable: false,
})

const emits = defineEmits<{
  click: [{ data: UploaderFile }]
  remove: [{ data: UploaderFile }]
  reload: [{ data: UploaderFile }]
  download: []
}>()

const fileName = computed(() => {
  const fileData = props.file.fileList[0]
  if (fileData?.displayName) {
    const ext = fileData.fileName?.substring(fileData.fileName.lastIndexOf('.')).toLowerCase() ?? ''
    return fileData.displayName + ext
  }
  return fileData?.fileName ?? ''
})

function handleClick() {
  emits('click', { data: props.file })
}

function handleRemove(e: Event) {
  e.stopPropagation()
  emits('remove', { data: props.file })
}

function handleReload(e: Event) {
  e.stopPropagation()
  emits('reload', { data: props.file })
}

function handleDownload(e: Event) {
  e.stopPropagation()
  emits('download')
}
</script>

<template>
  <div
    :class="cn(
      'file-item flex items-center py-[4px] px-[8px] rounded cursor-pointer transition-colors hover:bg-primary-20',
      props.class
    )"
    @click="handleClick"
  >
    <!-- Append slot (order handler etc.) -->
    <slot name="append" />

    <!-- File Info -->
    <div class="flex-1 min-w-0">
      <p :class="cn(
        'text-size-13 break-words',
        file.state === 'error' ? 'text-error-80' : 'text-info-90'
      )">
        {{ fileName }}
      </p>
      <p class="text-size-12 text-base-60">
        <slot name="description" :index="0" />
      </p>
    </div>

    <!-- Status (uploading/error) -->
    <div v-if="file.state !== 'done' && file.state !== 'download'" class="flex items-center ml-[8px]">
      <template v-if="file.state === 'error'">
        <AlertCircle class="w-[20px] h-[20px] text-error-70 mr-[4px]" />
        <span class="text-[10px] text-error-70 whitespace-nowrap">업로드 실패</span>
      </template>
      <template v-else>
        <span class="text-[10px] text-base-60 whitespace-nowrap mr-[8px]">업로드 중...</span>
        <Loader2 class="w-[16px] h-[16px] text-base-60 animate-spin" />
      </template>
    </div>

    <!-- Actions -->
    <div class="flex-shrink-0 flex items-center gap-[4px] ml-[8px]">
      <!-- Remove button -->
      <button
        v-if="!readonly && (file.state === 'done' || file.state === 'error')"
        type="button"
        class="p-[4px] rounded hover:bg-base-30 text-base-80 transition-colors"
        @click="handleRemove"
      >
        <X class="w-[20px] h-[20px]" />
      </button>

      <!-- Download button -->
      <button
        v-if="downloadable && file.state === 'done'"
        type="button"
        class="flex items-center gap-[4px] p-[4px] rounded text-size-12 text-base-60 hover:bg-base-30 transition-colors"
        @click="handleDownload"
      >
        다운로드
        <Download class="w-[20px] h-[20px]" />
      </button>
    </div>
  </div>
</template>
