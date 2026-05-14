import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').ChipProps> & Readonly<{
            onRemove?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            remove: (event: MouseEvent) => any;
        }, import('vue').PublicProps, {
            size: "xsmall" | "small";
            round: boolean;
            removable: boolean;
            state: "default" | "selected" | "active";
            dropdown: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('.').ChipProps> & Readonly<{
            onRemove?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            size: "xsmall" | "small";
            round: boolean;
            removable: boolean;
            state: "default" | "selected" | "active";
            dropdown: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('.').ChipProps> & Readonly<{
        onRemove?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        remove: (event: MouseEvent) => any;
    }, string, {
        size: "xsmall" | "small";
        round: boolean;
        removable: boolean;
        state: "default" | "selected" | "active";
        dropdown: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            badge?(_: {}): any;
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        round: {
            control: "boolean";
        };
        size: {
            control: "select";
            options: string[];
        };
        state: {
            control: "select";
            options: string[];
        };
        removable: {
            control: "boolean";
        };
        dropdown: {
            control: "boolean";
        };
        count: {
            control: "text";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const States: Story;
export declare const Shapes: Story;
export declare const Sizes: Story;
export declare const SingleSelectFromN: Story;
export declare const ListedRemovable: Story;
export declare const MultiSelectPicker: Story;
export declare const WithBadge: Story;
export declare const Matrix: Story;
