import { StoryObj } from '@storybook/vue3-vite';
import { CalendarDate } from '@internationalized/date';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        modelValue?: CalendarDate | null;
        placeholder?: string;
        variant?: import('../input-frame').InputFrameVariantProps["variant"];
        size?: import('../input-frame').InputFrameVariantProps["size"];
        error?: boolean;
        readonly?: boolean;
        disabled?: boolean;
        class?: import('vue').HTMLAttributes["class"];
        popoverContentClass?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (value: CalendarDate | null | undefined) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: CalendarDate | null;
        placeholder?: string;
        variant?: import('../input-frame').InputFrameVariantProps["variant"];
        size?: import('../input-frame').InputFrameVariantProps["size"];
        error?: boolean;
        readonly?: boolean;
        disabled?: boolean;
        class?: import('vue').HTMLAttributes["class"];
        popoverContentClass?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: CalendarDate | null | undefined) => any) | undefined;
    }>, {
        disabled: boolean;
        size: "small" | "large" | "regular" | null;
        placeholder: string;
        error: boolean;
        variant: "default" | "filled" | "bottomline" | null;
        readonly: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    argTypes: {
        size: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const StatesAndSizes: Story;
