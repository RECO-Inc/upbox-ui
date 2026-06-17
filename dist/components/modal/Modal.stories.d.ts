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
        showClose: {
            control: "boolean";
        };
        closeOnOverlay: {
            control: "boolean";
        };
        closeOnEscape: {
            control: "boolean";
        };
        footerButtonGrow: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
/** 기본: 취소 + 확인 (가장 흔한 케이스) */
export declare const Default: Story;
/** 삭제 확인 — destructive 로 빨간 확인 버튼, 라벨 변경 */
export declare const Destructive: Story;
/** 단일 버튼(alert) — hideCancel */
export declare const SingleButton: Story;
/** 버튼 N개 — footer 슬롯으로 직접 구성 */
export declare const MultipleButtons: Story;
/** 비동기 제출 — 확인은 닫지 않고 emit만. 성공 시 부모가 open=false (기본 동작) */
export declare const AsyncConfirm: Story;
/** 커스텀 바디 + footer 슬롯 (compound escape hatch) */
export declare const CustomBodyAndFooter: Story;
/** 데스크탑 사이즈 — small(328) / regular(564) / large(934) / xlarge(1124) / full */
export declare const Sizes: Story;
/** 모바일 — 가장 작은 size(small) + footer 버튼 grow. Figma modal/alert/mobile 대응 */
export declare const Mobile: Story;
