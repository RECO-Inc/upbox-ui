import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import FileUploader from './FileUploader.vue'
import type { UploaderFile } from './types'

const meta = {
  title: 'Components/FileUploader',
  component: FileUploader,
  tags: ['autodocs'],
  argTypes: {
    readonly: { control: 'boolean' },
    removable: { control: 'boolean' },
    downloadable: { control: 'boolean' },
    maxSize: { control: 'number' },
    maxCount: { control: 'number' },
  },
} satisfies Meta<typeof FileUploader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      const files = ref<UploaderFile[]>([])
      return { files }
    },
    template: `
      <div class="w-[480px]">
        <FileUploader
          v-model:inputFiles="files"
          label="Upload Files"
          :supportExt="['PDF', 'JPG', 'PNG']"
          :maxSize="5"
          :maxCount="10"
        />
      </div>
    `,
  }),
}

export const WithExistingFiles: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      const files = ref<UploaderFile[]>([
        {
          id: 1,
          state: 'done',
          timestamp: new Date().toISOString(),
          user: 'user@example.com',
          fileList: [
            {
              id: 1,
              url: '#',
              displayName: 'document',
              fileType: 'remote',
              fileName: 'document.pdf',
              createdAt: new Date().toISOString(),
            },
          ],
        },
        {
          id: 2,
          state: 'done',
          timestamp: new Date().toISOString(),
          user: 'user@example.com',
          fileList: [
            {
              id: 2,
              url: '#',
              displayName: 'image',
              fileType: 'remote',
              fileName: 'image.png',
              createdAt: new Date().toISOString(),
            },
          ],
        },
      ])
      return { files }
    },
    template: `
      <div class="w-[480px]">
        <FileUploader
          v-model:inputFiles="files"
          label="Uploaded Files"
          :removable="true"
          :downloadable="true"
        />
      </div>
    `,
  }),
}

export const Readonly: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      const files = ref<UploaderFile[]>([
        {
          id: 1,
          state: 'done',
          timestamp: new Date().toISOString(),
          user: 'admin',
          fileList: [
            {
              id: 1,
              url: '#',
              displayName: 'report',
              fileType: 'remote',
              fileName: 'report.pdf',
              createdAt: new Date().toISOString(),
            },
          ],
        },
      ])
      return { files }
    },
    template: `
      <div class="w-[480px]">
        <FileUploader
          v-model:inputFiles="files"
          label="Attachments (Read Only)"
          :readonly="true"
        />
      </div>
    `,
  }),
}

export const ReadonlyEmpty: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      const files = ref<UploaderFile[]>([])
      return { files }
    },
    template: `
      <div class="w-[480px]">
        <FileUploader
          v-model:inputFiles="files"
          label="Attachments (Read Only, Empty)"
          :readonly="true"
        />
      </div>
    `,
  }),
}

export const WithError: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      const files = ref<UploaderFile[]>([])
      return { files }
    },
    template: `
      <div class="w-[480px]">
        <FileUploader
          v-model:inputFiles="files"
          label="Upload (with error)"
          errorMessage="Please upload at least one file."
        />
      </div>
    `,
  }),
}

export const CustomExtensions: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      const files = ref<UploaderFile[]>([])
      return { files }
    },
    template: `
      <div class="w-[480px]">
        <FileUploader
          v-model:inputFiles="files"
          label="Upload Excel or Word Files"
          :supportExt="['XLSX', 'XLS', 'DOCX', 'DOC']"
          :maxSize="10"
          :maxCount="5"
        />
      </div>
    `,
  }),
}

export const Downloadable: Story = {
  render: () => ({
    components: { FileUploader },
    setup() {
      const files = ref<UploaderFile[]>([
        {
          id: 1,
          state: 'done',
          timestamp: new Date().toISOString(),
          user: 'admin',
          fileList: [
            {
              id: 1,
              url: '#',
              displayName: 'contract',
              fileType: 'remote',
              fileName: 'contract.pdf',
              createdAt: new Date().toISOString(),
            },
          ],
        },
      ])
      return { files }
    },
    template: `
      <div class="w-[480px]">
        <FileUploader
          v-model:inputFiles="files"
          label="Downloadable Files"
          :readonly="true"
          :downloadable="true"
        />
      </div>
    `,
  }),
}
