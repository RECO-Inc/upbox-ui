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
        color: {
            control: "inline-radio";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
/** 탭 바가 v-model 구동, 내용은 페이지가 v-if 로 렌더 (이 앱 주 패턴) */
export declare const Default: Story;
export declare const Variants: Story;
/** 콘텐츠 패널까지 묶고 싶으면 slot 안에서 compound TabsContent 사용 */
export declare const WithContent: Story;
