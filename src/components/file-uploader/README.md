# FileUploader Component

파일 업로드를 위한 드래그 앤 드롭 및 파일 선택 컴포넌트

## 기본 사용법

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { FileUploader } from '@/components/ui/file-uploader'
import type { UploaderFile } from '@/components/ui/file-uploader'

const files = ref<UploaderFile[]>([])
</script>

<template>
  <FileUploader v-model:input-files="files" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `inputFiles` | `UploaderFile[]` | `[]` | v-model로 바인딩되는 파일 목록 |
| `supportExt` | `string[]` | `['PDF', 'JPG', 'PNG']` | 허용할 파일 확장자 목록 |
| `label` | `string` | - | 레이블 텍스트 |
| `maxSize` | `number` | `5` | 최대 파일 크기 (MB) |
| `maxCount` | `number` | `10` | 최대 파일 개수 |
| `readonly` | `boolean` | `false` | 읽기 전용 모드 (업로드 UI 숨김) |
| `removable` | `boolean` | `false` | readonly 모드에서도 삭제 버튼 표시 |
| `downloadable` | `boolean` | `false` | 다운로드 버튼 표시 |
| `errorMessage` | `string` | - | 에러 메시지 표시 |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `upload` | `UploaderFile` | 파일 업로드 완료 시 |
| `remove` | `FileClickEvent` | 파일 삭제 시 |
| `click` | `FileClickEvent` | 파일 클릭 시 |
| `download` | `number` | 다운로드 버튼 클릭 시 (index) |

## Types

```typescript
// 파일 객체
interface FileObject {
  id: number
  url: string
  displayName: string      // 원본 파일 이름
  fileType: 'local' | 'remote'
  fileObject?: File | Blob // 로컬 파일
  fileName?: string        // 서버 해시 파일 이름
  createdAt?: string
  uploaderId?: number
  uploaderName?: string
}

// 업로더 파일
interface UploaderFile {
  id: number
  state: 'done' | 'error' | 'none' | 'uploading'
  timestamp: string | Date
  user: string
  fileList: FileObject[]
}

// 파일 클릭 이벤트
interface FileClickEvent {
  index: number
  data: UploaderFile
}
```

## 예제

### 기본 업로드

```vue
<FileUploader
  v-model:input-files="files"
  :support-ext="['PDF', 'JPG', 'PNG']"
  :max-size="5"
  :max-count="3"
/>
```

### 읽기 전용 (파일 목록만 표시)

```vue
<FileUploader
  v-model:input-files="files"
  readonly
  downloadable
/>
```

### 레이블 및 에러 메시지

```vue
<FileUploader
  v-model:input-files="files"
  label="첨부파일"
  :error-message="errorMsg"
/>
```

### 삭제 및 다운로드 버튼 활성화

```vue
<FileUploader
  v-model:input-files="files"
  removable
  downloadable
/>
```

## 실제 API 연동

### 방법 1: 이벤트 기반 (권장)

부모 컴포넌트에서 `@upload` 이벤트를 통해 API 호출:

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { FileUploader } from '@/components/ui/file-uploader'
import type { UploaderFile } from '@/components/ui/file-uploader'
import { uploadFile } from '@/services/file.service'

const files = ref<UploaderFile[]>([])

async function handleUpload(uploaderFile: UploaderFile) {
  const fileObject = uploaderFile.fileList[0]
  if (!fileObject?.fileObject) return

  try {
    // API 호출
    const response = await uploadFile(fileObject.fileObject as File)

    // 서버 응답으로 파일 정보 업데이트
    fileObject.fileName = response.data.fileName
    fileObject.url = response.data.url
    fileObject.fileType = 'remote'
    uploaderFile.state = 'done'
  } catch (error) {
    uploaderFile.state = 'error'
    console.error('Upload failed:', error)
  }
}

async function handleRemove(event: { index: number; data: UploaderFile }) {
  const fileObject = event.data.fileList[0]

  // 서버에 업로드된 파일이면 삭제 API 호출
  if (fileObject?.fileType === 'remote' && fileObject.fileName) {
    await deleteFile(fileObject.fileName)
  }
}
</script>

<template>
  <FileUploader
    v-model:input-files="files"
    :support-ext="['PDF', 'JPG', 'PNG']"
    :max-size="10"
    :max-count="5"
    removable
    downloadable
    @upload="handleUpload"
    @remove="handleRemove"
  />
</template>
```

### 방법 2: 컴포넌트 커스터마이징

FileUploader.vue의 `simulateUpload` 함수를 실제 API 호출로 교체:

```typescript
// FileUploader.vue 내부
import { uploadFile } from '@/services/file.service'

async function handleRealUpload(file: UploaderFile) {
  file.state = 'uploading'

  const fileObject = file.fileList[0]
  if (!fileObject?.fileObject) {
    file.state = 'error'
    return
  }

  try {
    const response = await uploadFile(fileObject.fileObject as File)

    file.state = 'done'
    fileObject.fileName = response.data.fileName
    fileObject.url = response.data.url
    fileObject.fileType = 'remote'
    fileObject.createdAt = new Date().toISOString()

    emits('upload', file)
  } catch (error) {
    file.state = 'error'
    console.error('Upload failed:', error)
  }
}
```

### 서버에서 받은 파일 목록 표시

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { UploaderFile } from '@/components/ui/file-uploader'
import { getFileList } from '@/services/file.service'

const files = ref<UploaderFile[]>([])

onMounted(async () => {
  const response = await getFileList()

  // 서버 응답을 UploaderFile 형식으로 변환
  files.value = response.data.map((serverFile) => ({
    id: serverFile.id,
    state: 'done' as const,
    timestamp: serverFile.createdAt,
    user: serverFile.uploaderName || '',
    fileList: [{
      id: serverFile.id,
      url: serverFile.url,
      displayName: serverFile.originalName,
      fileType: 'remote' as const,
      fileName: serverFile.fileName,
      createdAt: serverFile.createdAt,
    }]
  }))
})
</script>

<template>
  <FileUploader
    v-model:input-files="files"
    readonly
    downloadable
  />
</template>
```

## Slots

### description

파일 아이템 내 추가 설명 영역:

```vue
<FileUploader v-model:input-files="files">
  <template #description="{ file, index }">
    <span class="text-size-12 text-base-50">
      {{ file.fileList[0]?.createdAt }}
    </span>
  </template>
</FileUploader>
```

### append

파일 아이템 우측 버튼 영역에 추가 컨텐츠:

```vue
<FileUploader v-model:input-files="files">
  <template #append="{ file, index }">
    <Button size="xs" @click="previewFile(file)">
      미리보기
    </Button>
  </template>
</FileUploader>
```

### default

드롭박스 영역에 추가 안내 문구:

```vue
<FileUploader v-model:input-files="files">
  <p class="text-size-12 text-warning-70 mt-2">
    * 개인정보가 포함된 파일은 업로드하지 마세요.
  </p>
</FileUploader>
```
