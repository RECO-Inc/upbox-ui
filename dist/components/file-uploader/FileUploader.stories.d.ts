import { StoryObj } from '@storybook/vue3-vite';
import { UploaderFile } from './types';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            inputFiles: UploaderFile[];
        } & import('./FileUploader').Props> & Readonly<{
            onClick?: ((args_0: import('./types').FileClickEvent) => any) | undefined;
            onDownload?: ((args_0: number) => any) | undefined;
            onRemove?: ((args_0: import('./types').FileClickEvent) => any) | undefined;
            onUpload?: ((args_0: UploaderFile) => any) | undefined;
            "onUpdate:inputFiles"?: ((value: UploaderFile[]) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            click: (args_0: import('./types').FileClickEvent) => any;
            download: (args_0: number) => any;
            remove: (args_0: import('./types').FileClickEvent) => any;
            upload: (args_0: UploaderFile) => any;
            "update:inputFiles": (value: UploaderFile[]) => any;
        }, import('vue').PublicProps, {
            readonly: boolean;
            downloadable: boolean;
            supportExt: string[];
            maxSize: number;
            maxCount: number;
            removable: boolean;
            errorMessage: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            inputRef: HTMLInputElement;
        }, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            inputFiles: UploaderFile[];
        } & import('./FileUploader').Props> & Readonly<{
            onClick?: ((args_0: import('./types').FileClickEvent) => any) | undefined;
            onDownload?: ((args_0: number) => any) | undefined;
            onRemove?: ((args_0: import('./types').FileClickEvent) => any) | undefined;
            onUpload?: ((args_0: UploaderFile) => any) | undefined;
            "onUpdate:inputFiles"?: ((value: UploaderFile[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            readonly: boolean;
            downloadable: boolean;
            supportExt: string[];
            maxSize: number;
            maxCount: number;
            removable: boolean;
            errorMessage: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        inputFiles: UploaderFile[];
    } & import('./FileUploader').Props> & Readonly<{
        onClick?: ((args_0: import('./types').FileClickEvent) => any) | undefined;
        onDownload?: ((args_0: number) => any) | undefined;
        onRemove?: ((args_0: import('./types').FileClickEvent) => any) | undefined;
        onUpload?: ((args_0: UploaderFile) => any) | undefined;
        "onUpdate:inputFiles"?: ((value: UploaderFile[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (args_0: import('./types').FileClickEvent) => any;
        download: (args_0: number) => any;
        remove: (args_0: import('./types').FileClickEvent) => any;
        upload: (args_0: UploaderFile) => any;
        "update:inputFiles": (value: UploaderFile[]) => any;
    }, string, {
        readonly: boolean;
        downloadable: boolean;
        supportExt: string[];
        maxSize: number;
        maxCount: number;
        removable: boolean;
        errorMessage: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
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
    });
    tags: string[];
    args: {
        inputFiles: never[];
    };
    argTypes: {
        readonly: {
            control: "boolean";
        };
        removable: {
            control: "boolean";
        };
        downloadable: {
            control: "boolean";
        };
        maxSize: {
            control: "number";
        };
        maxCount: {
            control: "number";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithExistingFiles: Story;
export declare const Readonly: Story;
export declare const ReadonlyEmpty: Story;
export declare const WithError: Story;
export declare const CustomExtensions: Story;
export declare const Downloadable: Story;
