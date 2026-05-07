import { TagProps } from '.';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        badge?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TagProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<TagProps> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    size: "3xsmall" | "2xsmall" | "xsmall" | "small";
    state: "enabled" | "disabled" | "error";
    closable: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
