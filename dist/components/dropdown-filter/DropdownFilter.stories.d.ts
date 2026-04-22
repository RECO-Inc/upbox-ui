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
        displayStyle: {
            control: "select";
            options: string[];
        };
        disabled: {
            control: "boolean";
        };
        readonly: {
            control: "boolean";
        };
        canAll: {
            control: "boolean";
        };
        single: {
            control: "boolean";
        };
        search: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Sizes: Story;
export declare const DisplayStyles: Story;
export declare const SingleSelect: Story;
export declare const WithSearch: Story;
export declare const Disabled: Story;
export declare const WithPreselected: Story;
