import { StoryObj } from '@storybook/vue3-vite';
declare const meta: Meta<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./Button').EnhancedButtonProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, import('vue').PublicProps, {
        disabled: boolean;
        type: "button" | "submit" | "reset";
        size: "xs" | "sm" | "md" | "lg" | "xl";
        loading: boolean;
        variant: "primary" | "error" | "positive" | "usually" | "assistant" | "info";
        block: boolean;
        round: boolean;
        buttonStyle: "filled" | "outlined" | "text";
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('./Button').EnhancedButtonProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, {
        disabled: boolean;
        type: "button" | "submit" | "reset";
        size: "xs" | "sm" | "md" | "lg" | "xl";
        loading: boolean;
        variant: "primary" | "error" | "positive" | "usually" | "assistant" | "info";
        block: boolean;
        round: boolean;
        buttonStyle: "filled" | "outlined" | "text";
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('./Button').EnhancedButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => any;
}, string, {
    disabled: boolean;
    type: "button" | "submit" | "reset";
    size: "xs" | "sm" | "md" | "lg" | "xl";
    loading: boolean;
    variant: "primary" | "error" | "positive" | "usually" | "assistant" | "info";
    block: boolean;
    round: boolean;
    buttonStyle: "filled" | "outlined" | "text";
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Variants: Story;
export declare const Styles: Story;
export declare const Sizes: Story;
export declare const Loading: Story;
export declare const Disabled: Story;
export declare const Block: Story;
