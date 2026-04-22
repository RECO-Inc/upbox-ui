import { HTMLAttributes } from 'vue';
import { FieldSize } from './injectionKeys';
export interface FieldContainerProps {
    name: string;
    rules?: unknown;
    modelValue?: unknown;
    initialValue?: unknown;
    validateOnMount?: boolean;
    size?: FieldSize;
    label?: string;
    description?: string;
    required?: boolean;
    class?: HTMLAttributes['class'];
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        tooltip?(_: {}): any;
        default?(_: {
            field: import('vee-validate').FieldBindingObject<any>;
            componentField: import('vee-validate').ComponentFieldBindingObject<any>;
            value: any;
            meta: import('vee-validate').FieldMeta<any>;
            errors: string[];
            errorMessage: string | undefined;
            handleInput: import('vee-validate').FieldContext["handleChange"];
            handleBlur: (e?: Event, shouldValidate?: boolean) => void;
            resetField: (state?: Partial<import('vee-validate').FieldState<unknown>> | undefined) => void;
            handleReset: () => void;
            validate: import('vee-validate').FieldValidator<unknown>;
            handleChange: (e: Event | unknown, shouldValidate?: boolean) => void;
            setTouched: (isTouched: boolean) => void;
            setErrors: (message: string | string[]) => void;
            setValue: (value: unknown, shouldValidate?: boolean) => void;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<FieldContainerProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<FieldContainerProps> & Readonly<{}>, {
    size: FieldSize;
    required: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
