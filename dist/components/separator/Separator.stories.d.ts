import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('reka-ui').SeparatorProps & {
        class?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('reka-ui').SeparatorProps & {
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{}>, {
        orientation: "vertical" | "horizontal";
        decorative: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Horizontal: Story;
export declare const Vertical: Story;
