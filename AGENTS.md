
# 구조 요약

- 사용 스택 : Vue 3, TypeScript, Vite (library mode), Tailwind CSS, class-variance-authority (CVA), reka-ui, Storybook 10
- 프로젝트 종류 : 디자인 시스템 컴포넌트 라이브러리 (`@reco-inc/upbox-ui`)
- Figma 디자인 시스템을 코드로 구현. 컨슈머 프로젝트에서 import하여 사용.
- 주요 디렉토리: `src/components/` (UI 컴포넌트), `src/docs/` (토큰 문서), `src/lib/` (유틸리티)

# 주석 스타일

- 의도, 도메인 맥락은 한국어로 짧고 명확. 플로우 위주 설명. 다른 함수와의 연관성, 비즈니스 이펙트 설명.
- md 형식으로, heading, @param 등을 적절히 작성.
- 예외 설명.

```ts
/**
 * # 컴포넌트 설명
 * - 설명등
 * @param {string} variant
 * @throw NullError.NullErrorCode 데이터가 null 임
 */
```

# Vue 파일 작성 가이드

## 블록 순서

`<script setup lang="ts">` → `<template>`

스타일은 Tailwind 유틸리티 클래스 + CVA로 처리. `<style>` 블록은 사용하지 않음.

## 반응성, 이벤트

- `watch`보다 이벤트 핸들러, 콜백방식 사용. 파생 값은 함수보다 `computed` 활용.
- `watch`는 외부 시스템 동기화 및 효율 등 **대안이 없을 때만** 제한적으로 사용.

## 함수 정의 형태

- 함수는 `function onXxx()` 선언 형태를 사용. `const onXxx = () => {}` 같은 함수형 변수는 함수 내부에서만.
- 예: `onMounted`, `onClickSave`, `onConfirmDelete`, `onChangePage` 등.
- 이벤트의 변수 이름을 그대로 함수에 사용. @confirm="onConfirmXXX"

## props / emits / 매크로 이름

- `defineProps`, `defineEmits` 변수명은 `props`, `emits`로 통일.
- 양방향 바인딩은 `defineModel` 우선, `update:` emit 지양.
- emit 타입의 이벤트명 파라미터는 `eventName` 고정.
- props 기본값은 `withDefaults(defineProps<...>(), { ... })`, 별도 props interface보다 제네릭 인라인 선호.

## 템플릿 규칙

- 컴포넌트 태그명: **PascalCase**
- 일반 DOM 속성, 디렉티브: **kebab-case** (`@my-event`, `some-prop`)
- `v-bind` / `v-on` **shorthand** (`:`, `@`)

## 컴포넌트 스타일링

- variant 스타일은 **CVA** (`class-variance-authority`)로 정의. `cva()` 함수로 base + variants + compoundVariants 구성.
- 색상은 항상 CSS 변수 → Tailwind preset → 유틸리티 클래스 체인으로 사용.
- headless UI 동작은 **reka-ui** 프리미티브 활용.

# Figma Dev Mode MCP (UI 에셋)

- 호스트 URL로 오는 이미지, SVG는 그 소스 그대로 씀.
- 아이콘 패키지 추가 없이 Figma 페이로드, 리소스 우선함.
