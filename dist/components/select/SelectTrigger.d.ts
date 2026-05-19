import { SelectTriggerProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = SelectTriggerProps & {
    class?: HTMLAttributes["class"];
    /**
     * SearchField/InputGroup 등 외부 frame을 가진 wrapper 안에 들어갈 때 사용.
     * 자체 InputFrame 없이 transparent inline trigger로 렌더링된다.
     */
    inline?: boolean;
    /**
     * InputFrame design props. 미지정(`undefined`)이면 SelectField / FieldContainer
     * 가 provide 한 컨텍스트를 InputFrame 이 inject-merge 해서 따른다.
     * standalone 사용 시 컨텍스트가 없으면 InputFrame 기본값(default/regular).
     */
    variant?: "default" | "filled" | "bottomline";
    size?: "small" | "regular" | "large";
    error?: boolean;
    readonly?: boolean;
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
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    size: "small" | "regular" | "large";
    error: boolean;
    variant: "default" | "filled" | "bottomline";
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
