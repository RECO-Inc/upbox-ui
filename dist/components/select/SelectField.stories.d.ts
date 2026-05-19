import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: any;
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
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
        readonly: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const EmptyValueOption: Story;
export declare const Variants: Story;
