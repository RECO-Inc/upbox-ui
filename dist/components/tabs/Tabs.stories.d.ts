import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').TabsRootProps<import('node_modules/reka-ui/dist/index3').StringOrNumber>> & Readonly<{
            "onUpdate:modelValue"?: ((payload: import('node_modules/reka-ui/dist/index3').StringOrNumber) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (payload: import('node_modules/reka-ui/dist/index3').StringOrNumber) => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('reka-ui').TabsRootProps<import('node_modules/reka-ui/dist/index3').StringOrNumber>> & Readonly<{
            "onUpdate:modelValue"?: ((payload: import('node_modules/reka-ui/dist/index3').StringOrNumber) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').TabsRootProps<import('node_modules/reka-ui/dist/index3').StringOrNumber>> & Readonly<{
        "onUpdate:modelValue"?: ((payload: import('node_modules/reka-ui/dist/index3').StringOrNumber) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (payload: import('node_modules/reka-ui/dist/index3').StringOrNumber) => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const BoxNavy: Story;
export declare const BoxGrey: Story;
export declare const Round: Story;
export declare const SmallSize: Story;
export declare const LargeSize: Story;
export declare const XlargeSize: Story;
