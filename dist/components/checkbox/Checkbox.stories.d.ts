import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./Checkbox').Props> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: boolean | "indeterminate") => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean | null;
            readOnly: boolean | null;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLSpanElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./Checkbox').Props> & Readonly<{
            "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean | null;
            readOnly: boolean | null;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./Checkbox').Props> & Readonly<{
        "onUpdate:modelValue"?: ((value: boolean | "indeterminate") => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: boolean | "indeterminate") => any;
    }, string, {
        disabled: boolean;
        size: "small" | "large" | "regular" | null;
        error: boolean | null;
        readOnly: boolean | null;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
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
        readOnly: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Sizes: Story;
export declare const ErrorState: Story;
export declare const Indeterminate: Story;
/**
 * 전체 선택의 사용 케이스
 * - 하나라도 선택 됨 -> 부분 선택
 * - 모두 선택 됨 -> 체크
 * - 모두 해제 됨 -> 미체크
 */
export declare const SelectAllWithItems: Story;
export declare const Disabled: Story;
/** 한판에 보기: 3(크기)×9(활성/비활성/읽기전용 × 미/체/부) */
export declare const FigmaComponentSet: Story;
