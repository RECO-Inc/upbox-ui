import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./Toolbar').ToolbarProps> & Readonly<{
            onDelete?: (() => any) | undefined;
            onDownload?: (() => any) | undefined;
            onDeselect?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            delete: () => any;
            download: () => any;
            deselect: () => any;
        }, import('vue').PublicProps, {
            variant: "light" | "dark";
            downloadable: boolean;
            selectedCount: number;
            deletable: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./Toolbar').ToolbarProps> & Readonly<{
            onDelete?: (() => any) | undefined;
            onDownload?: (() => any) | undefined;
            onDeselect?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            variant: "light" | "dark";
            downloadable: boolean;
            selectedCount: number;
            deletable: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./Toolbar').ToolbarProps> & Readonly<{
        onDelete?: (() => any) | undefined;
        onDownload?: (() => any) | undefined;
        onDeselect?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        delete: () => any;
        download: () => any;
        deselect: () => any;
    }, string, {
        variant: "light" | "dark";
        downloadable: boolean;
        selectedCount: number;
        deletable: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            actions?(_: {}): any;
        };
    });
    tags: string[];
    args: {
        onDeselect: import('storybook/test').Mock<(...args: any[]) => any>;
        onDownload: import('storybook/test').Mock<(...args: any[]) => any>;
        onDelete: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        selectedCount: {
            control: "number";
        };
        downloadable: {
            control: "boolean";
        };
        deletable: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
/** 기본 — 선택 건수 + 선택 해제만. 다운로드/삭제는 옵션(prop)으로 켠다. */
export declare const Default: Story;
/** 다운로드·삭제 옵션 활성 */
export declare const WithDownloadDelete: Story;
/** actions 슬롯 — 화면별 커스텀 액션(TextButton 나열, 구분선 자동) */
export declare const WithActions: Story;
/** dark — 플로팅 스낵바 톤 */
export declare const Dark: Story;
