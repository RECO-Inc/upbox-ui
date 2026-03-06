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
      <Tabs default-value="tab1" class="w-[384px]">
        <TabsList>
          <TabsTrigger value="tab1">Account</TabsTrigger>
          <TabsTrigger value="tab2">Password</TabsTrigger>
          <TabsTrigger value="tab3">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p class="text-size-14 text-base-60 p-[16px]">Account settings content.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p class="text-size-14 text-base-60 p-[16px]">Password settings content.</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p class="text-size-14 text-base-60 p-[16px]">General settings content.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
}

export const BoxNavy: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: `
      <Tabs default-value="tab1" class="w-[384px]">
        <TabsList variant="box" color="navy">
          <TabsTrigger value="tab1" variant="box" color="navy">Account</TabsTrigger>
          <TabsTrigger value="tab2" variant="box" color="navy">Password</TabsTrigger>
          <TabsTrigger value="tab3" variant="box" color="navy">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p class="text-size-14 text-base-60 p-[16px]">Account settings content.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p class="text-size-14 text-base-60 p-[16px]">Password settings content.</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p class="text-size-14 text-base-60 p-[16px]">General settings content.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
}

export const BoxGrey: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: `
      <Tabs default-value="tab1" class="w-[384px]">
        <TabsList variant="box" color="grey">
          <TabsTrigger value="tab1" variant="box" color="grey">Account</TabsTrigger>
          <TabsTrigger value="tab2" variant="box" color="grey">Password</TabsTrigger>
          <TabsTrigger value="tab3" variant="box" color="grey">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p class="text-size-14 text-base-60 p-[16px]">Account settings content.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p class="text-size-14 text-base-60 p-[16px]">Password settings content.</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p class="text-size-14 text-base-60 p-[16px]">General settings content.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
}

export const Round: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: `
      <Tabs default-value="tab1" class="w-[384px]">
        <TabsList variant="round">
          <TabsTrigger value="tab1" variant="round">Account</TabsTrigger>
          <TabsTrigger value="tab2" variant="round">Password</TabsTrigger>
          <TabsTrigger value="tab3" variant="round">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p class="text-size-14 text-base-60 p-[16px]">Account settings content.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p class="text-size-14 text-base-60 p-[16px]">Password settings content.</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p class="text-size-14 text-base-60 p-[16px]">General settings content.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
}

export const SmallSize: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: `
      <Tabs default-value="tab1" class="w-[384px]">
        <TabsList size="sm">
          <TabsTrigger value="tab1" size="sm">Account</TabsTrigger>
          <TabsTrigger value="tab2" size="sm">Password</TabsTrigger>
          <TabsTrigger value="tab3" size="sm">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p class="text-size-14 text-base-60 p-[16px]">Account settings content.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p class="text-size-14 text-base-60 p-[16px]">Password settings content.</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p class="text-size-14 text-base-60 p-[16px]">General settings content.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
}

export const LargeSize: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: `
      <Tabs default-value="tab1" class="w-[384px]">
        <TabsList variant="box" size="lg">
          <TabsTrigger value="tab1" variant="box" size="lg">Account</TabsTrigger>
          <TabsTrigger value="tab2" variant="box" size="lg">Password</TabsTrigger>
          <TabsTrigger value="tab3" variant="box" size="lg">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p class="text-size-14 text-base-60 p-[16px]">Account settings content.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p class="text-size-14 text-base-60 p-[16px]">Password settings content.</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p class="text-size-14 text-base-60 p-[16px]">General settings content.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
}

export const XlargeSize: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    template: `
      <Tabs default-value="tab1" class="w-[384px]">
        <TabsList variant="box" size="xl">
          <TabsTrigger value="tab1" variant="box" size="xl">Account</TabsTrigger>
          <TabsTrigger value="tab2" variant="box" size="xl">Password</TabsTrigger>
          <TabsTrigger value="tab3" variant="box" size="xl">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p class="text-size-14 text-base-60 p-[16px]">Account settings content.</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p class="text-size-14 text-base-60 p-[16px]">Password settings content.</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p class="text-size-14 text-base-60 p-[16px]">General settings content.</p>
        </TabsContent>
      </Tabs>
    `,
  }),
}
