import { StoryObj } from '@storybook/vue3-vite';
import { DatePeriodValue } from './datePeriodTypes';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('../input-frame').InputFrameDesignProps & {
        modelValue?: DatePeriodValue | null;
        startPlaceholder?: string;
        endPlaceholder?: string;
        class?: import('vue').HTMLAttributes["class"];
        popoverContentClass?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: DatePeriodValue | null | undefined) => any;
    }, string, import('vue').PublicProps, Readonly<import('../input-frame').InputFrameDesignProps & {
        modelValue?: DatePeriodValue | null;
        startPlaceholder?: string;
        endPlaceholder?: string;
        class?: import('vue').HTMLAttributes["class"];
        popoverContentClass?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: DatePeriodValue | null | undefined) => any) | undefined;
    }>, {
        disabled: boolean;
        size: "small" | "large" | "regular" | null;
        error: boolean;
        variant: "default" | "filled" | "bottomline" | null;
        readonly: boolean;
        startPlaceholder: string;
        endPlaceholder: string;
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
