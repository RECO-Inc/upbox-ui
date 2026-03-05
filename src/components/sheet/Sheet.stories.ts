import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Sheet from './Sheet.vue'
import SheetTrigger from './SheetTrigger.vue'
import SheetContent from './SheetContent.vue'
import SheetHeader from './SheetHeader.vue'
import SheetTitle from './SheetTitle.vue'
import SheetDescription from './SheetDescription.vue'
import SheetFooter from './SheetFooter.vue'
import SheetClose from './SheetClose.vue'

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Sheet,
      SheetTrigger,
      SheetContent,
      SheetHeader,
      SheetTitle,
      SheetDescription,
      SheetFooter,
      SheetClose,
    },
    template: `
      <div class="flex justify-center p-8">
        <Sheet>
          <SheetTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Open Sheet
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>
                This is the sheet description. Add your content here.
              </SheetDescription>
            </SheetHeader>
            <div class="py-4">
              <p class="text-sm text-base-60">Sheet content goes here.</p>
            </div>
            <SheetFooter>
              <SheetClose>
                <button class="px-4 py-2 rounded border border-base-40 text-sm font-medium">
                  Close
                </button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    `,
  }),
}

export const RightSide: Story = {
  render: () => ({
    components: {
      Sheet,
      SheetTrigger,
      SheetContent,
      SheetHeader,
      SheetTitle,
      SheetDescription,
    },
    template: `
      <div class="flex justify-center p-8">
        <Sheet>
          <SheetTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Open Right Sheet
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Right Sheet</SheetTitle>
              <SheetDescription>Slides in from the right side.</SheetDescription>
            </SheetHeader>
            <div class="py-4">
              <p class="text-sm text-base-60">Content for the right sheet.</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    `,
  }),
}

export const LeftSide: Story = {
  render: () => ({
    components: {
      Sheet,
      SheetTrigger,
      SheetContent,
      SheetHeader,
      SheetTitle,
      SheetDescription,
    },
    template: `
      <div class="flex justify-center p-8">
        <Sheet>
          <SheetTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Open Left Sheet
            </button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Left Sheet</SheetTitle>
              <SheetDescription>Slides in from the left side.</SheetDescription>
            </SheetHeader>
            <div class="py-4">
              <p class="text-sm text-base-60">Content for the left sheet.</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    `,
  }),
}

export const TopSide: Story = {
  render: () => ({
    components: {
      Sheet,
      SheetTrigger,
      SheetContent,
      SheetHeader,
      SheetTitle,
      SheetDescription,
    },
    template: `
      <div class="flex justify-center p-8">
        <Sheet>
          <SheetTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Open Top Sheet
            </button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Top Sheet</SheetTitle>
              <SheetDescription>Slides in from the top.</SheetDescription>
            </SheetHeader>
            <div class="py-4">
              <p class="text-sm text-base-60">Content for the top sheet.</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    `,
  }),
}

export const BottomSide: Story = {
  render: () => ({
    components: {
      Sheet,
      SheetTrigger,
      SheetContent,
      SheetHeader,
      SheetTitle,
      SheetDescription,
    },
    template: `
      <div class="flex justify-center p-8">
        <Sheet>
          <SheetTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Open Bottom Sheet
            </button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Bottom Sheet</SheetTitle>
              <SheetDescription>Slides in from the bottom.</SheetDescription>
            </SheetHeader>
            <div class="py-4">
              <p class="text-sm text-base-60">Content for the bottom sheet.</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    `,
  }),
}

export const AllSides: Story = {
  render: () => ({
    components: {
      Sheet,
      SheetTrigger,
      SheetContent,
      SheetHeader,
      SheetTitle,
      SheetDescription,
    },
    template: `
      <div class="flex flex-wrap gap-3 justify-center p-8">
        <Sheet>
          <SheetTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">Right</button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Right</SheetTitle>
              <SheetDescription>Right side sheet</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">Left</button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Left</SheetTitle>
              <SheetDescription>Left side sheet</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">Top</button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Top</SheetTitle>
              <SheetDescription>Top side sheet</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">Bottom</button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Bottom</SheetTitle>
              <SheetDescription>Bottom side sheet</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    `,
  }),
}
