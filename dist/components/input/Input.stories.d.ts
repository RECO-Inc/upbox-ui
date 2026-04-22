import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./Input').EnhancedInputProps> & Readonly<{
            "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (payload: string | number) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            type: string;
            size: "small" | "regular" | "large";
            error: boolean;
            variant: "default" | "filled" | "bottomline";
            readonly: boolean;
            clearable: boolean;
            password: boolean;
            byteMode: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./Input').EnhancedInputProps> & Readonly<{
            "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            type: string;
            size: "small" | "regular" | "large";
            error: boolean;
            variant: "default" | "filled" | "bottomline";
            readonly: boolean;
            clearable: boolean;
            password: boolean;
            byteMode: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./Input').EnhancedInputProps> & Readonly<{
        "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (payload: string | number) => any;
    }, string, {
        disabled: boolean;
        type: string;
        size: "small" | "regular" | "large";
        error: boolean;
        variant: "default" | "filled" | "bottomline";
        readonly: boolean;
        clearable: boolean;
        password: boolean;
        byteMode: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
        error: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
        readonly: {
            control: "boolean";
        };
        clearable: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const ErrorState: Story;
export declare const Disabled: Story;
export declare const ReadOnly: Story;
export declare const Password: Story;
export declare const Clearable: Story;
/**
 * `<InputIcon>` 를 활용
 * 아이콘 크기는 `<Input>` 의 크기에 맞춰서 자동 조정됨
 */
export declare const WithSuffixIcon: Story;
/**
 * `<InputCount>` 를 활용
 * count 는 `<Input>` 에서 관리함 (maxLength, byteMode 등을 provide 함~)
 */
export declare const WithCount: Story;
/**
 * `<InputUnit>` 를 활용
 * Unit 은 아무거나 넣어주면 됨~
 */
export declare const WithUnit: Story;
