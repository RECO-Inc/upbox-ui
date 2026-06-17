import { HTMLAttributes } from 'vue';
type __VLS_Props = {
    title: string;
    /** 제목 옆 보조 설명 (인라인) */
    description?: string;
    /**
     * 제목 크기. 웹 기본은 md(24px). 모바일은 lg(28)/sm(22) 사용.
     * lg=page-title-1(28), md=page-title-2(24), sm=page-title-3(22)
     */
    size?: "lg" | "md" | "sm";
    /** 좌측 back(<) 화살표 노출 → @back emit (라우팅은 소비자가 처리) */
    back?: boolean;
    class?: HTMLAttributes["class"];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        /** 타이틀 우측 배지 등 */
        badge?: () => unknown;
        /** 우측 액션 버튼 그룹 */
        actions?: () => unknown;
    }> & {
        /** 타이틀 우측 배지 등 */
        badge?: () => unknown;
        /** 우측 액션 버튼 그룹 */
        actions?: () => unknown;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    back: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onBack?: (() => any) | undefined;
}>, {
    size: "lg" | "md" | "sm";
    back: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
