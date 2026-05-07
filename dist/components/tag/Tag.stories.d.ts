import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').TagProps> & Readonly<{
            onClose?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            close: () => any;
        }, import('vue').PublicProps, {
            size: "3xsmall" | "2xsmall" | "xsmall" | "small";
            mode: "view" | "edit";
            state: "enabled" | "disabled" | "error";
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('.').TagProps> & Readonly<{
            onClose?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            size: "3xsmall" | "2xsmall" | "xsmall" | "small";
            mode: "view" | "edit";
            state: "enabled" | "disabled" | "error";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('.').TagProps> & Readonly<{
        onClose?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        close: () => any;
    }, string, {
        size: "3xsmall" | "2xsmall" | "xsmall" | "small";
        mode: "view" | "edit";
        state: "enabled" | "disabled" | "error";
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
