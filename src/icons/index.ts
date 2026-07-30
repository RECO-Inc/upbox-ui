/**
 * upbox-ui 아이콘 레이어.
 *
 * 실제 SVG 는 `@upbox-design/vue3-icon` (Figma `최종 Component _v02` 에서 자동 추출) 이 제공한다.
 * 그 패키지의 export 이름은 Figma variant 프로퍼티가 그대로 붙어 있어 그대로 쓰기 어렵고
 * (`UDIAction_chevronPropertyactionDirectionarrowLeftSizeregular`), 오타도 API 에 고착돼 있다
 * (`filed`/`regualr`/`caleander`). 여기서 한 번만 정규화한다.
 *
 * 컴포넌트 코드와 컨슈머는 **반드시 이 모듈만** import 한다.
 * 업스트림 패키지 이름이 바뀌어도 고치는 파일은 여기 하나다.
 *
 * 사용법: 크기·색은 prop 이 아니라 유틸리티 클래스로 준다.
 *   <IconSearch class="size-[16px] text-grey-50" />
 * 업스트림의 `size`/`color` prop 은 setup 에서 정적으로 캡처돼 반응하지 않으므로 쓰지 않는다.
 */
export {
  // Action / Chevron
  UDIAction_chevronPropertyactionDirectionarrowRightSizeregular as IconChevronRight,
  UDIAction_chevronPropertyactionDirectionarrowLeftSizeregular as IconChevronLeft,
  UDIAction_chevronPropertyactionDirectionarrowDownSizeregular as IconChevronDown,
  UDIAction_chevronPropertyactionDirectionarrowUpSizeregular as IconChevronUp,

  // Action / Double chevron
  UDIAction_doubleChevronDirectionright as IconChevronsRight,
  UDIAction_doubleChevronDirectionleft as IconChevronsLeft,
  UDIAction_doubleChevronDirectionup as IconChevronsUp,
  UDIAction_doubleChevronDirectiondown as IconChevronsDown,

  // Action / X
  UDIAction_xSizeregualr as IconClose,

  // 24 / Outlined
  UDI24outlinedcheck as IconCheck,
  UDI24outlinedsearch as IconSearch,
  UDI24outlinedadd as IconPlus,
  UDI24outlinedminus as IconMinus,
  UDI24outlinedcalender as IconCalendar,
  // `UDI24outlinedclock` 은 시계가 아니라 방패다 — Figma `24/Outlined/clock` 두 노드가
  // 이름이 겹쳐 추출 시 방패 쪽이 살아남았다. 시계는 `schedule` 로 가져온다.
  UDI24outlinedschedule as IconClock,
  UDI24outlineddownload01 as IconDownload,
  UDI24outlinedrefresh01 as IconRefresh,
  UDI24outlinedvisibility as IconEye,
  UDI24outlinedvisibilityOff as IconEyeOff,
  UDI24outlinedcloud as IconCloud,
  UDI24outlinedquestion as IconHelp,
  UDI24outlinedwarning as IconWarning,
  UDI24outlinedmoreWidth as IconMoreHorizontal,
  UDIInfoProperty124Property2infoProperty3outlined as IconInfo,

  // 24 / Outlined — 앱 내비게이션·목록용. 컨슈머(사이드바 등)가 직접 쓴다.
  UDI24outlinedsetting as IconSettings,
  UDI24outlinedprofile as IconUsers,
  UDI24outlinedalram as IconBell,
  UDI24outlinedpen as IconPen,
  UDI24outlineddocument as IconDocument,
  UDI24outlineddashbord as IconDashboard,
  UDI24outlinedstore as IconStore,
  UDI24outlinedtruck as IconTruck,
  UDI24outlinedcustomerService as IconHeadset,
  UDI24outlinedhouse as IconHome,
  UDI24outlinedgraph as IconChart,
  UDI24outlinedfilter as IconFilter,
  UDI24outlinedmessage as IconMessage,
  UDI24outlinedshare as IconShare,

  // 24 / Filled — outlined 대응이 없어 filled 를 쓴다
  UDI24fileddelete as IconTrash,
  /** 원형 채움 + 체크. outlined 변형은 Figma 에 아직 없어 디자인 요청 중. */
  UDI24filedcheck as IconCheckCircle,
} from "@upbox-design/vue3-icon"

/**
 * 아직 `@upbox-design/vue3-icon` 에 없어서 lucide 를 그대로 쓰는 것들.
 * Figma 재추출 / 신규 디자인이 끝나면 위 블록으로 옮기고 lucide 의존을 제거한다.
 *
 * - IconPanelLeft : Figma `side_panel_close`(9692:4928) 는 있으나 추출 프레임 밖이라 누락
 * - IconSpinner   : Figma 에 없음 — 신규 디자인 필요
 * - IconListX     : Figma 에 없음 — 신규 디자인 필요
 * - `24/Outlined/dot` 은 6점 드래그 핸들이라 라디오 점으로 못 쓴다 → 해당 위치는 CSS 원으로 처리
 */
export {
  PanelLeft as IconPanelLeft,
  Loader2 as IconSpinner,
  ListX as IconListX,
} from "lucide-vue-next"

/**
 * 크기에 대해 — 요약: **CSS 보정은 넣지 않는다. 크기는 Figma 스펙 그대로 쓴다.**
 *
 * lucide 에서 넘어온 뒤 아이콘이 작아 보인다는 얘기가 나오는데, 원인은 추출 버그가 아니다.
 * Figma 원본 노드를 렌더해 잉크 bbox 를 재고 추출본과 대조한 결과 **전부 일치**했다.
 *
 * | 대상                       | Figma 원본 | 추출본 |
 * |----------------------------|-----------|--------|
 * | chevron (16 / 20 / 24 프레임) | 50% 고정   | 50%    |
 * | Action/X                   | 50%       | 50%    |
 * | 24/Filed/check             | 66.7%     | 66.7%  |
 *
 * Figma 의 사이즈 변형은 프레임이 실제로 16 / 20 / 24 이고 글리프도 8 / 10 / 12 로 같이 줄어든다.
 * 추출기가 viewBox 를 24 로 통일하지만 비율(50%)이 보존되므로, N px 박스에 넣으면 0.5N 글리프가 나와
 * Figma 의 N px 변형과 정확히 같다. 즉 **어떤 크기로 써도 스펙과 일치한다.**
 *
 * 그럼에도 lucide 보다 작아 보이는 이유는 두 가지이며 둘 다 결함이 아니다.
 *  1. lucide 는 stroke 기반이라 선이 경계 밖으로 번져 같은 박스에서 더 커 보인다 (X 기준 58.3% vs 50%).
 *  2. 이 디자인 시스템의 아이콘은 stock Material 보다 작게 그려진 것이 있다
 *     (X 1.17x, check_circle 1.25x). 이건 디자인 팀의 선택이지 추출 문제가 아니다.
 *
 * 과거에 `16px → 20px`, Stepper 체크 `18px → 27px` 같은 보정을 넣었다가 전부 되돌렸다.
 * 보정이 남으면 원인이 코드에 묻혀 나중에 못 찾는다. 크기를 바꿔야 한다면
 * 호출부에서 땜질하지 말고 **Figma 스펙 자체를 고치고 그 값을 따라간다.**
 *
 * ## 아이콘 세트를 쓰지 않는 예외 2곳
 *
 * - `DropdownMenuRadioItem` 라디오 점 — 대응 글리프가 아예 없어 CSS 원으로 그린다.
 * - `Checkbox` 체크 — 8~12px 로 렌더되는데 fill 글리프의 획이 viewBox 기준 약 2/24 라
 *   실제 0.7~1.0px 로 떨어져 안티에일리어싱 회색이 된다("흐리다"의 원인).
 *   컴포넌트 안에서 stroke 로 직접 그려 화면상 두께를 1.4px 로 고정했다.
 *   측정(최대 농도 /255): 8px 에서 fill 148 → stroke 216 (lucide 시절 185).
 *
 * 둘 다 크기 보정이 아니라 **해당 크기에서 글리프가 물리적으로 표현 불가**한 경우다.
 * 근본 해결은 Figma 에서 Material `weight` 축을 올리는 것 — 요청 목록에 포함돼 있다.
 * 아이콘을 14px 미만으로 쓸 일이 또 생기면 같은 문제가 반복되니 이 주석을 먼저 볼 것.
 */
