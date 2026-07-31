import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Table from './Table.vue'
import TableBody from './TableBody.vue'
import TableCaption from './TableCaption.vue'
import TableCell from './TableCell.vue'
import TableEmpty from './TableEmpty.vue'
import TableFooter from './TableFooter.vue'
import TableHead from './TableHead.vue'
import TableHeader from './TableHeader.vue'
import TableRow from './TableRow.vue'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Table, TableBody, TableCell, TableHead, TableHeader, TableRow },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice Johnson</TableCell>
            <TableCell>alice@example.com</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Smith</TableCell>
            <TableCell>bob@example.com</TableCell>
            <TableCell>Editor</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Carol White</TableCell>
            <TableCell>carol@example.com</TableCell>
            <TableCell>Viewer</TableCell>
            <TableCell>Inactive</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
}

export const WithCaption: Story = {
  render: () => ({
    components: { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow },
    template: `
      <Table>
        <TableCaption>List of recent invoices</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV-001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INV-002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>Bank Transfer</TableCell>
            <TableCell>$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INV-003</TableCell>
            <TableCell>Unpaid</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell>$350.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
}

export const WithFooter: Story = {
  render: () => ({
    components: { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Widget A</TableCell>
            <TableCell>3</TableCell>
            <TableCell>$10.00</TableCell>
            <TableCell>$30.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Widget B</TableCell>
            <TableCell>2</TableCell>
            <TableCell>$25.00</TableCell>
            <TableCell>$50.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colspan="3">Total</TableCell>
            <TableCell>$80.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    `,
  }),
}

/**
 * 셀 밀도는 단일 값이다(size prop 없음).
 * 시안의 singleline / doubleLine 은 밀도 옵션이 아니라 콘텐츠가 몇 줄로 흐르느냐의 결과라,
 * 별도 prop 없이 행 높이가 자연스럽게 32px / 52px 로 늘어난다.
 */
export const RowHeights: Story = {
  render: () => ({
    components: { Table, TableBody, TableCell, TableHead, TableHeader, TableRow },
    template: `
      <div class="flex flex-col gap-[24px]">
        <div>
          <p class="text-size-13 font-bold mb-[8px] text-grey-80">1줄 (행 높이 32px)</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="w-[160px]">Name</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Row 1</TableCell>
                <TableCell>한 줄로 끝나는 셀</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Row 2</TableCell>
                <TableCell>한 줄로 끝나는 셀</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <p class="text-size-13 font-bold mb-[8px] text-grey-80">2줄 (행 높이 52px — 줄바꿈 결과)</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="w-[160px]">Name</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Row 1</TableCell>
                <TableCell class="w-[240px]">두 줄짜리 컴포넌트가 사용되는 테이블 유형입니다_최대 두 줄까지 노출</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    `,
  }),
}

export const WithTooltipHeader: Story = {
  render: () => ({
    components: { Table, TableBody, TableCell, TableHead, TableHeader, TableRow },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead tooltip="This is the user's primary email address">Email</TableHead>
            <TableHead tooltip="Roles control what actions a user can perform">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Alice Johnson</TableCell>
            <TableCell>alice@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Smith</TableCell>
            <TableCell>bob@example.com</TableCell>
            <TableCell>Editor</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
  }),
}

export const EmptyState: Story = {
  render: () => ({
    components: { Table, TableBody, TableEmpty, TableHead, TableHeader, TableRow },
    template: `
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableEmpty :colspan="3">
            No users found.
          </TableEmpty>
        </TableBody>
      </Table>
    `,
  }),
}
