export interface StepItem {
    /** Step unique identifier */
    value: string | number;
    /** Step label text */
    label: string;
    /** Whether this step is completed */
    isComplete: boolean;
}
export interface StepperProps {
    /** List of steps */
    steps: StepItem[];
    /** Additional classes */
    class?: string;
}
type __VLS_Props = StepperProps;
type __VLS_PublicProps = {
    modelValue: string | number;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
