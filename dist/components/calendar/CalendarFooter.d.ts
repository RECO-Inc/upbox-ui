import { HTMLAttributes } from 'vue';
interface Props {
    class?: HTMLAttributes["class"];
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        reset?(_: {
            onReset: () => void;
        }): any;
        done?(_: {
            onDone: () => void;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    done: () => any;
    reset: () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onDone?: (() => any) | undefined;
    onReset?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
