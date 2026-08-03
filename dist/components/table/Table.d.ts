import { HTMLAttributes } from 'vue';
type __VLS_Props = {
    /** <table> 에 적용할 클래스 */
    class?: HTMLAttributes["class"];
    /**
     * 스크롤 래퍼 div 에 적용할 클래스.
     * 바깥에 이미 스크롤 컨테이너가 있어 이 래퍼의 overflow 를 끄고 싶을 때 쓴다
     * (예: overflow-visible). class prop 은 <table> 로 가므로 래퍼는 이 prop 으로 제어한다.
     */
    wrapperClass?: HTMLAttributes["class"];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
