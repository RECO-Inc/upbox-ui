import { HTMLAttributes } from 'vue';
type __VLS_Props = {
    defaultOpen?: boolean;
    open?: boolean;
    class?: HTMLAttributes["class"];
    /** 데스크톱 전용 앱: 모바일(≤768px)에서 Sheet 모드로 전환하지 않고 항상 데스크톱 사이드바를 유지한다. */
    disableMobile?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (open: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:open"?: ((open: boolean) => any) | undefined;
}>, {
    open: boolean;
    defaultOpen: boolean;
    disableMobile: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
