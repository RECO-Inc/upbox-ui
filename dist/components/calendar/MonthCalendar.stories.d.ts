import { StoryObj } from '@storybook/vue3-vite';
import { CalendarDate } from '@internationalized/date';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        modelValue?: CalendarDate | null;
    } & {
        class?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: CalendarDate | null) => any;
        done: () => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: CalendarDate | null;
    } & {
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: CalendarDate | null) => any) | undefined;
        onDone?: (() => any) | undefined;
    }>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
