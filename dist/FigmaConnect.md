# Figma ↔ upbox-ui 속성 매핑

목적: **피그마 컴포넌트의 속성(또는 변형 이름)** 과 **Vue 컴포넌트의 `prop` / `event` / `slot` / `v-model`** 을 일치시킨다. 동작 설명·구현 디테일은 포함하지 않는다.

| 항목 | 값 |
|------|-----|
| Figma 파일 | [최종 Component _v02](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/-%EC%B5%9C%EC%A2%85-Component-_v02) |
| 파일 키 | `4eyRu4lbq9068LACdI8HMp` |
| 라이브러리 | Vue 3 · `@reco-inc/upbox-ui` |

## 인덱스

피그마 노드 ID 로 찾을 때 쓰는 매핑. 노드 ID 오름차순. 단일 노드가 없는 합성 컴포넌트는 인덱스 아래의 **합성(Composition)** 표를 참고.

| 피그마 노드 ID | 피그마 컴포넌트 | Vue 컴포넌트 |
|----------------|----------------|--------------|
| [`3220:15782`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3220-15782) | [`standardButton`](#standardbutton) | `Button` |
| [`3223:13667`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3223-13667) | [`textButton`](#textbutton) | `TextButton` |
| [`3228:14621`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3228-14621) | [`iconButton`](#iconbutton) | `IconButton` |
| [`3429:16714`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3429-16714) | [`textField`](#textfield) | `TextField` |
| [`3429:25321`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3429-25321) | [`textArea`](#textarea) | `Textarea` |
| [`3498:25583`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3498-25583) | [`searchField`](#searchfield) | `SearchField` |
| [`3540:25866`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3540-25866) | [`badge`](#badge) | `Badge` |
| [`3570:25359`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3570-25359) | [`tag`](#tag) | `Tag` |
| [`3619:27807`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3619-27807) | [`dateInput`](#dateinput) | `DateInput` / `DatePeriodInput` (Picker 내부) |
| [`3623:26811`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3623-26811) | [`timeInput`](#timeinput) | `TimeInput` (Picker 내부) |
| [`3837:27148`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3837-27148) | [`select`](#select) | `Select` / `SelectTrigger` |
| [`12247:7978`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-7978) | [`mobileDatePeriodSelector`](#mobiledateperiodselector) | `MobileDatePeriodSelector` |
| [`12247:8094`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8094) | [`periodCalendar` (mobile)](#periodcalendar-mobile) | `MobilePeriodCalendar` |
| [`12247:8592`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8592) | [`dateCalendar` (mobile)](#datecalendar-mobile) | `MobileDateCalendar` |
| [`12247:8598`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8598) | [`timePicker` (mobile)](#timepicker-mobile) | `MobileTimeDial` |
| [`12247:8599`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8599) | [`monthPicker`](#monthpicker) | `MonthCalendar` |
| [`12247:8602`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8602) | [`dateCalendar`](#datecalendar) | `DateCalendar` |
| [`12247:8603`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8603) | [`periodCalendar`](#periodcalendar) | `PeriodCalendar` |
| [`12266:7051`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12266-7051) | [`time` (panel)](#time-panel) | `TimePanel` |
| [`12381:8083`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12381-8083) | [`moveContainer`](#movecontainer) | `DateMove` |
| [`12405:9022`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12405-9022) | [`toggle`](#toggle) | `Toggle` |

### 합성 (Composition — 단일 피그마 노드 없음)

| 합성 이름 | 구성 | Vue 컴포넌트 |
|---|---|---|
| `datePicker` | `dateInput` + `dateCalendar` | [`DatePicker`](#datepicker) |
| `datePeriodPicker` | `dateInput(period)` + `periodCalendar` | [`DatePeriodPicker`](#dateperiodpicker) |
| `timePicker` | `timeInput` + `time` (panel) | [`TimePicker`](#timepicker) |
| `mobileDatePicker` | `dateInput` + `dateCalendar(mobile)` | [`MobileDatePicker`](#mobiledatepicker) |
| `mobileDatePeriodPicker` | `dateInput(period)` + `periodCalendar(mobile)` | [`MobileDatePeriodPicker`](#mobiledateperiodpicker) |
| `mobileTimePicker` | `timeInput` + `timePicker(mobile)` | [`MobileTimePicker`](#mobiletimepicker) |
| `numberField` | `inputFrame` + `−` / `+` 버튼 | [`NumberField`](#numberfield) |
| `inputGroup` | `inputFrame` + addon 슬롯 묶음 | [`InputGroup`](#inputgroup) |

---

## Figma 변수 매핑 규칙 (전역)

피그마 Variable 은 upbox-ui CSS 변수 / Tailwind 유틸과 1:1 로 매핑된다. 각 컴포넌트 섹션의 `### Figma 변수` 표는 **그 노드에서 실제로 사용된 변수만** 추려놓은 것이고, 변환 규칙은 모두 아래 전역 표를 따른다.

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

### 타이포그래피

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

## standardButton

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3220:15782`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3220-15782) |
| Vue 컴포넌트 | `Button.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` | `variant` | `"primary" \| "destructive" \| "secondary" \| "tertiary"` | `"primary"` |
| `Theme` (Filled · Outline) | `theme` | `"filled" \| "outlined"` | `"filled"` |
| `Size` | `size` | `"xsmall" \| "small" \| "regular" \| "large" \| "xlarge"` | `"regular"` |
| `Disabled` | `disabled` | `boolean` | `false` |
| `state` (Enabled · Hovered · Pressed) | — (CSS `:hover` / `:active` 자동) | — | — |
| 본문 텍스트 | `default` slot | `VNode` / `string` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `loading` | `boolean` | `false` | 로딩 스피너 자동 노출, 클릭 무시 |
| `block` | `boolean` | `false` | 가로 100% |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | 네이티브 `type` |
| `class` | `string` | — | 추가 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `click` | `MouseEvent` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 본문 텍스트. 좌·우 아이콘은 슬롯 안에 `<lucide />` 직접 배치 |

### Code Example

```vue
<Button variant="primary" theme="filled" size="regular" @click="onSave">
  저장
</Button>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| `wrapper` (텍스트·아이콘 컨테이너) | `<button>` |
| 본문 텍스트 | `default` slot |
| `front icon` / `end icon` (boolean) | 슬롯 안에 `<lucide />` 직접 |
| 로딩 스피너 | `loading=true` 시 `Spinner` 자동 |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `CTA/primary` (`navy-80`) | primary filled 배경·border / outlined border·text | `bg-navy-80` / `border-navy-80` / `text-cta-primary` |
| `CTA/destructive` (`red-80`) | destructive filled / outlined | `bg-red-80` / `border-red-80` / `text-red-80` |
| `CTA/secondary` (`grey-60`) | secondary filled / outlined | `bg-grey-60` / `border-grey-60` / `text-grey-60` |
| `CTA/tertiary` (`grey-30`) | tertiary filled · outlined border | `bg-grey-30` / `border-grey-30` / `text-grey-70` |
| `primitive/grey-10` | filled 텍스트 (primary·destructive·secondary) / outlined 배경 | `text-grey-10` / `bg-grey-10` |
| `primitive/navy-{20,30,90,100}` | primary outlined hover/active bg · filled hover·active | `bg-navy-{20,30,90,100}` |
| `primitive/red-{20,30,90,100}` | destructive 변형 hover·active | `bg-red-{20,30,90,100}` |
| `primitive/grey-{20,30,40,50,70,80}` | tertiary·secondary hover·active·텍스트 | `bg-grey-{20,30,40,50}` / `text-grey-{70,80}` |
| `xsmall=24` / `small=32` / `regular=40` / `large=48` / `xlarge=56` | `size` 토큰별 높이 | `h-[{24\|32\|40\|48\|56}px]` |
| `padding/padding-{6,8,16}` | 사이즈별 좌우 padding | `px-[{6\|8\|16}px]` |
| 모서리 `3` (xsmall) / `4` (small 이상) | 둥글기 | `rounded-[3px]` / `rounded-[4px]` |
| `font-2xs(12)` / `sm(14)` / `font-base(16)` | 사이즈별 본문 폰트 | `text-size-{12\|14\|16}` |
| `font/weight/Bold` | 본문 폰트 굵기 | `font-bold` |

---

## textButton

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3223:13667`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3223-13667) |
| Vue 컴포넌트 | `TextButton.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` | `variant` | `"destructive" \| "secondary"` | `"secondary"` |
| `Size` | `size` | `"2xsmall" \| "xsmall" \| "small"` | `"small"` |
| `Status=disabled` | `disabled` | `boolean` | `false` |
| `Status=enabled` / `hovered` | — (CSS `:hover` 자동) | — | — |
| 본문 텍스트 | `default` slot | `VNode` / `string` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 추가 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `click` | `MouseEvent` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 본문 텍스트. 좌·우 아이콘은 슬롯 안에 `<lucide />` 직접 (사이즈 자동) |

### Code Example

```vue
<TextButton variant="destructive" size="xsmall" @click="onDelete">
  삭제
</TextButton>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| 외곽 (텍스트만, 배경 hover 전용) | `<button>` (`textButtonVariants`) |
| 본문 텍스트 | `default` slot |
| 좌·우 아이콘 | 슬롯 내부에 직접 배치 |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `status/fail, nagative` (`red-80`) | destructive 텍스트 | `text-red-80` |
| `primitive/red-20` | destructive hover 배경 | `hover:bg-red-20` |
| `primitive/grey-60` | secondary 텍스트 | `text-grey-60` |
| `primitive/grey-20` | secondary hover 배경 | `hover:bg-grey-20` |
| `2xsmall=20` / `xsmall=24` / `small=32` | 높이 | `h-[{20\|24\|32}px]` |
| `padding/padding-{2,4,8}` | 사이즈별 padding | `px-[4]` (`2xsmall`/`xsmall`) / `px-[8] py-[4]` (`small`) |
| `Body/body5-sb` (12/16) | `2xsmall` 본문 | `text-size-12` |
| `Body/body3-sb` (14/20) | `xsmall` 본문 | `text-size-14` |
| `Body/body1` (16/24) | `small` 본문 | `text-size-16` |
| `font/weight/Bold` | 본문 폰트 굵기 | `font-bold` |
| 모서리 `2` / `3` / `4` | 사이즈별 둥글기 | `rounded-[{2\|3\|4}px]` |

---

## iconButton

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3228:14621`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3228-14621) |
| Vue 컴포넌트 | `IconButton.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` | `variant` | `"primary" \| "destructive" \| "secondary" \| "tertiary"` | `"primary"` |
| `Size` | `size` | `"2xsmall" \| "xsmall" \| "small" \| "regular" \| "large" \| "xlarge"` | `"regular"` |
| `Disabled` | `disabled` | `boolean` | `false` |
| 아이콘 | `default` slot | `<lucide />` (사이즈 토큰 자동) | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 추가 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `click` | `MouseEvent` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 아이콘 자리. svg 사이즈는 `size` 에 맞춰 자동 적용 |

### Code Example

```vue
<IconButton variant="tertiary" size="small" @click="onClose">
  <X />
</IconButton>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| 외곽 (정사각형 + 배경 + radius) | `<button>` (`iconButtonVariants`) |
| 중앙 아이콘 자리 | `default` slot (`size-[12\|16\|20\|24]px` 자동) |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `primitive/blue-20` | primary 배경 | `bg-blue-20` (hover `blue-30`, active `blue-40`) |
| `primitive/red-20` | destructive 배경 | `bg-red-20` (hover `red-30`, active `red-40`) |
| `primitive/grey-20` | secondary 배경 | `bg-grey-20` (hover `grey-30`, active `grey-40`) |
| `primitive/grey-10` | tertiary 배경 | `bg-grey-10` (hover `grey-20`, active `grey-30`) |
| `primitive/grey-40` | tertiary border | `border-grey-40` |
| `2xsmall=20` ~ `xlarge=56` | 사각형 크기 + 내부 아이콘 크기 | `size-[{20\|24\|32\|40\|48\|56}px]` |
| 모서리 `2` / `3` / `4` | 사이즈별 둥글기 | `rounded-[{2\|3\|4}px]` |

---

## badge

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3540:25866`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3540-25866) |
| Vue 컴포넌트 | `Badge.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` | `variant` | `"neutral" \| "negative" \| "positive" \| "informative" \| "warning"` | `"neutral"` |
| `Tone` (filled 50% · filled 100% · outline) | `tone` | `"soft" \| "solid" \| "outline"` | `"soft"` |
| `Size` | `size` | `"3xsmall" \| "2xsmall" \| "xsmall"` | `"2xsmall"` |
| 모서리 둥글기 (pill) | `round` | `boolean` (`true` → `rounded-full`, `false` → `rounded-[3px]`) | `false` |
| 본문 텍스트 | `default` slot | `string` / `VNode` | — |
| 좌측 아이콘 (`size>=2xsmall`) | `icon` slot | `VNode` | — |
| 우측 카운트 칩 | `count` slot | `VNode` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 추가 클래스 |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 본문 텍스트 |
| `icon` | 좌측 아이콘 (size `xsmall`/`2xsmall` 만) |
| `count` | 우측 숫자 카운트 (원형 칩) |

### Code Example

```vue
<Badge variant="positive" tone="soft" size="xsmall">
  <template #icon><Check /></template>
  완료
</Badge>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| 외곽 (border + bg + radius + padding) | `<div>` (`badgeVariants`) |
| 좌측 아이콘 자리 (`size-[16px]`) | `icon` slot |
| 본문 텍스트 | `default` slot |
| 우측 숫자 카운트 (원형 칩) | `count` slot (`badgeCountVariants`) |

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
| `3xsmall=16` / `2xsmall=20` / `xsmall=24` | 사이즈별 높이 | `h-[{16\|20\|24}px]` |
| `padding/padding-04` / `padding-08` | `3xsmall` / `2xsmall`·`xsmall` 좌우 padding | `px-[4px]` / `px-[8px]` |
| `Body/body5-sb` (12/16) | `3xsmall`·`2xsmall` 본문 | `text-size-12 leading-[16px] font-semibold` |
| `Body/body3-sb` (14/20) | `xsmall` 본문 | `text-size-14 leading-[20px] font-semibold` |
| 모서리 `3` | 기본 모서리 둥글기 | `rounded-[3px]` |

---

## tag

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3570:25359`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3570-25359) |
| Vue 컴포넌트 | `Tag.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `State` | `state` | `"enabled" \| "disabled" \| "error"` | `"enabled"` |
| `Size` | `size` | `"3xsmall" \| "2xsmall" \| "xsmall" \| "small"` | `"small"` |
| 닫기(X) 버튼 노출 | `closable` | `boolean` | `false` |
| 본문 텍스트 | `default` slot | `string` / `VNode` | — |
| 좌측 배지 | `badge` slot | `VNode` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 추가 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `close` | `void` (닫기 버튼 클릭 시) |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 본문 텍스트 |
| `badge` | 좌측 배지 (`<Badge>` 등) |

### Code Example

```vue
<Tag state="enabled" size="small" closable @close="onClose">
  <template #badge><Badge variant="positive" size="3xsmall">N</Badge></template>
  검토중
</Tag>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| 외곽 (border + bg + padding) | `<div>` (`tagVariants`) |
| 좌측 배지 | `badge` slot |
| 본문 텍스트 | `default` slot |
| 우측 X 닫기 | `closable=true && state!=='disabled'` 시 자동 (`X` lucide) |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `primitive/grey-30` | `state=disabled` 배경 | `bg-grey-30` |
| `primitive/grey-80` | `state=disabled` 텍스트 | `text-grey-80` |
| `primitive/grey-90` | `state=enabled` border·텍스트 / 닫기 버튼 배경 | `border-grey-90` / `text-grey-90` / 닫기 `bg-grey-90` |
| `status/fail, nagative` | `state=error` border·텍스트 / 닫기 버튼 배경 | `border-red-80` / `text-red-80` / 닫기 `bg-red-80` |
| `3xsmall=16` / `2xsmall=20` / `xsmall=24` / `small=32` | 높이 | `h-[{16\|20\|24\|32}px]` |
| `padding/padding-08` | 좌우 padding (대부분 사이즈) | `px-[8px]` (`3xsmall` 만 `px-[4px]`) |
| `margin/margin-04` / `margin/margin-08` | 본문·아이콘 간 gap | `gap-[4px]` / `gap-[8px]` |
| `Body/body5-sb` (12/16) | `3xsmall`·`2xsmall` 본문 | `text-size-12 leading-[16px] font-semibold` |
| `Body/body3-sb` (14/20) | `xsmall`·`small` 본문 | `text-size-14 leading-[20px] font-semibold` |
| 모서리 `3` (3xsmall·2xsmall·xsmall) / `4` (small) | 모서리 둥글기 | `rounded-[3px]` / `rounded-[4px]` |
| 닫기 X 아이콘 크기 | 닫기 버튼 안의 X 크기 | `size-[14px]` (3xsmall·2xsmall·xsmall) / `size-[18px]` (small) |

---

## textField

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3429:16714`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3429-16714) |
| Vue 컴포넌트 | `TextField.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` (default · filled · bottomline) | `variant` | `"default" \| "filled" \| "bottomline"` | `"default"` |
| `Size` | `size` | `"small" \| "regular" \| "large"` | `"regular"` |
| `State=placeholder` | 빈 `v-model` + `placeholder` | — | — |
| `State=typed` | `v-model` 보유 | — | — |
| `State=focused` | — (내부 focus 자동) | — | — |
| `State=error` | `error` | `boolean` | — (form context fallback) |
| `State=disabled` | `disabled` | `boolean` | `false` |
| `State=readonly` | `readonly` | `boolean` | `false` |
| 값 | `v-model` | `string \| number` | — |
| 비밀번호 토글 (eye/eyeOff) | `password` | `boolean` | `false` |
| 우측 X 클리어 | `clearable` | `boolean` | `false` |
| 글자수 카운터 (`현재/최대`) | `default` slot 내부에 `<TextFieldCount>` | — | — |
| `<input maxlength>` | `maxLength` | `number` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `byteMode` | `boolean` | `false` | 카운터 byte 모드 |
| `type` | `string` | `"text"` | 네이티브 input type |
| `placeholder` | `string` | — | placeholder 텍스트 |
| `class` | `string` | — | 외곽 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `string \| number` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | trailing 영역 (`<TextFieldUnit>`, `<TextFieldCount>` 등 자식 배치) |

### Code Example

```vue
<TextField v-model="text" size="regular" :maxLength="50" clearable placeholder="이름">
  <TextFieldCount />
</TextField>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| frame (border + bg + padding) | `InputFrame` |
| 본문 입력 영역 | 내부 `<input>` (`flex-1 bg-transparent outline-none`) |
| 좌·우 아이콘 | `InputIcon` 슬롯 (자식으로 직접 배치) |
| 우측 X 클리어 버튼 | `clearable=true` 시 자동 (`X` lucide) |
| 우측 eye 토글 버튼 | `password=true` 시 자동 (`Eye` / `EyeOff` lucide) |
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
| `small=32` / `regular=40` / `large=48` | frame 높이 | `size="small\|regular\|large"` |
| `padding/padding-08` / `padding-12` / `padding-16` | 사이즈별 좌우 padding | `px-[{8\|12\|16}px]` |
| `margin/margin-{02,04,08}` | 내부 아이콘·텍스트 간격 | `gap-[{2\|4\|8}px]` |
| `Body/body5` / `body3` / `body1` | `small` / `regular` / `large` 본문 | `text-size-{12\|14\|16}` + `leading-[{16\|20\|24}px]` |
| `Caption/caption{2,3,4}` | 보조 caption | `text-size-{12\|10\|8}` |
| 모서리 `4` | 기본 모서리 둥글기 | `rounded-[4px]` |
| `xsmall=24` / `3xsmall=16` | 내부 아이콘·뱃지 크기 | `size-[24px]` / `size-[16px]` |

---

## textArea

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3429:25321`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3429-25321) |
| Vue 컴포넌트 | `Textarea.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` (코드 한정) | `variant` | `"default" \| "filled" \| "bottomline"` | `"default"` |
| `Size` | `size` | `"small" \| "regular" \| "large"` | — |
| `State=placeholder` | 빈 `v-model` + `placeholder` | — | — |
| `State=typed` | `v-model` 보유 | — | — |
| `State=focused` | — (내부 `focus-within` 자동) | — | — |
| `State=error` | `error` | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | — |
| `State=readonly` | `readonly` | `boolean` | — |
| 우하단 카운터 (`0/N`) | `counter` + `maxLength` | `boolean` / `number` | `counter=false` |
| 값 | `v-model` | `string \| number` | — |

> Figma 노드는 `default` variant 만 정의. 코드에는 `TextField` 와의 일관성을 위해 `filled` / `bottomline` variant 도 유지.

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `byteMode` | `boolean` | `false` | 카운터 byte 모드 |
| `autoResize` | `boolean` | `true` | 자동 높이 |
| `minHeight` | `number` | size 별 기본 (`small=72` · `regular=92` · `large=104`) | 최소 높이 (px) |
| `maxHeight` | `number` | `300` | 최대 높이 (px) |
| `rows` | `number` | `3` | `autoResize=false` 시 행 수 |
| `placeholder` | `string` | — | placeholder 텍스트 |
| `class` | `string` | — | 외곽 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `string \| number` |

### Slots

| Slot | 설명 |
|---|---|
| `footer` | 카운터 자리(footer) 커스터마이즈 |
| `default` | 그 외 추가 자식 |

### Code Example

```vue
<Textarea v-model="memo" size="regular" counter :maxLength="200" autoResize />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| frame (border + bg + padding) | `Textarea` 외곽 `<div>` (`textareaFrameVariants`) |
| 본문 입력 영역 | 내부 `<textarea>` (`block flex-1 resize-none`) |
| 우하단 카운터 | `TextareaCount` (`TEXTAREA_TRAILING_CONTEXT_KEY` inject) |
| 카운터 자리(footer) 커스터마이즈 | `footer` slot |

---

## searchField

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3498:25583`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3498-25583) |
| Vue 컴포넌트 | `SearchField.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` (basic · filter) | `variant` | `"basic" \| "filter"` | `"basic"` |
| `Size` | `size` | `"small" \| "regular" \| "large"` | `"regular"` |
| `State=placeholder` | 빈 `v-model` + `placeholder` | — | — |
| `State=typed` | `v-model` 보유 | — | — |
| `State=focused` | — (내부 focus 자동) | — | — |
| `State=error` | `error` | `boolean` | `false` |
| `State=disabled` | `disabled` | `boolean` | `false` |
| `State=readonly` | `readonly` | `boolean` | `false` |
| 값 | `v-model` | `string` | — |
| 좌측 필터 영역 (`variant=filter`) | `filter` slot | `VNode` | — |
| 우측 X 클리어 (`variant=basic`) | `clearable` | `boolean` | `true` |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `placeholder` | `string` | — | placeholder 텍스트 |
| `name` / `id` | `string` | — | 네이티브 input 속성 |
| `autofocus` | `boolean` | — | 마운트 시 포커스 |
| `class` | `string` | — | 외곽 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `string` |
| `submit` | `string` (Enter 시 현재 값) |
| `clear` | `void` (X 클리어 시) |

### Slots

| Slot | 설명 |
|---|---|
| `filter` | `variant=filter` 일 때 좌측 슬롯 (예: `<Select>` + `<SelectTrigger inline>`) |

### Code Example

```vue
<SearchField v-model="q" variant="filter" size="regular" @submit="search">
  <template #filter>
    <Select v-model="scope">
      <SelectTrigger inline><SelectValue placeholder="전체" /></SelectTrigger>
      <SelectContent>…</SelectContent>
    </Select>
  </template>
</SearchField>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| frame (border + bg + padding) | `InputFrame` |
| 좌측 search 아이콘 (`variant=basic`) | `InputIcon` + `Search` lucide |
| 좌측 필터 영역 (`variant=filter`) | `filter` slot + 세로 `bg-grey-40` 구분선 |
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
| `small=32` / `regular=40` / `large=48` | frame 높이 | `size="small\|regular\|large"` |
| `Body/body5` / `body3` / `body1` | 사이즈별 본문 폰트 | `text-size-{12\|14\|16}` + `leading-[{16\|20\|24}px]` |

---

## numberField

| 항목 | 값 |
|------|-----|
| Figma 노드 | — (합성: input frame + `−` / `+` 버튼) |
| Vue 컴포넌트 | `NumberField.vue` (monolithic) · `NumberFieldRoot` + 자식 (compound) |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant=center` (좌·우에 −/+ 분할) | `variant` | `"center"` | `"center"` |
| `Variant=side` (우측에 −/+ 묶음) | `variant` | `"side"` | — |
| `Size` | `size` | `"small" \| "regular" \| "large"` | `"regular"` |
| `State=placeholder` | 빈 `v-model` + `placeholder` | — | — |
| `State=typed` | `v-model` 보유 | — | — |
| `State=focused` | — (내부 focus 자동) | — | — |
| `State=error` | `error` | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | `false` |
| `State=readonly` | `readonly` | `boolean` | `false` |
| 값 | `v-model` | `number` | — |
| 최소·최대·step | `min` / `max` / `step` | `number` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `formatOptions` | `Intl.NumberFormatOptions` | — | 소수·단위·통화 등 포맷 |
| `placeholder` / `name` / `id` / `required` | — | — | 네이티브 input 속성 |
| `class` | `string` | — | 외곽 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `number` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | compound 사용 시 `NumberFieldInput` / `NumberFieldIncrement` / `NumberFieldDecrement` 직접 배치 |

### Code Example

```vue
<!-- monolithic (기본) -->
<NumberField v-model="count" variant="center" size="regular" :min="0" :max="99" />

<!-- compound (특수 합성용) -->
<NumberFieldRoot v-model="count" :min="0" :max="99">
  <NumberFieldContent>
    <NumberFieldDecrement />
    <NumberFieldInput />
    <NumberFieldIncrement />
  </NumberFieldContent>
</NumberFieldRoot>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| 외곽 root | `NumberFieldRoot` (reka-ui) |
| frame (border + bg) | `InputFrame` (`!px-0 overflow-hidden`) |
| `−` 버튼 | `NumberFieldDecrement` (`Minus` lucide) |
| 숫자 입력 | `NumberFieldInput` |
| `+` 버튼 | `NumberFieldIncrement` (`Plus` lucide) |
| `−` / `+` 사이의 세로 구분선 | `border-grey-40` (error 시 `border-red-80`) |

---

## inputGroup

| 항목 | 값 |
|------|-----|
| Figma 노드 | — (합성: input frame + addon 묶음) |
| Vue 컴포넌트 | `InputGroup.vue` |

> `inputGroup` 은 단일 입력 컴포넌트가 아니라 **input + addon (아이콘·버튼·텍스트) 조합용 외곽 frame** 이다. addon 위치는 `InputGroupAddon` 의 `align` prop 으로 지정.

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Size` | `size` | `"small" \| "regular" \| "large"` | `"regular"` |
| `State=error` | `error` | `boolean` | `false` |
| `State=disabled` | `disabled` | `boolean` | `false` |
| `State=readonly` | `readonly` | `boolean` | `false` |

### Vue 전용 Props (`InputGroupAddon`)

| Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `align` | `"inline-start" \| "inline-end" \| "block-start" \| "block-end"` | `"inline-start"` | addon 배치 위치 |
| `class` | `string` | — | 추가 클래스 |

### Slots

| Slot | 설명 |
|---|---|
| `default` | `InputGroupAddon` / `InputGroupInput` / `InputGroupTextarea` / `InputGroupButton` / `InputGroupText` 자유 배치 |

### Code Example

```vue
<InputGroup size="regular">
  <InputGroupAddon align="inline-start"><Search /></InputGroupAddon>
  <InputGroupInput v-model="q" placeholder="검색어" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton variant="primary">검색</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| frame (border + bg + padding) | `InputGroup` |
| 좌측 addon | `InputGroupAddon align="inline-start"` |
| 우측 addon | `InputGroupAddon align="inline-end"` |
| 상단 addon | `InputGroupAddon align="block-start"` |
| 하단 addon | `InputGroupAddon align="block-end"` |
| 본문 입력 (single line) | `InputGroupInput` (`<input>` raw) |
| 본문 입력 (multi line) | `InputGroupTextarea` (`<textarea>` raw) |
| addon 내부 텍스트 | `InputGroupText` |
| addon 내부 버튼 | `InputGroupButton` (variant·size 별도) |

---

## select

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3837:27148`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3837-27148) |
| Vue 컴포넌트 | `Select.vue` (root) + `SelectTrigger.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Size` | `size` | `"small" \| "regular" \| "large"` (현재 코드는 `regular` 만 노출) | — |
| `State=placeholder` | 빈 `v-model` + `<SelectValue placeholder="…">` | — | — |
| `State=typed` | `v-model` 보유 | — | — |
| `State=focused` | — (Picker 열림 시 자동) | — | — |
| `State=error` | (외곽 `InputFrame` 의 `error`) | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | — |
| `State=readonly` | — (현재 미노출) | — | — |
| 값 | `v-model` | `AcceptableValue` (reka-ui) | — |

### Vue 전용 Props (`SelectTrigger`)

| Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `inline` | `boolean` | `false` | 외부 frame(`SearchField` filter 슬롯, `InputGroup`) 안에서 이중 border 방지용 transparent 트리거 |
| `class` | `string` | — | 추가 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `AcceptableValue` |

### Slots

| Slot | 설명 |
|---|---|
| `default` (`Select`) | `SelectTrigger`, `SelectContent` 등 자식 배치 |
| `default` (`SelectTrigger`) | 트리거 본문 + `SelectValue` |

### Code Example

```vue
<Select v-model="value">
  <SelectTrigger><SelectValue placeholder="옵션 선택" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="a">A</SelectItem>
    <SelectItem value="b">B</SelectItem>
  </SelectContent>
</Select>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
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
| `primitive/grey-50` | placeholder · chevron 아이콘 | `text-grey-50` |
| `primitive/grey-90` | 선택값 텍스트 | `text-grey-90` |
| `primitive/blue-50` | focus ring | `ring-blue-50` |
| `primitive/blue-80` | focus border | `border-blue-80` |
| `status/fail, nagative` | error border | `border-red-80` |
| `small=32` / `regular=40` / `large=48` | trigger 높이 | `size="small\|regular\|large"` |
| `padding/padding-08` / `margin/margin-04` | 좌우 padding · 아이콘 간격 | `px-[8px]` / `gap-[4px]` |
| `Body/body5` / `body3` / `body1` | 사이즈별 텍스트 | `text-size-{12\|14\|16}` |

---

## toggle

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`12405:9022`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12405-9022) |
| Vue 컴포넌트 | `Toggle.vue` (reka-ui `SwitchRoot` + `SwitchThumb`) |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Size` | `size` | `"4xsmall" \| "3xsmall" \| "2xsmall"` | `"2xsmall"` |
| `State=on` | `v-model=true` (`data-state=checked`) | `boolean` | — |
| `State=off` | `v-model=false` (`data-state=unchecked`) | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | `false` |
| 값 | `v-model` | `boolean` | — |
| 라벨 텍스트 | `label` 또는 `label` slot | `string` | — |

> 이전의 별개 `Switch` 컴포넌트와 segmented 형태의 `Toggle` / `ToggleGroup` 은 모두 제거됨. on/off 시각화는 모두 `Toggle` 로 통합. N중 1택이 필요하면 `Tabs variant="box"` 사용.

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `name` / `value` / `id` / `required` | — | — | 네이티브 form 속성 |
| `asChild` / `as` | — | — | reka-ui slot 변환 |
| `class` | `string` | — | 외곽 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `boolean` |

### Slots

| Slot | 설명 |
|---|---|
| `label` | 커스텀 라벨 (string `label` prop 대체) |

### Code Example

```vue
<Toggle v-model="enabled" size="2xsmall" label="알림 받기" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| track (pill 배경) | `SwitchRoot` (`toggleTrackVariants`) |
| thumb (원형) | `SwitchThumb` (`toggleThumbVariants`) |
| 라벨 (선택) | `<span>` (`toggleLabelVariants`) |

### Figma 변수

| Figma 변수 | 의미 / 사용 위치 | upbox-ui 매핑 |
|------------|------------------|---------------|
| `CTA/primary` (`#264870`) | `state=on` track 배경 | `data-[state=checked]:bg-navy-80` |
| `primitive/navy-50` | `state=on` + `disabled` track 배경 | `disabled:data-[state=checked]:bg-navy-50` |
| `primitive/grey-40` | `state=off` track 배경 | `data-[state=unchecked]:bg-grey-40` |
| `primitive/grey-30` | `state=off` + `disabled` track 배경 | `disabled:bg-grey-30` |
| `primitive/grey-10` | thumb (원형) 배경 | `bg-grey-10` |
| `4xsmall=12` / `3xsmall=16` / `2xsmall=20` | track 높이 | `h-[{12\|16\|20}px]` |
| `padding/padding-02` | thumb ↔ track 내부 여백 | `translate-x-[2px]` (off) |

---

## datePicker

| 항목 | 값 |
|------|-----|
| Figma 합성 | `dateInput` ([`3619:27807`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3619-27807), `variant=date`) + `dateCalendar` ([`12247:8602`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8602)) |
| Vue 컴포넌트 | `DatePicker.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` (input frame) | `variant` | `"default" \| "filled" \| "bottomline"` | — |
| `Size` | `size` | `"small" \| "regular" \| "large"` | — |
| `State=placeholder` | 빈 `v-model` | — | — |
| `State=typed` | `v-model` 보유 | — | — |
| `State=focused` | — (내부 focus 자동) | — | — |
| `State=error` | `error` (또는 `DateInput` draft error) | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | — |
| `State=readonly` | `readonly` | `boolean` | — |
| 날짜 값 | `v-model` | `CalendarDate \| null` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 입력 영역 외곽 클래스 |
| `popoverContentClass` | `string` | — | 팝업 영역 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `CalendarDate \| null` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 트리거 안 입력 영역. 미지정 시 `DateInput` 자동 |

### Code Example

```vue
<DatePicker v-model="date" size="regular" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| input frame | `DateTrigger` |
| date input text | `default` slot → `DateInput` |
| calendar icon | `DateTrigger` 내부 `PopoverTrigger` 버튼 |
| calendar popup | `PopoverContent` |
| date calendar panel | `DateCalendar` |

---

## datePeriodPicker

| 항목 | 값 |
|------|-----|
| Figma 합성 | `dateInput` (`variant=period`) + `periodCalendar` ([`12247:8603`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8603)) |
| Vue 컴포넌트 | `DatePeriodPicker.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` | `variant` | `"default" \| "filled" \| "bottomline"` | — |
| `Size` | `size` | `"small" \| "regular" \| "large"` | — |
| `State=error` | `error` (또는 `DatePeriodInput` draft error) | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | — |
| `State=readonly` | `readonly` | `boolean` | — |
| 시작 placeholder | `startPlaceholder` | `string` | `"YYYY-MM-DD"` |
| 종료 placeholder | `endPlaceholder` | `string` | `"YYYY-MM-DD"` |
| 기간 값 | `v-model` | `{ start: CalendarDate \| null, end: CalendarDate \| null }` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 입력 영역 외곽 클래스 |
| `popoverContentClass` | `string` | — | 팝업 영역 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `DatePeriodValue \| null` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 트리거 영역. 미지정 시 `DatePeriodInput` 자동 |

### Code Example

```vue
<DatePeriodPicker v-model="range" size="regular" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| period input frame | `DatePeriodTrigger` |
| start / arrow `→` / end | `DatePeriodInput` |
| calendar icon | `DatePeriodTrigger` 내부 `PopoverTrigger` 버튼 |
| calendar popup | `PopoverContent` |
| period calendar panel | `PeriodCalendar` |

---

## dateInput

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3619:27807`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3619-27807) |
| Vue 컴포넌트 | `DateInput` / `DatePeriodInput` (Picker 내부에 자동 포함) |

> 피그마의 `dateInput` 은 코드에서 항상 Picker (`DatePicker` / `DatePeriodPicker` / 모바일 변형) 로 매핑된다. 단독 `DateInput` / `DatePeriodInput` 은 Picker 의 슬롯 커스터마이즈가 필요할 때만 직접 사용.

### Props 매핑

| Figma 프로퍼티 | Vue 매핑 | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant=date` | `DatePicker` / `MobileDatePicker` (기본 슬롯에 `DateInput`) | — | — |
| `Variant=period` | `DatePeriodPicker` / `MobileDatePeriodPicker` (내부에 `DatePeriodInput`) | — | — |
| `Size` | (Picker `size`) `"small" \| "regular" \| "large"` | — | — |
| `State=*` | (Picker 와 동일) | — | — |
| date 입력 폭 (기준) | — | `160px` | — |
| period 입력 폭 (기준) | — | `340px` | — |

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| date input text | `DatePicker` 기본 슬롯 → `DateInput` |
| period start text | `DatePeriodInput` → 첫 번째 `DateInput` |
| period arrow | `DatePeriodInput` → 구분 텍스트 `→` |
| period end text | `DatePeriodInput` → 두 번째 `DateInput` |

---

## moveContainer

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`12381:8083`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12381-8083) |
| Vue 컴포넌트 | `DateMove.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Size` | `size` | `"small" \| "regular" \| "large"` | — |
| `Variant` | `variant` | `"default" \| "filled" \| "bottomline"` | — |
| `State=error` | `error` | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | — |
| `State=readonly` | `readonly` | `boolean` | — |
| 이동 대상 값 | `v-model` | `CalendarDate \| DatePeriodValue \| null` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 외곽 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `CalendarDate \| DatePeriodValue \| null` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 중앙 입력 영역. 미지정 시 `DatePicker`, 필요 시 `DatePeriodPicker` 직접 배치 |

### Code Example

```vue
<DateMove v-model="d" size="regular">
  <DatePicker v-model="d" />
</DateMove>
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| 이전 연 | `IconButton` + `ChevronsLeft` |
| 이전 월 | `IconButton` + `ChevronLeft` |
| 중앙 입력 | `default` slot |
| 다음 월 | `IconButton` + `ChevronRight` |
| 다음 연 | `IconButton` + `ChevronsRight` |

---

## dateCalendar

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`12247:8602`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8602) |
| Vue 컴포넌트 | `DateCalendar.vue` (`Calendar` 는 동일 파일 별칭) |
| 웹 기준 크기 | `256 × 360` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| 날짜 값 | `v-model` | `CalendarDate \| null` | — |
| 빠른 기간 (1·3·6개월·1년) | `showQuickPresets` | `boolean` | `true` |
| 푸터 (초기화·완료) | `showFooter` | `boolean` | `true` |
| 로케일 / 주 시작 등 | `locale` / `weekStartsOn` / 기타 `CalendarRootProps` | `string` / `number` / … | `"ko-KR"` / `1` |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `placeholder` | `CalendarDate` | — | 초기 표시 월 |
| `class` | `string` | — | 외곽 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `CalendarDate \| null` |
| `update:placeholder` | `CalendarDate` |
| `change` | `Date \| null` |
| `reset` | `void` |

### Slots

| Slot | 설명 |
|---|---|
| `reset` | 초기화 영역 (기본 footer 의 reset 버튼 자리) |
| `done` | 완료 영역 (기본 footer 의 done 버튼 자리) |

### Code Example

```vue
<DateCalendar v-model="d" :showQuickPresets="false" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| header / month move | `CalendarHeader` |
| date grid | `CalendarDateGrid` → `CalendarGrid` |
| day cell | `CalendarCell` + `CalendarCellTrigger` (`32px`) |
| selected day cell | `date` 노드 `12242:5467` → `variant=selected, size=small` → `getCalendarDateCellTriggerClass()` |
| quick preset | `CalendarShortcut` |
| footer | `CalendarFooter` |

---

## periodCalendar

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`12247:8603`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8603) |
| Vue 컴포넌트 | `PeriodCalendar.vue` |
| 웹 기준 크기 | `512 × 408` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| 범위 값 | `v-model` | `DateRange` (reka-ui) | — |
| 한 화면에 보이는 달 개수 | `numberOfMonths` | `number` | `2` |
| 빠른 기간 | `showQuickPresets` | `boolean` | `true` |
| 푸터 | `showFooter` | `boolean` | `true` |
| 로케일 / 주 시작 등 | `locale` / `weekStartsOn` / 기타 `RangeCalendarRootProps` | `string` / `number` / … | `"ko-KR"` / `1` |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `DateRange` |
| `change` | `{ first: Date \| null; last: Date \| null }` |
| `reset` | `void` |

### Slots

| Slot | 설명 |
|---|---|
| `reset` | `{ onReset }` 스코프 — 커스텀 초기화 버튼 |
| `done` | `{ onDone }` 스코프 — 커스텀 완료 버튼 |

### Code Example

```vue
<PeriodCalendar v-model="range" :numberOfMonths="2" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
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

## monthPicker

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`12247:8599`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8599) |
| Vue 컴포넌트 | `MonthCalendar.vue` |
| 웹 기준 크기 | `256 × 184` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| 월 값 | `v-model` | `CalendarDate \| null` (일은 항상 1) | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 패널 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `CalendarDate \| null` |
| `done` | `void` |

### Code Example

```vue
<MonthCalendar v-model="month" @done="onPick" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| year header / year move | `CalendarMonthGrid` |
| month grid | `CalendarMonthGrid` |
| this month / done footer | `MonthCalendar` 내부 footer |
| year picker view | `CalendarYearGrid` |

---

## timePicker

| 항목 | 값 |
|------|-----|
| Figma 합성 | `timeInput` ([`3623:26811`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3623-26811)) + `time` panel ([`12266:7051`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12266-7051)) |
| Vue 컴포넌트 | `TimePicker.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` (input frame) | `variant` | `"default" \| "filled" \| "bottomline"` | — |
| `Size` | `size` | `"small" \| "regular" \| "large"` | — |
| `State=error` | `error` (또는 `TimeInput` draft error) | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | — |
| `State=readonly` | `readonly` | `boolean` | — |
| 시각 값 | `v-model` | `Time \| null` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 입력 영역 외곽 클래스 |
| `popoverContentClass` | `string` | — | 팝업 영역 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `Time \| null` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 트리거 영역. 미지정 시 `TimeInput` 자동 |

### Code Example

```vue
<TimePicker v-model="t" size="regular" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| input frame | `TimeTrigger` |
| time input | `default` slot → `TimeInput` |
| clock icon | `TimeTrigger` 내부 `PopoverTrigger` 버튼 |
| time popup | `PopoverContent` |
| time panel | `TimePanel` |

---

## timeInput

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`3623:26811`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=3623-26811) |
| Vue 컴포넌트 | `TimeInput` (Picker 내부) |

> 피그마의 `timeInput` 은 코드에서 항상 Picker (`TimePicker` / `MobileTimePicker`) 로 매핑된다. 단독 `TimeInput` 은 Picker 슬롯 커스터마이즈가 필요할 때만.

### Props 매핑

| Figma 프로퍼티 | Vue 매핑 | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant=time` | `TimePicker` / `MobileTimePicker` (기본 슬롯에 `TimeInput`) | — | — |
| `Variant=timeRange` | (미구현 — 추후 `TimePeriodPicker.vue`) | — | — |
| `Size=32px \| 40px \| 48px` | (Picker `size`) `"small" \| "regular" \| "large"` | — | — |
| `State=*` | (Picker 와 동일) | — | — |
| time 입력 폭 (기준) | — | `160px` | — |

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| time input text (`오전 09:00`) | `TimePicker` 기본 슬롯 → `TimeInput` |
| clock icon | `TimeTrigger` 내부 `PopoverTrigger` 버튼 |

---

## time (panel)

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`12266:7051`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12266-7051) |
| Vue 컴포넌트 | `TimePanel.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `State=placeholder` | 빈 `modelValue` | — | — |
| `State=focused` | — (입력 중 자동) | — | — |
| `State=disabled` | `선택 안함` 체크 시 시·분·AM/PM 비활성 | — | — |
| 선택 안함 체크박스 노출 | `showSkip` | `boolean` | `true` |
| 완료 버튼 노출 | `showFooter` | `boolean` | `true` |
| 시각 값 | `v-model` | `Time \| null` | `null` |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 패널 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `Time \| null` |
| `change` | `Time \| null` (완료 시) |

### Code Example

```vue
<TimePanel v-model="t" :showSkip="false" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| 시 입력 | 직접 `<input>` (panel 내부, 12h `1~12`) |
| `:` 구분 | 텍스트 |
| 분 입력 | 직접 `<input>` (panel 내부, `0~59`) |
| AM/PM 세로 토글 | 직접 `<button>` 2개 (panel 내부) |
| 선택 안함 | `Checkbox` (size=small) |
| 완료 | `Button` (variant=primary, size=small) |

---

## mobileDatePicker

| 항목 | 값 |
|------|-----|
| Figma 합성 | `dateInput(variant=date)` + `dateCalendar` (mobile) ([`12247:8592`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8592)) |
| Vue 컴포넌트 | `MobileDatePicker.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` | `variant` | `"default" \| "filled" \| "bottomline"` | — |
| `Size` | `size` | `"small" \| "regular" \| "large"` | — |
| `State=error` | `error` (또는 `DateInput` draft error) | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | — |
| `State=readonly` | `readonly` | `boolean` | — |
| 날짜 값 | `v-model` | `CalendarDate \| null` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 외곽 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `CalendarDate \| null` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 트리거 영역. 미지정 시 `DateInput` 자동 |

### Code Example

```vue
<MobileDatePicker v-model="d" size="regular" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| input frame | `MobileDateTrigger` |
| date input | `default` slot → `DateInput` |
| calendar icon | `MobileDateTrigger` 내부 `DrawerTrigger` 버튼 |
| calendar popup | `Drawer` + `DrawerContent` |
| date calendar panel | `MobileDateCalendar` |

---

## mobileDatePeriodPicker

| 항목 | 값 |
|------|-----|
| Figma 합성 | `dateInput(variant=period)` + `periodCalendar` (mobile) ([`12247:8094`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8094)) |
| Vue 컴포넌트 | `MobileDatePeriodPicker.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` | `variant` | `"default" \| "filled" \| "bottomline"` | — |
| `Size` | `size` | `"small" \| "regular" \| "large"` | — |
| `State=error` | `error` (또는 `DatePeriodInput` draft error) | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | — |
| `State=readonly` | `readonly` | `boolean` | — |
| 시작 placeholder | `startPlaceholder` | `string` | `"YYYY-MM-DD"` |
| 종료 placeholder | `endPlaceholder` | `string` | `"YYYY-MM-DD"` |
| 기간 값 | `v-model` | `DatePeriodValue \| null` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 외곽 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `DatePeriodValue \| null` |

### Code Example

```vue
<MobileDatePeriodPicker v-model="range" size="regular" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| period input frame | `MobileDatePeriodTrigger` |
| start / arrow / end | `DatePeriodInput` |
| calendar icon | `MobileDatePeriodTrigger` 내부 `DrawerTrigger` 버튼 |
| calendar popup | `Drawer` + `DrawerContent` |
| period calendar panel | `MobilePeriodCalendar` |
| 저장 (validation 필요) | `#done` slot — `Button variant=primary size=xlarge` (`saveDisabled` 시 비활성) |

---

## mobileTimePicker

| 항목 | 값 |
|------|-----|
| Figma 합성 | `timeInput` + `timePicker(mobile)` ([`12247:8598`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8598)) |
| Vue 컴포넌트 | `MobileTimePicker.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant` | `variant` | `"default" \| "filled" \| "bottomline"` | — |
| `Size` | `size` | `"small" \| "regular" \| "large"` | — |
| `State=error` | `error` (또는 `TimeInput` draft error) | `boolean` | — |
| `State=disabled` | `disabled` | `boolean` | — |
| `State=readonly` | `readonly` | `boolean` | — |
| 드로어 제목 | `title` | `string` | `"시간 선택"` |
| 시각 값 | `v-model` | `Time \| null` | — |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 입력 영역 외곽 클래스 |
| `drawerContentClass` | `string` | — | 드로어 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `Time \| null` |

### Slots

| Slot | 설명 |
|---|---|
| `default` | 트리거 영역. 미지정 시 `TimeInput` 자동 |

### Code Example

```vue
<MobileTimePicker v-model="t" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| input frame | `MobileTimePicker` 외곽 `InputFrame` |
| time input | `default` slot → `TimeInput` |
| clock icon | 외곽 `<button>` + `Clock` (드로어 트리거) |
| time popup | `Drawer` + `DrawerContent` |
| time dial | `MobileTimeDial` |

---

## dateCalendar (mobile)

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`12247:8592`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8592) |
| Vue 컴포넌트 | `MobileDateCalendar.vue` |
| 모바일 기준 크기 | `360 × 464` (상단 라운드 `16/16/0/0`) |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| 날짜 값 | `v-model` | `CalendarDate \| null` | — |
| 푸터 (초기화·저장) | `showFooter` | `boolean` | `true` |
| 로케일 / 주 시작 등 | `locale` / `weekStartsOn` / 기타 `CalendarRootProps` | `string` / `number` / … | `"ko-KR"` / `1` |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `placeholder` | `CalendarDate` | — | 초기 표시 월 |
| `class` | `string` | — | 외곽 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `CalendarDate \| null` |
| `update:placeholder` | `CalendarDate` |
| `change` | `Date \| null` |
| `reset` | `void` |

### Slots

| Slot | 설명 |
|---|---|
| `reset` | 초기화 영역 |
| `done` | 저장 영역 |

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
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

## periodCalendar (mobile)

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`12247:8094`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8094) |
| Vue 컴포넌트 | `MobilePeriodCalendar.vue` |
| 모바일 기준 크기 | `360 × 824` (상단 라운드 `16/16/0/0`, 두 달 세로 스택) |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| 범위 값 | `v-model` | `DateRange` (reka-ui) | — |
| 한 화면에 보이는 달 개수 | `numberOfMonths` | `number` | `2` |
| 푸터 (초기화·저장) | `showFooter` | `boolean` | `true` |
| 로케일 / 주 시작 등 | `locale` / `weekStartsOn` / 기타 `RangeCalendarRootProps` | `string` / `number` / … | `"ko-KR"` / `1` |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `DateRange` |
| `update:placeholder` | `DateValue` |
| `update:startValue` | `DateValue \| undefined` |
| `change` | `{ first: Date \| null; last: Date \| null }` |
| `reset` | `void` |

### Slots

| Slot | 설명 |
|---|---|
| `reset` | 초기화 영역 |
| `done` | 저장 영역 |

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
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

## timePicker (mobile)

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`12247:8598`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-8598) |
| Vue 컴포넌트 | `MobileTimeDial.vue` |
| 모바일 기준 크기 | `360 × 320` (상단 라운드 `16/16/0/0`) |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| 시각 값 | `v-model` | `Time \| null` | `null` |
| 헤더 제목 | `title` | `string` | `"시간 선택"` |
| 닫기 버튼 노출 | `showClose` | `boolean` | `true` |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 패널 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `Time \| null` |
| `change` | `Time \| null` (저장 / 선택 안함 양쪽) |
| `close` | `void` |

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| 헤더 제목 + 닫기 X | 인라인 `<header>` + `X` 아이콘 버튼 |
| AM/PM 컬럼 (오전·오후) | 휠 컬럼 #1 (스크롤 스냅) |
| 시 컬럼 (1~12, 12h 표기) | 휠 컬럼 #2 (스크롤 스냅) |
| 분 컬럼 (00~59) | 휠 컬럼 #3 (스크롤 스냅) |
| 선택 행 강조 배경 | 가운데 절대 배치 `bg-blue-20` |
| 선택 안함 (tertiary outlined) | `Button variant=tertiary theme=outlined size=xlarge` |
| 저장 (primary) | `Button variant=primary theme=filled size=xlarge` |

---

## mobileDatePeriodSelector

| 항목 | 값 |
|------|-----|
| Figma 노드 | [`12247:7978`](https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/?node-id=12247-7978) (`periodInput`, mobile) |
| Vue 컴포넌트 | `MobileDatePeriodSelector.vue` |

### Props 매핑

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값 | 기본값 |
|---|---|---|---|
| `Variant=fixed` (1·3개월·1년) | `preset` | `"1m" \| "3m" \| "1y"` (또는 `modelValue` 자동 감지) | — |
| `Variant=select` (직접 설정) | `preset` | `"custom"` | — |
| 기간 값 | `v-model` | `DatePeriodValue \| null` | `null` |
| 토글 활성 프리셋 | `v-model:preset` | `"1m" \| "3m" \| "1y" \| "custom"` | — |
| 헤더 제목 | `title` | `string` | `"조회기간 설정"` |
| 닫기 버튼 노출 | `showClose` | `boolean` | `true` |
| 시작 placeholder (`select`) | `startPlaceholder` | `string` | `"시작일 선택"` |
| 종료 placeholder (`select`) | `endPlaceholder` | `string` | `"종료일 선택"` |
| 완료 버튼 텍스트 | `doneText` | `string` | `"선택 완료"` |

### Vue 전용 Props

| Vue Prop | 타입 | 기본값 | 설명 |
|---|---|---|---|
| `class` | `string` | — | 패널 클래스 |

### Events

| 이벤트 | 페이로드 |
|---|---|
| `update:modelValue` | `DatePeriodValue \| null` |
| `update:preset` | `DatePeriodPreset` |
| `done` | `DatePeriodValue` |
| `close` | `void` |

### Code Example

```vue
<MobileDatePeriodSelector v-model="range" v-model:preset="preset" @done="apply" />
```

### 하위 구조

| 피그마 노드 | Vue 구조 |
|---|---|
| 헤더 제목 + 닫기 X | 인라인 `<header>` + `X` 아이콘 버튼 |
| 프리셋 토글 (1·3개월·1년·직접 설정) | `ToggleGroup` (`type=single`) + `ToggleGroupItem` × 4 (세그먼티드) |
| 합본 기간 표시 (`variant=fixed`) | `InputFrame size=large readonly` + `시작 → 종료` 텍스트 + `Calendar` 아이콘 |
| 두 입력 필드 (`variant=select`) | `MobileDatePicker` × 2 (각각 `DateInput` 슬롯) |
| 완료 버튼 | `Button variant=primary size=large block` |

---

문서 변경 시 **피그마 열**은 Figma 우측 Properties (또는 변형 이름) 를 그대로 옮긴다. 디자인이 바뀌면 같은 행만 갱신한다.
