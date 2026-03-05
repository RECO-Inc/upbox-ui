<script setup lang="ts">
/**
 * FileUploader 컴포넌트
 * 파일 업로드를 위한 드래그 앤 드롭 및 파일 선택 컴포넌트
 * - 드래그 앤 드롭 지원
 * - 파일 유효성 검사 (확장자, 크기, 개수)
 * - 업로드 상태 표시
 * - 파일 목록 표시
 */
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { UploaderFile, FileClickEvent } from './types'
import { validateFile, fileToUploaderFile } from './types'
import { cn } from '../../lib/utils'
import { Cloud, AlertTriangle } from 'lucide-vue-next'
import FileItem from './FileItem.vue'

const inputFiles = defineModel<UploaderFile[]>('inputFiles', { required: true, default: () => [] })

interface Props {
  supportExt?: string[]
  label?: string
  maxSize?: number // MB
  maxCount?: number
  readonly?: boolean
  removable?: boolean
  downloadable?: boolean
  errorMessage?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  supportExt: () => ['PDF', 'JPG', 'PNG'],
  maxSize: 5,
  maxCount: 10,
  readonly: false,
  removable: false,
  downloadable: false,
  errorMessage: '',
})

const emits = defineEmits<{
  click: [FileClickEvent]
  upload: [UploaderFile]
  remove: [FileClickEvent]
  download: [number]
}>()

const { t } = useI18n()

const state = reactive({
  dragging: false,
  dragCount: 0,
})

const inputRef = ref<HTMLInputElement>()

// 지원하는 확장자 목록 표시
const displayExts = computed(() => {
  if (props.supportExt && props.supportExt.length > 0) {
    return props.supportExt.join(', ')
  }
  return ''
})

// input[type=file]이 지원하는 확장자 목록
const acceptExts = computed(() => {
  if (props.supportExt && props.supportExt.length > 0) {
    return '.' + props.supportExt.map((e) => e.toLowerCase()).join(', .')
  }
  return undefined
})

// 업로드 상태
const uploadState = computed(() => {
  if (!inputFiles.value || inputFiles.value.length === 0) {
    return 'idle'
  }
  const states = inputFiles.value.map((file) => file.state)
  if (states.includes('none') || states.includes('uploading')) {
    return 'uploading'
  } else if (states.includes('error')) {
    return 'error'
  }
  return 'idle'
})

// 파일 개수 검증
function validateFileCount(): boolean {
  const uploaded = inputFiles.value.filter((val) => val.state === 'done')
  if (uploaded.length >= props.maxCount) {
    console.warn(`최대 ${props.maxCount}개까지 업로드 가능합니다.`)
    return false
  }
  return true
}

// 드래그 이벤트
function onDragEnter() {
  state.dragging = true
  state.dragCount++
}

function onDragLeave() {
  state.dragCount--
  if (state.dragCount <= 0) {
    state.dragging = false
  }
}

function onDragOver(e: DragEvent) {
  e.preventDefault()
}

function onDragDrop(e: DragEvent) {
  e.preventDefault()
  const droppedFiles = e.dataTransfer?.files
  if (!droppedFiles) return
  if (!validateFileCount()) return

  handleFiles(droppedFiles)
  state.dragging = false
  state.dragCount = 0
}

// 파일 선택
function onClickChooseFiles(e: Event) {
  const target = e.target as HTMLInputElement
  const selectedFiles = target.files
  if (!selectedFiles) return
  if (!validateFileCount()) return

  handleFiles(selectedFiles)
  target.value = '' // 같은 파일 재선택 허용
}

// 파일 처리
function handleFiles(files: FileList) {
  const currentCount = inputFiles.value.filter((f) => f.state === 'done').length

  Array.from(files).forEach((file, index) => {
    const error = validateFile(
      file,
      {
        maxSize: props.maxSize,
        maxCount: props.maxCount,
        supportExt: props.supportExt,
      },
      currentCount + index
    )

    if (error) {
      console.warn(error)
      return
    }

    const uploaderFile = fileToUploaderFile(file, '')
    inputFiles.value = [...inputFiles.value, uploaderFile]

    // 시뮬레이션: 실제 환경에서는 API 호출로 대체
    simulateUpload(uploaderFile)
  })
}

// 업로드 시뮬레이션 (실제 환경에서는 API 호출로 대체)
function simulateUpload(file: UploaderFile) {
  file.state = 'uploading'

  setTimeout(() => {
    // 성공 시뮬레이션
    file.state = 'done'
    if (file.fileList[0]) {
      file.fileList[0].createdAt = new Date().toISOString()
    }
    emits('upload', file)
  }, 1500)
}

// 파일 클릭
function onClickFile(index: number, event: { data: UploaderFile }) {
  emits('click', { index, data: event.data })
}

// 파일 삭제
function onRemoveFile(index: number, event: { data: UploaderFile }) {
  inputFiles.value = inputFiles.value.filter((file) => file.id !== event.data.id)
  emits('remove', { index, data: event.data })
}

// 파일 재업로드
function onReloadFile(index: number, event: { data: UploaderFile }) {
  event.data.state = 'none'
  simulateUpload(event.data)
}

// 파일 다운로드
function onDownloadFile(index: number) {
  emits('download', index)
  const file = inputFiles.value[index]
  if (file && file.fileList[0]) {
    const link = document.createElement('a')
    link.href = file.fileList[0].url
    link.download = file.fileList[0].displayName
    link.click()
  }
}
</script>

<template>
  <div
    :class="cn(
      'file-uploader-wrapper w-full',
      inputFiles && inputFiles.length > 0 && 'not-empty',
      !props.readonly && 'upload-state',
      props.class
    )"
  >
    <!-- Label -->
    <label v-if="props.label" class="block mb-2 text-size-14 text-base-90 font-bold">
      {{ props.label }}
    </label>

    <!-- Dropbox -->
    <div
      v-if="!props.readonly"
      :class="cn(
        'dropbox flex justify-center bg-base-20 border border-dashed border-base-40 rounded-lg p-6 transition-colors',
        state.dragging && 'border-2 border-primary-90 opacity-70',
        props.errorMessage && 'border-error-80',
        uploadState === 'error' && 'border-error-80 bg-error-20'
      )"
      @drop.prevent="onDragDrop"
      @dragenter="onDragEnter"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
    >
      <div class="drop-grid grid grid-cols-[auto_auto] items-center">
        <!-- Icon -->
        <div class="drop-icon justify-self-end self-center">
          <Cloud class="w-12 h-12 text-base-50" />
        </div>

        <!-- Content -->
        <div class="drop text-base-80 ml-4">
          <div class="description mb-1">
            <div class="condition-caption text-size-12 text-base-60 mb-1">
              {{ t('ui.component.fileUploader.title', { size: props.maxSize, ext: displayExts }) }}
            </div>
            <div class="condition text-size-14 text-base-80 font-bold">
              {{ t('ui.component.fileUploader.desc', { count: props.maxCount }) }}
            </div>
            <slot />
          </div>

          <!-- Idle state: Select button -->
          <label v-if="uploadState === 'idle'" class="select text-size-12 text-info-90 underline cursor-pointer hover:bg-info-30 inline-block">
            <span>{{ t('ui.component.fileUploader.selectFile') }}</span>
            <input
              ref="inputRef"
              type="file"
              class="hidden"
              :multiple="props.maxCount > 1"
              :accept="acceptExts"
              @change="onClickChooseFiles"
            />
          </label>

          <!-- Uploading state -->
          <div v-else-if="uploadState === 'uploading'">
            <span class="state-uploading text-size-12 text-base-80 font-bold">
              {{ t('ui.component.fileUploader.isUploading') }}
            </span>
          </div>

          <!-- Error state -->
          <div v-else-if="uploadState === 'error'" class="state-error flex items-center">
            <AlertTriangle class="w-6 h-6 text-error-70 mr-1" />
            <span class="error text-size-12 text-error-70 font-bold">
              {{ t('ui.component.fileUploader.uploadStatusError') }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Error message -->
    <div v-if="props.errorMessage" class="error-message mt-2 text-size-12 text-error-70">
      {{ props.errorMessage }}
    </div>

    <!-- File List -->
    <div
      v-if="inputFiles && inputFiles.length > 0"
      class="files-list flex flex-col gap-2 mt-4"
    >
      <FileItem
        v-for="(file, index) in inputFiles"
        :key="file.id"
        :file="file"
        :readonly="props.readonly && !props.removable"
        :downloadable="props.downloadable"
        @click="onClickFile(index, $event)"
        @remove="onRemoveFile(index, $event)"
        @reload="onReloadFile(index, $event)"
        @download="onDownloadFile(index)"
      >
        <template #description="{ index: descIndex }">
          <slot name="description" :file="file" :index="descIndex" />
        </template>
        <template #append>
          <slot name="append" :file="file" :index="index" />
        </template>
      </FileItem>
    </div>

    <!-- Empty state for readonly -->
    <div v-else-if="props.readonly" class="empty-list-container text-size-14 text-base-60 text-center py-6">
      {{ t('ui.component.fileUploader.empty') }}
    </div>
  </div>
</template>

<style scoped>
.file-uploader-wrapper {
  overflow-y: auto;
}

.file-uploader-wrapper.upload-state {
  border: 2px dashed var(--color-base-40);
  border-radius: 4px;
  padding: 24px;
}

.file-uploader-wrapper.not-empty {
  padding-bottom: 8px;
}

.files-list {
  cursor: pointer;
  overflow-y: auto;
}
</style>
