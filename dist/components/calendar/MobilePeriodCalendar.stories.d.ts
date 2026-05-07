import { StoryObj } from '@storybook/vue3-vite';
import { DateRange } from 'reka-ui';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./MobilePeriodCalendar').Props> & Readonly<{
            "onUpdate:modelValue"?: ((value: DateRange) => any) | undefined;
            onReset?: (() => any) | undefined;
            "onUpdate:placeholder"?: ((value: import('reka-ui').DateValue | undefined) => any) | undefined;
            onChange?: ((value: {
                first: Date | null;
                last: Date | null;
            }) => any) | undefined;
            "onUpdate:startValue"?: ((value: import('reka-ui').DateValue | undefined) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: DateRange) => any;
            reset: () => any;
            "update:placeholder": (value: import('reka-ui').DateValue | undefined) => any;
            change: (value: {
                first: Date | null;
                last: Date | null;
            }) => any;
            "update:startValue": (value: import('reka-ui').DateValue | undefined) => any;
        }, import('vue').PublicProps, {
            showFooter: boolean;
            numberOfMonths: number;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./MobilePeriodCalendar').Props> & Readonly<{
            "onUpdate:modelValue"?: ((value: DateRange) => any) | undefined;
            onReset?: (() => any) | undefined;
            "onUpdate:placeholder"?: ((value: import('reka-ui').DateValue | undefined) => any) | undefined;
            onChange?: ((value: {
                first: Date | null;
                last: Date | null;
            }) => any) | undefined;
            "onUpdate:startValue"?: ((value: import('reka-ui').DateValue | undefined) => any) | undefined;
        }>, {}, {}, {}, {}, {
            showFooter: boolean;
            numberOfMonths: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./MobilePeriodCalendar').Props> & Readonly<{
        "onUpdate:modelValue"?: ((value: DateRange) => any) | undefined;
        onReset?: (() => any) | undefined;
        "onUpdate:placeholder"?: ((value: import('reka-ui').DateValue | undefined) => any) | undefined;
        onChange?: ((value: {
            first: Date | null;
            last: Date | null;
        }) => any) | undefined;
        "onUpdate:startValue"?: ((value: import('reka-ui').DateValue | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: DateRange) => any;
        reset: () => any;
        "update:placeholder": (value: import('reka-ui').DateValue | undefined) => any;
        change: (value: {
            first: Date | null;
            last: Date | null;
        }) => any;
        "update:startValue": (value: import('reka-ui').DateValue | undefined) => any;
    }, string, {
        showFooter: boolean;
        numberOfMonths: number;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            reset?(_: {
                onReset: () => void;
            }): any;
            done?(_: {
                onDone: () => void;
            }): any;
        };
    });
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithSelectedRange: Story;
export declare const ThreeMonths: Story;
export declare const NoFooter: Story;
