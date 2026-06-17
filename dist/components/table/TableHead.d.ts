import { HTMLAttributes } from 'vue';
export type TableHeadSize = "small" | "regular" | "large";
type __VLS_Props = {
    class?: HTMLAttributes["class"];
    size?: TableHeadSize;
    tooltip?: string;
    /** 헤더 정렬 (default: left). 내부 flex 컨테이너를 justify 하므로 text-align 보다 안전 */
    align?: "left" | "center" | "right";
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLTableCellElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLTableCellElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
