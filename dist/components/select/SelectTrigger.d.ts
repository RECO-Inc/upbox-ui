import { SelectTriggerProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = SelectTriggerProps & {
    class?: HTMLAttributes["class"];
    /**
     * SearchField/InputGroup 등 외부 frame을 가진 wrapper 안에 들어갈 때 사용.
     * 자체 InputFrame 없이 transparent inline trigger로 렌더링된다.
     */
    inline?: boolean;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
