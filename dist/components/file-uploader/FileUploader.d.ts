import { UploaderFile, FileClickEvent } from './types';
export interface Props {
    supportExt?: string[];
    label?: string;
    maxSize?: number;
    maxCount?: number;
    readonly?: boolean;
    removable?: boolean;
    downloadable?: boolean;
    errorMessage?: string;
    class?: string;
}
type __VLS_Props = Props;
type __VLS_PublicProps = {
    'inputFiles': UploaderFile[];
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        description?(_: {
            file: UploaderFile;
            index: number;
        }): any;
        append?(_: {
            file: UploaderFile;
            index: number;
        }): any;
    };
    refs: {
        inputRef: HTMLInputElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (args_0: FileClickEvent) => any;
    download: (args_0: number) => any;
    remove: (args_0: FileClickEvent) => any;
    upload: (args_0: UploaderFile) => any;
    "update:inputFiles": (value: UploaderFile[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onClick?: ((args_0: FileClickEvent) => any) | undefined;
    onDownload?: ((args_0: number) => any) | undefined;
    onRemove?: ((args_0: FileClickEvent) => any) | undefined;
    onUpload?: ((args_0: UploaderFile) => any) | undefined;
    "onUpdate:inputFiles"?: ((value: UploaderFile[]) => any) | undefined;
}>, {
    readonly: boolean;
    maxCount: number;
    downloadable: boolean;
    supportExt: string[];
    maxSize: number;
    removable: boolean;
    errorMessage: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    inputRef: HTMLInputElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
