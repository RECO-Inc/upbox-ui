import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import Pagination from './Pagination.vue'
import PaginationContent from './PaginationContent.vue'
import PaginationItem from './PaginationItem.vue'
import PaginationFirst from './PaginationFirst.vue'
import PaginationPrevious from './PaginationPrevious.vue'
import PaginationNext from './PaginationNext.vue'
import PaginationLast from './PaginationLast.vue'
import PaginationEllipsis from './PaginationEllipsis.vue'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationFirst,
      PaginationPrevious,
      PaginationNext,
      PaginationLast,
      PaginationEllipsis,
    },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <div class="p-8">
        <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges>
          <PaginationContent v-slot="{ items }">
            <PaginationFirst />
            <PaginationPrevious />
            <template v-for="item in items" :key="item.type === 'page' ? item.value : item.type">
              <PaginationItem
                v-if="item.type === 'page'"
                :value="item.value"
                :is-active="item.value === page"
              >
                {{ item.value }}
              </PaginationItem>
              <PaginationEllipsis v-else-if="item.type === 'ellipsis'" />
            </template>
            <PaginationNext />
            <PaginationLast />
          </PaginationContent>
        </Pagination>
        <p class="mt-4 text-center text-sm text-base-60">Current page: {{ page }}</p>
      </div>
    `,
  }),
}

export const SimpleNavigation: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationPrevious,
      PaginationNext,
    },
    setup() {
      const page = ref(3)
      return { page }
    },
    template: `
      <div class="p-8">
        <Pagination v-model:page="page" :total="50" :items-per-page="10" :sibling-count="1">
          <PaginationContent v-slot="{ items }">
            <PaginationPrevious />
            <template v-for="item in items" :key="item.type === 'page' ? item.value : item.type">
              <PaginationItem
                v-if="item.type === 'page'"
                :value="item.value"
                :is-active="item.value === page"
              >
                {{ item.value }}
              </PaginationItem>
            </template>
            <PaginationNext />
          </PaginationContent>
        </Pagination>
        <p class="mt-4 text-center text-sm text-base-60">Page {{ page }} of 5</p>
      </div>
    `,
  }),
}

export const WithEllipsis: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationPrevious,
      PaginationNext,
      PaginationEllipsis,
    },
    setup() {
      const page = ref(5)
      return { page }
    },
    template: `
      <div class="p-8">
        <Pagination v-model:page="page" :total="200" :items-per-page="10" :sibling-count="1">
          <PaginationContent v-slot="{ items }">
            <PaginationPrevious />
            <template v-for="item in items" :key="item.type === 'page' ? item.value : item.type + item.value">
              <PaginationItem
                v-if="item.type === 'page'"
                :value="item.value"
                :is-active="item.value === page"
              >
                {{ item.value }}
              </PaginationItem>
              <PaginationEllipsis v-else-if="item.type === 'ellipsis'" />
            </template>
            <PaginationNext />
          </PaginationContent>
        </Pagination>
        <p class="mt-4 text-center text-sm text-base-60">Page {{ page }} of 20</p>
      </div>
    `,
  }),
}

export const FirstPage: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationFirst,
      PaginationPrevious,
      PaginationNext,
      PaginationLast,
      PaginationEllipsis,
    },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <div class="p-8">
        <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges>
          <PaginationContent v-slot="{ items }">
            <PaginationFirst />
            <PaginationPrevious />
            <template v-for="item in items" :key="item.type === 'page' ? item.value : item.type">
              <PaginationItem
                v-if="item.type === 'page'"
                :value="item.value"
                :is-active="item.value === page"
              >
                {{ item.value }}
              </PaginationItem>
              <PaginationEllipsis v-else-if="item.type === 'ellipsis'" />
            </template>
            <PaginationNext />
            <PaginationLast />
          </PaginationContent>
        </Pagination>
        <p class="mt-4 text-center text-sm text-base-60">First page (Prev/First disabled)</p>
      </div>
    `,
  }),
}
