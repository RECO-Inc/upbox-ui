import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./Textarea').TextareaProps> & Readonly<{
            "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:modelValue": (payload: string | number) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean;
            variant: "default" | "filled" | "bottomline" | null;
            readonly: boolean;
            byteMode: boolean;
            counter: boolean;
            autoResize: boolean;
            maxHeight: number;
            rows: number;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            textareaRef: HTMLTextAreaElement;
        }, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./Textarea').TextareaProps> & Readonly<{
            "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            size: "small" | "large" | "regular" | null;
            error: boolean;
            variant: "default" | "filled" | "bottomline" | null;
            readonly: boolean;
            byteMode: boolean;
            counter: boolean;
            autoResize: boolean;
            maxHeight: number;
            rows: number;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./Textarea').TextareaProps> & Readonly<{
        "onUpdate:modelValue"?: ((payload: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:modelValue": (payload: string | number) => any;
    }, string, {
        disabled: boolean;
        size: "small" | "large" | "regular" | null;
        error: boolean;
        variant: "default" | "filled" | "bottomline" | null;
        readonly: boolean;
        byteMode: boolean;
        counter: boolean;
        autoResize: boolean;
        maxHeight: number;
        rows: number;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            footer?(_: {}): any;
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
        counter: {
            control: "boolean";
        };
        byteMode: {
            control: "boolean";
        };
        autoResize: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
/**
 * Figma `textArea` 매트릭스 — size × state. variant 는 `default` 만 정의되어 있다.
 */
export declare const FigmaMatrix: Story;
export declare const Sizes: Story;
export declare const Variants: Story;
export declare const ErrorState: Story;
export declare const Disabled: Story;
export declare const Readonly: Story;
export declare const WithCounter: Story;
export declare const ByteCounter: Story;
export declare const ManualCount: Story;
export declare const FixedRows: Story;
