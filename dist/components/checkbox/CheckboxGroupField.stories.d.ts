import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    tags: string[];
    argTypes: {
        orientation: {
            control: "inline-radio";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
        error: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
        readOnly: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Horizontal: Story;
export declare const Sizes: Story;
/** 에러 시 체크박스 영역만 빨개지고 라벨 텍스트는 grey-90 을 유지한다 */
export declare const ErrorState: Story;
/** number value 도 String 매핑 없이 원본 타입으로 emit 된다 */
export declare const NumberValues: Story;
export declare const ReadOnlyAndDisabled: Story;
