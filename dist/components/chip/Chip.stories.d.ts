import { StoryObj } from '@storybook/vue3-vite';
/**
 * Figma `filterChips` — 조회용 드롭다운 필터 칩.
 * 생성·수정용 선택 UI 는 SelectField 를 쓴다.
 */
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('.').ChipProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            round: boolean;
            state: "placeholder" | "typed";
            device: "web" | "mobile";
            chevron: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('.').ChipProps> & Readonly<{}>, {}, {}, {}, {}, {
            round: boolean;
            state: "placeholder" | "typed";
            device: "web" | "mobile";
            chevron: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('.').ChipProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        round: boolean;
        state: "placeholder" | "typed";
        device: "web" | "mobile";
        chevron: boolean;
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
        device: {
            control: "inline-radio";
            options: string[];
        };
        state: {
            control: "inline-radio";
            options: string[];
        };
        count: {
            control: "text";
        };
        chevron: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const States: Story;
export declare const Device: Story;
export declare const Shapes: Story;
export declare const WithBadge: Story;
export declare const FilterUsage: Story;
export declare const Matrix: Story;
