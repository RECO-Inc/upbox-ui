import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./Button').ButtonProps> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            type: "button" | "submit" | "reset";
            size: "xsmall" | "small" | "regular" | "large" | "xlarge";
            theme: "filled" | "outlined";
            loading: boolean;
            variant: "primary" | "destructive" | "secondary" | "tertiary";
            block: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./Button').ButtonProps> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            type: "button" | "submit" | "reset";
            size: "xsmall" | "small" | "regular" | "large" | "xlarge";
            theme: "filled" | "outlined";
            loading: boolean;
            variant: "primary" | "destructive" | "secondary" | "tertiary";
            block: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./Button').ButtonProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, string, {
        disabled: boolean;
        type: "button" | "submit" | "reset";
        size: "xsmall" | "small" | "regular" | "large" | "xlarge";
        theme: "filled" | "outlined";
        loading: boolean;
        variant: "primary" | "destructive" | "secondary" | "tertiary";
        block: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
    args: {
        onClick: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        theme: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
        block: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
        loading: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const Loading: Story;
export declare const Disabled: Story;
export declare const WithIcons: Story;
export declare const Block: Story;
/**
 * # 모든 버튼 한눈에 보기
 *
 * ## 속성들 3차원으로 표시
 * - enabled, disabled, hovered, pressed
 * - primary, destructive, secondary, tertiary
 * - xsmall, small, regular, large, xlarge
 */
export declare const Overview: Story;
