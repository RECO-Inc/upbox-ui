# Upbox UI - Design System Component Library

Vue 3 컴포넌트 라이브러리. Figma 디자인 시스템을 코드로 구현한다.

## Tech Stack

- Vue 3 (Composition API, `<script setup>`)
- TypeScript
- Tailwind CSS 4 (`@tailwindcss/vite` 플러그인 방식)
- class-variance-authority (CVA) for variant styling
- reka-ui (headless UI primitives)
- Vite (library mode build)
- Storybook 10

## Project Structure

```
src/
├── components/     # UI 컴포넌트 (button, input, sidebar, etc.)
├── docs/           # 디자인 토큰 문서 (Storybook용 Vue 컴포넌트)
├── lib/            # 유틸리티 (cn 함수 등)
├── style.css       # Tailwind base + 토큰 CSS 변수 (빌드 포함)
├── tokens.css      # 디자인 토큰 CSS 변수 (Storybook용)
└── index.ts        # 라이브러리 엔트리
```

## Design Token Architecture

Figma 디자인 시스템 GENERAL 페이지 기반. 3-layer 구조:

### 1. Primitive Tokens (tokens.css, style.css)

CSS 변수로 정의. Figma 색상 이름 그대로 사용:

| Figma 팔레트 | CSS 변수 패턴 | Tailwind 클래스 |
|-------------|-------------|----------------|
| Grey | `--color-grey-{10-100}` | `bg-grey-80`, `text-grey-60` |
| Navy | `--color-navy-{20-100}` | `bg-navy-80`, `text-navy-100` |
| Blue | `--color-blue-{20-100}` | `bg-blue-80`, `text-blue-60` |
| Green | `--color-green-{20-100}` | `bg-green-80`, `text-green-70` |
| Red | `--color-red-{20-100}` | `bg-red-80`, `text-red-70` |
| Orange | `--color-orange-{20-100}` | `bg-orange-80`, `text-orange-60` |

#### Naming Convention History

색상 네이밍이 Figma 기준으로 변경됨 (2026-03):

| Before | After (Figma) |
|--------|--------------|
| `base` | `grey` |
| `primary` | `navy` |
| `info` | `blue` |
| `positive` | `green` |
| `error` | `red` |
| `warning` | `orange` |

CSS 변수, Tailwind 클래스, 컴포넌트 코드 모두 변경 완료.

### 2. Semantic Tokens (tokens.css, style.css)

Primitive를 참조하는 의미 기반 토큰:

**CTA (행동):**
- `--color-cta-primary` → navy-80 (핵심 행동)
- `--color-cta-destructive` → red-80 (파괴적 행동)
- `--color-cta-secondary` → grey-60 (보조 행동)
- `--color-cta-tertiary` → grey-30 (최소 행동, ghost)

**Label:** `--color-label-{1,2}` → grey-60, grey-90
**Background:** `--color-bg-{1,2}` → grey-20, grey-30
**Status:** `--color-status-{informative,positive,negative,warning}` → blue/green/red/orange-80

**Spacing:** `--space-{2,4,6,8,12,16,20,24,28,32,36,40,48,56,64,80,112}`
**Shadow:** `--shadow-{small,regular,medium,large}`

### 3. Tailwind Preset (tailwind-preset.mjs / .cjs)

모든 토큰을 Tailwind 유틸리티로 매핑. 컨슈머 프로젝트에서 preset으로 import:

```js
// 컨슈머 프로젝트의 tailwind.config.js
import preset from '@reco-inc/upbox-ui/tailwind-preset'
export default { presets: [preset] }
```

## Consumer Projects

이 라이브러리를 사용하는 프로젝트 (모두 Tailwind v4):

| 프로젝트 | Tailwind | 비고 |
|---------|---------|------|
| Upbox-2.0-Front-Boilerplate | v4 (`@tailwindcss/vite` ^4.2) | `@theme` 정의 + `@source`로 dist 스캔 |
| Upbox-2.0-Customer-Report | v4 (`@tailwindcss/vite` ^4.2) | 동일 |
| Upbox-2.0-Front-Application | v4 (`@tailwindcss/vite` ^4.2) | 동일 |

### Tailwind v4 컨슈머 주의사항

Tailwind v4는 `@theme` 블록에 색상이 등록되어야 유틸리티가 생성됨. upbox-ui의 CSS 변수(`tokens.css`)만으로는 v4 유틸리티가 자동 생성되지 않으므로, 컨슈머의 CSS 엔트리(예: `style.css`)에서 `@theme`에 `--color-grey-*` 등을 직접 정의하고 `@source '../node_modules/@reco-inc/upbox-ui/dist/**/*.{js,mjs}'`로 dist JS의 클래스 문자열을 스캔해야 함.

`tailwind-preset.mjs`는 과거 v3 컨슈머용이며 현재 v4 컨슈머는 사용하지 않음.

## Build & Development

```bash
npm run build          # dist/ 빌드 (라이브러리)
npm run storybook      # Storybook 개발 서버
npm run build-storybook # Storybook 정적 빌드
```

## Storybook 구조

- `src/components/*/**.stories.ts` — 컴포넌트 스토리
- `src/docs/*Tokens.vue` + `*.stories.ts` — 디자인 토큰 문서 (Tokens/ 카테고리)
- `.storybook/preview.ts`에서 `tokens.css` import
- MDX는 Storybook 10 + Vue에서 `@storybook/addon-docs/blocks` 사용 필요 (`@storybook/blocks` 아님)

## Key Patterns

- 컴포넌트 variant는 CVA (`class-variance-authority`)로 정의
- 색상은 항상 CSS 변수 → Tailwind preset → 유틸리티 클래스 체인으로 사용
- `dist/`는 git에 포함 (GitHub 직접 참조 방식 배포)
- 빌드 시 Tailwind 유틸리티는 포함되지 않음 (컨슈머에서 처리)

### Picker compound 패턴 (`DatePicker`, `DatePeriodPicker`, `TimePicker` …)

- 외곽 wrapper(`*Picker.vue`)가 `defineModel` 로 값을 보관하고, `provide` 로 자식에 모델/draftError를 내려준다
  - 컨텍스트 키는 `<picker>Context.ts` 에 분리한다 (`DATE_PICKER_CTX_KEY`, `TIME_PICKER_CTX_KEY` …)
- 입력 자식(`*Input.vue`)은 `inject` 로 컨텍스트를 받고, 컨텍스트가 없으면 자체 `defineModel` 로 standalone 동작한다
- 트리거 자식(`*Trigger.vue`)은 `InputFrame` 을 감싸고 `PopoverTrigger` 를 슬롯과 함께 둔다
- 팝업 자식(`*Panel.vue` / 캘린더 등)은 wrapper 가 `panelDraft` 로 보관하다가 완료 이벤트 시점에만 모델에 반영한다
- `InputFrameDesignProps` (`size`/`variant`/`error`/`readonly`/`disabled`)는 wrapper 가 `useInputFrameInjectProvide` 로 한 번만 주입하고, 자식들은 inject 만 받는다
- 새 Picker 를 만들 때는 `date-picker/` 디렉터리 구조를 그대로 본따고 모델 타입만 갈아끼우는 것을 기본으로 한다

### Mobile Picker 변형 (`MobileDateCalendar`, `MobileTimeDial`, `MobileTimePicker` …)

- 모바일 변형은 데스크톱과 **같은 입력 컴포넌트**(`TimeInput` 등)와 **같은 컨텍스트 키**를 공유한다. 컨슈머가 입력부 코드를 두 벌 갖지 않게 한다.
- 데스크톱 `*Panel` ↔ 모바일 `*Dial` / `Mobile*Calendar` 가 동일 모델 타입을 받는다 (값을 갈아끼우는 것만 다르다).
- 데스크톱은 `Popover` + `*Panel`, 모바일은 `Drawer` + `*Dial` 을 쓰고, wrapper 단에서 `panelDraft` / `dialDraft` 로 임시값을 보관한다.
- 모바일 패널은 `360px` 폭 + 상단 라운드 `16` 를 기본으로 한다 (`rounded-t-[16px]`).
- 휠/스크롤 스냅 패널은 ITEM 높이 상수를 한 군데서 관리하고, 가운데 행이 선택값(절대 배치 배경 강조).

## FigmaConnect.md 작성 규칙

`FigmaConnect.md`는 **피그마 컴포넌트 속성(또는 변형 이름)과 Vue 컴포넌트의 `prop` / 이벤트 / `v-model`을 일치시키기 위한 매핑 문서**다. 동작 설명이나 구현 디테일은 넣지 않는다.

### 구조

- 최상단에 목적 한 줄 + Figma 파일 / 라이브러리 메타 표
- 메타 표 바로 아래 **`## 인덱스`** — 피그마 노드 ID ↔ 컴포넌트 매핑 표. 노드 ID 오름차순. 단일 노드가 없는 합성 컴포넌트는 인덱스에서 제외하고 안내 문구로 분리.
- 컴포넌트 단위로 `## <figmaComponentName>` 섹션을 만든다 (피그마 컴포넌트 이름 그대로, camelCase)
- 각 섹션은 두 개의 표로 구성:
  1. **속성 매핑 표** — `| 피그마 | Vue |` 두 컬럼. 첫 행에 `노드 <id>` 또는 컴포넌트 식별자, 그 아래로 variant·state·size 등 속성 행
  2. **`### 하위 구조` 표** — 피그마 내부 노드 구조 ↔ Vue 하위 컴포넌트/슬롯 매핑
- 섹션 사이에는 `---` 구분선

### 작성 원칙

- **피그마 열**은 Figma 우측 Properties 패널의 변형/속성 이름을 그대로 쓴다 (`variant=date`, `state=focused` 등)
- **Vue 열**은 prop 이름, 컴포넌트 파일명, `v-model`, 슬롯명, 이벤트(`@done`) 등 코드에서 그대로 쓰이는 식별자를 쓴다
- 동작·로직·렌더링 분기 설명은 넣지 않는다. 매핑만.
- 디자인이 바뀌면 **같은 행만 갱신**한다. 새 속성이 추가되면 행을 추가하고, 사라지면 제거.
- 노드 ID(`12247:8602`)는 피그마 원본을 추적하기 위한 것이므로 유지한다.
- 표 안에서 `|`나 `\|`가 필요한 값(예: `small \| regular \| large`)은 백슬래시 이스케이프.
- **인덱스 동기화** — 컴포넌트(섹션) 추가·삭제·이름 변경·노드 ID 변경이 발생하면 `## 인덱스` 표도 같은 PR 안에서 함께 갱신한다. 본문 섹션과 인덱스가 어긋나면 안 된다.

## Component Conventions

### Props 타입 패턴

`defineProps<{ x?: VariantProps["x"] }>()` 같은 **인덱스드 액세스 타입**은 Storybook autodocs(vue-component-meta)가 풀어내지 못해서 Description 컬럼에 `TSIndexedAccessType`이 그대로 노출됨. 항상 별도 `interface XxxProps`를 export하고 인라인 union 리터럴로 작성:

```ts
// index.ts
export interface BadgeProps {
  variant?: "neutral" | "negative" | "positive" | "informative" | "warning"
  tone?: "soft" | "solid" | "outline"
  size?: "3xsmall" | "2xsmall" | "xsmall"
  round?: boolean
  class?: string
}

// Badge.vue
defineProps<BadgeProps>()
```

CVA의 `VariantProps`는 컴포넌트 내부 타입 검증용으로만 사용.

### Boolean prop 선호

이항 상태(square/round, flat/raised 등)는 string union보다 boolean prop이 간결: `round: boolean` ✓ (`shape: "square" | "round"` ✗).

### Tone 명명 규약

색의 강도 축은 **`soft` / `solid` / `outline`** 사용 (Radix Themes·Tailwind UI 표준).
- `soft`: 약하게 채색된 배경 (Figma `filled(50%)`)
- `solid`: 완전 채색 (Figma `filled(100%)`)
- `outline`: 테두리만
