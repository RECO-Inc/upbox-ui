export interface DropdownFilterOption<V = unknown> {
    label: string;
    value: V;
    isActive?: boolean;
}
declare const _default: <T>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((value: T[]) => any) | undefined;
        readonly onChange?: ((value: T[]) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onUpdate:modelValue" | "onChange"> & ({
        modelValue: T[];
    } & {
        options: DropdownFilterOption<T>[];
        disabled?: boolean;
        readonly?: boolean;
        canAll?: boolean;
        single?: boolean;
        search?: boolean;
        placeholder?: string;
        size?: "sm" | "md" | "lg";
        displayStyle?: "default" | "filled" | "highlight";
    }) & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        label?(_: {}): any;
        item?(_: {
            item: DropdownFilterOption<T>;
        }): any;
    };
    emit: ((e: "change", value: T[]) => void) & ((evt: "update:modelValue", value: T[]) => void);
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
