import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Sheet from './Sheet.vue'
import SheetTrigger from './SheetTrigger.vue'
import SheetContent from './SheetContent.vue'
import SheetHeader from './SheetHeader.vue'
import SheetTitle from './SheetTitle.vue'
import SheetDescription from './SheetDescription.vue'
import SheetFooter from './SheetFooter.vue'
import SheetClose from './SheetClose.vue'
import { Button } from '../button'

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
      Button,
    },
    template: `
      <div class="flex justify-center p-[32px]">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="tertiary" theme="outlined">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>
                This is the sheet description. Add your content here.
              </SheetDescription>
            </SheetHeader>
            <div class="py-[16px]">
              <p class="text-sm text-grey-60">Sheet content goes here.</p>
            </div>
            <SheetFooter>
              <SheetClose as-child>
                <Button variant="tertiary" theme="outlined">Close</Button>
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
      Button,
    },
    template: `
      <div class="flex justify-center p-[32px]">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="tertiary" theme="outlined">Open Right Sheet</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Right Sheet</SheetTitle>
              <SheetDescription>Slides in from the right side.</SheetDescription>
            </SheetHeader>
            <div class="py-[16px]">
              <p class="text-sm text-grey-60">Content for the right sheet.</p>
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
      Button,
    },
    template: `
      <div class="flex justify-center p-[32px]">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="tertiary" theme="outlined">Open Left Sheet</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Left Sheet</SheetTitle>
              <SheetDescription>Slides in from the left side.</SheetDescription>
            </SheetHeader>
            <div class="py-[16px]">
              <p class="text-sm text-grey-60">Content for the left sheet.</p>
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
      Button,
    },
    template: `
      <div class="flex justify-center p-[32px]">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="tertiary" theme="outlined">Open Top Sheet</Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Top Sheet</SheetTitle>
              <SheetDescription>Slides in from the top.</SheetDescription>
            </SheetHeader>
            <div class="py-[16px]">
              <p class="text-sm text-grey-60">Content for the top sheet.</p>
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
      Button,
    },
    template: `
      <div class="flex justify-center p-[32px]">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="tertiary" theme="outlined">Open Bottom Sheet</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Bottom Sheet</SheetTitle>
              <SheetDescription>Slides in from the bottom.</SheetDescription>
            </SheetHeader>
            <div class="py-[16px]">
              <p class="text-sm text-grey-60">Content for the bottom sheet.</p>
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
      Button,
    },
    template: `
      <div class="flex flex-wrap gap-[12px] justify-center p-[32px]">
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="tertiary" theme="outlined">Right</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Right</SheetTitle>
              <SheetDescription>Right side sheet</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="tertiary" theme="outlined">Left</Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Left</SheetTitle>
              <SheetDescription>Left side sheet</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="tertiary" theme="outlined">Top</Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle>Top</SheetTitle>
              <SheetDescription>Top side sheet</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="tertiary" theme="outlined">Bottom</Button>
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
