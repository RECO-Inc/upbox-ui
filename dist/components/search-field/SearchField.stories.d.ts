import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').SearchFieldProps> & Readonly<{
            onClear?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onSubmit?: ((value: string) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            clear: () => any;
            "update:modelValue": (value: string) => any;
            submit: (value: string) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            size: "small" | "regular" | "large";
            error: boolean;
            variant: "basic" | "filter";
            readonly: boolean;
            clearable: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('.').SearchFieldProps> & Readonly<{
            onClear?: (() => any) | undefined;
            "onUpdate:modelValue"?: ((value: string) => any) | undefined;
            onSubmit?: ((value: string) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: "small" | "regular" | "large";
            error: boolean;
            variant: "basic" | "filter";
            readonly: boolean;
            clearable: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('.').SearchFieldProps> & Readonly<{
        onClear?: (() => any) | undefined;
        "onUpdate:modelValue"?: ((value: string) => any) | undefined;
        onSubmit?: ((value: string) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        clear: () => any;
        "update:modelValue": (value: string) => any;
        submit: (value: string) => any;
    }, string, {
        disabled: boolean;
        size: "small" | "regular" | "large";
        error: boolean;
        variant: "basic" | "filter";
        readonly: boolean;
        clearable: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            filter?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
        error: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
        readonly: {
            control: "boolean";
        };
        clearable: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const States: Story;
export declare const ClearableDemo: Story;
export declare const FilterVariantDemo: Story;
export declare const Matrix: Story;
