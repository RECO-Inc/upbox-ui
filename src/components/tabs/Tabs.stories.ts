import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Tabs from './Tabs.vue'
import TabsList from './TabsList.vue'
import TabsTrigger from './TabsTrigger.vue'
import TabsContent from './TabsContent.vue'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: `
      <Tabs default-value="tab1" class="w-96">
        <TabsList>
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Password</TabsTrigger>
          <TabsTrigger value="tab3">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p class="text-size-14 text-base-60 p-4">Account settings content.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p class="text-size-14 text-base-60 p-4">Password settings content.</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p class="text-size-14 text-base-60 p-4">General settings content.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
}
