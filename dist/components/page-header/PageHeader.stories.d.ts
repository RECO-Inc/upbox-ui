import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    tags: string[];
    argTypes: {
        variant: {
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
/** 리스트 페이지: 대타이틀 + 설명 */
export declare const Default: Story;
/** 우측 액션 버튼 */
export declare const WithActions: Story;
/** 상세 페이지: 중타이틀 + back + 배지 */
export declare const SubWithBackAndBadge: Story;
/** 대/중 타이틀 비교 */
export declare const Variants: Story;
