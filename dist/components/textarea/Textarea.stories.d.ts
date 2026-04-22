import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('./Textarea').EnhancedTextareaProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (payload: string | number) => any;
    }, string, import('vue').PublicProps, Readonly<import('./Textarea').EnhancedTextareaProps> & Readonly<{
        "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
    }>, {
        disabled: boolean;
        size: "small" | "regular" | "large";
        error: boolean;
        variant: "default" | "filled" | "bottomline";
        readonly: boolean;
        counter: boolean;
        byteMode: boolean;
        autoResize: boolean;
        minHeight: number;
        maxHeight: number;
        rows: number;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
        textareaRef: HTMLTextAreaElement;
    }, any>;
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
export declare const ErrorState: Story;
export declare const WithMaxLength: Story;
