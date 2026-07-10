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
        minValue?: import('reka-ui').DateValue | null;
        maxValue?: import('reka-ui').DateValue | null;
        maxRangeDays?: number;
        maxRangeMessage?: string;
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
        minValue?: import('reka-ui').DateValue | null;
        maxValue?: import('reka-ui').DateValue | null;
        maxRangeDays?: number;
        maxRangeMessage?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: DatePeriodValue | null) => any) | undefined;
        onDone?: ((value: DatePeriodValue) => any) | undefined;
        onClose?: (() => any) | undefined;
        "onUpdate:preset"?: ((value: DatePeriodPreset) => any) | undefined;
    }>, {
        modelValue: DatePeriodValue | null;
        title: string;
        maxValue: import('reka-ui').DateValue | null;
        minValue: import('reka-ui').DateValue | null;
        showClose: boolean;
        startPlaceholder: string;
        endPlaceholder: string;
        maxRangeDays: number;
        preset: DatePeriodPreset;
        doneText: string;
        maxRangeMessage: string;
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
export declare const Constrained: Story;
