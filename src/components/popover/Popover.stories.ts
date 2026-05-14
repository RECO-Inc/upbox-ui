import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Popover from './Popover.vue'
import PopoverTrigger from './PopoverTrigger.vue'
import PopoverContent from './PopoverContent.vue'
import { Button } from '../button'
import { TextField } from '../text-field'

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent, Button },
    template: `
      <div class="flex justify-center p-[64px]">
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="tertiary" theme="outlined">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p class="text-sm font-semibold mb-[4px]">Popover Title</p>
            <p class="text-sm text-grey-60">This is the popover content area.</p>
          </PopoverContent>
        </Popover>
      </div>
    `,
  }),
}

export const Alignments: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent, Button },
    template: `
      <div class="flex gap-[24px] justify-center p-[64px]">
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="tertiary" theme="outlined">Start</Button>
          </PopoverTrigger>
          <PopoverContent align="start">
            <p class="text-sm font-semibold mb-[4px]">Align Start</p>
            <p class="text-sm text-grey-60">Popover aligned to the start.</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="tertiary" theme="outlined">Center</Button>
          </PopoverTrigger>
          <PopoverContent align="center">
            <p class="text-sm font-semibold mb-[4px]">Align Center</p>
            <p class="text-sm text-grey-60">Popover aligned to the center.</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="tertiary" theme="outlined">End</Button>
          </PopoverTrigger>
          <PopoverContent align="end">
            <p class="text-sm font-semibold mb-[4px]">Align End</p>
            <p class="text-sm text-grey-60">Popover aligned to the end.</p>
          </PopoverContent>
        </Popover>
      </div>
    `,
  }),
}

export const Sides: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent, Button },
    template: `
      <div class="flex gap-[24px] flex-wrap justify-center p-[64px]">
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="tertiary" theme="outlined">Top</Button>
          </PopoverTrigger>
          <PopoverContent side="top">
            <p class="text-sm">Opens above</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="tertiary" theme="outlined">Bottom</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">
            <p class="text-sm">Opens below</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="tertiary" theme="outlined">Left</Button>
          </PopoverTrigger>
          <PopoverContent side="left">
            <p class="text-sm">Opens left</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="tertiary" theme="outlined">Right</Button>
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
    components: { Popover, PopoverTrigger, PopoverContent, Button, TextField },
    template: `
      <div class="flex justify-center p-[64px]">
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="tertiary" theme="outlined">Edit Profile</Button>
          </PopoverTrigger>
          <PopoverContent class="w-[320px]">
            <div class="grid gap-[16px]">
              <div class="space-y-[8px]">
                <h4 class="font-medium leading-none text-sm">Dimensions</h4>
                <p class="text-xs text-grey-60">Set the dimensions for the layer.</p>
              </div>
              <div class="grid gap-[8px]">
                <div class="grid grid-cols-3 items-center gap-[16px]">
                  <label class="text-sm text-right">Width</label>
                  <div class="col-span-2"><TextField size="small" placeholder="100px" /></div>
                </div>
                <div class="grid grid-cols-3 items-center gap-[16px]">
                  <label class="text-sm text-right">Height</label>
                  <div class="col-span-2"><TextField size="small" placeholder="auto" /></div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    `,
  }),
}
