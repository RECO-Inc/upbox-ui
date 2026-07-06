export interface ToolbarProps {
    /** 선택된 항목 수 — "N개 선택됨" 표기 */
    selectedCount?: number;
    /** light: 흰 배경 + 보더 + 그림자 / dark: 짙은 배경(플로팅 스낵바 톤) */
    variant?: 'light' | 'dark';
    /** 다운로드 버튼 노출 여부 (옵션) */
    downloadable?: boolean;
    /** 삭제 버튼 노출 여부 (옵션) */
    deletable?: boolean;
    class?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ToolbarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    delete: () => any;
    download: () => any;
    deselect: () => any;
}, string, import('vue').PublicProps, Readonly<ToolbarProps> & Readonly<{
    onDelete?: (() => any) | undefined;
    onDownload?: (() => any) | undefined;
    onDeselect?: (() => any) | undefined;
}>, {
    variant: "light" | "dark";
    downloadable: boolean;
    selectedCount: number;
    deletable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
