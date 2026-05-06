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
| `3619:27807` | [`dateInput`](#dateinput) | `DatePicker` / `DatePeriodPicker` |
| `3623:26811` | [`timeInput`](#timeinput) | `TimePicker` |
| `12247:8592` | [`dateCalendar` (mobile)](#datecalendar-mobile) | `MobileDateCalendar` |
| `12247:8599` | [`monthPicker`](#monthpicker) | `MonthCalendar` |
| `12247:8602` | [`dateCalendar`](#datecalendar) | `DateCalendar` |
| `12247:8603` | [`periodCalendar`](#periodcalendar) | `PeriodCalendar` |
| `12266:7051` | [`time` (panel)](#time-panel) | `TimePanel` |
| `12381:8083` | [`moveContainer`](#movecontainer) | `DateMove` |

> 컴포넌트 합성(`datePicker`, `datePeriodPicker`, `timePicker`)은 단일 노드가 없어 인덱스에서 제외. 본문 섹션 참고.

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
| `variant=date` | `DatePicker.vue` (기본 슬롯에 `DateInput` 자동 포함) |
| `variant=period` | `DatePeriodPicker.vue` (내부에 `DatePeriodInput` 자동 포함) |
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
| `variant=time` | `TimePicker.vue` (기본 슬롯에 `TimeInput` 자동 포함) |
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

표의 **피그마 열**: Figma 우측 **Properties**(또는 변형 이름)를 쓰고, 디자인이 바뀌면 같은 행만 갱신한다.
