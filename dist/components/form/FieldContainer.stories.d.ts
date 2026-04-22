import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./FieldContainer').FieldContainerProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: import('./injectionKeys').FieldSize;
            required: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./FieldContainer').FieldContainerProps> & Readonly<{}>, {}, {}, {}, {}, {
            size: import('./injectionKeys').FieldSize;
            required: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./FieldContainer').FieldContainerProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        size: import('./injectionKeys').FieldSize;
        required: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            tooltip?(_: {}): any;
            default?(_: {
                field: import('vee-validate').FieldBindingObject<any>;
                componentField: import('vee-validate').ComponentFieldBindingObject<any>;
                value: any;
                meta: import('vee-validate').FieldMeta<any>;
                errors: string[];
                errorMessage: string | undefined;
                handleInput: import('vee-validate').FieldContext["handleChange"];
                handleBlur: (e?: Event, shouldValidate?: boolean) => void;
                resetField: (state?: Partial<import('vee-validate').FieldState<unknown>> | undefined) => void;
                handleReset: () => void;
                validate: import('vee-validate').FieldValidator<unknown>;
                handleChange: (e: Event | unknown, shouldValidate?: boolean) => void;
                setTouched: (isTouched: boolean) => void;
                setErrors: (message: string | string[]) => void;
                setValue: (value: unknown, shouldValidate?: boolean) => void;
            }): any;
        };
    });
    tags: string[];
    argTypes: {
        size: {
            control: "select";
            options: string[];
        };
        label: {
            control: "text";
        };
        description: {
            control: "text";
        };
        required: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Sizes: Story;
export declare const WithValidation: Story;
export declare const ErrorOverridesDescription: Story;
export declare const WithTextarea: Story;
export declare const WithSelect: Story;
export declare const AccessibleWithoutVisualLabel: Story;
export declare const Disabled: Story;
export declare const PlainInput: Story;
