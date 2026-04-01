export interface ButtonProps {
    variant?: 'primary' | 'destructive' | 'secondary' | 'tertiary';
    buttonStyle?: 'filled' | 'outlined';
    size?: 'xsmall' | 'small' | 'regular' | 'large' | 'xlarge';
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
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
declare const __VLS_component: import('vue').DefineComponent<ButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<ButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    disabled: boolean;
    type: "button" | "submit" | "reset";
    size: "xsmall" | "small" | "regular" | "large" | "xlarge";
    loading: boolean;
    variant: "primary" | "destructive" | "secondary" | "tertiary";
    block: boolean;
    buttonStyle: "filled" | "outlined";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
