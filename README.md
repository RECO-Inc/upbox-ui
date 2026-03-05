# @reco-inc/upbox-ui

Upbox Design System - Vue 3 Component Library

## Storybook

[Live Storybook](https://reco-inc.github.io/upbox-ui/)

## Installation

```bash
# npm
npm install git+https://github.com/RECO-Inc/upbox-ui.git

# pnpm
pnpm add git+https://github.com/RECO-Inc/upbox-ui.git
```

## Setup

### 1. Tailwind Config

```js
// tailwind.config.cjs
module.exports = {
  presets: [require('@reco-inc/upbox-ui/tailwind-preset')],
  content: [
    './src/**/*.{vue,ts}',
    './node_modules/@reco-inc/upbox-ui/dist/**/*.mjs',
  ],
}
```

### 2. CSS Import

```css
/* style.css */
@import "@reco-inc/upbox-ui/style.css";
@source "../../node_modules/@reco-inc/upbox-ui/dist/**/*.mjs";
```

### 3. Vue Template Autocomplete (권장)

Consumer 프로젝트의 `env.d.ts` 또는 `vite-env.d.ts`에 추가:

```ts
/// <reference types="@reco-inc/upbox-ui/global" />
```

이렇게 하면 `.vue` 파일 `<template>`에서 컴포넌트 자동완성이 동작합니다.

### 4. Use Components

```vue
<script setup lang="ts">
import { Button, Card, CardHeader, CardTitle, CardContent } from '@reco-inc/upbox-ui'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Title</CardTitle>
    </CardHeader>
    <CardContent>
      <Button variant="primary" size="regular">Click</Button>
    </CardContent>
  </Card>
</template>
```

## Components

| Category | Components |
|----------|-----------|
| General | Button, Badge, Spinner, Skeleton, Empty, Stepper |
| Form | Input, Textarea, Checkbox, Switch, RadioGroup, Select, NumberField, Label, Form, InputGroup |
| Data Display | Card, Table, Accordion, Avatar, Tabs, Separator |
| Overlay | Dialog, Sheet, Drawer, Popover, Tooltip, Sonner |
| Navigation | Breadcrumb, Pagination, Sidebar, DropdownMenu |
| Filter | DropdownFilter, ToggleGroup, Toggle |
| Date | Calendar (single & range) |
| File | FileUploader |

## Design Tokens

CSS variables for colors, typography, spacing are included in `style.css`.

### Color System

- `base` (10-100): Grayscale
- `primary` (20-100): Brand color
- `info` (20-100): Blue accent
- `positive` (20-100): Success/green
- `error` (20-100): Error/red
- `warning` (20-100): Warning/orange

### Dark Mode

Add `class="dark"` to the root element. All color tokens automatically invert.

## Development

```bash
npm install         # Install dependencies
npm run build       # Build library
npm run dev         # Watch mode
npm run typecheck   # Type check
npm run storybook   # Storybook dev server (localhost:6006)
```

## 배포 & 업데이트 주의사항

### 컴포넌트 수정 후 배포

1. 컴포넌트 소스 수정
2. `npm run build` 실행 → `dist/` 재생성
3. **`dist/` 변경사항을 반드시 함께 커밋** (Git URL 설치 방식이므로 빌드 결과물이 포함되어야 함)
4. push → consumer 프로젝트에서 재설치

### Consumer 프로젝트 업데이트

```bash
# pnpm (Git URL은 캐시되므로 remove 후 재설치 필요)
pnpm remove @reco-inc/upbox-ui
pnpm add git+https://github.com/RECO-Inc/upbox-ui.git

# npm
npm update @reco-inc/upbox-ui
```

### Stories 추가/수정 시

- Stories 파일 수정 후 `npm run build` → dist의 `.stories.d.ts`도 함께 커밋
- `main` 브랜치 push 시 Storybook이 GitHub Pages에 자동 배포됨

### 새 컴포넌트 추가 시 체크리스트

1. `src/components/<name>/` 에 컴포넌트 생성
2. `src/components/<name>/index.ts` 에서 export
3. `src/index.ts` 에 `export * from './components/<name>'` 추가
4. `src/global.ts` 에 GlobalComponents 타입 선언 추가
5. Stories 파일 작성
6. `npm run build` 후 dist 포함하여 커밋

## Tech Stack

- Vue 3 + TypeScript
- Tailwind CSS + CSS Variables (Design Tokens)
- Reka UI (Headless components)
- Class Variance Authority (Variant system)
- Vite (Library mode build)
- vite-plugin-dts (Type declaration generation)
- Storybook (Component documentation & playground)
