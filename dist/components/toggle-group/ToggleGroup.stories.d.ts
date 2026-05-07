import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('reka-ui').ToggleGroupRootProps<import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[]> & import('.').ToggleGroupExtraProps> & Readonly<{
            "onUpdate:modelValue"?: ((payload: import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[]) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (payload: import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[]) => any;
        }, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('reka-ui').ToggleGroupRootProps<import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[]> & import('.').ToggleGroupExtraProps> & Readonly<{
            "onUpdate:modelValue"?: ((payload: import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[]) => any) | undefined;
        }>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('reka-ui').ToggleGroupRootProps<import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[]> & import('.').ToggleGroupExtraProps> & Readonly<{
        "onUpdate:modelValue"?: ((payload: import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[]) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (payload: import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[]) => any;
    }, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {
                modelValue: import('reka-ui').AcceptableValue | import('reka-ui').AcceptableValue[] | undefined;
            }): any;
        };
    });
    tags: string[];
    argTypes: {
        type: {
            control: "select";
            options: string[];
        };
        variant: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Multiple: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const Disabled: Story;
