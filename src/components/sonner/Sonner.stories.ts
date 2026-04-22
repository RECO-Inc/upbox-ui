import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { toast } from 'vue-sonner'
import Toaster from './Sonner.vue'
import { Button } from '../button'

const meta = {
  title: 'Components/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    () => ({
      components: { Toaster },
      template: `
        <div style="min-height: 200px; position: relative;">
          <story />
          <Toaster />
        </div>
      `,
    }),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Button },
    setup() {
      function showToast() {
        toast('Event has been created', {
          description: 'Monday, January 3rd at 6:00pm',
        })
      }
      return { showToast }
    },
    template: `
      <Button variant="primary" @click="showToast">Show Toast</Button>
    `,
  }),
}

export const ToastTypes: Story = {
  render: () => ({
    components: { Button },
    setup() {
      function showDefault() {
        toast('Default notification message')
      }
      function showSuccess() {
        toast.success('Operation completed successfully!')
      }
      function showError() {
        toast.error('Something went wrong. Please try again.')
      }
      function showWarning() {
        toast.warning('This action cannot be undone.')
      }
      function showInfo() {
        toast.info('Your session will expire in 5 minutes.')
      }
      return { showDefault, showSuccess, showError, showWarning, showInfo }
    },
    template: `
      <div class="flex flex-wrap gap-[12px]">
        <Button variant="usually" @click="showDefault">Default</Button>
        <Button variant="positive" @click="showSuccess">Success</Button>
        <Button variant="error" @click="showError">Error</Button>
        <Button variant="usually" @click="showWarning">Warning</Button>
        <Button variant="info" @click="showInfo">Info</Button>
      </div>
    `,
  }),
}

export const WithDescription: Story = {
  render: () => ({
    components: { Button },
    setup() {
      function showToast() {
        toast('File uploaded', {
          description: 'report-2024.pdf was uploaded to your workspace.',
        })
      }
      return { showToast }
    },
    template: `
      <Button variant="primary" @click="showToast">Toast with Description</Button>
    `,
  }),
}

export const WithAction: Story = {
  render: () => ({
    components: { Button },
    setup() {
      function showToast() {
        toast('Item deleted', {
          description: 'The file has been moved to trash.',
          action: {
            label: 'Undo',
            onClick: () => toast.success('Deletion undone!'),
          },
        })
      }
      return { showToast }
    },
    template: `
      <Button variant="primary" @click="showToast">Toast with Action</Button>
    `,
  }),
}

export const WithPromise: Story = {
  render: () => ({
    components: { Button },
    setup() {
      function showPromiseToast() {
        const promise = new Promise<{ name: string }>((resolve) => {
          setTimeout(() => resolve({ name: 'report.pdf' }), 2000)
        })
        toast.promise(promise, {
          loading: 'Uploading file...',
          success: (data: any) => `${data.name} uploaded successfully!`,
          error: 'Upload failed. Please try again.',
        })
      }
      return { showPromiseToast }
    },
    template: `
      <Button variant="primary" @click="showPromiseToast">Promise Toast</Button>
    `,
  }),
}

export const CustomDuration: Story = {
  render: () => ({
    components: { Button },
    setup() {
      function showLongToast() {
        toast('Long-lived notification', {
          description: 'This toast will stay for 10 seconds.',
          duration: 10000,
        })
      }
      function showShortToast() {
        toast('Quick notification', {
          duration: 1500,
        })
      }
      return { showLongToast, showShortToast }
    },
    template: `
      <div class="flex gap-[12px]">
        <Button variant="primary" @click="showLongToast">Long (10s)</Button>
        <Button variant="usually" @click="showShortToast">Short (1.5s)</Button>
      </div>
    `,
  }),
}
