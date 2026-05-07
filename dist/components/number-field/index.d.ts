export { default as NumberField } from './NumberField';
export { default as NumberFieldRoot } from './NumberFieldRoot';
export { default as NumberFieldContent } from './NumberFieldContent';
export { default as NumberFieldDecrement } from './NumberFieldDecrement';
export { default as NumberFieldIncrement } from './NumberFieldIncrement';
export { default as NumberFieldInput } from './NumberFieldInput';
export interface NumberFieldProps {
    modelValue?: number;
    defaultValue?: number;
    variant?: "center" | "side";
    size?: "small" | "regular" | "large";
    error?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    min?: number;
    max?: number;
    step?: number;
    /** Intl.NumberFormat 옵션 (소수 자릿수, 천단위 구분, 단위, 통화 등) */
    formatOptions?: Intl.NumberFormatOptions;
    placeholder?: string;
    name?: string;
    id?: string;
    required?: boolean;
    class?: string;
}
