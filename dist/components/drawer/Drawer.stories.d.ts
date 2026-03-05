import { StoryObj } from '@storybook/vue3-vite';
declare const meta: Meta<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vaul-vue').DrawerRootProps> & Readonly<{
        onClose?: (() => any) | undefined;
        onDrag?: ((percentageDragged: number) => any) | undefined;
        "onUpdate:open"?: ((open: boolean) => any) | undefined;
        onAnimationEnd?: ((open: boolean) => any) | undefined;
        onRelease?: ((open: boolean) => any) | undefined;
        "onUpdate:activeSnapPoint"?: ((val: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        close: () => any;
        drag: (percentageDragged: number) => any;
        "update:open": (open: boolean) => any;
        animationEnd: (open: boolean) => any;
        release: (open: boolean) => any;
        "update:activeSnapPoint": (val: string | number) => any;
    }, import('vue').PublicProps, {
        shouldScaleBackground: boolean;
    }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vaul-vue').DrawerRootProps> & Readonly<{
        onClose?: (() => any) | undefined;
        onDrag?: ((percentageDragged: number) => any) | undefined;
        "onUpdate:open"?: ((open: boolean) => any) | undefined;
        onAnimationEnd?: ((open: boolean) => any) | undefined;
        onRelease?: ((open: boolean) => any) | undefined;
        "onUpdate:activeSnapPoint"?: ((val: string | number) => any) | undefined;
    }>, {}, {}, {}, {}, {
        shouldScaleBackground: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vaul-vue').DrawerRootProps> & Readonly<{
    onClose?: (() => any) | undefined;
    onDrag?: ((percentageDragged: number) => any) | undefined;
    "onUpdate:open"?: ((open: boolean) => any) | undefined;
    onAnimationEnd?: ((open: boolean) => any) | undefined;
    onRelease?: ((open: boolean) => any) | undefined;
    "onUpdate:activeSnapPoint"?: ((val: string | number) => any) | undefined;
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    drag: (percentageDragged: number) => any;
    "update:open": (open: boolean) => any;
    animationEnd: (open: boolean) => any;
    release: (open: boolean) => any;
    "update:activeSnapPoint": (val: string | number) => any;
}, string, {
    shouldScaleBackground: boolean;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
})>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithLongContent: Story;
