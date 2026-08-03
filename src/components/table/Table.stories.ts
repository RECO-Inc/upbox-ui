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
/**
 * truncate — 셀 내용을 clampLines 줄에서 말줄임하고, 실제로 잘렸을 때만
 * 전문 보기 아이콘을 노출한다. 아이콘 hover 시 전체 텍스트가 툴팁으로 뜬다.
 * 잘리지 않은 셀에는 아이콘이 붙지 않는다.
 */
export const TruncatedCell: Story = {
  render: () => ({
    components: { Table, TableBody, TableCell, TableHead, TableHeader, TableRow },
    template: `
      <div class="w-[420px]">
        <Table class="table-fixed">
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]">이름</TableHead>
              <TableHead>비고 (truncate)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>짧은 내용</TableCell>
              <TableCell truncate>한 줄로 끝나 아이콘이 붙지 않는다</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>긴 내용</TableCell>
              <TableCell truncate>
                두 줄을 넘겨서 말줄임되는 셀이다. 잘린 경우에만 오른쪽에 아이콘이 붙고,
                아이콘에 hover 하면 잘리지 않은 전체 텍스트를 툴팁으로 보여준다.
                이 문장은 clamp 를 확실히 넘기기 위한 것이다.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1줄 clamp</TableCell>
              <TableCell truncate :clamp-lines="1">
                clampLines 로 노출 줄 수를 바꿀 수 있다. 여기서는 한 줄만 보여준다.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center">가운데</TableCell>
              <TableCell truncate align="center">짧으면 가운데</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">오른쪽</TableCell>
              <TableCell truncate align="right">짧으면 오른쪽</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `,
  }),
}

/** tooltip-icon 슬롯으로 전문 보기 트리거를 교체할 수 있다 */
export const TruncatedCellCustomIcon: Story = {
  render: () => ({
    components: { Table, TableBody, TableCell, TableHead, TableHeader, TableRow },
    template: `
      <div class="w-[360px]">
        <Table class="table-fixed">
          <TableHeader>
            <TableRow><TableHead>비고</TableHead></TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell truncate>
                <template #tooltip-icon>
                  <span class="text-size-12 text-blue-80 underline">더보기</span>
                </template>
                기본 아이콘 대신 원하는 트리거를 넣을 수 있다. 두 줄을 넘겨야 노출되므로
                이 문장은 충분히 길게 작성한다. 잘리지 않으면 트리거도 나타나지 않는다.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `,
  }),
}

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
