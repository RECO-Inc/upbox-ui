import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Popover from './Popover.vue'
import PopoverTrigger from './PopoverTrigger.vue'
import PopoverContent from './PopoverContent.vue'

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent },
    template: `
      <div class="flex justify-center p-16">
        <Popover>
          <PopoverTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Open Popover
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <p class="text-sm font-semibold mb-1">Popover Title</p>
            <p class="text-sm text-base-60">This is the popover content area.</p>
          </PopoverContent>
        </Popover>
      </div>
    `,
  }),
}

export const Alignments: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent },
    template: `
      <div class="flex gap-6 justify-center p-16">
        <Popover>
          <PopoverTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Start
            </button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <p class="text-sm font-semibold mb-1">Align Start</p>
            <p class="text-sm text-base-60">Popover aligned to the start.</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Center
            </button>
          </PopoverTrigger>
          <PopoverContent align="center">
            <p class="text-sm font-semibold mb-1">Align Center</p>
            <p class="text-sm text-base-60">Popover aligned to the center.</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              End
            </button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <p class="text-sm font-semibold mb-1">Align End</p>
            <p class="text-sm text-base-60">Popover aligned to the end.</p>
          </PopoverContent>
        </Popover>
      </div>
    `,
  }),
}

export const Sides: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent },
    template: `
      <div class="flex gap-6 flex-wrap justify-center p-16">
        <Popover>
          <PopoverTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Top
            </button>
          </PopoverTrigger>
          <PopoverContent side="top">
            <p class="text-sm">Opens above</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Bottom
            </button>
          </PopoverTrigger>
          <PopoverContent side="bottom">
            <p class="text-sm">Opens below</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Left
            </button>
          </PopoverTrigger>
          <PopoverContent side="left">
            <p class="text-sm">Opens left</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Right
            </button>
          </PopoverTrigger>
          <PopoverContent side="right">
            <p class="text-sm">Opens right</p>
          </PopoverContent>
        </Popover>
      </div>
    `,
  }),
}

export const WithForm: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent },
    template: `
      <div class="flex justify-center p-16">
        <Popover>
          <PopoverTrigger>
            <button class="px-4 py-2 rounded border border-base-40 bg-base-10 text-sm font-medium">
              Edit Profile
            </button>
          </PopoverTrigger>
          <PopoverContent class="w-80">
            <div class="grid gap-4">
              <div class="space-y-2">
                <h4 class="font-medium leading-none text-sm">Dimensions</h4>
                <p class="text-xs text-base-60">Set the dimensions for the layer.</p>
              </div>
              <div class="grid gap-2">
                <div class="grid grid-cols-3 items-center gap-4">
                  <label class="text-sm text-right">Width</label>
                  <input class="col-span-2 h-8 rounded border border-base-40 px-2 text-sm" placeholder="100px" />
                </div>
                <div class="grid grid-cols-3 items-center gap-4">
                  <label class="text-sm text-right">Height</label>
                  <input class="col-span-2 h-8 rounded border border-base-40 px-2 text-sm" placeholder="auto" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    `,
  }),
}
