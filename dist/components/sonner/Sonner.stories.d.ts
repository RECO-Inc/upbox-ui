import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('vue-sonner').ToasterProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue-sonner').ToasterProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
    tags: string[];
    decorators: (() => {
        components: {
            Toaster: import('vue').DefineComponent<import('vue-sonner').ToasterProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue-sonner').ToasterProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
        };
        template: string;
    })[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const ToastTypes: Story;
export declare const WithDescription: Story;
export declare const WithAction: Story;
export declare const WithPromise: Story;
export declare const CustomDuration: Story;
