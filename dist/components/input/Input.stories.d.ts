import { StoryObj } from '@storybook/vue3-vite';
declare const meta: Meta<import('vue').DefineComponent<import('./Input').EnhancedInputProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (payload: string | number) => any;
}, string, import('vue').PublicProps, Readonly<import('./Input').EnhancedInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
}>, {
    error: boolean;
    disabled: boolean;
    type: string;
    size: "small" | "regular" | "large";
    variant: "default" | "filled" | "bottomline";
    readonly: boolean;
    clearable: boolean;
    password: boolean;
    counter: boolean;
    byteMode: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const Password: Story;
export declare const Clearable: Story;
export declare const ErrorState: Story;
export declare const Disabled: Story;
export declare const ReadOnly: Story;
