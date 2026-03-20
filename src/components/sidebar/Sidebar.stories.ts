import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Sidebar from './Sidebar.vue'
import SidebarContent from './SidebarContent.vue'
import SidebarFooter from './SidebarFooter.vue'
import SidebarGroup from './SidebarGroup.vue'
import SidebarGroupContent from './SidebarGroupContent.vue'
import SidebarGroupLabel from './SidebarGroupLabel.vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarMenu from './SidebarMenu.vue'
import SidebarMenuButton from './SidebarMenuButton.vue'
import SidebarMenuItem from './SidebarMenuItem.vue'
import SidebarProvider from './SidebarProvider.vue'
import SidebarTrigger from './SidebarTrigger.vue'

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Sidebar,
      SidebarContent,
      SidebarFooter,
      SidebarGroup,
      SidebarGroupContent,
      SidebarGroupLabel,
      SidebarHeader,
      SidebarMenu,
      SidebarMenuButton,
      SidebarMenuItem,
      SidebarProvider,
      SidebarTrigger,
    },
    template: `
      <SidebarProvider style="min-height: 400px;">
        <Sidebar collapsible="offcanvas">
          <SidebarHeader>
            <div class="flex items-center gap-[8px] px-[8px] py-[4px]">
              <div class="w-[24px] h-[24px] bg-navy-80 rounded-sm" />
              <span class="font-bold text-grey-100">Upbox UI</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton :is-active="true">
                      Dashboard
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Projects
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Tasks
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Reports
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Profile
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      Preferences
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  Logout
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main class="flex-1 p-[24px]">
          <div class="flex items-center gap-[8px] mb-[16px]">
            <SidebarTrigger />
            <h1 class="text-size-18 font-bold text-grey-100">Dashboard</h1>
          </div>
          <p class="text-size-14 text-grey-60">Main content area. Click the trigger button to toggle the sidebar.</p>
        </main>
      </SidebarProvider>
    `,
  }),
}

export const NonCollapsible: Story = {
  render: () => ({
    components: {
      Sidebar,
      SidebarContent,
      SidebarGroup,
      SidebarGroupContent,
      SidebarGroupLabel,
      SidebarHeader,
      SidebarMenu,
      SidebarMenuButton,
      SidebarMenuItem,
      SidebarProvider,
    },
    template: `
      <SidebarProvider style="min-height: 400px;">
        <Sidebar collapsible="none">
          <SidebarHeader>
            <div class="flex items-center gap-[8px] px-[8px] py-[4px]">
              <div class="w-[24px] h-[24px] bg-navy-80 rounded-sm" />
              <span class="font-bold text-grey-100">App</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton :is-active="true">Home</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>About</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Contact</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main class="flex-1 p-[24px]">
          <h1 class="text-size-18 font-bold text-grey-100 mb-[8px]">Non-Collapsible Sidebar</h1>
          <p class="text-size-14 text-grey-60">This sidebar is always visible and cannot be collapsed.</p>
        </main>
      </SidebarProvider>
    `,
  }),
}

export const RightSide: Story = {
  render: () => ({
    components: {
      Sidebar,
      SidebarContent,
      SidebarGroup,
      SidebarGroupContent,
      SidebarGroupLabel,
      SidebarHeader,
      SidebarMenu,
      SidebarMenuButton,
      SidebarMenuItem,
      SidebarProvider,
      SidebarTrigger,
    },
    template: `
      <SidebarProvider style="min-height: 400px;">
        <main class="flex-1 p-[24px]">
          <div class="flex items-center justify-between mb-[16px]">
            <h1 class="text-size-18 font-bold text-grey-100">Right Sidebar</h1>
            <SidebarTrigger />
          </div>
          <p class="text-size-14 text-grey-60">The sidebar is on the right side of the layout.</p>
        </main>
        <Sidebar side="right" collapsible="offcanvas">
          <SidebarHeader>
            <div class="px-[8px] py-[4px] font-bold text-grey-100">Details</div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Properties</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Overview</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>History</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Comments</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    `,
  }),
}

export const FloatingVariant: Story = {
  render: () => ({
    components: {
      Sidebar,
      SidebarContent,
      SidebarGroup,
      SidebarGroupContent,
      SidebarGroupLabel,
      SidebarHeader,
      SidebarMenu,
      SidebarMenuButton,
      SidebarMenuItem,
      SidebarProvider,
      SidebarTrigger,
    },
    template: `
      <SidebarProvider style="min-height: 400px;" class="bg-grey-20">
        <Sidebar variant="floating" collapsible="offcanvas">
          <SidebarHeader>
            <div class="flex items-center gap-[8px] px-[8px] py-[4px]">
              <div class="w-[24px] h-[24px] bg-navy-80 rounded-sm" />
              <span class="font-bold text-grey-100">Floating</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton :is-active="true">Dashboard</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Analytics</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Settings</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main class="flex-1 p-[24px]">
          <div class="flex items-center gap-[8px] mb-[16px]">
            <SidebarTrigger />
            <h1 class="text-size-18 font-bold text-grey-100">Floating Sidebar</h1>
          </div>
          <p class="text-size-14 text-grey-60">The floating variant adds rounded-sm corners and a shadow to the sidebar panel.</p>
        </main>
      </SidebarProvider>
    `,
  }),
}
