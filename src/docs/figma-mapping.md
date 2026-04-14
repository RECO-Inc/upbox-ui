# Figma ↔ Vue 컴포넌트 매핑

Figma 디자인 시스템(파일 키: `4eyRu4lbq9068LACdI8HMp`)과 Vue 컴포넌트 간의 프로퍼티 대응 정보입니다.

## 사용 방법

1. Figma에서 해당 컴포넌트를 선택 후 우클릭 → **"Copy link to selection"** 으로 노드 URL 확인
2. 각 섹션의 `node-id` 를 실제 노드 URL로 업데이트
3. Figma 패널에 표시되는 프로퍼티명이 아래 "Figma 프로퍼티"와 다를 경우 수정

---

## Standard Button
name : Standard Button
파일: src/components/button/Button.vue
Figma 노드: node-id=3220-15782

| Figma 프로퍼티 | Vue Prop       | 타입 / 허용값                                             | 기본값    |
|--------------|----------------|----------------------------------------------------------|-----------|
| `Variant`    | `variant`      | `primary` \| `error` \| `positive` \| `usually` \| `assistant` \| `info` | `primary` |
| `Style`      | `button-style` | `filled` \| `outlined` \| `text`                        | `filled`  |
| `Size`       | `size`         | `xsmall` \| `small` \| `regular` \| `large` \| `xlarge` | `regular` |
| `Label`      | `(slot)`       | string                                                   | —         |
| `Disabled`   | `disabled`     | boolean                                                  | `false`   |
| `Loading`    | `loading`      | boolean                                                  | `false`   |
| `Block`      | `block`        | boolean                                                  | `false`   |

---

## Text Button
name : Standard Button
파일: src/components/button/Button.vue
Figma 노드: node-id=3223-13667

| Figma 프로퍼티 | Vue Prop       | 타입 / 허용값                                             | 기본값    |
|--------------|----------------|----------------------------------------------------------|-----------|
| `Variant`    | `variant`      | `destructive` \| `secondary` | `destructive` |
| `Size`       | `size`         | `2xsmall` \| `small` \| `xsmall` | `xsmall` |
| `Label`      | `(slot)`       | string                                                   | —         |
| `Disabled`   | `disabled`     | boolean                                                  | `false`   |
| `Loading`    | `loading`      | boolean                                                  | `false`   |
| `Block`      | `block`        | boolean                                                  | `false`   |

---

## Badge

**파일**: `src/components/badge/Badge.vue`  
**Figma 노드**: `node-id=BADGE_NODE_ID` ← Figma에서 확인 후 교체

| Figma 프로퍼티 | Vue Prop   | 타입 / 허용값                                                    | 기본값   |
|--------------|------------|------------------------------------------------------------------|---------|
| `Variant`    | `variant`  | `base` \| `primary` \| `info` \| `positive` \| `error` \| `warning` | `base`  |
| `Size`       | `size`     | `xxsmall` \| `xsmall` \| `small` \| `regular`                   | `small` |
| `Deep`       | `deep`     | boolean — true: 진한 배경, false: 연한 배경                       | `false` |
| `Outline`    | `outline`  | boolean — true: 테두리+흰 배경, false: 배경색 채움                 | `false` |
| `Label`      | `(slot)`   | string                                                           | —       |

---

## Input

**파일**: `src/components/input/Input.vue`  
**Figma 노드**: `node-id=INPUT_NODE_ID` ← Figma에서 확인 후 교체

| Figma 프로퍼티   | Vue Prop        | 타입 / 허용값                                    | 기본값    |
|----------------|-----------------|------------------------------------------------|-----------|
| `Variant`      | `variant`       | `default` \| `filled` \| `bottomline`          | `default` |
| `Size`         | `size`          | `small` \| `regular` \| `large`                | `regular` |
| `Error`        | `error`         | boolean                                        | `false`   |
| `Disabled`     | `disabled`      | boolean                                        | `false`   |
| `ReadOnly`     | `readonly`      | boolean                                        | `false`   |
| `Label`        | `label`         | string (상단 라벨 텍스트)                        | —         |
| `Required`     | `required`      | boolean (라벨 옆 `*` 표시)                      | —         |
| `Placeholder`  | `placeholder`   | string                                         | —         |
| `Clearable`    | `clearable`     | boolean (우측 X 버튼)                           | `false`   |
| `Password`     | `password`      | boolean (눈 아이콘 토글)                         | `false`   |
| `ErrorMessage` | `error-message` | string (하단 에러 메시지)                         | —         |
| `Subfix`       | `subfix`        | string (우측 단위 텍스트, 예: `원`, `kg`)         | —         |
| `Counter`      | `counter`       | boolean (글자/바이트 수 표시)                     | `false`   |
| `MaxLength`    | `max-length`    | number                                         | —         |

---

## Checkbox

**파일**: `src/components/checkbox/Checkbox.vue`  
**Figma 노드**: `node-id=CHECKBOX_NODE_ID` ← Figma에서 확인 후 교체

| Figma 프로퍼티 | Vue Prop   | 타입 / 허용값                        | 기본값    |
|--------------|------------|--------------------------------------|-----------|
| `Size`       | `size`     | `small` (12px) \| `regular` (16px) \| `large` (20px) | `regular` |
| `Error`      | `error`    | boolean — 빨간 체크박스               | `false`   |
| `Checked`    | `checked`  | `true` \| `false` \| `'indeterminate'` | `false` |
| `Disabled`   | `disabled` | boolean                              | `false`   |

---

## Switch

**파일**: `src/components/switch/Switch.vue`  
**Figma 노드**: `node-id=SWITCH_NODE_ID` ← Figma에서 확인 후 교체

| Figma 프로퍼티 | Vue Prop         | 타입 / 허용값                                      | 기본값    |
|--------------|------------------|---------------------------------------------------|-----------|
| `Size`       | `size`           | `small` (24×14) \| `regular` (30×18) \| `large` (38×22) | `regular` |
| `Checked`    | `default-checked` | boolean                                          | —         |
| `Disabled`   | `disabled`       | boolean                                           | `false`   |

---

## Avatar

**파일**: `src/components/avatar/Avatar.vue`  
**Figma 노드**: `node-id=AVATAR_NODE_ID` ← Figma에서 확인 후 교체

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값                            | 기본값   |
|--------------|----------|------------------------------------------|---------|
| `Size`       | `size`   | `small` (40px) \| `base` (64px) \| `large` (128px) | —  |
| `Shape`      | `shape`  | `circle` \| `square`                    | —       |

> 구성: `<Avatar>` + `<AvatarImage src="..." />` + `<AvatarFallback>이니셜</AvatarFallback>`

---

## Tabs

**파일**: `src/components/tabs/TabsList.vue`  
**Figma 노드**: `node-id=TABS_NODE_ID` ← Figma에서 확인 후 교체

| Figma 프로퍼티 | Vue Prop  | 타입 / 허용값                               | 기본값    |
|--------------|-----------|---------------------------------------------|-----------|
| `Variant`    | `variant` | `default` \| `round` \| `box`              | `default` |
| `Color`      | `color`   | `navy` \| `grey`                           | —         |
| `Size`       | `size`    | `small` \| `regular` \| `large` \| `xlarge` | —        |

> 구성: `<Tabs>` → `<TabsList>` → `<TabsTrigger value="...">` + `<TabsContent value="...">`

---

## Toggle

**파일**: `src/components/toggle/Toggle.vue`  
**Figma 노드**: `node-id=TOGGLE_NODE_ID` ← Figma에서 확인 후 교체

| Figma 프로퍼티 | Vue Prop  | 타입 / 허용값                              | 기본값    |
|--------------|-----------|-------------------------------------------|-----------|
| `Variant`    | `variant` | `default` \| `outline`                   | `default` |
| `Size`       | `size`    | `small` (32px) \| `regular` (36px) \| `large` (40px) | `regular` |
| `Pressed`    | `pressed` | boolean (data-state=on)                   | —         |
| `Disabled`   | `disabled` | boolean                                  | `false`   |

---

## Dialog

**파일**: `src/components/dialog/DialogContent.vue`  
**Figma 노드**: `node-id=DIALOG_NODE_ID` ← Figma에서 확인 후 교체

| Figma 프로퍼티 | Vue Prop | 타입 / 허용값                                        | 기본값    |
|--------------|----------|------------------------------------------------------|-----------|
| `Size`       | `size`   | `small` \| `regular` \| `large` \| `xlarge` \| `full` | `regular` |

> 구성: `<Dialog>` → `<DialogTrigger>` + `<DialogContent>` → `<DialogHeader>` / `<DialogFooter>`

---

## Spinner

**파일**: `src/components/spinner/Spinner.vue`  
**Figma 노드**: `node-id=SPINNER_NODE_ID` ← Figma에서 확인 후 교체

로딩 인디케이터. class prop으로 크기 조정 (`w-[16px] h-[16px]` 등).

---

## Skeleton

**파일**: `src/components/skeleton/Skeleton.vue`  
**Figma 노드**: `node-id=SKELETON_NODE_ID` ← Figma에서 확인 후 교체

플레이스홀더 로딩 UI. class로 width/height 지정.

---

## Radio Group

**파일**: `src/components/radio-group/`  
**Figma 노드**: `node-id=RADIO_NODE_ID` ← Figma에서 확인 후 교체

> 구성: `<RadioGroup v-model="value">` → `<RadioGroupItem value="...">` + `<Label>`

---

## Select

**파일**: `src/components/select/`  
**Figma 노드**: `node-id=SELECT_NODE_ID` ← Figma에서 확인 후 교체

> 구성: `<Select>` → `<SelectTrigger>` + `<SelectContent>` → `<SelectItem value="...">`

---

## Textarea

**파일**: `src/components/textarea/`  
**Figma 노드**: `node-id=TEXTAREA_NODE_ID` ← Figma에서 확인 후 교체

---

## Pagination

**파일**: `src/components/pagination/`  
**Figma 노드**: `node-id=PAGINATION_NODE_ID` ← Figma에서 확인 후 교체

---

## Breadcrumb

**파일**: `src/components/breadcrumb/`  
**Figma 노드**: `node-id=BREADCRUMB_NODE_ID` ← Figma에서 확인 후 교체

---

## Card

**파일**: `src/components/card/`  
**Figma 노드**: `node-id=CARD_NODE_ID` ← Figma에서 확인 후 교체

---

## Drawer / Sheet

**파일**: `src/components/drawer/`, `src/components/sheet/`  
**Figma 노드**: `node-id=DRAWER_NODE_ID` ← Figma에서 확인 후 교체

---

## Tooltip

**파일**: `src/components/tooltip/`  
**Figma 노드**: `node-id=TOOLTIP_NODE_ID` ← Figma에서 확인 후 교체

---

## Popover

**파일**: `src/components/popover/`  
**Figma 노드**: `node-id=POPOVER_NODE_ID` ← Figma에서 확인 후 교체

---

## Stepper

**파일**: `src/components/stepper/`  
**Figma 노드**: `node-id=STEPPER_NODE_ID` ← Figma에서 확인 후 교체

---

## Accordion

**파일**: `src/components/accordion/`  
**Figma 노드**: `node-id=ACCORDION_NODE_ID` ← Figma에서 확인 후 교체

---

## Separator

**파일**: `src/components/separator/`  
**Figma 노드**: `node-id=SEPARATOR_NODE_ID` ← Figma에서 확인 후 교체

---

## Label

**파일**: `src/components/label/`  
**Figma 노드**: `node-id=LABEL_NODE_ID` ← Figma에서 확인 후 교체

---

## Dropdown Menu

**파일**: `src/components/dropdown-menu/`  
**Figma 노드**: `node-id=DROPDOWN_NODE_ID` ← Figma에서 확인 후 교체

---

## Dropdown Filter

**파일**: `src/components/dropdown-filter/`  
**Figma 노드**: `node-id=DROPDOWN_FILTER_NODE_ID` ← Figma에서 확인 후 교체

---

## Table

**파일**: `src/components/table/`  
**Figma 노드**: `node-id=TABLE_NODE_ID` ← Figma에서 확인 후 교체

---

## Form

**파일**: `src/components/form/`  
**Figma 노드**: `node-id=FORM_NODE_ID` ← Figma에서 확인 후 교체

> vee-validate 기반 폼 컴포넌트. `<FormField>`, `<FormItem>`, `<FormLabel>`, `<FormMessage>` 구성.

---

## Input Group

**파일**: `src/components/input-group/`  
**Figma 노드**: `node-id=INPUT_GROUP_NODE_ID` ← Figma에서 확인 후 교체

---

## Number Field

**파일**: `src/components/number-field/`  
**Figma 노드**: `node-id=NUMBER_FIELD_NODE_ID` ← Figma에서 확인 후 교체

---

## File Uploader

**파일**: `src/components/file-uploader/`  
**Figma 노드**: `node-id=FILE_UPLOADER_NODE_ID` ← Figma에서 확인 후 교체

---

## Calendar

**파일**: `src/components/calendar/`  
**Figma 노드**: `node-id=CALENDAR_NODE_ID` ← Figma에서 확인 후 교체

---

## Empty

**파일**: `src/components/empty/`  
**Figma 노드**: `node-id=EMPTY_NODE_ID` ← Figma에서 확인 후 교체

---

## Sidebar

**파일**: `src/components/sidebar/`  
**Figma 노드**: `node-id=SIDEBAR_NODE_ID` ← Figma에서 확인 후 교체

---

## Sonner (Toast)

**파일**: `src/components/sonner/`  
**Figma 노드**: `node-id=SONNER_NODE_ID` ← Figma에서 확인 후 교체

---

## Toggle Group

**파일**: `src/components/toggle-group/`  
**Figma 노드**: `node-id=TOGGLE_GROUP_NODE_ID` ← Figma에서 확인 후 교체

---

## 노드 ID 업데이트 방법

```
1. Figma 파일 열기: https://www.figma.com/design/4eyRu4lbq9068LACdI8HMp/
2. 해당 컴포넌트 클릭
3. 우클릭 → "Copy link to selection"
4. URL에서 node-id 파라미터 값 복사 (예: 2917-7019)
5. 위 표의 XXXX_NODE_ID를 해당 값으로 교체
```
