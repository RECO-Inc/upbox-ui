import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').ToggleProps & {
            class?: import('vue').HTMLAttributes["class"];
            variant?: import('.').ToggleVariants["variant"];
            size?: import('.').ToggleVariants["size"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: boolean) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            variant: "default" | "outline" | null;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('reka-ui').ToggleProps & {
            class?: import('vue').HTMLAttributes["class"];
            variant?: import('.').ToggleVariants["variant"];
            size?: import('.').ToggleVariants["size"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            variant: "default" | "outline" | null;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').ToggleProps & {
        class?: import('vue').HTMLAttributes["class"];
        variant?: import('.').ToggleVariants["variant"];
        size?: import('.').ToggleVariants["size"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: boolean) => any;
    }, string, {
        disabled: boolean;
        size: "small" | "large" | "regular" | null;
        variant: "default" | "outline" | null;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: any): any;
        };
    });
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Group: Story;
