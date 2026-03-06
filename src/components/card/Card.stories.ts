import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Card from './Card.vue'
import CardHeader from './CardHeader.vue'
import CardTitle from './CardTitle.vue'
import CardDescription from './CardDescription.vue'
import CardContent from './CardContent.vue'
import CardFooter from './CardFooter.vue'
import { Button } from '../button'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button },
    template: `
      <Card class="w-[384px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content area. You can put any content here.</p>
        </CardContent>
        <CardFooter class="flex justify-end gap-[8px]">
          <Button variant="assistant">Cancel</Button>
          <Button variant="primary">Save</Button>
        </CardFooter>
      </Card>
    `,
  }),
}

export const Simple: Story = {
  render: () => ({
    components: { Card, CardHeader, CardTitle, CardContent },
    template: `
      <Card class="w-[384px]">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-size-14 text-base-60">You have 3 unread messages.</p>
        </CardContent>
      </Card>
    `,
  }),
}
