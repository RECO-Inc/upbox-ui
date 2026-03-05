import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Drawer from './Drawer.vue'
import DrawerContent from './DrawerContent.vue'
import DrawerHeader from './DrawerHeader.vue'
import DrawerTitle from './DrawerTitle.vue'
import DrawerDescription from './DrawerDescription.vue'
import DrawerFooter from './DrawerFooter.vue'
import { DrawerTrigger, DrawerClose } from 'vaul-vue'

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerTrigger, DrawerClose },
    template: `
      <div class="flex justify-center p-8">
        <Drawer>
          <DrawerTrigger as-child>
            <button class="px-4 py-2 bg-primary-80 text-base-10 rounded font-bold text-size-14">
              Open Drawer
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>This is the drawer description providing context.</DrawerDescription>
            </DrawerHeader>
            <div class="p-4">
              <p class="text-size-14 text-base-60">
                Drawer content goes here. You can place any content inside the drawer.
              </p>
            </div>
            <DrawerFooter>
              <DrawerClose as-child>
                <button class="w-full px-4 py-2 bg-primary-80 text-base-10 rounded font-bold text-size-14">
                  Confirm
                </button>
              </DrawerClose>
              <DrawerClose as-child>
                <button class="w-full px-4 py-2 border border-base-40 text-base-70 rounded font-bold text-size-14">
                  Cancel
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    `,
  }),
}

export const WithLongContent: Story = {
  render: () => ({
    components: { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerTrigger, DrawerClose },
    template: `
      <div class="flex justify-center p-8">
        <Drawer>
          <DrawerTrigger as-child>
            <button class="px-4 py-2 bg-primary-80 text-base-10 rounded font-bold text-size-14">
              Open Long Drawer
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Terms of Service</DrawerTitle>
              <DrawerDescription>Please read carefully before proceeding.</DrawerDescription>
            </DrawerHeader>
            <div class="p-4 space-y-4 overflow-y-auto max-h-64">
              <p class="text-size-14 text-base-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p class="text-size-14 text-base-60">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p class="text-size-14 text-base-60">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p class="text-size-14 text-base-60">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <DrawerFooter>
              <DrawerClose as-child>
                <button class="w-full px-4 py-2 bg-primary-80 text-base-10 rounded font-bold text-size-14">
                  Accept
                </button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    `,
  }),
}
