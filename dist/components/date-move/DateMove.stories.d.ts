import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            modelValue?: import('./dateMoveUtils').DateMoveModel;
            variant?: import('../input-frame').InputFrameVariantProps["variant"];
            size?: import('../input-frame').InputFrameVariantProps["size"];
            error?: boolean;
            readonly?: boolean;
            disabled?: boolean;
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: import('./dateMoveUtils').DateMoveModel) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:modelValue": (value: import('./dateMoveUtils').DateMoveModel) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean;
            readonly: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            modelValue?: import('./dateMoveUtils').DateMoveModel;
            variant?: import('../input-frame').InputFrameVariantProps["variant"];
            size?: import('../input-frame').InputFrameVariantProps["size"];
            error?: boolean;
            readonly?: boolean;
            disabled?: boolean;
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{
            "onUpdate:modelValue"?: ((value: import('./dateMoveUtils').DateMoveModel) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean;
            readonly: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        modelValue?: import('./dateMoveUtils').DateMoveModel;
        variant?: import('../input-frame').InputFrameVariantProps["variant"];
        size?: import('../input-frame').InputFrameVariantProps["size"];
        error?: boolean;
        readonly?: boolean;
        disabled?: boolean;
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{
        "onUpdate:modelValue"?: ((value: import('./dateMoveUtils').DateMoveModel) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:modelValue": (value: import('./dateMoveUtils').DateMoveModel) => any;
    }, string, {
        disabled: boolean;
        size: "small" | "large" | "regular" | null;
        error: boolean;
        readonly: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {
                size: import('vue').ComputedRef<import('../input-frame').InputFrameContextSize>;
            }): any;
        };
    });
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
/**
 * DateMove + DatePicker
 */
export declare const WithDatePicker: Story;
/**
 * DateMove + DatePeriodPicker
 */
export declare const WithDatePeriodPicker: Story;
/**
 * 날짜 이동도 막힘
 */
export declare const Disabled: Story;
export declare const Sizes: Story;
