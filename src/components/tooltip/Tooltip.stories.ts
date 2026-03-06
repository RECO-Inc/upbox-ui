import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Tooltip from './Tooltip.vue'
import TooltipTrigger from './TooltipTrigger.vue'
import TooltipContent from './TooltipContent.vue'
import TooltipProvider from './TooltipProvider.vue'
import { Button } from '../button'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button },
    template: `
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="assistant">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip content</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `,
  }),
}

export const Positions: Story = {
  render: () => ({
    components: { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button },
    template: `
      <TooltipProvider>
        <div class="flex gap-[16px] p-[48px]">
          <Tooltip>
            <TooltipTrigger as-child><Button variant="assistant">Top</Button></TooltipTrigger>
            <TooltipContent side="top"><p>Top tooltip</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child><Button variant="assistant">Bottom</Button></TooltipTrigger>
            <TooltipContent side="bottom"><p>Bottom tooltip</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child><Button variant="assistant">Left</Button></TooltipTrigger>
            <TooltipContent side="left"><p>Left tooltip</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child><Button variant="assistant">Right</Button></TooltipTrigger>
            <TooltipContent side="right"><p>Right tooltip</p></TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
}
