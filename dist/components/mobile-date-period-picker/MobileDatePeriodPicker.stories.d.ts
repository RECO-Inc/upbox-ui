import { StoryObj } from '@storybook/vue3-vite';
import { DatePeriodValue } from '../date-period-picker/datePeriodTypes';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../input-frame').InputFrameDesignProps & {
            modelValue?: DatePeriodValue | null;
            startPlaceholder?: string;
            endPlaceholder?: string;
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: DatePeriodValue | null | undefined) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: DatePeriodValue | null | undefined) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean;
            variant: "default" | "filled" | "bottomline" | null;
            readonly: boolean;
            startPlaceholder: string;
            endPlaceholder: string;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../input-frame').InputFrameDesignProps & {
            modelValue?: DatePeriodValue | null;
            startPlaceholder?: string;
            endPlaceholder?: string;
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: DatePeriodValue | null | undefined) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean;
            variant: "default" | "filled" | "bottomline" | null;
            readonly: boolean;
            startPlaceholder: string;
            endPlaceholder: string;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('../input-frame').InputFrameDesignProps & {
        modelValue?: DatePeriodValue | null;
        startPlaceholder?: string;
        endPlaceholder?: string;
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: DatePeriodValue | null | undefined) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: DatePeriodValue | null | undefined) => any;
    }, string, {
        disabled: boolean;
        size: "small" | "large" | "regular" | null;
        error: boolean;
        variant: "default" | "filled" | "bottomline" | null;
        readonly: boolean;
        startPlaceholder: string;
        endPlaceholder: string;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
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
export declare const Preselected: Story;
