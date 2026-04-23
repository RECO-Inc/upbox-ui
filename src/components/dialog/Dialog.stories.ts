import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Dialog from './Dialog.vue'
import DialogTrigger from './DialogTrigger.vue'
import DialogContent from './DialogContent.vue'
import DialogHeader from './DialogHeader.vue'
import DialogTitle from './DialogTitle.vue'
import DialogDescription from './DialogDescription.vue'
import DialogFooter from './DialogFooter.vue'
import DialogClose from './DialogClose.vue'
import { Button } from '../button'
import { TextField } from '../text-field'
import { Label } from '../label'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, Button },
    template: `
      <Dialog>
        <DialogTrigger as-child>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>This is a dialog description.</DialogDescription>
          </DialogHeader>
          <p class="text-size-14 text-grey-70">Dialog body content goes here.</p>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="assistant">Cancel</Button>
            </DialogClose>
            <Button variant="primary">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}

export const WithForm: Story = {
  render: () => ({
    components: { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, Button, TextField, Label },
    template: `
      <Dialog>
        <DialogTrigger as-child>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Make changes to your profile here.</DialogDescription>
          </DialogHeader>
          <div class="grid gap-[16px] py-[16px]">
            <div class="grid grid-cols-4 items-center gap-[16px]">
              <Label class="text-right">Name</Label>
              <TextField class="col-span-3" placeholder="Enter name" />
            </div>
            <div class="grid grid-cols-4 items-center gap-[16px]">
              <Label class="text-right">Email</Label>
              <TextField class="col-span-3" placeholder="Enter email" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="primary">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}
