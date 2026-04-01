import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./IconButton').IconButtonProps> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            size: "2xsmall" | "xsmall" | "small" | "regular" | "large" | "xlarge";
            variant: "primary" | "destructive" | "secondary" | "tertiary";
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./IconButton').IconButtonProps> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: "2xsmall" | "xsmall" | "small" | "regular" | "large" | "xlarge";
            variant: "primary" | "destructive" | "secondary" | "tertiary";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./IconButton').IconButtonProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, string, {
        disabled: boolean;
        size: "2xsmall" | "xsmall" | "small" | "regular" | "large" | "xlarge";
        variant: "primary" | "destructive" | "secondary" | "tertiary";
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
        size: {
            control: "select";
            options: string[];
        };
        disabled: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const AllVariantsGrid: Story;
export declare const Disabled: Story;
