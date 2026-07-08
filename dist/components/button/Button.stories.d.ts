import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('./Button').ButtonProps> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            click: (event: MouseEvent) => any;
        }, import('vue').PublicProps, {
            disabled: boolean;
            type: "button" | "submit" | "reset";
            size: "xsmall" | "small" | "regular" | "large" | "xlarge";
            theme: "filled" | "outlined";
            loading: boolean;
            variant: "primary" | "destructive" | "secondary" | "tertiary";
            block: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('./Button').ButtonProps> & Readonly<{
            onClick?: ((event: MouseEvent) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            type: "button" | "submit" | "reset";
            size: "xsmall" | "small" | "regular" | "large" | "xlarge";
            theme: "filled" | "outlined";
            loading: boolean;
            variant: "primary" | "destructive" | "secondary" | "tertiary";
            block: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('./Button').ButtonProps> & Readonly<{
        onClick?: ((event: MouseEvent) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        click: (event: MouseEvent) => any;
    }, string, {
        disabled: boolean;
        type: "button" | "submit" | "reset";
        size: "xsmall" | "small" | "regular" | "large" | "xlarge";
        theme: "filled" | "outlined";
        loading: boolean;
        variant: "primary" | "destructive" | "secondary" | "tertiary";
        block: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
    args: {
        onClick: import('storybook/test').Mock<(...args: any[]) => any>;
    };
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        theme: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
        block: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
        loading: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const Loading: Story;
export declare const Disabled: Story;
/**
 * 특정 조건에 걸려 액션을 수행할 수 없는 경우에는 버튼을 `disabled` 로 막지 않는다.
 * 버튼은 **enabled 상태를 유지**하고, 클릭 시 왜 수행할 수 없는지 **토스트로 안내**한다.
 *
 * - `disabled` 는 "이 화면 맥락에서 애초에 눌러선 안 되는" 순수 시각/구조적 비활성에만 사용한다.
 * - "조건 미충족(권한 없음·미선택·한도 초과 등)" 처럼 사유를 알려줘야 하는 경우는 enabled + 토스트.
 * - 토스트를 띄우려면 앱 루트에 `<Toast />` 가 마운트되어 있어야 한다.
 */
export declare const BlockedActionShowsToast: Story;
export declare const WithIcons: Story;
export declare const Block: Story;
/**
 * # 모든 버튼 한눈에 보기
 *
 * ## 속성들 3차원으로 표시
 * - enabled, disabled, hovered, pressed
 * - primary, destructive, secondary, tertiary
 * - xsmall, small, regular, large, xlarge
 */
export declare const Overview: Story;
