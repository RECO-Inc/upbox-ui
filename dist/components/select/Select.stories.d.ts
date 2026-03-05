import { StoryObj } from '@storybook/vue3-vite';
declare const meta: Meta<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').SelectRootProps<import('reka-ui').AcceptableValue>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('reka-ui').AcceptableValue) => any;
        "update:open": (value: boolean) => any;
    }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('reka-ui').SelectRootProps<import('reka-ui').AcceptableValue>> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').SelectRootProps<import('reka-ui').AcceptableValue>> & Readonly<{
    "onUpdate:modelValue"?: ((value: import('reka-ui').AcceptableValue) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: import('reka-ui').AcceptableValue) => any;
    "update:open": (value: boolean) => any;
}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithGroups: Story;
