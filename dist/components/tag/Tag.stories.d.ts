import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            state?: import('.').TagVariants["state"];
            size?: import('.').TagVariants["size"];
            mode?: "view" | "edit";
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            onClose?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            close: () => any;
        }, import('vue').PublicProps, {
            size: "small" | "3xsmall" | "2xsmall" | "xsmall" | null;
            mode: "view" | "edit";
            state: "disabled" | "error" | "enabled" | null;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            state?: import('.').TagVariants["state"];
            size?: import('.').TagVariants["size"];
            mode?: "view" | "edit";
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            onClose?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            size: "small" | "3xsmall" | "2xsmall" | "xsmall" | null;
            mode: "view" | "edit";
            state: "disabled" | "error" | "enabled" | null;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        state?: import('.').TagVariants["state"];
        size?: import('.').TagVariants["size"];
        mode?: "view" | "edit";
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        onClose?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        close: () => any;
    }, string, {
        size: "small" | "3xsmall" | "2xsmall" | "xsmall" | null;
        mode: "view" | "edit";
        state: "disabled" | "error" | "enabled" | null;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            badge?(_: {}): any;
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        state: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
        mode: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const States: Story;
export declare const Modes: Story;
export declare const Sizes: Story;
export declare const WithBadge: Story;
export declare const Matrix: Story;
