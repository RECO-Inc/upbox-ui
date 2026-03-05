import { UploaderFile, FileClickEvent } from './types';
interface Props {
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
    remove: (args_0: FileClickEvent) => any;
    click: (args_0: FileClickEvent) => any;
    download: (args_0: number) => any;
    "update:inputFiles": (value: UploaderFile[]) => any;
    upload: (args_0: UploaderFile) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onRemove?: ((args_0: FileClickEvent) => any) | undefined;
    onClick?: ((args_0: FileClickEvent) => any) | undefined;
    onDownload?: ((args_0: number) => any) | undefined;
    "onUpdate:inputFiles"?: ((value: UploaderFile[]) => any) | undefined;
    onUpload?: ((args_0: UploaderFile) => any) | undefined;
}>, {
    readonly: boolean;
    errorMessage: string;
    downloadable: boolean;
    supportExt: string[];
    maxSize: number;
    maxCount: number;
    removable: boolean;
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
