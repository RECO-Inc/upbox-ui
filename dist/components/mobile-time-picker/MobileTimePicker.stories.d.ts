import { StoryObj } from '@storybook/vue3-vite';
import { Time } from '@internationalized/date';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue?: Time | null;
        } & import('../input-frame').InputFrameDesignProps & {
            class?: import('vue').HTMLAttributes["class"];
            drawerContentClass?: import('vue').HTMLAttributes["class"];
            title?: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: Time | null) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: Time | null) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            title: string;
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
            drawerContentClass?: import('vue').HTMLAttributes["class"];
            title?: string;
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: Time | null) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            title: string;
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
        drawerContentClass?: import('vue').HTMLAttributes["class"];
        title?: string;
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: Time | null) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: Time | null) => any;
    }, string, {
        disabled: boolean;
        size: "small" | "large" | "regular" | null;
        title: string;
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
export declare const WithExplicitTimeInput: Story;
