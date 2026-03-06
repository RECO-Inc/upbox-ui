import type { Meta, StoryObj } from '@storybook/vue3-vite'
import DropdownMenu from './DropdownMenu.vue'
import DropdownMenuTrigger from './DropdownMenuTrigger.vue'
import DropdownMenuContent from './DropdownMenuContent.vue'
import DropdownMenuItem from './DropdownMenuItem.vue'
import DropdownMenuLabel from './DropdownMenuLabel.vue'
import DropdownMenuSeparator from './DropdownMenuSeparator.vue'
import DropdownMenuCheckboxItem from './DropdownMenuCheckboxItem.vue'
import DropdownMenuGroup from './DropdownMenuGroup.vue'
import DropdownMenuSub from './DropdownMenuSub.vue'
import DropdownMenuSubTrigger from './DropdownMenuSubTrigger.vue'
import DropdownMenuSubContent from './DropdownMenuSubContent.vue'
import DropdownMenuShortcut from './DropdownMenuShortcut.vue'

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
    },
    template: `
      <div class="flex justify-center p-[32px]">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button class="px-[16px] py-[8px] rounded border border-base-40 bg-base-10 text-sm font-medium">
              Open Menu
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    `,
  }),
}

export const WithShortcuts: Story = {
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
    },
    template: `
      <div class="flex justify-center p-[32px]">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button class="px-[16px] py-[8px] rounded border border-base-40 bg-base-10 text-sm font-medium">
              Open Menu
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-[224px]">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    `,
  }),
}

export const WithCheckboxItems: Story = {
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuCheckboxItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
    },
    template: `
      <div class="flex justify-center p-[32px]">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button class="px-[16px] py-[8px] rounded border border-base-40 bg-base-10 text-sm font-medium">
              View Options
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-[224px]">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem :checked="true">Status Bar</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem :checked="false">Activity Bar</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem :checked="true">Panel</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    `,
  }),
}

export const WithSubMenu: Story = {
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuGroup,
      DropdownMenuSub,
      DropdownMenuSubTrigger,
      DropdownMenuSubContent,
    },
    template: `
      <div class="flex justify-center p-[32px]">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button class="px-[16px] py-[8px] rounded border border-base-40 bg-base-10 text-sm font-medium">
              Open Menu
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-[224px]">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuItem>Notification</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    `,
  }),
}

export const WithDisabledItems: Story = {
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
    },
    template: `
      <div class="flex justify-center p-[32px]">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button class="px-[16px] py-[8px] rounded border border-base-40 bg-base-10 text-sm font-medium">
              Open Menu
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem disabled>Billing (Disabled)</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>Log out (Disabled)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    `,
  }),
}
