export interface IconButtonProps {
    variant?: 'primary' | 'destructive' | 'secondary' | 'tertiary';
    size?: '2xsmall' | 'xsmall' | 'small' | 'regular' | 'large' | 'xlarge';
    disabled?: boolean;
    class?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IconButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<IconButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    size: "2xsmall" | "xsmall" | "small" | "regular" | "large" | "xlarge";
    variant: "primary" | "destructive" | "secondary" | "tertiary";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
