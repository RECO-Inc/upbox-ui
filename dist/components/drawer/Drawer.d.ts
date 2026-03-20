import { DrawerRootProps } from 'vaul-vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<DrawerRootProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:open": (open: boolean) => any;
    animationEnd: (open: boolean) => any;
    drag: (percentageDragged: number) => any;
    release: (open: boolean) => any;
    close: () => any;
    "update:activeSnapPoint": (val: string | number) => any;
}, string, import('vue').PublicProps, Readonly<DrawerRootProps> & Readonly<{
    "onUpdate:open"?: ((open: boolean) => any) | undefined;
    onAnimationEnd?: ((open: boolean) => any) | undefined;
    onDrag?: ((percentageDragged: number) => any) | undefined;
    onRelease?: ((open: boolean) => any) | undefined;
    onClose?: (() => any) | undefined;
    "onUpdate:activeSnapPoint"?: ((val: string | number) => any) | undefined;
}>, {
    shouldScaleBackground: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
