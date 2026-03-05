import { StoryObj } from '@storybook/vue3-vite';
declare const meta: Meta<import('vue').DefineComponent<{
    modelValue: string | number;
} & import('./Stepper').StepperProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => any;
}, string, import('vue').PublicProps, Readonly<{
    modelValue: string | number;
} & import('./Stepper').StepperProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const AllComplete: Story;
