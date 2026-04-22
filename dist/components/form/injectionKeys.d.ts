import { ComputedRef, InjectionKey, Ref } from 'vue';
export type FieldSize = "small" | "regular" | "large";
export interface FieldControlBindings {
    modelValue?: unknown;
    "onUpdate:modelValue"?: (value: unknown) => void;
    onBlur?: (e?: Event) => void;
}
export declare const FORM_ITEM_INJECTION_KEY: InjectionKey<string>;
export declare const FORM_ERROR_INJECTION_KEY: InjectionKey<ComputedRef<boolean>>;
export declare const FORM_SIZE_INJECTION_KEY: InjectionKey<ComputedRef<FieldSize>>;
export declare const FIELD_CONTROL_INJECTION_KEY: InjectionKey<Ref<FieldControlBindings>>;
