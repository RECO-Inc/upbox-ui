# @reco-inc/upbox-ui

Upbox Design System - Vue 3 Component Library

## Installation

```bash
npm install github:RECO-Inc/upbox-ui
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

### 2. CSS Variables (Design Tokens)

```ts
// main.ts
import '@reco-inc/upbox-ui/style.css'
```

### 3. Use Components

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
      <Button variant="primary" size="md">Click</Button>
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
# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run dev

# Type check
npm run typecheck
```

## Update (for consumers)

```bash
npm update @reco-inc/upbox-ui
```

## Tech Stack

- Vue 3 + TypeScript
- Tailwind CSS + CSS Variables (Design Tokens)
- Reka UI (Headless components)
- Class Variance Authority (Variant system)
- Vite (Library mode build)
- vite-plugin-dts (Type declaration generation)
