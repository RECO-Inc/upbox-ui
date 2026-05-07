import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./MobileDateCalendar').Props> & Readonly<{
            "onUpdate:modelValue"?: ((value: import('reka-ui').DateValue | import('reka-ui').DateValue[] | undefined) => any) | undefined;
            onReset?: (() => any) | undefined;
            "onUpdate:placeholder"?: ((value: import('reka-ui').DateValue | undefined) => any) | undefined;
            onChange?: ((value: Date | null) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: import('reka-ui').DateValue | import('reka-ui').DateValue[] | undefined) => any;
            reset: () => any;
            "update:placeholder": (value: import('reka-ui').DateValue | undefined) => any;
            change: (value: Date | null) => any;
        }, import('vue').PublicProps, {
            showFooter: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./MobileDateCalendar').Props> & Readonly<{
            "onUpdate:modelValue"?: ((value: import('reka-ui').DateValue | import('reka-ui').DateValue[] | undefined) => any) | undefined;
            onReset?: (() => any) | undefined;
            "onUpdate:placeholder"?: ((value: import('reka-ui').DateValue | undefined) => any) | undefined;
            onChange?: ((value: Date | null) => any) | undefined;
        }>, {}, {}, {}, {}, {
            showFooter: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./MobileDateCalendar').Props> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('reka-ui').DateValue | import('reka-ui').DateValue[] | undefined) => any) | undefined;
        onReset?: (() => any) | undefined;
        "onUpdate:placeholder"?: ((value: import('reka-ui').DateValue | undefined) => any) | undefined;
        onChange?: ((value: Date | null) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('reka-ui').DateValue | import('reka-ui').DateValue[] | undefined) => any;
        reset: () => any;
        "update:placeholder": (value: import('reka-ui').DateValue | undefined) => any;
        change: (value: Date | null) => any;
    }, string, {
        showFooter: boolean;
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
export declare const WithSelectedDate: Story;
export declare const NoFooter: Story;
