import { Meta, StoryObj } from '@storybook/vue3-vite';
import { default as AllComponents } from './AllComponents';
declare const meta: Meta<typeof AllComponents>;
export default meta;
type Story = StoryObj<typeof AllComponents>;
export declare const Default: Story;
