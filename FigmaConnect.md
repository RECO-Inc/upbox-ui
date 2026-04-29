# Figma ↔ upbox-ui 속성 매핑

목적은 **피그마 컴포넌트 속성**(또는 변형 이름)과 **Vue 컴포넌트의 `prop` / 이벤트 / `v-model`** 을 일치시키는 것이다.  
상세 동작 설명은 넣지 않는다.

| 항목 | 값 |
|------|-----|
| Figma 파일 | [최종 Component _v02](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/-%EC%B5%9C%EC%A2%85-Component-_v02) |
| 라이브러리 | Vue 3 · `@reco-inc/upbox-ui` |

---

## `dateCalendar`

| 피그마 | Vue |
|--------|-----|
| 노드 `12247:8602` | — |
| 컴포넌트 | `DateCalendar.vue` (`Calendar`는 동일 파일 별칭) |
| 날짜 값 | `v-model` (`CalendarDate \| null`) |
| 로케·주 시작 등 | `CalendarRootProps` 전부 (`locale`, `weekStartsOn`, …) |
| 푸터(초기화·완료) 노출 여부 | `showFooter` |
| 빠른 기간(1·3·6개월·1년) 노출 여부 | `showQuickPresets` |
| 초기화 / 완료 슬롯 | `#reset`, `#done` |

---

## `monthPicker`

| 피그마 | Vue |
|--------|-----|
| 노드 `12247:8599` | — |
| 컴포넌트 | `MonthCalendar.vue` |
| 월 값 | `v-model` (`CalendarDate \| null`, 일 항상 1일) |
| 완료 | `@done` |
| 패널 `class` | `class` |

---

## `periodCalendar`

| 피그마 | Vue |
|--------|-----|
| 노드 `12247:8603` | — |
| 컴포넌트 | `PeriodCalendar.vue` |
| 범위 값 | `v-model` (reka `DateRange`) |
| 한 화면에 보이는 달 개수 | `numberOfMonths` (미지정 시 `2`) |

`PeriodCalendar`는 내부에서 `RangeCalendar`에 속성을 넘긴다. **나머지는 `RangeCalendar`**(`RangeCalendarRootProps`)와 동일 이름으로 맞추면 된다.

---

표의 **피그마 열**: Figma 우측 **Properties**(또는 변형 이름)를 쓰고, 디자인이 바뀌면 같은 행만 갱신한다.
