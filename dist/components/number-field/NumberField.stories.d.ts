import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('.').NumberFieldProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: number) => any;
    }, string, import('vue').PublicProps, Readonly<import('.').NumberFieldProps> & Readonly<{
        "onUpdate:modelValue"?: ((value: number) => any) | undefined;
    }>, {
        disabled: boolean;
        size: "small" | "regular" | "large";
        error: boolean;
        variant: "center" | "side";
        readonly: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
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
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const States: Story;
export declare const WithMinMaxStep: Story;
export declare const FormatOptions: Story;
export declare const Matrix: Story;
