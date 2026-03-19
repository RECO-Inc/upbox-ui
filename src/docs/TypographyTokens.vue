<script setup lang="ts">
interface TypographyLevel {
  level: string
  fontSize: string
  lineHeight: string
  fontWeight: number
  sample: string
}

interface TypographyGroup {
  name: string
  description: string
  levels: TypographyLevel[]
}

interface BodyLevel {
  level: string
  fontSize: string
  lineHeight: string
  weights: { label: string; fontWeight: number }[]
  sample: string
}

const pageTitleGroup: TypographyGroup = {
  name: 'Page Title',
  description: '페이지 타이틀은 해당 페이지의 목적과 주요 내용을 명확하게 전달하는 가장 상위 제목으로, 페이지당 하나만 사용한다.',
  levels: [
    { level: '1', fontSize: '28px', lineHeight: '36px', fontWeight: 700, sample: '페이지 타이틀은 해당 페이지의 목적과 주요 내용을 명확하게 전달하는 가장 상위 제목으로, 페이지당 하나만 사용한다.' },
    { level: '2', fontSize: '24px', lineHeight: '32px', fontWeight: 700, sample: '페이지 타이틀은 해당 페이지의 목적과 주요 내용을 명확하게 전달하는 가장 상위 제목으로, 페이지당 하나만 사용한다.' },
    { level: '3', fontSize: '22px', lineHeight: '32px', fontWeight: 700, sample: '페이지 타이틀은 해당 페이지의 목적과 주요 내용을 명확하게 전달하는 가장 상위 제목으로, 페이지당 하나만 사용한다.' },
    { level: '4', fontSize: '20px', lineHeight: '28px', fontWeight: 700, sample: '페이지 타이틀은 해당 페이지의 목적과 주요 내용을 명확하게 전달하는 가장 상위 제목으로, 페이지당 하나만 사용한다.' },
  ],
}

const headlineGroup: TypographyGroup = {
  name: 'Headline',
  description: '페이지 또는 카드 내 콘텐츠 영역을 나누는 섹션 제목 단독 영역도 사용 가능',
  levels: [
    { level: 'H1', fontSize: '24px', lineHeight: '32px', fontWeight: 700, sample: '페이지 또는 카드 내 콘텐츠 영역을 나누는 섹션 제목 단독 영역도 사용 가능' },
    { level: 'H2', fontSize: '22px', lineHeight: '32px', fontWeight: 700, sample: '페이지 또는 카드 내 콘텐츠 영역을 나누는 섹션 제목 단독 영역도 사용 가능' },
    { level: 'H3', fontSize: '20px', lineHeight: '28px', fontWeight: 700, sample: '페이지 또는 카드 내 콘텐츠 영역을 나누는 섹션 제목 단독 영역도 사용 가능' },
    { level: 'H4', fontSize: '18px', lineHeight: '28px', fontWeight: 700, sample: '페이지 또는 카드 내 콘텐츠 영역을 나누는 섹션 제목 단독 영역도 사용 가능' },
    { level: 'H5', fontSize: '16px', lineHeight: '24px', fontWeight: 700, sample: '페이지 또는 카드 내 콘텐츠 영역을 나누는 섹션 제목 단독 영역도 사용 가능' },
  ],
}

const titleGroup: TypographyGroup = {
  name: 'Title',
  description: '섹션 내 그룹을 구분하는 소제목 또는 리스트의 각 항목 제목',
  levels: [
    { level: '1', fontSize: '20px', lineHeight: '28px', fontWeight: 600, sample: '섹션 내 그룹을 구분하는 소제목 또는 리스트의 각 항목 제목' },
    { level: '2', fontSize: '18px', lineHeight: '28px', fontWeight: 600, sample: '섹션 내 그룹을 구분하는 소제목 또는 리스트의 각 항목 제목' },
    { level: '3', fontSize: '16px', lineHeight: '24px', fontWeight: 600, sample: '섹션 내 그룹을 구분하는 소제목 또는 리스트의 각 항목 제목' },
    { level: '4', fontSize: '15px', lineHeight: '24px', fontWeight: 600, sample: '섹션 내 그룹을 구분하는 소제목 또는 리스트의 각 항목 제목' },
  ],
}

const labelGroup: TypographyGroup = {
  name: 'Label',
  description: 'Key-Value 구조에서 키(항목명)를 표시',
  levels: [
    { level: '1', fontSize: '16px', lineHeight: '24px', fontWeight: 700, sample: 'Key-Value 구조에서 키(항목명)를 표시' },
    { level: '2', fontSize: '15px', lineHeight: '24px', fontWeight: 700, sample: 'Key-Value 구조에서 키(항목명)를 표시' },
    { level: '3', fontSize: '14px', lineHeight: '20px', fontWeight: 700, sample: 'Key-Value 구조에서 키(항목명)를 표시' },
    { level: '4', fontSize: '13px', lineHeight: '20px', fontWeight: 700, sample: 'Key-Value 구조에서 키(항목명)를 표시' },
    { level: '5', fontSize: '12px', lineHeight: '16px', fontWeight: 700, sample: 'Key-Value 구조에서 키(항목명)를 표시' },
    { level: '6', fontSize: '11px', lineHeight: '16px', fontWeight: 700, sample: 'Key-Value 구조에서 키(항목명)를 표시' },
  ],
}

const bodyLevels: BodyLevel[] = [
  {
    level: '1', fontSize: '16px', lineHeight: '24px',
    weights: [{ label: 'Regular', fontWeight: 400 }, { label: 'Semi-Bold', fontWeight: 600 }, { label: 'Bold', fontWeight: 700 }],
    sample: 'Label과 쌍을 이루는 실제 데이터 값 또는 일반 본문 텍스트',
  },
  {
    level: '2', fontSize: '15px', lineHeight: '24px',
    weights: [{ label: 'Regular', fontWeight: 400 }, { label: 'Semi-Bold', fontWeight: 600 }, { label: 'Bold', fontWeight: 700 }],
    sample: 'Label과 쌍을 이루는 실제 데이터 값 또는 일반 본문 텍스트',
  },
  {
    level: '3', fontSize: '14px', lineHeight: '20px',
    weights: [{ label: 'Regular', fontWeight: 400 }, { label: 'Semi-Bold', fontWeight: 600 }, { label: 'Bold', fontWeight: 700 }],
    sample: 'Label과 쌍을 이루는 실제 데이터 값 또는 일반 본문 텍스트',
  },
  {
    level: '4', fontSize: '13px', lineHeight: '20px',
    weights: [{ label: 'Regular', fontWeight: 400 }, { label: 'Semi-Bold', fontWeight: 600 }, { label: 'Bold', fontWeight: 700 }],
    sample: 'Label과 쌍을 이루는 실제 데이터 값 또는 일반 본문 텍스트',
  },
  {
    level: '5', fontSize: '12px', lineHeight: '16px',
    weights: [{ label: 'Regular', fontWeight: 400 }, { label: 'Semi-Bold', fontWeight: 600 }, { label: 'Bold', fontWeight: 700 }],
    sample: 'Label과 쌍을 이루는 실제 데이터 값 또는 일반 본문 텍스트',
  },
]

const captionGroup: TypographyGroup = {
  name: 'Caption',
  description: '보조 설명이나 힌트 텍스트',
  levels: [
    { level: '1', fontSize: '13px', lineHeight: '20px', fontWeight: 400, sample: '보조 설명이나 힌트 텍스트' },
    { level: '2', fontSize: '12px', lineHeight: '16px', fontWeight: 400, sample: '보조 설명이나 힌트 텍스트' },
    { level: '3', fontSize: '11px', lineHeight: '16px', fontWeight: 400, sample: '보조 설명이나 힌트 텍스트' },
  ],
}

const simpleGroups = [pageTitleGroup, headlineGroup, titleGroup, labelGroup, captionGroup]
</script>

<template>
  <div class="p-12 bg-white max-w-[1200px] font-sans">
    <h1 class="text-size-32 font-bold text-grey-100 mb-2">Typography</h1>
    <p class="text-size-16 text-grey-60 mb-12">
      디자인 시스템의 타이포그래피 스케일을 정의합니다. 모든 텍스트는 Pretendard 폰트를 사용합니다.
    </p>

    <hr class="border-grey-30 mb-10" />

    <!-- Simple groups: Page Title, Headline, Title, Label, Caption -->
    <template v-for="group in simpleGroups" :key="group.name">
      <h2 class="text-size-24 font-bold text-grey-100 mb-2">{{ group.name }}</h2>
      <p class="text-size-14 text-grey-60 mb-6">{{ group.description }}</p>

      <div class="border border-grey-30 rounded-lg overflow-hidden mb-10">
        <!-- Header -->
        <div class="grid grid-cols-[160px_1fr] bg-grey-20 border-b border-grey-30">
          <div class="p-4 text-size-13 font-semibold text-grey-70">Spec</div>
          <div class="p-4 text-size-13 font-semibold text-grey-70 border-l border-grey-30">Sample</div>
        </div>
        <!-- Rows -->
        <div
          v-for="item in group.levels"
          :key="item.level"
          class="grid grid-cols-[160px_1fr] border-b border-grey-30 last:border-b-0"
        >
          <div class="p-4 flex flex-col gap-1">
            <span class="text-size-13 font-semibold text-grey-90">{{ group.name }} {{ item.level }}</span>
            <span class="text-[11px] text-grey-60">{{ item.fontSize }} / {{ item.lineHeight }}</span>
            <span class="text-[11px] text-grey-60">
              {{ item.fontWeight === 700 ? 'Bold' : item.fontWeight === 600 ? 'Semi-Bold' : 'Regular' }}
            </span>
          </div>
          <div class="p-4 border-l border-grey-30 flex items-center overflow-hidden">
            <span
              class="text-grey-90 leading-none truncate block w-full"
              :style="{ fontSize: item.fontSize, lineHeight: item.lineHeight, fontWeight: item.fontWeight }"
            >{{ item.sample }}</span>
          </div>
        </div>
      </div>
    </template>

    <!-- Body section with 3 weight columns -->
    <h2 class="text-size-24 font-bold text-grey-100 mb-2">Body</h2>
    <p class="text-size-14 text-grey-60 mb-6">Label과 쌍을 이루는 실제 데이터 값 또는 일반 본문 텍스트</p>

    <div class="border border-grey-30 rounded-lg overflow-hidden mb-10">
      <!-- Header -->
      <div class="grid grid-cols-[160px_1fr_1fr_1fr] bg-grey-20 border-b border-grey-30">
        <div class="p-4 text-size-13 font-semibold text-grey-70">Spec</div>
        <div class="p-4 text-size-13 font-semibold text-grey-70 border-l border-grey-30">Regular (400)</div>
        <div class="p-4 text-size-13 font-semibold text-grey-70 border-l border-grey-30">Semi-Bold (600)</div>
        <div class="p-4 text-size-13 font-semibold text-grey-70 border-l border-grey-30">Bold (700)</div>
      </div>
      <!-- Rows -->
      <div
        v-for="item in bodyLevels"
        :key="item.level"
        class="grid grid-cols-[160px_1fr_1fr_1fr] border-b border-grey-30 last:border-b-0"
      >
        <div class="p-4 flex flex-col gap-1">
          <span class="text-size-13 font-semibold text-grey-90">Body {{ item.level }}</span>
          <span class="text-[11px] text-grey-60">{{ item.fontSize }} / {{ item.lineHeight }}</span>
        </div>
        <div
          v-for="w in item.weights"
          :key="w.label"
          class="p-4 border-l border-grey-30 flex items-center overflow-hidden"
        >
          <span
            class="text-grey-90 truncate block w-full"
            :style="{ fontSize: item.fontSize, lineHeight: item.lineHeight, fontWeight: w.fontWeight }"
          >{{ item.sample }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
