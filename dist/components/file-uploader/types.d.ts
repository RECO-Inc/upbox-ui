export interface FileObject {
    id: number;
    url: string;
    displayName: string;
    fileType: 'local' | 'remote';
    fileObject?: File | Blob;
    fileName?: string;
    createdAt?: string;
    isActive?: boolean;
    updatedAt?: string;
    uploaderId?: number;
    uploaderName?: string;
}
export interface UploaderFile {
    id: number;
    state: 'done' | 'error' | 'none' | 'uploading' | 'download';
    timestamp: string | Date;
    user: string;
    fileList: FileObject[];
}
export interface FileClickEvent {
    index: number;
    data: UploaderFile;
}
export interface FileValidatorOptions {
    maxSize: number;
    maxCount: number;
    supportExt: string[];
}
export declare const mimeToExt: Map<string, string>;
export declare function getFileExtension(file: File): string;
export declare function validateFile(file: File, options: FileValidatorOptions, currentCount: number): string | null;
export declare function fileToUploaderFile(file: File, userName?: string): UploaderFile;
