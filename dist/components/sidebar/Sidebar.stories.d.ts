import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').SidebarProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            collapsible: "offcanvas" | "icon" | "none";
            variant: "sidebar" | "floating" | "inset";
            side: "left" | "right";
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('.').SidebarProps> & Readonly<{}>, {}, {}, {}, {}, {
            collapsible: "offcanvas" | "icon" | "none";
            variant: "sidebar" | "floating" | "inset";
            side: "left" | "right";
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('.').SidebarProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        collapsible: "offcanvas" | "icon" | "none";
        variant: "sidebar" | "floating" | "inset";
        side: "left" | "right";
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            default?(_: {}): any;
            default?(_: {}): any;
        };
    });
    tags: string[];
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const NonCollapsible: Story;
export declare const RightSide: Story;
export declare const FloatingVariant: Story;
