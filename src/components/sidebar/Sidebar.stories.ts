import type { Meta, StoryObj } from "@storybook/vue3-vite"
import { computed, ref } from "vue"
import { useMediaQuery } from "@vueuse/core"
import {
  LayoutGrid,
  Store,
  Truck,
  CalendarDays,
  Receipt,
  Users,
  HeadphonesIcon,
  Info,
} from "lucide-vue-next"
import Sidebar from "./Sidebar.vue"
import SidebarContent from "./SidebarContent.vue"
import SidebarFooter from "./SidebarFooter.vue"
import SidebarGroup from "./SidebarGroup.vue"
import SidebarGroupContent from "./SidebarGroupContent.vue"
import SidebarHeader from "./SidebarHeader.vue"
import SidebarMenu from "./SidebarMenu.vue"
import SidebarMenuButton from "./SidebarMenuButton.vue"
import SidebarMenuItem from "./SidebarMenuItem.vue"
import SidebarMenuSub from "./SidebarMenuSub.vue"
import SidebarMenuSubButton from "./SidebarMenuSubButton.vue"
import SidebarMenuSubItem from "./SidebarMenuSubItem.vue"
import SidebarProvider from "./SidebarProvider.vue"
import SidebarTrigger from "./SidebarTrigger.vue"
import Logo from "../logo/Logo.vue"

const meta = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const menuItems = [
  { key: "dashboard", label: "대시보드", icon: LayoutGrid, subs: [] as string[] },
  {
    key: "ops-info",
    label: "운영정보 관리",
    icon: Store,
    subs: ["고객사 관리", "배출 그룹 관리", "파트너사 관리", "사업자 관리", "계약 관리"],
  },
  {
    key: "ops-asset",
    label: "운영자산 관리",
    icon: Truck,
    subs: ["차량 관리", "센터 관리", "자산 모니터링"],
  },
  {
    key: "schedule",
    label: "스케줄 관리",
    icon: CalendarDays,
    subs: ["스케줄 리스트", "스케줄 모니터링", "작업 요청", "스케줄 수행 이력", "작업 리스트"],
  },
  {
    key: "settlement",
    label: "정산 관리",
    icon: Receipt,
    subs: ["청구서 관리", "통합 청구서 그룹 관리", "미청구 작업 이력", "입출금 관리", "파트너 정산 내역"],
  },
  { key: "account", label: "계정 관리", icon: Users, subs: [] },
  { key: "support", label: "고객센터", icon: HeadphonesIcon, subs: [] },
]

const SIDEBAR_COMPONENTS = {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  Logo,
  Info,
}

const GNB_TEMPLATE = `
  <Sidebar collapsible="icon">
    <SidebarHeader class="py-[24px] px-[16px]">
      <div class="flex items-center justify-between group-data-[collapsible=icon]:justify-center">
        <Logo variant="full" class="h-[24px] group-data-[collapsible=icon]:hidden" />
        <SidebarTrigger class="text-grey-90 shrink-0" />
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.key">
              <SidebarMenuButton
                :is-active="active === item.key"
                :tooltip="item.label"
                @click="setActive(item.key)"
              >
                <component :is="item.icon" />
                <span>{{ item.label }}</span>
              </SidebarMenuButton>
              <SidebarMenuSub
                v-if="item.subs.length"
                :open="active === item.key"
              >
                <SidebarMenuSubItem v-for="sub in item.subs" :key="sub">
                  <SidebarMenuSubButton
                    :is-active="activeSub === sub"
                    @click="activeSub = sub"
                  >
                    {{ sub }}
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <div class="flex items-center gap-[4px] px-[16px] py-[16px] text-size-12 text-grey-60 group-data-[collapsible=icon]:hidden">
        <Info class="size-[14px]" />
        <span>서버정보보기</span>
      </div>
    </SidebarFooter>
  </Sidebar>
`

export const Default: Story = {
  name: "GNB (기본)",
  render: () => ({
    components: SIDEBAR_COMPONENTS,
    setup() {
      const active = ref("dashboard")
      const activeSub = ref("")
      const setActive = (k: string) => {
        active.value = k
        activeSub.value = ""
      }
      return { items: menuItems, active, activeSub, setActive }
    },
    template: `
      <SidebarProvider style="min-height: 800px;">
        ${GNB_TEMPLATE}
        <main class="flex-1 p-[24px]">
          <div class="flex items-center gap-[8px] mb-[16px]">
            <SidebarTrigger />
            <h1 class="text-size-18 font-bold text-grey-100">
              {{ items.find(i => i.key === active)?.label }}
              <span v-if="activeSub" class="text-grey-60 font-normal">/ {{ activeSub }}</span>
            </h1>
          </div>
          <p class="text-size-14 text-grey-60">메뉴를 클릭하면 활성 상태가 바뀝니다.</p>
        </main>
      </SidebarProvider>
    `,
  }),
}

export const WithSubMenu: Story = {
  name: "2-Depth 메뉴 펼침",
  render: () => ({
    components: SIDEBAR_COMPONENTS,
    setup() {
      const active = ref("schedule")
      const activeSub = ref("스케줄 모니터링")
      const setActive = (k: string) => {
        active.value = k
        activeSub.value = ""
      }
      return { items: menuItems, active, activeSub, setActive }
    },
    template: `
      <SidebarProvider style="min-height: 800px;">
        ${GNB_TEMPLATE}
        <main class="flex-1 p-[24px]">
          <h1 class="text-size-18 font-bold text-grey-100 mb-[16px]">
            {{ items.find(i => i.key === active)?.label }} / {{ activeSub }}
          </h1>
          <p class="text-size-14 text-grey-60">선택된 1-depth(navy 필) + 2-depth 메뉴 (선택된 sub 는 navy 텍스트).</p>
        </main>
      </SidebarProvider>
    `,
  }),
}

export const Collapsed: Story = {
  name: "Collapsed (icon)",
  render: () => ({
    components: SIDEBAR_COMPONENTS,
    setup() {
      const active = ref("ops-info")
      const activeSub = ref("")
      const setActive = (k: string) => {
        active.value = k
        activeSub.value = ""
      }
      return { items: menuItems, active, activeSub, setActive }
    },
    template: `
      <SidebarProvider :default-open="false" style="min-height: 800px;">
        ${GNB_TEMPLATE}
        <main class="flex-1 p-[24px]">
          <div class="flex items-center gap-[8px] mb-[16px]">
            <SidebarTrigger />
            <h1 class="text-size-18 font-bold text-grey-100">접힘 상태</h1>
          </div>
          <p class="text-size-14 text-grey-60">88px 폭 아이콘 컬럼. 메뉴에 hover 하면 tooltip 으로 라벨 노출.</p>
        </main>
      </SidebarProvider>
    `,
  }),
}

export const Responsive: Story = {
  name: "Responsive (Desktop 좌 / Mobile 우 Drawer)",
  render: () => ({
    components: SIDEBAR_COMPONENTS,
    setup() {
      const isMobile = useMediaQuery("(max-width: 768px)")
      const side = computed<"left" | "right">(() => (isMobile.value ? "right" : "left"))
      const active = ref("dashboard")
      const activeSub = ref("")
      const setActive = (k: string) => {
        active.value = k
        activeSub.value = ""
      }
      return { items: menuItems, active, activeSub, setActive, side }
    },
    template: `
      <SidebarProvider style="min-height: 800px;">
        <Sidebar :side="side" collapsible="icon">
          <SidebarHeader class="py-[24px] px-[16px]">
            <div class="flex items-center justify-between group-data-[collapsible=icon]:justify-center">
              <Logo variant="full" class="h-[24px] group-data-[collapsible=icon]:hidden" />
              <SidebarTrigger class="text-grey-90 shrink-0" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem v-for="item in items" :key="item.key">
                    <SidebarMenuButton
                      :is-active="active === item.key"
                      :tooltip="item.label"
                      @click="setActive(item.key)"
                    >
                      <component :is="item.icon" />
                      <span>{{ item.label }}</span>
                    </SidebarMenuButton>
                    <SidebarMenuSub v-if="item.subs.length && active === item.key">
                      <SidebarMenuSubItem v-for="sub in item.subs" :key="sub">
                        <SidebarMenuSubButton
                          :is-active="activeSub === sub"
                          @click="activeSub = sub"
                        >
                          {{ sub }}
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <header class="fixed top-0 left-0 right-0 z-40 border-b md:hidden bg-grey-10">
          <div class="flex h-[64px] items-center justify-between px-[16px]">
            <Logo variant="full" class="h-[20px]" />
            <SidebarTrigger />
          </div>
        </header>
        <main class="flex-1 p-[24px] md:p-[24px] pt-[80px] md:pt-[24px]">
          <h1 class="text-size-18 font-bold text-grey-100 mb-[16px]">
            {{ items.find(i => i.key === active)?.label }}
          </h1>
          <p class="text-size-14 text-grey-60">데스크톱: 좌측 고정 사이드바. 모바일(< 768px): 우측 Drawer.</p>
        </main>
      </SidebarProvider>
    `,
  }),
}
