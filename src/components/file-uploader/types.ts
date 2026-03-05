// 파일 객체(로컬, 서버 통합)
export interface FileObject {
  id: number
  url: string
  displayName: string // 원본 파일 이름
  fileType: 'local' | 'remote'
  // 로컬 파일
  fileObject?: File | Blob
  // 서버 파일
  fileName?: string // 서버에서 해시한 파일 이름
  createdAt?: string
  isActive?: boolean
  updatedAt?: string
  uploaderId?: number
  uploaderName?: string
}

// 파일 업로더용 파일
export interface UploaderFile {
  id: number
  state: 'done' | 'error' | 'none' | 'uploading' | 'download'
  timestamp: string | Date
  user: string
  fileList: FileObject[]
}

// 파일 업로더에서 파일을 클릭했을 때
export interface FileClickEvent {
  index: number
  data: UploaderFile
}

// 파일 검증 옵션
export interface FileValidatorOptions {
  maxSize: number // MB
  maxCount: number
  supportExt: string[]
}

// MIME 타입 매핑
export const mimeToExt = new Map([
  ['image/jpeg', 'jpg'],
  ['image/png', 'png'],
  ['image/gif', 'gif'],
  ['image/webp', 'webp'],
  ['application/pdf', 'pdf'],
  ['application/zip', 'zip'],
  ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'xlsx'],
  ['application/vnd.ms-excel', 'xls'],
  ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'docx'],
  ['application/msword', 'doc'],
])

// 파일 확장자 추출
export function getFileExtension(file: File): string {
  const name = file.name
  const lastDot = name.lastIndexOf('.')
  if (lastDot === -1) {
    // MIME 타입으로 추출
    return mimeToExt.get(file.type) || ''
  }
  return name.substring(lastDot + 1).toLowerCase()
}

// 파일 검증
export function validateFile(
  file: File,
  options: FileValidatorOptions,
  currentCount: number
): string | null {
  // 확장자 검증
  const ext = getFileExtension(file)
  const supportedExts = options.supportExt.map((e) => e.toLowerCase())
  if (!supportedExts.includes(ext)) {
    return `지원하지 않는 파일 형식입니다. (${options.supportExt.join(', ')})`
  }

  // 파일 크기 검증 (MB)
  const fileSizeMB = file.size / (1024 * 1024)
  if (fileSizeMB > options.maxSize) {
    return `파일 크기가 ${options.maxSize}MB를 초과합니다.`
  }

  // 파일 개수 검증
  if (currentCount >= options.maxCount) {
    return `최대 ${options.maxCount}개까지 업로드 가능합니다.`
  }

  return null
}

// File을 UploaderFile로 변환
export function fileToUploaderFile(file: File, userName: string = ''): UploaderFile {
  const id = Date.now() + Math.random()
  return {
    id,
    state: 'none',
    timestamp: new Date().toISOString(),
    user: userName,
    fileList: [
      {
        id,
        url: URL.createObjectURL(file),
        displayName: file.name,
        fileType: 'local',
        fileObject: file,
      },
    ],
  }
}
