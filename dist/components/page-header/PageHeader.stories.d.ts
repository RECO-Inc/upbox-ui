import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    tags: string[];
    argTypes: {
        size: {
            control: "inline-radio";
            options: string[];
        };
        back: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
/** 웹 기본: md(24px) 타이틀 + 설명 */
export declare const Default: Story;
/** 우측 액션 버튼 */
export declare const WithActions: Story;
/** 상세 페이지(웹): 같은 24px + back 화살표 + 배지 */
export declare const DetailWithBackAndBadge: Story;
/** 사이즈 — 웹 md(24) / 모바일 lg(28)·sm(22) */
export declare const Sizes: Story;
