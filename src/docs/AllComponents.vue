<script setup lang="ts">
import { ref, shallowRef } from "vue"
import {
  Plus,
  Search,
  Bell,
  Settings,
  Trash2,
  LayoutDashboard,
  FileText,
} from "lucide-vue-next"
import { CalendarDate, Time } from "@internationalized/date"

import {
  // Buttons & Actions
  Button,
  TextButton,
  IconButton,
  Fab,
  Toggle,
  Toolbar,
  // Forms & Inputs
  TextField,
  Textarea,
  NumberField,
  SearchField,
  Checkbox,
  RadioGroup,
  RadioGroupItem,
  Label,
  Form,
  FieldContainer,
  FileUploader,
  type UploaderFile,
  // Date & Time
  DatePicker,
  DatePeriodPicker,
  type DatePeriodValue,
  TimePicker,
  DateCalendar,
  DateMove,
  MobileDatePicker,
  MobileTimePicker,
  // Data Display
  Avatar,
  AvatarImage,
  AvatarFallback,
  Badge,
  BadgeDivider,
  Tag,
  FilterChip,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  DataTable,
  type DataTableColumn,
  Panel,
  Empty,
  Skeleton,
  Spinner,
  Logo,
  Separator,
  // Navigation
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  Stepper,
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  PageHeader,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  // Overlays & Feedback
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Modal,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownFilter,
  Toast,
  toast,
} from "../index"

// --- reactive state ---
const toggleOn = ref(true)
const textValue = ref("")
const textareaValue = ref("")
const numberValue = ref(3)
const searchValue = ref("")
const checkboxChecked = ref(true)
const radioValue = ref("option1")
const files = ref<UploaderFile[]>([])

// class instances (CalendarDate / Time) use shallowRef so Vue's UnwrapRef
// doesn't strip their nominal brand and break v-model type matching in the template.
const datePickerVal = shallowRef<CalendarDate | null>(new CalendarDate(2026, 7, 8))
const periodVal = shallowRef<DatePeriodValue | null>({ start: null, end: null })
const timeVal = shallowRef<Time | null>(new Time(9, 30))
const calendarVal = shallowRef<CalendarDate>(new CalendarDate(2026, 7, 8))
const dateMoveVal = shallowRef<CalendarDate | null>(new CalendarDate(2026, 7, 8))
const mobileDateVal = shallowRef<CalendarDate | null>(null)
const mobileTimeVal = shallowRef<Time | null>(null)

const tab = ref("tab1")
const page = ref(2)
const stepperCurrent = ref("step2")
const steps = [
  { value: "step1", label: "약관동의", isComplete: true },
  { value: "step2", label: "정보입력", isComplete: false },
  { value: "step3", label: "완료", isComplete: false },
]
const sidebarActive = ref("dashboard")

const modalOpen = ref(false)

const dtColumns: DataTableColumn<{ id: number; name: string; status: string }>[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "차량명" },
  { key: "status", label: "상태" },
]
const dtRows = [
  { id: 1, name: "12가 3456", status: "운행중" },
  { id: 2, name: "34나 7890", status: "정비중" },
]

const filterSelected = ref<string[]>([])
const filterOptions = [
  { label: "서울", value: "seoul" },
  { label: "부산", value: "busan" },
  { label: "대구", value: "daegu" },
]

function showToast() {
  toast.success("성공 메세지", { description: "작업이 완료되었습니다." })
}
</script>

<template>
  <div class="ac-root">
    <Toast />

    <header class="ac-hero">
      <Logo variant="full" class="h-[32px] mb-6" />
      <h1 class="text-size-32 font-bold text-grey-100 mb-2">All Components</h1>
      <p class="text-size-15 text-grey-70 max-w-2xl">
        Upbox UI 디자인 시스템의 모든 컴포넌트를 한 페이지에서 확인합니다. 각 컴포넌트의 대표 예시이며,
        전체 variant·prop 은 개별 컴포넌트 스토리에서 확인하세요.
      </p>
    </header>

    <!-- 1. Buttons & Actions -->
    <section class="ac-section">
      <h2 class="ac-section-title">Buttons &amp; Actions</h2>
      <div class="ac-grid">
        <div class="ac-item">
          <span class="ac-label">Button</span>
          <div class="ac-demo flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Delete</Button>
            <Button variant="tertiary" theme="outlined">Ghost</Button>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">TextButton</span>
          <div class="ac-demo">
            <TextButton>더보기</TextButton>
            <TextButton variant="destructive">삭제</TextButton>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">IconButton</span>
          <div class="ac-demo">
            <IconButton variant="primary"><Plus /></IconButton>
            <IconButton variant="secondary"><Settings /></IconButton>
            <IconButton variant="tertiary"><Bell /></IconButton>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Fab</span>
          <div class="ac-demo">
            <Fab fabStyle="basic"><Plus />추가</Fab>
            <Fab fabStyle="colorfilled"><Plus /></Fab>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Toggle</span>
          <div class="ac-demo">
            <Toggle v-model="toggleOn" />
            <Toggle :model-value="false" />
          </div>
        </div>
        <div class="ac-item ac-col-2">
          <span class="ac-label">Toolbar</span>
          <div class="ac-demo">
            <Toolbar :selected-count="2" variant="light" :downloadable="true" :deletable="true" />
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Forms & Inputs -->
    <section class="ac-section">
      <h2 class="ac-section-title">Forms &amp; Inputs</h2>
      <div class="ac-grid">
        <div class="ac-item">
          <span class="ac-label">TextField</span>
          <div class="ac-demo"><TextField v-model="textValue" placeholder="텍스트 입력" clearable /></div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Textarea</span>
          <div class="ac-demo"><Textarea v-model="textareaValue" placeholder="내용 입력" :rows="3" /></div>
        </div>
        <div class="ac-item">
          <span class="ac-label">NumberField</span>
          <div class="ac-demo"><NumberField v-model="numberValue" :min="0" :max="100" :step="5" /></div>
        </div>
        <div class="ac-item">
          <span class="ac-label">SearchField</span>
          <div class="ac-demo"><SearchField v-model="searchValue" placeholder="검색어를 입력하세요" /></div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Checkbox</span>
          <div class="ac-demo">
            <Label class="flex items-center gap-[8px] cursor-pointer">
              <Checkbox id="ac-cb" v-model="checkboxChecked" /> 약관에 동의합니다
            </Label>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">RadioGroup</span>
          <div class="ac-demo">
            <RadioGroup v-model="radioValue" class="flex flex-col gap-[8px]">
              <div class="flex items-center gap-[8px]">
                <RadioGroupItem id="ac-r1" value="option1" /><Label for="ac-r1">옵션 1</Label>
              </div>
              <div class="flex items-center gap-[8px]">
                <RadioGroupItem id="ac-r2" value="option2" /><Label for="ac-r2">옵션 2</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Form / FieldContainer</span>
          <div class="ac-demo">
            <Form class="w-full">
              <FieldContainer name="ac-email" label="이메일" description="등록된 주소를 입력하세요">
                <TextField type="email" placeholder="you@example.com" />
              </FieldContainer>
            </Form>
          </div>
        </div>
        <div class="ac-item ac-col-2">
          <span class="ac-label">FileUploader</span>
          <div class="ac-demo">
            <FileUploader
              v-model:input-files="files"
              label="파일 업로드"
              :support-ext="['PDF', 'JPG', 'PNG']"
              :max-size="5"
              :max-count="10"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Date & Time -->
    <section class="ac-section">
      <h2 class="ac-section-title">Date &amp; Time</h2>
      <div class="ac-grid">
        <div class="ac-item">
          <span class="ac-label">DatePicker</span>
          <div class="ac-demo"><DatePicker v-model="datePickerVal" /></div>
        </div>
        <div class="ac-item">
          <span class="ac-label">DatePeriodPicker</span>
          <div class="ac-demo"><DatePeriodPicker v-model="periodVal" /></div>
        </div>
        <div class="ac-item">
          <span class="ac-label">TimePicker</span>
          <div class="ac-demo"><TimePicker v-model="timeVal" /></div>
        </div>
        <div class="ac-item">
          <span class="ac-label">DateMove</span>
          <div class="ac-demo">
            <DateMove v-model="dateMoveVal" class="items-stretch"><DatePicker /></DateMove>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">MobileDatePicker</span>
          <div class="ac-demo"><MobileDatePicker v-model="mobileDateVal" size="large" /></div>
        </div>
        <div class="ac-item">
          <span class="ac-label">MobileTimePicker</span>
          <div class="ac-demo"><MobileTimePicker v-model="mobileTimeVal" /></div>
        </div>
        <div class="ac-item ac-col-2">
          <span class="ac-label">DateCalendar (inline)</span>
          <div class="ac-demo"><DateCalendar v-model="calendarVal" /></div>
        </div>
      </div>
    </section>

    <!-- 4. Data Display -->
    <section class="ac-section">
      <h2 class="ac-section-title">Data Display</h2>
      <div class="ac-grid">
        <div class="ac-item">
          <span class="ac-label">Avatar</span>
          <div class="ac-demo">
            <Avatar><AvatarImage src="" alt="" /><AvatarFallback>JH</AvatarFallback></Avatar>
            <Avatar shape="square"><AvatarFallback>UB</AvatarFallback></Avatar>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Badge</span>
          <div class="ac-demo flex-wrap">
            <Badge variant="positive">완료</Badge>
            <Badge variant="negative">오류</Badge>
            <Badge variant="informative">정보</Badge>
            <Badge variant="warning">주의</Badge>
            <Badge variant="neutral">기본</Badge>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">BadgeDivider</span>
          <div class="ac-demo">
            <BadgeDivider variant="green">단일청구서</BadgeDivider>
            <BadgeDivider variant="navy">정기</BadgeDivider>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Tag</span>
          <div class="ac-demo flex-wrap">
            <Tag closable>태그명</Tag>
            <Tag state="error">오류</Tag>
            <Tag state="disabled">비활성</Tag>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">FilterChip</span>
          <div class="ac-demo">
            <FilterChip state="placeholder">필터</FilterChip>
            <FilterChip state="typed" :count="2">지역</FilterChip>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Panel</span>
          <div class="ac-demo flex-col items-stretch">
            <Panel variant="informative">정보성 안내 메시지입니다.</Panel>
            <Panel variant="negative">실패 및 오류를 나타냅니다.</Panel>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Spinner / Skeleton</span>
          <div class="ac-demo flex-col items-stretch">
            <Spinner class="size-[24px] text-navy-80" />
            <div class="flex flex-col gap-[8px] w-full">
              <Skeleton class="h-[12px] w-[80%]" />
              <Skeleton class="h-[12px] w-[60%]" />
            </div>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Separator</span>
          <div class="ac-demo flex-col items-stretch w-full">
            <span class="text-size-13 text-grey-70">위</span>
            <Separator class="my-[8px]" />
            <span class="text-size-13 text-grey-70">아래</span>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Card</span>
          <div class="ac-demo">
            <Card class="w-full">
              <CardHeader>
                <CardTitle>카드 제목</CardTitle>
                <CardDescription>카드 설명 텍스트입니다.</CardDescription>
              </CardHeader>
              <CardContent><p class="text-size-14 text-grey-80">본문 영역</p></CardContent>
              <CardFooter class="flex justify-end"><Button size="small">저장</Button></CardFooter>
            </Card>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Empty</span>
          <div class="ac-demo"><Empty>데이터가 없습니다</Empty></div>
        </div>
        <div class="ac-item ac-col-2">
          <span class="ac-label">Table</span>
          <div class="ac-demo">
            <Table>
              <TableHeader>
                <TableRow><TableHead>이름</TableHead><TableHead>이메일</TableHead></TableRow>
              </TableHeader>
              <TableBody>
                <TableRow><TableCell>홍길동</TableCell><TableCell>hong@example.com</TableCell></TableRow>
                <TableRow><TableCell>김철수</TableCell><TableCell>kim@example.com</TableCell></TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div class="ac-item ac-col-2">
          <span class="ac-label">DataTable</span>
          <div class="ac-demo">
            <DataTable :columns="dtColumns" :rows="dtRows" row-key="id" />
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Navigation -->
    <section class="ac-section">
      <h2 class="ac-section-title">Navigation</h2>
      <div class="ac-grid">
        <div class="ac-item ac-col-2">
          <span class="ac-label">Breadcrumb</span>
          <div class="ac-demo">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem><BreadcrumbLink href="#">홈</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbLink href="#">관리</BreadcrumbLink></BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem><BreadcrumbPage>상세</BreadcrumbPage></BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Tabs</span>
          <div class="ac-demo">
            <Tabs v-model="tab" class="w-full">
              <TabsList>
                <TabsTrigger value="tab1">계정</TabsTrigger>
                <TabsTrigger value="tab2">비밀번호</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" class="text-size-14 text-grey-80 pt-2">계정 설정</TabsContent>
              <TabsContent value="tab2" class="text-size-14 text-grey-80 pt-2">비밀번호 변경</TabsContent>
            </Tabs>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Stepper</span>
          <div class="ac-demo"><Stepper v-model="stepperCurrent" :steps="steps" class="w-full" /></div>
        </div>
        <div class="ac-item ac-col-2">
          <span class="ac-label">Pagination</span>
          <div class="ac-demo">
            <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges>
              <PaginationContent v-slot="{ items }">
                <PaginationPrevious />
                <template v-for="(item, i) in items" :key="i">
                  <PaginationItem
                    v-if="item.type === 'page'"
                    :value="item.value"
                    :is-active="item.value === page"
                  >
                    {{ item.value }}
                  </PaginationItem>
                  <PaginationEllipsis v-else />
                </template>
                <PaginationNext />
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div class="ac-item ac-col-2">
          <span class="ac-label">PageHeader</span>
          <div class="ac-demo">
            <PageHeader title="대시보드" description="전체 현황을 확인합니다" class="w-full">
              <template #actions><Button size="small">새로 만들기</Button></template>
            </PageHeader>
          </div>
        </div>
        <div class="ac-item ac-col-2">
          <span class="ac-label">Accordion</span>
          <div class="ac-demo">
            <Accordion type="single" collapsible class="w-full">
              <AccordionItem value="a1">
                <AccordionTrigger>Upbox UI 란?</AccordionTrigger>
                <AccordionContent>Vue 3 기반 디자인 시스템 컴포넌트 라이브러리입니다.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="a2">
                <AccordionTrigger>어떻게 설치하나요?</AccordionTrigger>
                <AccordionContent>npm 으로 설치 후 style.css / theme.css 를 import 합니다.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div class="ac-item ac-col-2">
          <span class="ac-label">Sidebar</span>
          <div class="ac-demo p-0">
            <div class="h-[220px] w-full overflow-hidden rounded-[8px] border border-grey-30 [&_[data-slot=sidebar-wrapper]]:min-h-0 [&_[data-slot=sidebar-wrapper]]:h-full">
              <SidebarProvider class="min-h-0 h-full">
                <Sidebar collapsible="none" class="h-full">
                  <SidebarContent>
                    <SidebarGroup>
                      <SidebarGroupContent>
                        <SidebarMenu>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              :is-active="sidebarActive === 'dashboard'"
                              @click="sidebarActive = 'dashboard'"
                            >
                              <LayoutDashboard /><span>대시보드</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              :is-active="sidebarActive === 'docs'"
                              @click="sidebarActive = 'docs'"
                            >
                              <FileText /><span>문서</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                          <SidebarMenuItem>
                            <SidebarMenuButton
                              :is-active="sidebarActive === 'settings'"
                              @click="sidebarActive = 'settings'"
                            >
                              <Settings /><span>설정</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        </SidebarMenu>
                      </SidebarGroupContent>
                    </SidebarGroup>
                  </SidebarContent>
                </Sidebar>
              </SidebarProvider>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Overlays & Feedback -->
    <section class="ac-section">
      <h2 class="ac-section-title">Overlays &amp; Feedback</h2>
      <p class="ac-hint">트리거를 클릭/호버하면 오버레이가 열립니다.</p>
      <div class="ac-grid">
        <div class="ac-item">
          <span class="ac-label">Dialog</span>
          <div class="ac-demo">
            <Dialog>
              <DialogTrigger as-child><Button variant="secondary">Dialog 열기</Button></DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>다이얼로그 제목</DialogTitle>
                  <DialogDescription>설명 텍스트가 여기에 표시됩니다.</DialogDescription>
                </DialogHeader>
                <p class="text-size-14 text-grey-80">본문 콘텐츠 영역입니다.</p>
                <DialogFooter>
                  <DialogClose as-child><Button variant="tertiary" theme="outlined">취소</Button></DialogClose>
                  <Button variant="primary">확인</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Modal</span>
          <div class="ac-demo">
            <Button variant="destructive" @click="modalOpen = true">Modal 열기</Button>
            <Modal
              v-model:open="modalOpen"
              destructive
              title="회원을 삭제할까요?"
              description="삭제하면 되돌릴 수 없습니다."
              confirm-text="삭제"
              cancel-text="취소"
              @confirm="modalOpen = false"
            />
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Drawer</span>
          <div class="ac-demo">
            <Drawer>
              <DrawerTrigger as-child><Button variant="secondary">Drawer 열기</Button></DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>드로어 제목</DrawerTitle>
                  <DrawerDescription>하단에서 올라오는 패널입니다.</DrawerDescription>
                </DrawerHeader>
                <div class="p-[16px] text-size-14 text-grey-80">콘텐츠 영역</div>
                <DrawerFooter><DrawerClose as-child><Button block>확인</Button></DrawerClose></DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Sheet</span>
          <div class="ac-demo">
            <Sheet>
              <SheetTrigger as-child><Button variant="secondary">Sheet 열기</Button></SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>시트 제목</SheetTitle>
                  <SheetDescription>측면에서 열리는 패널입니다.</SheetDescription>
                </SheetHeader>
                <div class="py-[16px] px-[16px] text-size-14 text-grey-80">콘텐츠 영역</div>
                <SheetFooter>
                  <SheetClose as-child><Button variant="tertiary" theme="outlined">닫기</Button></SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Popover</span>
          <div class="ac-demo">
            <Popover>
              <PopoverTrigger as-child><Button variant="tertiary" theme="outlined">Popover</Button></PopoverTrigger>
              <PopoverContent align="center" side="bottom">
                <p class="text-size-14 text-grey-70">팝오버 콘텐츠입니다.</p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Tooltip</span>
          <div class="ac-demo">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child><Button variant="tertiary" theme="outlined">Hover me</Button></TooltipTrigger>
                <TooltipContent side="top"><p>툴팁 콘텐츠</p></TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">DropdownMenu</span>
          <div class="ac-demo">
            <DropdownMenu>
              <DropdownMenuTrigger as-child><Button variant="secondary">메뉴 열기</Button></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuItem>로그아웃</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">DropdownFilter</span>
          <div class="ac-demo">
            <DropdownFilter v-model="filterSelected" :options="filterOptions" placeholder="지역 선택" />
          </div>
        </div>
        <div class="ac-item">
          <span class="ac-label">Toast</span>
          <div class="ac-demo">
            <Button variant="primary" @click="showToast"><Bell />토스트 띄우기</Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.ac-root {
  padding: 40px 48px 80px;
  max-width: 1280px;
  margin: 0 auto;
  font-family: inherit;
  color: var(--color-grey-100, #0d152a);
}

.ac-hero {
  padding-bottom: 32px;
  margin-bottom: 8px;
  border-bottom: 1px solid var(--color-grey-30, #ecedf0);
}

.ac-section {
  padding: 40px 0;
  border-bottom: 1px solid var(--color-grey-30, #ecedf0);
}

.ac-section-title {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-grey-100, #0d152a);
  margin-bottom: 20px;
}

.ac-hint {
  font-size: 13px;
  color: var(--color-grey-60, #8e94a3);
  margin-top: -12px;
  margin-bottom: 20px;
}

.ac-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.ac-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--color-grey-30, #ecedf0);
  background: var(--color-grey-20, #f8f8f9);
}

.ac-col-2 {
  grid-column: span 2;
}

@media (max-width: 720px) {
  .ac-col-2 {
    grid-column: span 1;
  }
}

.ac-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--color-grey-60, #8e94a3);
}

.ac-demo {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
}

.ac-demo.flex-wrap {
  flex-wrap: wrap;
}

.ac-demo.flex-col {
  flex-direction: column;
  align-items: flex-start;
}

.ac-demo.items-stretch {
  align-items: stretch;
}

.ac-demo.p-0 {
  padding: 0;
}
</style>
