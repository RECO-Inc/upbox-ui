import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            variant?: import('./inputFrameVariants').InputFrameVariantProps["variant"];
            size?: import('./inputFrameVariants').InputFrameVariantProps["size"];
            error?: boolean;
            readonly?: boolean;
            disabled?: boolean;
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean;
            variant: "default" | "filled" | "bottomline" | null;
            readonly: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            variant?: import('./inputFrameVariants').InputFrameVariantProps["variant"];
            size?: import('./inputFrameVariants').InputFrameVariantProps["size"];
            error?: boolean;
            readonly?: boolean;
            disabled?: boolean;
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{}>, {}, {}, {}, {}, {
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
        variant?: import('./inputFrameVariants').InputFrameVariantProps["variant"];
        size?: import('./inputFrameVariants').InputFrameVariantProps["size"];
        error?: boolean;
        readonly?: boolean;
        disabled?: boolean;
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
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
        variant: {
            control: "select";
            options: string[];
        };
        size: {
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
export declare const Sizes: Story;
export declare const Variants: Story;
export declare const StateActive: Story;
export declare const StateError: Story;
export declare const StateReadOnly: Story;
export declare const StateDisabled: Story;
