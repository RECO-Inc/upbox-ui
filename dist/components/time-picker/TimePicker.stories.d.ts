import { StoryObj } from '@storybook/vue3-vite';
import { Time } from '@internationalized/date';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue?: Time | null;
        } & import('../input-frame').InputFrameDesignProps & {
            class?: import('vue').HTMLAttributes["class"];
            popoverContentClass?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: Time | null) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: Time | null) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean;
            variant: "default" | "filled" | "bottomline" | null;
            readonly: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            modelValue?: Time | null;
        } & import('../input-frame').InputFrameDesignProps & {
            class?: import('vue').HTMLAttributes["class"];
            popoverContentClass?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: Time | null) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean;
            variant: "default" | "filled" | "bottomline" | null;
            readonly: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        modelValue?: Time | null;
    } & import('../input-frame').InputFrameDesignProps & {
        class?: import('vue').HTMLAttributes["class"];
        popoverContentClass?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: Time | null) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: Time | null) => any;
    }, string, {
        disabled: boolean;
        size: "small" | "large" | "regular" | null;
        error: boolean;
        variant: "default" | "filled" | "bottomline" | null;
        readonly: boolean;
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
        variant: {
            control: "select";
            options: string[];
        };
        error: {
            control: "boolean";
        };
        readonly: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
/**
 * 슬롯에 TimeInput 을 명시적으로 넣는 방법.
 * placeholder 등 TimeInput 전용 props 를 직접 제어할 수 있다.
 */
export declare const WithExplicitTimeInput: Story;
export declare const StatesAndSizes: Story;
