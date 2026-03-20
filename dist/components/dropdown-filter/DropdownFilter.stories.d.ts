import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: <T>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: {
        attrs: any;
        emit: ((e: "change", value: T[]) => void) & ((evt: "update:modelValue", value: T[]) => void);
        slots: {
            label?(_: {}): any;
            item?(_: {
                item: import('./DropdownFilter').DropdownFilterOption<T>;
            }): any;
        };
    }, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
        props: {
            readonly "onUpdate:modelValue"?: ((value: T[]) => any) | undefined;
            readonly onChange?: ((value: T[]) => any) | undefined;
            modelValue: T[];
            options: import('./DropdownFilter').DropdownFilterOption<T>[];
            disabled?: boolean | undefined;
            readonly?: boolean | undefined;
            canAll?: boolean | undefined;
            single?: boolean | undefined;
            search?: boolean | undefined;
            placeholder?: string | undefined;
            size?: "small" | "regular" | "large" | undefined;
            displayStyle?: "default" | "filled" | "highlight" | undefined;
        } & import('vue').PublicProps;
        expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
        attrs: any;
        slots: {
            label?(_: {}): any;
            item?(_: {
                item: import('./DropdownFilter').DropdownFilterOption<T>;
            }): any;
        };
        emit: ((e: "change", value: T[]) => void) & ((evt: "update:modelValue", value: T[]) => void);
    }>) => import('vue').VNode & {
        __ctx?: Awaited<typeof __VLS_setup>;
    };
    tags: string[];
    argTypes: {
        size: {
            control: "select";
            options: string[];
        };
        displayStyle: {
            control: "select";
            options: string[];
        };
        disabled: {
            control: "boolean";
        };
        readonly: {
            control: "boolean";
        };
        canAll: {
            control: "boolean";
        };
        single: {
            control: "boolean";
        };
        search: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Sizes: Story;
export declare const DisplayStyles: Story;
export declare const SingleSelect: Story;
export declare const WithSearch: Story;
export declare const Disabled: Story;
export declare const WithPreselected: Story;
