import { UploaderFile } from './types';
interface Props {
    file: UploaderFile;
    readonly?: boolean;
    downloadable?: boolean;
    class?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        append?(_: {}): any;
        description?(_: {
            index: number;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (args_0: {
        data: UploaderFile;
    }) => any;
    download: () => any;
    remove: (args_0: {
        data: UploaderFile;
    }) => any;
    reload: (args_0: {
        data: UploaderFile;
    }) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClick?: ((args_0: {
        data: UploaderFile;
    }) => any) | undefined;
    onDownload?: (() => any) | undefined;
    onRemove?: ((args_0: {
        data: UploaderFile;
    }) => any) | undefined;
    onReload?: ((args_0: {
        data: UploaderFile;
    }) => any) | undefined;
}>, {
    readonly: boolean;
    downloadable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
