import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    tags: string[];
    argTypes: {
        size: {
            control: "select";
            options: string[];
        };
        loading: {
            control: "boolean";
        };
        selectable: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
/** columns + rows 만으로 끝 (레거시 49곳에서 반복되던 thead/tbody v-for 제거) */
export declare const Default: Story;
/** 체크박스 선택 — v-model:selected (헤더 전체선택 + indeterminate 자동) */
export declare const Selectable: Story;
/** 커스텀 셀 — #cell-<key> 슬롯 (Badge/버튼 등) */
export declare const CustomCell: Story;
export declare const Loading: Story;
export declare const Empty: Story;
