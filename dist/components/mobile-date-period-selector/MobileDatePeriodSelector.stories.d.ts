import { StoryObj } from '@storybook/vue3-vite';
import { DatePeriodPreset } from './MobileDatePeriodSelector';
import { DatePeriodValue } from '../date-period-picker/datePeriodTypes';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        modelValue?: DatePeriodValue | null;
        preset?: DatePeriodPreset;
        title?: string;
        doneText?: string;
        startPlaceholder?: string;
        endPlaceholder?: string;
        showClose?: boolean;
        class?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: DatePeriodValue | null) => any;
        done: (value: DatePeriodValue) => any;
        close: () => any;
        "update:preset": (value: DatePeriodPreset) => any;
    }, string, import('vue').PublicProps, Readonly<{
        modelValue?: DatePeriodValue | null;
        preset?: DatePeriodPreset;
        title?: string;
        doneText?: string;
        startPlaceholder?: string;
        endPlaceholder?: string;
        showClose?: boolean;
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: DatePeriodValue | null) => any) | undefined;
        onDone?: ((value: DatePeriodValue) => any) | undefined;
        onClose?: (() => any) | undefined;
        "onUpdate:preset"?: ((value: DatePeriodPreset) => any) | undefined;
    }>, {
        modelValue: DatePeriodValue | null;
        title: string;
        startPlaceholder: string;
        endPlaceholder: string;
        preset: DatePeriodPreset;
        doneText: string;
        showClose: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Fixed: Story;
export declare const Select: Story;
export declare const Empty: Story;
export declare const Preselected3Months: Story;
