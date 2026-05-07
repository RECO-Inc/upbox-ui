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

## Naming Convention History

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
