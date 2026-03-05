import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Accordion from './Accordion.vue'
import AccordionItem from './AccordionItem.vue'
import AccordionTrigger from './AccordionTrigger.vue'
import AccordionContent from './AccordionContent.vue'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
    template: `
      <Accordion type="single" collapsible class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is upbox-ui?</AccordionTrigger>
          <AccordionContent>
            upbox-ui is a Vue 3 component library built with Tailwind CSS and reka-ui primitives.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I install it?</AccordionTrigger>
          <AccordionContent>
            You can install upbox-ui via npm or directly from the Git repository URL.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes, all components are built on top of reka-ui which provides WAI-ARIA compliant primitives.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
    template: `
      <Accordion type="multiple" class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section One</AccordionTrigger>
          <AccordionContent>
            Content for section one. Multiple items can be open at the same time.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section Two</AccordionTrigger>
          <AccordionContent>
            Content for section two. Try opening both sections at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Section Three</AccordionTrigger>
          <AccordionContent>
            Content for section three. All sections can be expanded simultaneously.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

export const DefaultOpen: Story = {
  render: () => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
    template: `
      <Accordion type="single" default-value="item-1" collapsible class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>This item is open by default</AccordionTrigger>
          <AccordionContent>
            This accordion item is expanded on initial render via the default-value prop.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>This item is closed by default</AccordionTrigger>
          <AccordionContent>
            Click to expand this item.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
    template: `
      <Accordion type="single" collapsible class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Enabled item</AccordionTrigger>
          <AccordionContent>
            This item can be expanded normally.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Disabled item</AccordionTrigger>
          <AccordionContent>
            This content is not accessible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Another enabled item</AccordionTrigger>
          <AccordionContent>
            This item can also be expanded normally.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
}
