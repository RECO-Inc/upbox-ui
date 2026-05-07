import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('.').SeparatorProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('.').SeparatorProps> & Readonly<{}>, {
        orientation: "horizontal" | "vertical";
        decorative: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Horizontal: Story;
export declare const Vertical: Story;
