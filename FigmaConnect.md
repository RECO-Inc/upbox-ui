# Figma ↔ upbox-ui 속성 매핑

목적은 **피그마 컴포넌트 속성**(또는 변형 이름)과 **Vue 컴포넌트의 `prop` / 이벤트 / `v-model`** 을 일치시키는 것이다.  
상세 동작 설명은 넣지 않는다.

| 항목 | 값 |
|------|-----|
| Figma 파일 | [최종 Component _v02](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/-%EC%B5%9C%EC%A2%85-Component-_v02) |
| 라이브러리 | Vue 3 · `@reco-inc/upbox-ui` |

## 인덱스

피그마 노드 ID 로 찾을 때 쓰는 매핑. 노드 ID 오름차순.

| 피그마 노드 ID | 피그마 컴포넌트 | Vue 컴포넌트 |
|----------------|----------------|--------------|
| `3220:15782` | [`standardButton`](#standardbutton) | `Button` |
| `3223:13667` | [`textButton`](#textbutton) | `TextButton` |
| `3228:14621` | [`iconButton`](#iconbutton) | `IconButton` |
| `3429:16714` | [`textField`](#textfield) | `TextField` |
| `3429:25321` | [`textArea`](#textarea) | `Textarea` |
| `3498:25583` | [`searchField`](#searchfield) | `SearchField` |
| `3540:25866` | [`badge`](#badge) | `Badge` |
| `3570:25359` | [`tag`](#tag) | `Tag` |
| `3619:27807` | [`dateInput`](#dateinput) | `DatePicker` / `DatePeriodPicker` / `MobileDatePicker` / `MobileDatePeriodPicker` |
| `3623:26811` | [`timeInput`](#timeinput) | `TimePicker` / `MobileTimePicker` |
| `3837:27148` | [`select`](#select) | `Select` / `SelectTrigger` |
| `12247:7978` | [`periodInput` (mobile)](#mobiledateperiodselector) | `MobileDatePeriodSelector` |
| `12247:8094` | [`periodCalendar` (mobile)](#periodcalendar-mobile) | `MobilePeriodCalendar` |
| `12247:8592` | [`dateCalendar` (mobile)](#datecalendar-mobile) | `MobileDateCalendar` |
| `12247:8598` | [`timePicker` (mobile)](#timepicker-mobile) | `MobileTimeDial` |
| `12247:8599` | [`monthPicker`](#monthpicker) | `MonthCalendar` |
| `12247:8602` | [`dateCalendar`](#datecalendar) | `DateCalendar` |
| `12247:8603` | [`periodCalendar`](#periodcalendar) | `PeriodCalendar` |
| `12266:7051` | [`time` (panel)](#time-panel) | `TimePanel` |
| `12381:8083` | [`moveContainer`](#movecontainer) | `DateMove` |
| `12405:9022` | [`toggle`](#toggle) | `Toggle` |

> 컴포넌트 합성(`datePicker`, `datePeriodPicker`, `timePicker`, `mobileDatePicker`, `mobileDatePeriodPicker`, `mobileTimePicker`, `numberField`, `inputGroup`)은 단일 노드가 없어 인덱스에서 제외. 본문 섹션 참고.

---

## Figma 변수 매핑 규칙

피그마 Variable 은 upbox-ui CSS 변수 / Tailwind 유틸과 1:1 로 매핑된다. 컴포넌트 섹션의 `### Figma 변수` 표는 **그 노드에서 사용된 변수만** 추려놓은 것이고, 변환 규칙은 모두 여기 표를 따른다.

### 색상

| Figma 변수 | upbox-ui 토큰 (CSS 변수) | Tailwind 유틸 예시 |
|------------|---------------------------|---------------------|
| `primitive/grey-{10..100}` | `--color-grey-{10..100}` | `bg-grey-80`, `text-grey-90`, `border-grey-40` |
| `primitive/navy-{20..100}` | `--color-navy-{20..100}` | `bg-navy-80`, `text-navy-100` |
| `primitive/blue-{20..100}` | `--color-blue-{20..100}` | `bg-blue-30`, `text-blue-80` |
| `primitive/green-{20..100}` | `--color-green-{20..100}` | `bg-green-30`, `text-green-80` |
| `primitive/red-{20..100}` | `--color-red-{20..100}` | `bg-red-30`, `text-red-80` |
| `primitive/orange-{20..100}` | `--color-orange-{20..100}` | `bg-orange-30`, `text-orange-80` |
| `border-colour` (`#d3d6de`) | `--color-grey-40` | `border-grey-40` |
| `CTA/primary` (`#264870`) | `--color-cta-primary` (= navy-80) | `bg-cta-primary` |
| `CTA/destructive` | `--color-cta-destructive` (= red-80) | `bg-cta-destructive` |
| `CTA/secondary` | `--color-cta-secondary` (= grey-60) | `bg-cta-secondary` |
| `CTA/tertiary` | `--color-cta-tertiary` (= grey-30) | `bg-cta-tertiary` |
| `status/processing, informative` | `--color-status-informative` (= blue-80) | `text-status-informative` |
| `status/success, positive` | `--color-status-positive` (= green-80) | `text-status-positive` |
| `status/fail, nagative` | `--color-status-negative` (= red-80) | `text-status-negative` |
| `status/warning, temporary` | `--color-status-warning` (= orange-80) | `text-status-warning` |

> 피그마 변수명에 `nagative`(오타), `regualr`(오타) 등이 그대로 남아있어도 코드 토큰명은 `negative`, `regular` 로 정정해 사용한다.

### 타이포그래피 (`Body/*`, `Caption/*` 합성 토큰)

| Figma 변수 | upbox-ui 표현 |
|------------|----------------|
| `font/family/Pretendard` | `font-family: Pretendard` (전역) |
| `font/weight/Regular` | `font-normal` (`400`) |
| `font/weight/SemiBold` | `font-semibold` (`600`) |
| `font/fontSize/font-4xs(8)` | `--text-size-8` (없으면 `text-[8px]`) |
| `font/fontSize/font-3xs(10)` | `--text-size-10` / `text-size-10` |
| `font/fontSize/font-2xs(12)` | `--text-size-12` / `text-size-12` |
| `font/fontSize/font-sm(14)` | `--text-size-14` / `text-size-14` |
| `font/fontSize/font-base(16)` | `--text-size-16` / `text-size-16` |
| `font/lineHeight/{N}` | `leading-[{N}px]` |
| `Body/body1` | `text-size-16 leading-[24px] font-normal` |
| `Body/body3` | `text-size-14 leading-[20px] font-normal` |
| `Body/body3-sb` | `text-size-14 leading-[20px] font-semibold` |
| `Body/body5` | `text-size-12 leading-[16px] font-normal` |
| `Body/body5-sb` | `text-size-12 leading-[16px] font-semibold` |
| `Caption/caption2` | `text-size-12 leading-[16px] font-normal` |
| `Caption/caption3` | `text-size-10 leading-[16px] font-normal` |
| `Caption/caption4` | `text-size-8 leading-[12px] font-normal` |

### 간격 / 사이즈

| Figma 변수 | upbox-ui 표현 |
|------------|----------------|
| `padding/padding-{N}`, `margin/margin-{N}` | `--space-{N}` 또는 `p-[{N}px]` / `m-[{N}px]` (`N` ∈ `2,4,6,8,12,16,…`) |
| 사이즈 alias `3xsmall=16`, `2xsmall=20`, `xsmall=24`, `small=32`, `regualr(=regular)=40`, `large=48`, `48px=48` | InputFrame · Button · Tag · Badge 등 컴포넌트의 `size` prop 토큰 (height = `h-[{N}px]`) |

---

## `datePicker`

| 피그마 | Vue |
|--------|-----|
| date input + dateCalendar 조합 | `DatePicker.vue` |
| 날짜 값 | `v-model` (`CalendarDate \| null`) |
| `size` | `size` (`InputFrameDesignProps`) |
| `state=error` | `error` 또는 `DateInput` draft error |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| 입력 영역 `class` | `class` |
| 팝업 영역 `class` | `popoverContentClass` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| input frame | `DateTrigger` |
| date input | 기본 슬롯 `DateInput` |
| calendar icon | `DateTrigger` 내부 `PopoverTrigger` 버튼 |
| calendar popup | `PopoverContent` |
| date calendar panel | `DateCalendar` |

---

## `datePeriodPicker`

| 피그마 | Vue |
|--------|-----|
| period input + periodCalendar 조합 | `DatePeriodPicker.vue` |
| 기간 값 | `v-model` (`{ start: CalendarDate \| null, end: CalendarDate \| null }`) |
| `size` | `size` (`InputFrameDesignProps`) |
| `state=error` | `error` 또는 `DatePeriodInput` draft error |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| 시작 placeholder | `startPlaceholder` |
| 종료 placeholder | `endPlaceholder` |
| 입력 영역 `class` | `class` |
| 팝업 영역 `class` | `popoverContentClass` |

---

## `dateInput`

피그마의 `dateInput`은 코드에서 항상 Picker로 매핑한다. 단독 `DateInput` / `DatePeriodInput`은 Picker의 슬롯 커스터마이즈가 필요할 때만 직접 쓴다.

| 피그마 | Vue |
|--------|-----|
| 노드 `3619:27807` | — |
| `variant=date` | `DatePicker.vue` / `MobileDatePicker.vue` (기본 슬롯에 `DateInput` 자동 포함) |
| `variant=period` | `DatePeriodPicker.vue` / `MobileDatePeriodPicker.vue` (내부에 `DatePeriodInput` 자동 포함) |
| `size=small \| regular \| large` | `size` (`InputFrameDesignProps`) |
| `state=placeholder` | 빈 `v-model` + `placeholder` |
| `state=typed` | `v-model` 있음 |
| `state=focused` | 내부 focus 상태 |
| `state=error` | `error` 또는 입력 draft error |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| date 입력 폭 | 기준 폭 `160px` |
| period 입력 폭 | 기준 폭 `340px` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| date input text | `DatePicker` 기본 슬롯 → `DateInput` |
| period start text | `DatePeriodPicker` → `DatePeriodInput` → 첫 번째 `DateInput` |
| period arrow | `DatePeriodPicker` → `DatePeriodInput` → 구분 텍스트 `→` |
| period end text | `DatePeriodPicker` → `DatePeriodInput` → 두 번째 `DateInput` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| period input frame | `DatePeriodTrigger` |
| start / arrow / end | `DatePeriodInput` |
| calendar icon | `DatePeriodTrigger` 내부 `PopoverTrigger` 버튼 |
| calendar popup | `PopoverContent` |
| period calendar panel | `PeriodCalendar` |

---

## `moveContainer`

| 피그마 | Vue |
|--------|-----|
| 노드 `12381:8083` | — |
| 컴포넌트 | `DateMove.vue` |
| `size=small \| regular \| large` | `size` (`InputFrameDesignProps`) |
| 비활성 | `disabled` |
| 이동 대상 값 | `v-model` (`CalendarDate \| DatePeriodValue \| null`) |
| 중앙 컨텐츠 | 기본 슬롯 (`DatePicker`, 필요 시 `DatePeriodPicker`) |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| 이전 연 | `IconButton` + `ChevronsLeft` |
| 이전 월 | `IconButton` + `ChevronLeft` |
| 중앙 입력 | `slot` |
| 다음 월 | `IconButton` + `ChevronRight` |
| 다음 연 | `IconButton` + `ChevronsRight` |

---

## `dateCalendar`

| 피그마 | Vue |
|--------|-----|
| 노드 `12247:8602` | — |
| 컴포넌트 | `DateCalendar.vue` (`Calendar`는 동일 파일 별칭) |
| 웹 기준 크기 | `256px × 360px` |
| 날짜 값 | `v-model` (`CalendarDate \| null`) |
| 로케·주 시작 등 | `CalendarRootProps` 전부 (`locale`, `weekStartsOn`, …) |
| 푸터(초기화·완료) 노출 여부 | `showFooter` |
| 빠른 기간(1·3·6개월·1년) 노출 여부 | `showQuickPresets` |
| 초기화 / 완료 슬롯 | `#reset`, `#done` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| header / month move | `CalendarHeader` |
| date grid | `CalendarDateGrid` → `CalendarGrid` |
| day cell | `CalendarCell` + `CalendarCellTrigger` (`32px`) |
| selected day cell | `date` 노드 `12242:5467` → `variant=selected, size=small` → `getCalendarDateCellTriggerClass()` |
| quick preset | `CalendarShortcut` |
| footer | `CalendarFooter` |

---

## `dateCalendar` (mobile)

| 피그마 | Vue |
|--------|-----|
| 노드 `12247:8592` | — |
| 컴포넌트 | `MobileDateCalendar.vue` |
| 모바일 기준 크기 | `360px × 464px` (상단 라운드 `16/16/0/0`) |
| 날짜 값 | `v-model` (`CalendarDate \| null`) |
| 로케·주 시작 등 | `CalendarRootProps` 전부 (`locale`, `weekStartsOn`, …) |
| 푸터(초기화·저장) 노출 여부 | `showFooter` |
| 초기화 / 저장 슬롯 | `#reset`, `#done` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| `Title` (월 텍스트 + 좌·우 chevron 2쌍) | 인라인 헤더 (`IconButton size=small variant=tertiary` × 4) |
| `month` 텍스트 | `headingLabel` 버튼 (`label1` 16/24/Bold) |
| `Frame 2895` 주·일자 | `<table>` + `CalendarGridHead` / `CalendarGridBody` |
| `week` 행 | `<th>` (`label2` 15/24/Bold, `flex-1`, 일=`red-80`) |
| `day` 슬롯 (6 × `02 line`) | `CalendarCell` × 7 (`flex-1 h-[48px]`) |
| day 셀 트리거 | `CalendarCellTrigger` (`40 × 40` 라운드 `8`) |
| selected day cell | `date` 노드 → `variant=selected, size=small` → `getCalendarDateCellTriggerClass()` |
| `Frame 2530` 푸터 | 인라인 푸터 (`Button` × 2, `flex-1`) |
| 초기화 (tertiary, xlarge, front icon) | `Button variant=tertiary theme=filled size=xlarge` + `RotateCcw` |
| 저장 (primary, xlarge) | `Button variant=primary theme=filled size=xlarge` |

---

## `periodCalendar` (mobile)

| 피그마 | Vue |
|--------|-----|
| 노드 `12247:8094` | — |
| 컴포넌트 | `MobilePeriodCalendar.vue` |
| 모바일 기준 크기 | `360px × 824px` (상단 라운드 `16/16/0/0`, 두 달 세로 스택) |
| 범위 값 | `v-model` (reka `DateRange`) |
| 로케·주 시작 등 | `RangeCalendarRootProps` 전부 (`locale`, `weekStartsOn`, …) |
| 한 화면에 보이는 달 개수 | `numberOfMonths` (기본 `2`) |
| 푸터(초기화·저장) 노출 여부 | `showFooter` |
| 초기화 / 저장 슬롯 | `#reset`, `#done` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| `Title` (월별 좌·우 chevron 2쌍) | 인라인 헤더 (`IconButton size=small variant=tertiary` × 4, 월 패널마다) |
| `month` 텍스트 | 일반 `<div>` (`label1` 16/24/Bold) |
| `week` 행 | `<th>` (`label2` 15/24/Bold, `flex-1`, 일=`red-80`) |
| `day` 행 | `RangeCalendarCell` × 7 (`flex-1 h-[48px]`) |
| day 셀 트리거 | `RangeCalendarCellTrigger` (`40 × 40` 라운드 `8`) |
| start/end selected cell | `date` 노드 → `variant=selected, size=small` → `getCalendarRangeDateCellTriggerClass()` |
| range middle cell | `date` 노드 → `variant=durationDate, size=small` → 셀 `bg-blue-20` |
| 초기화 (tertiary, xlarge, front icon) | `Button variant=tertiary theme=filled size=xlarge` + `RotateCcw` |
| 저장 (primary, xlarge) | `Button variant=primary theme=filled size=xlarge` |

---

## `monthPicker`

| 피그마 | Vue |
|--------|-----|
| 노드 `12247:8599` | — |
| 컴포넌트 | `MonthCalendar.vue` |
| 웹 기준 크기 | `256px × 184px` |
| 월 값 | `v-model` (`CalendarDate \| null`, 일 항상 1일) |
| 완료 | `@done` |
| 패널 `class` | `class` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| year header / year move | `CalendarMonthGrid` |
| month grid | `CalendarMonthGrid` |
| this month / done footer | `MonthCalendar` 내부 footer |
| year picker view | `CalendarYearGrid` |

---

## `periodCalendar`

| 피그마 | Vue |
|--------|-----|
| 노드 `12247:8603` | — |
| 컴포넌트 | `PeriodCalendar.vue` |
| 웹 기준 크기 | `512px × 408px` |
| 범위 값 | `v-model` (reka `DateRange`) |
| 한 화면에 보이는 달 개수 | `numberOfMonths` (미지정 시 `2`) |

`PeriodCalendar`는 내부에서 `RangeCalendar`에 속성을 넘긴다. **나머지는 `RangeCalendar`**(`RangeCalendarRootProps`)와 동일 이름으로 맞추면 된다.

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| range root | `RangeCalendar.vue` |
| month panel | `CalendarRangeDateGrid` 내부 월 컬럼 |
| panel header | 각 월 컬럼의 `CalendarRangeHeader` |
| date grid | 각 월 컬럼의 `RangeCalendarGrid` |
| day cell | `RangeCalendarCell` + `RangeCalendarCellTrigger` (`32px`) |
| start/end selected cell | `date` 노드 `12242:5467` → `variant=selected, size=small` → `getCalendarRangeDateCellTriggerClass()` |
| range middle cell | `date` 노드 `12242:5467` → `variant=durationDate, size=small` → `getCalendarRangeDateCellTriggerClass()` |
| quick preset | `CalendarShortcut` |
| footer | `CalendarFooter` |

---

## `timePicker`

| 피그마 | Vue |
|--------|-----|
| time input + time 패널 조합 | `TimePicker.vue` |
| 시각 값 | `v-model` (`Time \| null`) |
| `size` | `size` (`InputFrameDesignProps`) |
| `state=error` | `error` 또는 `TimeInput` draft error |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| 입력 영역 `class` | `class` |
| 팝업 영역 `class` | `popoverContentClass` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| input frame | `TimeTrigger` |
| time input | 기본 슬롯 `TimeInput` |
| clock icon | `TimeTrigger` 내부 `PopoverTrigger` 버튼 |
| time popup | `PopoverContent` |
| time panel | `TimePanel` |

---

## `timeInput`

피그마의 `timeInput`은 코드에서 항상 Picker로 매핑한다. 단독 `TimeInput` 은 Picker 의 슬롯 커스터마이즈가 필요할 때만 직접 쓴다.

| 피그마 | Vue |
|--------|-----|
| 노드 `3623:26811` | — |
| `variant=time` | `TimePicker.vue` / `MobileTimePicker.vue` (기본 슬롯에 `TimeInput` 자동 포함) |
| `variant=timeRange` | (미구현 — 추후 `TimePeriodPicker.vue`) |
| `size=32px \| 40px \| 48px` → `small \| regular \| large` | `size` (`InputFrameDesignProps`) |
| `state=placeholder` | 빈 `v-model` + `placeholder` |
| `state=typed` | `v-model` 있음 |
| `state=focused` | 내부 focus 상태 |
| `state=error` | `error` 또는 입력 draft error |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| time 입력 폭 | 기준 폭 `160px` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| time input text (`오전 09:00`) | `TimePicker` 기본 슬롯 → `TimeInput` |
| clock icon | `TimeTrigger` 내부 `PopoverTrigger` 버튼 |

---

## `time` (panel)

| 피그마 | Vue |
|--------|-----|
| 노드 `12266:7051` | — |
| 컴포넌트 | `TimePanel.vue` |
| `state=placeholder` | 빈 `modelValue` |
| `state=focused` | 입력 중 |
| `state=disabled` | `선택 안함` 체크 시 시·분·AM/PM 비활성 |
| 시각 값 | `v-model` (`Time \| null`) |
| 시 input | 12h 표기 (`1`~`12`) |
| 분 input | `0`~`59` |
| AM·PM 토글 | 세로 스택 버튼 |
| 선택 안함 체크박스 노출 여부 | `showSkip` |
| 완료 버튼 노출 여부 | `showFooter` |
| 완료 | `@change` |
| 패널 `class` | `class` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| 시 입력 | 직접 `<input>` (panel 내부) |
| `:` 구분 | 텍스트 |
| 분 입력 | 직접 `<input>` (panel 내부) |
| AM/PM 세로 토글 | 직접 `<button>` 2개 (panel 내부) |
| 선택 안함 | `Checkbox` (size=small) |
| 완료 | `Button` (variant=primary, size=small) |

---

## `mobileTimePicker`

| 피그마 | Vue |
|--------|-----|
| time input + mobileTimeDial 조합 | `MobileTimePicker.vue` |
| 시각 값 | `v-model` (`Time \| null`) |
| `size` | `size` (`InputFrameDesignProps`) |
| `state=error` | `error` 또는 `TimeInput` draft error |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| 드로어 제목 | `title` (기본 `"시간 선택"`) |
| 입력 영역 `class` | `class` |
| 드로어 `class` | `drawerContentClass` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| input frame | `MobileTimePicker` 외곽 `InputFrame` |
| time input | 기본 슬롯 `TimeInput` |
| clock icon | 외곽 `<button>` + `Clock` (드로어 트리거) |
| time popup | `Drawer` + `DrawerContent` |
| time dial | `MobileTimeDial` |

---

## `mobileDatePicker`

| 피그마 | Vue |
|--------|-----|
| date input + mobile dateCalendar 조합 | `MobileDatePicker.vue` |
| 날짜 값 | `v-model` (`CalendarDate \| null`) |
| `size` | `size` (`InputFrameDesignProps`) |
| `state=error` | `error` 또는 `DateInput` draft error |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| 입력 영역 `class` | `class` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| input frame | `MobileDateTrigger` |
| date input | 기본 슬롯 `DateInput` |
| calendar icon | `MobileDateTrigger` 내부 `DrawerTrigger` 버튼 |
| calendar popup | `Drawer` + `DrawerContent` |
| date calendar panel | `MobileDateCalendar` |

---

## `mobileDatePeriodPicker`

| 피그마 | Vue |
|--------|-----|
| period input + mobile periodCalendar 조합 | `MobileDatePeriodPicker.vue` |
| 기간 값 | `v-model` (`{ start: CalendarDate \| null, end: CalendarDate \| null }`) |
| `size` | `size` (`InputFrameDesignProps`) |
| `state=error` | `error` 또는 `DatePeriodInput` draft error |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| 시작 placeholder | `startPlaceholder` |
| 종료 placeholder | `endPlaceholder` |
| 입력 영역 `class` | `class` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| period input frame | `MobileDatePeriodTrigger` |
| start / arrow / end | `DatePeriodInput` |
| calendar icon | `MobileDatePeriodTrigger` 내부 `DrawerTrigger` 버튼 |
| calendar popup | `Drawer` + `DrawerContent` |
| period calendar panel | `MobilePeriodCalendar` |
| 저장 (validation 필요) | `#done` 슬롯 — `Button variant=primary size=xlarge` (`saveDisabled` 시 비활성) |

---

## `mobileDatePeriodSelector`

| 피그마 | Vue |
|--------|-----|
| 노드 `12247:7978` (`periodInput`, mobile) | — |
| 컴포넌트 | `MobileDatePeriodSelector.vue` |
| `variant=fixed` (1개월·3개월·1년) | `preset=1m \| 3m \| 1y` (또는 `modelValue` 자동 감지) |
| `variant=select` (직접 설정) | `preset=custom` |
| 기간 값 | `v-model` (`{ start: CalendarDate \| null, end: CalendarDate \| null }`) |
| 토글 활성 프리셋 | `v-model:preset` (`1m \| 3m \| 1y \| custom`) |
| 헤더 제목 | `title` (기본 `"조회기간 설정"`) |
| 닫기 버튼 노출 여부 | `showClose` |
| 시작 placeholder (`select`) | `startPlaceholder` (기본 `"시작일 선택"`) |
| 종료 placeholder (`select`) | `endPlaceholder` (기본 `"종료일 선택"`) |
| 완료 버튼 텍스트 | `doneText` (기본 `"선택 완료"`) |
| 완료 | `@done` (`{ start, end }`) |
| 닫기 | `@close` |
| 패널 `class` | `class` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| 헤더 제목 + 닫기 X | 인라인 `<header>` + `X` 아이콘 버튼 |
| 프리셋 토글 (1개월·3개월·1년·직접 설정) | `ToggleGroup` (`type=single`) + `ToggleGroupItem` × 4 (세그먼티드 스타일) |
| 합본 기간 표시 (`variant=fixed`) | `InputFrame size=large readonly` + `시작 → 종료` 텍스트 + `Calendar` 아이콘 |
| 두 입력 필드 (`variant=select`) | `MobileDatePicker` × 2 (각각 `DateInput` 슬롯) |
| 완료 버튼 | `Button variant=primary size=large block` |

---

## `timePicker` (mobile)

| 피그마 | Vue |
|--------|-----|
| 노드 `12247:8598` | — |
| 컴포넌트 | `MobileTimeDial.vue` |
| 모바일 기준 크기 | `360px × 320px` (상단 라운드 `16/16/0/0`) |
| 시각 값 | `v-model` (`Time \| null`) |
| 헤더 제목 | `title` (기본 `"시간 선택"`) |
| 닫기 버튼 노출 여부 | `showClose` |
| 저장 | `@change` (`Time`) |
| 선택 안함 | `@change` (`null`) |
| 닫기 | `@close` |
| 패널 `class` | `class` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| 헤더 제목 + 닫기 X | 인라인 `<header>` + `X` 아이콘 버튼 |
| AM/PM 컬럼 (오전·오후) | 휠 컬럼 #1 (스크롤 스냅) |
| 시 컬럼 (1~12, 12h 표기) | 휠 컬럼 #2 (스크롤 스냅) |
| 분 컬럼 (00~59) | 휠 컬럼 #3 (스크롤 스냅) |
| 선택 행 강조 배경 | 가운데 절대 배치 `bg-blue-20` |
| 선택 안함 (tertiary outlined) | `Button variant=tertiary theme=outlined size=xlarge` |
| 저장 (primary) | `Button variant=primary theme=filled size=xlarge` |

---

## `textArea`

| 피그마 | Vue |
|--------|-----|
| 노드 `3429:25321` | — |
| 컴포넌트 | `Textarea.vue` |
| `size=small \| regular \| large` | `size` (`InputFrameDesignProps`) |
| size 별 기본 높이 (placeholder 상태) | `small=72px`, `regular=92px`, `large=104px` (`minHeight` 미지정 시) |
| `state=placeholder` | 빈 `v-model` + `placeholder` |
| `state=typed` | `v-model` 있음 |
| `state=focused` | 내부 focus 상태 (`focus-within`) |
| `state=error` | `error` |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| 우하단 카운터 (`0/N`) | `counter` + `maxLength` |
| byte 단위 카운터 | `byteMode` |
| 자동 높이 | `autoResize` (기본 `true`) |
| 높이 상·하한 | `minHeight` / `maxHeight` (px) |
| `autoResize=false` 일 때 행 수 | `rows` |

> Figma 노드는 `default` variant 만 정의되어 있다. 코드에는 `TextField` 와의 일관성을 위해 `filled` / `bottomline` variant 도 유지한다.

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| frame (border + bg + padding) | `Textarea` 외곽 `<div>` (`textareaFrameVariants`) |
| 본문 입력 영역 | 내부 `<textarea>` (`block flex-1 resize-none`) |
| 우하단 카운터 | `TextareaCount` (자식 슬롯에 inject — `TEXTAREA_TRAILING_CONTEXT_KEY`) |
| 카운터 자리(footer) 커스터마이즈 | `#footer` 슬롯 |

---

## `badge`

| 피그마 | Vue |
|--------|-----|
| 노드 `3540:25866` | — |
| 컴포넌트 | `Badge.vue` |
| `variant=neutral` | `variant="neutral"` |
| `variant=negative` | `variant="negative"` |
| `variant=positive` | `variant="positive"` |
| `variant=informative` | `variant="informative"` |
| `variant=warning` | `variant="warning"` |
| `tone=soft` (filled 50%) | `tone="soft"` |
| `tone=solid` (filled 100%) | `tone="solid"` |
| `tone=outline` | `tone="outline"` |
| `size=3xsmall \| 2xsmall \| xsmall` | `size` |
| 모서리 둥글기 (pill) | `round` (`true` → `rounded-full`, `false` → `rounded-[3px]`) |
| 본문 텍스트 | 기본 슬롯 |
| 좌측 아이콘 (`size>=2xsmall`) | `#icon` 슬롯 |
| 우측 카운트 배지 | `#count` 슬롯 |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| 외곽 (border + bg + radius + padding) | `Badge` 외곽 `<div>` (`badgeVariants`) |
| 좌측 아이콘 자리 (`size-[16px]`) | `#icon` 슬롯 |
| 본문 텍스트 | 기본 슬롯 |
| 우측 숫자 카운트 (원형 칩) | `#count` 슬롯 (`badgeCountVariants`) |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `primitive/grey-10` | `outline` 배경 / `solid` 텍스트 | `bg-grey-10` / `text-grey-10` |
| `primitive/grey-30` | `soft` neutral 배경 | `bg-grey-30` |
| `primitive/grey-80` | `solid` neutral 배경 | `bg-grey-80` |
| `primitive/grey-90` | `soft` neutral 텍스트 / `outline` neutral border·text | `text-grey-90` / `border-grey-90` |
| `primitive/red-30` | `soft` negative 배경 | `bg-red-30` |
| `primitive/green-30` | `soft` positive 배경 | `bg-green-30` |
| `primitive/blue-30` | `soft` informative 배경 | `bg-blue-30` |
| `primitive/orange-30` | `soft` warning 배경 | `bg-orange-30` |
| `status/fail, nagative` | negative 텍스트·border·`solid` 배경 | `text-red-80` / `border-red-80` / `bg-red-80` |
| `status/success, positive` | positive 텍스트·border·`solid` 배경 | `text-green-80` / `bg-green-80` |
| `status/processing, informative` | informative 텍스트·border·`solid` 배경 | `text-blue-80` / `bg-blue-80` |
| `status/warning, temporary` | warning 텍스트·border·`solid` 배경 | `text-orange-80` / `bg-orange-80` |
| `3xsmall=16` | 높이 (`h-[16px]`) | `size="3xsmall"` |
| `2xsmall=20` | 높이 (`h-[20px]`) | `size="2xsmall"` |
| `xsmall=24` | 높이 (`h-[24px]`) | `size="xsmall"` |
| `padding/padding-04` | 좌우 padding (3xsmall) | `px-[4px]` |
| `padding/padding-08` | 좌우 padding (2xsmall·xsmall) | `px-[8px]` |
| `Body/body5-sb` | `3xsmall`·`2xsmall` 본문 폰트 | `text-size-12 leading-[16px] font-semibold` |
| `Body/body3-sb` | `xsmall` 본문 폰트 | `text-size-14 leading-[20px] font-semibold` |
| 모서리 `3` | 기본 모서리 둥글기 | `rounded-[3px]` |

---

## `textField`

| 피그마 | Vue |
|--------|-----|
| 노드 `3429:16714` | — |
| input frame + 단일 줄 입력 | `TextField.vue` |
| `variant=default \| filled \| bottomline` | `variant` |
| `size=small \| regular \| large` | `size` (`InputFrameDesignProps`) |
| `state=placeholder` | 빈 `v-model` + `placeholder` |
| `state=typed` | `v-model` 있음 |
| `state=focused` | 내부 focus 상태 |
| `state=error` | `error` |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| 값 | `v-model` (`string \| number`) |
| 비밀번호 토글 (eye/eyeOff) | `password` |
| 우측 X 클리어 | `clearable` |
| 글자수 카운터 (`현재/최대`) | 자식 슬롯에 `<TextFieldUnit>` / `<TextFieldCount>` (`TEXT_FIELD_TRAILING_CONTEXT_KEY` inject) |
| byte 단위 카운터 | `byteMode` |
| `<input maxlength>` | `maxLength` |
| input type | `type` (`"text"` 기본) |
| 외곽 `class` | `class` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| frame (border + bg + padding) | `InputFrame` |
| 본문 입력 영역 | 내부 `<input>` (`flex-1 bg-transparent outline-none`) |
| 좌·우 아이콘 | `InputIcon` 슬롯 (자식으로 직접 배치) |
| 우측 X 클리어 버튼 | `clearable=true` 시 자동 (`X` lucide 아이콘) |
| 우측 eye 토글 버튼 | `password=true` 시 자동 (`Eye` / `EyeOff` lucide 아이콘) |
| 우측 카운터 자리 | `<TextFieldCount>` (자식 슬롯) |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `border-colour` (`#d3d6de`) | frame border (default) | `border-grey-40` |
| `primitive/grey-10` | frame 배경 (default) | `bg-grey-10` |
| `primitive/grey-20` | frame 배경 (`filled` / `readonly` / `disabled`) | `bg-grey-20` |
| `primitive/grey-50` | placeholder 텍스트 / 좌측 hint 텍스트 | `text-grey-50` (`placeholder:text-grey-50`) |
| `primitive/grey-60` | caption 텍스트 (`Caption/caption2,3`) | `text-grey-60` |
| `primitive/grey-80` | 입력 텍스트 (`text-inherit` 의 frame 색) | `text-grey-80` |
| `primitive/grey-90` | typed 입력 / 강조 텍스트 | `text-grey-90` |
| `primitive/blue-50` | focus ring | `ring-blue-50` |
| `primitive/blue-80` | focus border | `border-blue-80` |
| `status/fail, nagative` | error border·텍스트 | `border-red-80` / `text-red-80` |
| `small=32` / `regualr=40` / `large=48` | frame 높이 | `size="small\|regular\|large"` (`h-[32\|40\|48]px`) |
| `padding/padding-08` | `small` 좌우 padding | `px-[8px]` |
| `padding/padding-12` | `large` 좌우 padding | `px-[12px]` |
| `padding/padding-16` | `regular`·`large` 좌우 padding | `px-[16px]` |
| `margin/margin-02` / `margin/margin-04` / `margin/margin-08` | 내부 아이콘·텍스트 간격 | `gap-[2\|4\|8]px` |
| `Body/body5` (12/16) | `small` 본문 | `text-size-12 leading-[16px]` |
| `Body/body3` (14/20) | `regular` 본문 | `text-size-14 leading-[20px]` |
| `Body/body1` (16/24) | `large` 본문 | `text-size-16 leading-[24px]` |
| `Body/body3-sb` / `Body/body5-sb` | 강조 본문 | `font-semibold` 동일 사이즈 |
| `Caption/caption2` (12/16) / `Caption/caption3` (10/16) / `Caption/caption4` (8/12) | 보조 caption | `text-size-{12\|10\|8}` |
| 모서리 `4` | 기본 모서리 둥글기 | `rounded-[4px]` |
| `xsmall=24` / `3xsmall=16` | 내부 아이콘·뱃지 크기 | `size-[24px]` / `size-[16px]` |

---

## `numberField`

| 피그마 | Vue |
|--------|-----|
| 노드 `numberField` | — |
| 컴포넌트 | `NumberField.vue` |
| `variant=center` (좌·우에 −/+ 분할) | `variant="center"` |
| `variant=side` (입력 우측에 −/+ 묶음) | `variant="side"` |
| `size=small \| regular \| large` | `size` (`InputFrameDesignProps`) |
| `state=placeholder` | 빈 `v-model` + `placeholder` |
| `state=typed` | `v-model` 있음 |
| `state=focused` | 내부 focus 상태 |
| `state=error` | `error` |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| 값 | `v-model` (`number`) |
| 최소·최대·step | `min` / `max` / `step` |
| 포맷 옵션 (소수·단위·통화 등) | `formatOptions` (`Intl.NumberFormatOptions`) |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| 외곽 root | `NumberFieldRoot` (reka-ui) |
| frame (border + bg) | `InputFrame` (`!px-0 overflow-hidden`) |
| − 버튼 | `NumberFieldDecrement` (`Minus` lucide) |
| 숫자 입력 | `NumberFieldInput` |
| + 버튼 | `NumberFieldIncrement` (`Plus` lucide) |
| − / + 사이의 세로 구분선 | `border-grey-40` (error 시 `border-red-80`) |

---

## `searchField`

| 피그마 | Vue |
|--------|-----|
| 노드 `3498:25583` | — |
| input frame + 검색 input | `SearchField.vue` |
| `variant=basic` (좌측 search 아이콘 + 우측 X 클리어) | `variant="basic"` |
| `variant=filter` (좌측 슬롯 + 세로 구분선 + 우측 search 아이콘) | `variant="filter"` |
| `size=small \| regular \| large` | `size` (`InputFrameDesignProps`) |
| `state=placeholder` | 빈 `v-model` + `placeholder` |
| `state=typed` | `v-model` 있음 |
| `state=focused` | 내부 focus 상태 |
| `state=error` | `error` |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |
| 값 | `v-model` (`string`) |
| Enter 제출 | `@submit` |
| X 클리어 | `@clear`, `clearable` (기본 `true`) |
| 좌측 필터 슬롯 (`variant=filter`) | `#filter` (예: `Select` + `inline` `SelectTrigger`) |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| frame (border + bg + padding) | `InputFrame` |
| 좌측 search 아이콘 (`variant=basic`) | `InputIcon` + `Search` lucide |
| 좌측 필터 영역 (`variant=filter`) | `#filter` 슬롯 + 세로 `bg-grey-40` 구분선 |
| 본문 입력 영역 | 내부 `<input type="search">` (`flex-1 bg-transparent outline-none`) |
| 우측 X 클리어 (`variant=basic`) | `X` lucide 아이콘 버튼 (`clearable && value`) |
| 우측 search 아이콘 (`variant=filter`) | `InputIcon` + `Search` lucide |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `border-colour` (`#d3d6de`) | frame border | `border-grey-40` |
| `primitive/grey-10` | frame 배경 | `bg-grey-10` |
| `primitive/grey-20` | `readonly` / `disabled` 배경 | `bg-grey-20` |
| `primitive/grey-40` | `variant=filter` 좌측 세로 구분선 | `bg-grey-40` |
| `primitive/grey-50` | placeholder · search/clear 아이콘 | `text-grey-50` |
| `primitive/grey-90` | 입력 텍스트 | `text-grey-90` |
| `primitive/blue-50` | focus ring | `ring-blue-50` |
| `primitive/blue-80` | focus border | `border-blue-80` |
| `small=32` / `regualr=40` / `large=48` (`48px`) | frame 높이 | `size="small\|regular\|large"` |
| `Body/body5` (12/16) / `Body/body3` (14/20) / `Body/body1` (16/24) | 사이즈별 본문 폰트 | `text-size-{12\|14\|16}` + `leading-[{16\|20\|24}px]` |

---

## `inputGroup`

| 피그마 | Vue |
|--------|-----|
| input frame + addon 묶음 | `InputGroup.vue` |
| `size=small \| regular \| large` | `size` |
| `state=error` | `error` |
| `state=disabled` | `disabled` |
| `state=readonly` | `readonly` |

> `inputGroup` 은 단일 입력 컴포넌트가 아니라 **input + addon (아이콘·버튼·텍스트) 조합용 외곽 frame** 이다. `InputGroupAddon` 의 `align` prop 으로 inline / block 위치를 잡는다.

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| frame (border + bg + padding) | `InputGroup` |
| 좌측 addon (`align=inline-start`) | `InputGroupAddon align="inline-start"` |
| 우측 addon (`align=inline-end`) | `InputGroupAddon align="inline-end"` |
| 상단 addon (`align=block-start`) | `InputGroupAddon align="block-start"` |
| 하단 addon (`align=block-end`) | `InputGroupAddon align="block-end"` |
| 본문 입력 (single line) | `InputGroupInput` (`<input>` raw) |
| 본문 입력 (multi line) | `InputGroupTextarea` (`<textarea>` raw) |
| addon 내부 텍스트 | `InputGroupText` |
| addon 내부 버튼 | `InputGroupButton` (variant·size 별도) |

---

## `select`

| 피그마 | Vue |
|--------|-----|
| 노드 `3837:27148` | — |
| input frame + 드롭다운 트리거 | `Select.vue` (root) + `SelectTrigger.vue` |
| `state=disabled` | `disabled` |
| 트리거를 외부 frame(`SearchField`/`InputGroup`) 안에 inline 으로 사용 | `<SelectTrigger inline>` |
| 트리거 단독(자체 `InputFrame` 포함) | `<SelectTrigger>` (기본) |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| 외곽 root | `Select` (reka-ui `SelectRoot` 래핑) |
| input frame | `SelectTrigger` 내부 `InputFrame` (`inline=false`) |
| 트리거 본문 + chevron | `SelectTrigger` (`SelectIcon` + `ChevronDown`) |
| 선택값 텍스트 | `SelectValue` |
| 드롭다운 패널 | `SelectContent` |
| 그룹 / 라벨 / 항목 / 구분선 | `SelectGroup` / `SelectLabel` / `SelectItem` / `SelectSeparator` |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `border-colour` (`#d3d6de`) | frame border | `border-grey-40` |
| `primitive/grey-10` | frame 배경 | `bg-grey-10` |
| `primitive/grey-20` | `disabled` 배경 | `bg-grey-20` |
| `primitive/grey-50` | placeholder · chevron 아이콘 | `text-grey-50` (`opacity-50` 처리도 동일) |
| `primitive/grey-90` | 선택값 텍스트 | `text-grey-90` |
| `primitive/blue-50` | focus ring | `ring-blue-50` |
| `primitive/blue-80` | focus border | `border-blue-80` |
| `status/fail, nagative` | error border | `border-red-80` |
| `small=32` / `regualr=40` / `large=48` | trigger 높이 | `size="small\|regular\|large"` (현재 코드는 `regular` 만 노출) |
| `padding/padding-08` / `margin/margin-04` | trigger 좌우 padding · 아이콘 간격 | `px-[8px]` / `gap-[4px]` |
| `Body/body5` (12/16) / `Body/body3` (14/20) / `Body/body1` (16/24) | 사이즈별 텍스트 | `text-size-{12\|14\|16}` |

---

## `toggle`

| 피그마 | Vue |
|--------|-----|
| 노드 `12405:9022` | — |
| 컴포넌트 | `Toggle.vue` (reka-ui `SwitchRoot` + `SwitchThumb`) |
| `size=4xsmall \| 3xsmall \| 2xsmall` | `size` |
| `state=on` | `v-model=true` (`data-state=checked`) |
| `state=off` | `v-model=false` (`data-state=unchecked`) |
| `state=disabled` | `disabled` |
| 값 | `v-model` (`boolean`) |
| 라벨 텍스트 | `label` 또는 `#label` 슬롯 |

> 이전의 별개 `Switch` 컴포넌트와 segmented 형태의 `Toggle` / `ToggleGroup` 은 모두 제거됨. on/off 시각화는 모두 이 `Toggle` 로 통합. N중 1택이 필요하면 `Tabs variant="box"` 사용.

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| track (pill 배경) | `SwitchRoot` (`toggleTrackVariants`) |
| thumb (원형) | `SwitchThumb` (`toggleThumbVariants`) |
| 라벨 (선택) | `<span>` (`toggleLabelVariants`) |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `CTA/primary` (`#264870`) | `state=on` track 배경 | `data-[state=checked]:bg-navy-80` (= `bg-cta-primary`) |
| `primitive/navy-50` | `state=on` + `disabled` track 배경 (희미해진 navy) | `disabled:data-[state=checked]:bg-navy-50` (현재 코드는 `disabled:bg-grey-40 + opacity-60` 로 단순화) |
| `primitive/grey-40` | `state=off` track 배경 | `data-[state=unchecked]:bg-grey-40` (현재 코드는 `bg-grey-50`, 검토 후 정렬 필요) |
| `primitive/grey-30` | `state=off` + `disabled` track 배경 | `disabled:bg-grey-30` |
| `primitive/grey-10` | thumb (원형) 배경 | `bg-grey-10` |
| `4xsmall=12` | `size="4xsmall"` track 높이 | `h-[12px] w-[20px]` (thumb `8px`) |
| `3xsmall=16` | `size="3xsmall"` track 높이 | `h-[16px] w-[30px]` (thumb `12px`) |
| `2xsmall=20` | `size="2xsmall"` track 높이 (기본) | `h-[20px] w-[38px]` (thumb `14px`) |
| `padding/padding-02` | thumb ↔ track 내부 여백 | `translate-x-[2px]` (off) / `translate-x-[N]` (on) |

---

## `tag`

| 피그마 | Vue |
|--------|-----|
| 노드 `3570:25359` | — |
| 컴포넌트 | `Tag.vue` |
| `state=enabled` | `state="enabled"` |
| `state=disabled` | `state="disabled"` |
| `state=error` | `state="error"` |
| `size=3xsmall \| 2xsmall \| xsmall \| small` | `size` |
| 닫기(X) 버튼 노출 여부 | `closable` (기본 `false`) |
| 본문 텍스트 | 기본 슬롯 |
| 좌측 배지 | `#badge` 슬롯 |
| 닫기 클릭 | `@close` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| 외곽 (border + bg + padding) | `Tag` 외곽 `<div>` (`tagVariants`) |
| 좌측 배지 | `#badge` 슬롯 |
| 본문 텍스트 | 기본 슬롯 |
| 우측 X 닫기 | `closable=true && state!=='disabled'` 시 자동 (`X` lucide, `bg-grey-90` / error 시 `bg-red-80`) |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `primitive/grey-30` | `state=disabled` 배경 | `bg-grey-30` |
| `primitive/grey-80` | `state=disabled` 텍스트 | `text-grey-80` |
| `primitive/grey-90` | `state=enabled` border·텍스트 / 닫기 버튼 배경 | `border-grey-90` / `text-grey-90` / 닫기 `bg-grey-90` |
| `status/fail, nagative` | `state=error` border·텍스트 / 닫기 버튼 배경 | `border-red-80` / `text-red-80` / 닫기 `bg-red-80` |
| `3xsmall=16` / `2xsmall=20` / `xsmall=24` / `small=32` | tag 높이 | `size` (`h-[16\|20\|24\|32]px`) |
| `padding/padding-08` | 좌우 padding (대부분 사이즈) | `px-[8px]` (3xsmall 만 `px-[4px]`) |
| `margin/margin-04` / `margin/margin-08` | 본문·아이콘 간 gap | `gap-[4px]` / `gap-[8px]` |
| `Body/body5-sb` (12/16) | `3xsmall`·`2xsmall` 본문 | `text-size-12 leading-[16px] font-semibold` |
| `Body/body3-sb` (14/20) | `xsmall`·`small` 본문 | `text-size-14 leading-[20px] font-semibold` |
| 모서리 `3` (3xsmall·2xsmall·xsmall) / `4` (small) | 모서리 둥글기 | `rounded-[3px]` / `rounded-[4px]` |
| 닫기 X 아이콘 크기 | 닫기 버튼 안의 X 크기 | `size-[14px]` (3xsmall·2xsmall·xsmall) / `size-[18px]` (small) |

---

## `standardButton`

| 피그마 | Vue |
|--------|-----|
| 노드 `3220:15782` | — |
| 컴포넌트 | `Button.vue` |
| `variant=primary \| destructive \| secondary \| tertiary` | `variant` |
| `theme=Filled \| Outline` | `theme=filled \| outlined` |
| `size=xsmall \| small \| regular \| large \| xlarge` | `size` |
| `state=Enabled \| Hovered \| Pressed` | CSS `:hover` / `:active` (자동) |
| `disabled=false \| true` | `disabled` |
| 본문 텍스트 | 기본 슬롯 |
| 로딩 상태 | `loading` (`Spinner` 자동 노출, 클릭 무시) |
| 가로 100% | `block` |
| 클릭 | `@click` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| `wrapper` (텍스트·아이콘 컨테이너) | `Button` 내부 `<button>` |
| 본문 텍스트 | 기본 슬롯 |
| `front icon` / `end icon` (boolean) | 슬롯 내부 자유 배치 (`<lucide />` 직접) |
| 로딩 스피너 | `loading=true` 시 `Spinner` 자동 |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `CTA/primary` (`navy-80`) | primary filled 배경·border / outlined border·text | `bg-navy-80` / `border-navy-80` / `text-cta-primary` |
| `CTA/destructive` (`red-80`) | destructive filled / outlined | `bg-red-80` / `border-red-80` / `text-red-80` |
| `CTA/secondary` (`grey-60`) | secondary filled / outlined | `bg-grey-60` / `border-grey-60` / `text-grey-60` |
| `CTA/tertiary` (`grey-30`) | tertiary filled · outlined border | `bg-grey-30` / `border-grey-30` / `text-grey-70` |
| `primitive/grey-10` | filled 텍스트 (primary·destructive·secondary) / outlined 배경 | `text-grey-10` / `bg-grey-10` |
| `primitive/navy-{20,30,90,100}` | primary outlined hover/active bg / filled hover·active | `bg-navy-20` / `bg-navy-30` / `bg-navy-90` / `bg-navy-100` |
| `primitive/red-{20,30,90,100}` | destructive 변형 hover·active | `bg-red-20` / `bg-red-30` / `bg-red-90` / `bg-red-100` |
| `primitive/grey-{20,30,40,50,70,80}` | tertiary·secondary hover·active·텍스트 | `bg-grey-{20,30,40,50}` / `text-grey-{70,80}` |
| `xsmall=24` | 높이 (`h-[24px]`) | `size="xsmall"` |
| `small=32` | 높이 (`h-[32px]`) | `size="small"` |
| `regular=40` | 높이 (`h-[40px]`) | `size="regular"` |
| `large=48` | 높이 (`h-[48px]`) | `size="large"` |
| `xlarge=56` | 높이 (`h-[56px]`) | `size="xlarge"` |
| `padding/padding-{6,8,16}` | 사이즈별 좌우 padding | `px-[6\|8\|16]px` |
| 모서리 `3` (xsmall) / `4` (small 이상) | 둥글기 | `rounded-[3px]` / `rounded-[4px]` |
| `font-2xs(12)` (xsmall) / `sm(14)` (regular) / `font-base(16)` (xlarge) | 사이즈별 본문 폰트 | `text-size-12` / `text-size-13` (small) / `text-size-14` / `text-size-15` (large) / `text-size-16` |
| `font/weight/Bold` | 본문 폰트 굵기 | `font-bold` |

---

## `textButton`

| 피그마 | Vue |
|--------|-----|
| 노드 `3223:13667` | — |
| 컴포넌트 | `TextButton.vue` |
| `Variant=destructive \| secondary` | `variant` |
| `Size=2xsmall \| xsmall \| small` | `size` |
| `Status=Enabled \| Hovered \| Disabled` | CSS `:hover` (자동) / `disabled` |
| 본문 텍스트 | 기본 슬롯 |
| 좌·우 아이콘 | 기본 슬롯 안에 `<lucide />` 직접 (svg 자동 사이즈) |
| 클릭 | `@click` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| 외곽 (텍스트만, 배경 hover만) | `TextButton` 내부 `<button>` (`textButtonVariants`) |
| 본문 텍스트 | 기본 슬롯 |
| 좌·우 아이콘 자리 | 슬롯 내부에 직접 배치 (svg 사이즈 토큰 자동) |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `status/fail, nagative` (`red-80`) | destructive 텍스트 | `text-red-80` |
| `primitive/red-20` | destructive hover 배경 | `hover:bg-red-20` |
| `primitive/grey-60` | secondary 텍스트 | `text-grey-60` |
| `primitive/grey-20` | secondary hover 배경 | `hover:bg-grey-20` |
| `2xsmall=20` | 높이 (`h-[20px]`) + svg `16` | `size="2xsmall"` |
| `xsmall=24` | 높이 (`h-[24px]`) + svg `20` | `size="xsmall"` |
| `small=32` | 높이 (`h-[32px]`) + svg `24` | `size="small"` |
| `padding/padding-{2,4,8}` | 사이즈별 좌우·상하 padding | `px-[4]` (`2xsmall`/`xsmall`) / `px-[8] py-[4]` (`small`) |
| `Body/body5-sb` (12/16) | `2xsmall` 본문 | `text-size-12` |
| `Body/body3-sb` (14/20) | `xsmall` 본문 | `text-size-14` |
| `Body/body1` (16/24) | `small` 본문 | `text-size-16` |
| `font/weight/Bold` | 본문 폰트 굵기 | `font-bold` |
| 모서리 `2` / `3` / `4` | 사이즈별 둥글기 | `rounded-[2px]` / `rounded-[3px]` / `rounded-[4px]` |

---

## `iconButton`

| 피그마 | Vue |
|--------|-----|
| 노드 `3228:14621` | — |
| 컴포넌트 | `IconButton.vue` |
| `Variant=primary \| destructive \| secondary \| tertiary` | `variant` |
| `Size=2xsmall \| xsmall \| small \| regular \| large \| xlarge` | `size` |
| 비활성 | `disabled` |
| 아이콘 | 기본 슬롯 (`<lucide />`, 사이즈는 토큰 자동) |
| 클릭 | `@click` |

### 하위 구조

| 피그마 구조 | Vue 구조 |
|-------------|----------|
| 외곽 (정사각형 + 배경 + radius) | `IconButton` 내부 `<button>` (`iconButtonVariants`) |
| 중앙 아이콘 자리 | 기본 슬롯 (`size-[12\|16\|20\|24]px` 자동) |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `primitive/blue-20` | primary 배경 | `bg-blue-20` (hover `blue-30`, active `blue-40`) |
| `primitive/red-20` | destructive 배경 | `bg-red-20` (hover `red-30`, active `red-40`) |
| `primitive/grey-20` | secondary 배경 | `bg-grey-20` (hover `grey-30`, active `grey-40`) |
| `primitive/grey-10` | tertiary 배경 | `bg-grey-10` (hover `grey-20`, active `grey-30`) |
| `primitive/grey-40` | tertiary border | `border-grey-40` |
| `2xsmall=20` | `size-[20px]` + 아이콘 `12` | `size="2xsmall"` |
| `xsmall=24` | `size-[24px]` + 아이콘 `16` | `size="xsmall"` |
| `small=32` | `size-[32px]` + 아이콘 `20` | `size="small"` |
| `regular=40` | `size-[40px]` + 아이콘 `20` | `size="regular"` |
| `large=48` | `size-[48px]` + 아이콘 `24` | `size="large"` |
| `xlarge=56` | `size-[56px]` + 아이콘 `24` | `size="xlarge"` |
| 모서리 `2` (2xsmall) / `3` (xsmall) / `4` (small 이상) | 사이즈별 둥글기 | `rounded-[2\|3\|4]px` |

---

표의 **피그마 열**: Figma 우측 **Properties**(또는 변형 이름)를 쓰고, 디자인이 바뀌면 같은 행만 갱신한다.
