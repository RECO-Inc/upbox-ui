import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {}, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            class?: import('vue').HTMLAttributes["class"];
        }> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithCaption: Story;
export declare const WithFooter: Story;
/**
 * 셀 밀도는 단일 값이다(size prop 없음).
 * 시안의 singleline / doubleLine 은 밀도 옵션이 아니라 콘텐츠가 몇 줄로 흐르느냐의 결과라,
 * 별도 prop 없이 행 높이가 자연스럽게 32px / 52px 로 늘어난다.
 */
export declare const RowHeights: Story;
export declare const WithTooltipHeader: Story;
export declare const EmptyState: Story;
