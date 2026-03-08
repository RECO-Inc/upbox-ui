import { StoryObj } from '@storybook/vue3-vite';
declare const meta: Meta<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
        class?: import('vue').HTMLAttributes["class"];
        size?: import('.').AvatarVariants["size"];
        shape?: import('.').AvatarVariants["shape"];
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: "small" | "base" | "large" | null;
        shape: "circle" | "square" | null;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        class?: import('vue').HTMLAttributes["class"];
        size?: import('.').AvatarVariants["size"];
        shape?: import('.').AvatarVariants["shape"];
    }> & Readonly<{}>, {}, {}, {}, {}, {
        size: "small" | "base" | "large" | null;
        shape: "circle" | "square" | null;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<{
    class?: import('vue').HTMLAttributes["class"];
    size?: import('.').AvatarVariants["size"];
    shape?: import('.').AvatarVariants["shape"];
}> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    size: "small" | "base" | "large" | null;
    shape: "circle" | "square" | null;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const WithFallback: Story;
export declare const Sizes: Story;
export declare const Shapes: Story;
