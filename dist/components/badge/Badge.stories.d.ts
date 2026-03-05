import { StoryObj } from '@storybook/vue3-vite';
declare const meta: Meta<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        variant?: import('.').BadgeVariants["variant"];
        size?: import('.').BadgeVariants["size"];
        deep?: boolean;
        outline?: boolean;
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        variant?: import('.').BadgeVariants["variant"];
        size?: import('.').BadgeVariants["size"];
        deep?: boolean;
        outline?: boolean;
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    variant?: import('.').BadgeVariants["variant"];
    size?: import('.').BadgeVariants["size"];
    deep?: boolean;
    outline?: boolean;
    class?: import('vue').HTMLAttributes["class"];
}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Variants: Story;
export declare const Deep: Story;
export declare const Outline: Story;
export declare const Sizes: Story;
