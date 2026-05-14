import { ChipProps } from '.';
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
declare const __VLS_component: import('vue').DefineComponent<ChipProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    remove: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<ChipProps> & Readonly<{
    onRemove?: ((event: MouseEvent) => any) | undefined;
}>, {
    size: "xsmall" | "small";
    round: boolean;
    removable: boolean;
    state: "default" | "selected" | "active";
    dropdown: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
