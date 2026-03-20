import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<{
        class?: import('vue').HTMLAttributes["class"];
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<{
        class?: import('vue').HTMLAttributes["class"];
    }> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Sizes: Story;
export declare const Colored: Story;
