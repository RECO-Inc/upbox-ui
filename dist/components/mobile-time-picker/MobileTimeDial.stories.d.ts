import { StoryObj } from '@storybook/vue3-vite';
import { Time } from '@internationalized/date';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        modelValue?: Time | null;
        title?: string;
        showClose?: boolean;
        class?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: Time | null) => any;
        change: (value: Time | null) => any;
        close: () => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: Time | null;
        title?: string;
        showClose?: boolean;
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: Time | null) => any) | undefined;
        onChange?: ((value: Time | null) => any) | undefined;
        onClose?: (() => any) | undefined;
    }>, {
        modelValue: Time | null;
        title: string;
        showClose: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
        meridiemCol: HTMLDivElement;
        hourCol: HTMLDivElement;
        minuteCol: HTMLDivElement;
    }, HTMLElement>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithSelectedTime: Story;
