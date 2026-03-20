<script setup lang="ts">
const primitives = [
  {
    name: 'Grey',
    colors: [
      { token: 'grey-10', hex: '#FFFFFF' },
      { token: 'grey-20', hex: '#F8F8F9' },
      { token: 'grey-30', hex: '#ECEDF0' },
      { token: 'grey-40', hex: '#D3D6DE' },
      { token: 'grey-50', hex: '#AFB4BF' },
      { token: 'grey-60', hex: '#8E94A3' },
      { token: 'grey-70', hex: '#6F7789' },
      { token: 'grey-80', hex: '#555C6C' },
      { token: 'grey-90', hex: '#303445' },
      { token: 'grey-100', hex: '#0D152A' },
    ]
  },
  {
    name: 'Navy',
    colors: [
      { token: 'navy-20', hex: '#F4F7FC' },
      { token: 'navy-30', hex: '#DAE7F5' },
      { token: 'navy-40', hex: '#C5D6EC' },
      { token: 'navy-50', hex: '#85A2C7' },
      { token: 'navy-60', hex: '#4D7099' },
      { token: 'navy-70', hex: '#385B85' },
      { token: 'navy-80', hex: '#264870' },
      { token: 'navy-90', hex: '#1D3756' },
      { token: 'navy-100', hex: '#081E38' },
    ]
  },
  {
    name: 'Blue',
    colors: [
      { token: 'blue-20', hex: '#F5F9FF' },
      { token: 'blue-30', hex: '#E1EDFF' },
      { token: 'blue-40', hex: '#B9D5FF' },
      { token: 'blue-50', hex: '#93BEFF' },
      { token: 'blue-60', hex: '#64A2FF' },
      { token: 'blue-70', hex: '#3D8BFF' },
      { token: 'blue-80', hex: '#0066FF' },
      { token: 'blue-90', hex: '#004FC5' },
      { token: 'blue-100', hex: '#003C96' },
    ]
  },
  {
    name: 'Green',
    colors: [
      { token: 'green-20', hex: '#F1F9F6' },
      { token: 'green-30', hex: '#DBEEE9' },
      { token: 'green-40', hex: '#B3D7CC' },
      { token: 'green-50', hex: '#8EC0B1' },
      { token: 'green-60', hex: '#66AF99' },
      { token: 'green-70', hex: '#4DA288' },
      { token: 'green-80', hex: '#1A8766' },
      { token: 'green-90', hex: '#107B5A' },
      { token: 'green-100', hex: '#006E4D' },
    ]
  },
  {
    name: 'Red',
    colors: [
      { token: 'red-20', hex: '#FFF6F6' },
      { token: 'red-30', hex: '#FBEAEA' },
      { token: 'red-40', hex: '#FDC9C9' },
      { token: 'red-50', hex: '#F8A8A8' },
      { token: 'red-60', hex: '#F27D7E' },
      { token: 'red-70', hex: '#ED4242' },
      { token: 'red-80', hex: '#E11D1D' },
      { token: 'red-90', hex: '#C21919' },
      { token: 'red-100', hex: '#851111' },
    ]
  },
  {
    name: 'Orange',
    colors: [
      { token: 'orange-20', hex: '#FFF2E4' },
      { token: 'orange-30', hex: '#FFE9D1' },
      { token: 'orange-40', hex: '#FFDBB3' },
      { token: 'orange-50', hex: '#FFBB63' },
      { token: 'orange-60', hex: '#FFA037' },
      { token: 'orange-70', hex: '#F68511' },
      { token: 'orange-80', hex: '#E46F00' },
      { token: 'orange-90', hex: '#CB5D00' },
      { token: 'orange-100', hex: '#B14C00' },
    ]
  },
]

const semanticCta = [
  { token: 'cta/primary', hex: '#264870', ref: 'navy-80', desc: '핵심 행동, 앞으로 나아감' },
  { token: 'cta/destructive', hex: '#E11D1D', ref: 'red-80', desc: '되돌릴 수 없는 파괴적 행동' },
  { token: 'cta/secondary', hex: '#8E94A3', ref: 'grey-60', desc: '보조적 행동' },
  { token: 'cta/tertiary', hex: '#ECEDF0', ref: 'grey-30', desc: '최소한의 행동, ghost 버튼' },
]

const semanticLabel = [
  { token: 'label/1', hex: '#8E94A3', ref: 'grey-60' },
  { token: 'label/2', hex: '#303445', ref: 'grey-90' },
]

const semanticBg = [
  { token: 'background/bg1', hex: '#F8F8F9', ref: 'grey-20' },
  { token: 'background/bg2', hex: '#ECEDF0', ref: 'grey-30' },
]

const semanticStatus = [
  { token: 'status/informative', hex: '#0066FF', ref: 'blue-80', desc: '진행중/정보 전달' },
  { token: 'status/positive', hex: '#1A8766', ref: 'green-80', desc: '작업 성공/긍정적 맥락' },
  { token: 'status/negative', hex: '#E11D1D', ref: 'red-80', desc: '작업 실패/부정적 맥락' },
  { token: 'status/warning', hex: '#E46F00', ref: 'orange-80', desc: '주의 필요/불확실한 맥락' },
]
</script>

<template>
  <div class="p-12 bg-white max-w-[1200px] font-sans">
    <h1 class="text-size-32 font-bold text-grey-100 mb-2">Colours</h1>
    <p class="text-size-16 text-grey-60 mb-12">
      디자인 시스템의 색상 토큰을 정의합니다. Primitive 색상을 기반으로 Semantic 색상이 구성됩니다.
    </p>

    <hr class="border-grey-30 mb-10" />

    <h2 class="text-size-24 font-bold text-grey-100 mb-8">Primitive Colours</h2>

    <div v-for="palette in primitives" :key="palette.name" class="mb-10">
      <h3 class="text-size-18 font-semibold text-grey-90 mb-4">{{ palette.name }}</h3>
      <div class="flex gap-2 flex-wrap">
        <div v-for="c in palette.colors" :key="c.token" class="flex flex-col items-center gap-1.5 w-[80px]">
          <div
            class="w-16 h-16 rounded-md border border-grey-30"
            :style="{ backgroundColor: c.hex }"
          />
          <span class="text-[11px] font-semibold text-grey-80 text-center">{{ c.token }}</span>
          <span class="text-[10px] text-grey-60 text-center">{{ c.hex }}</span>
        </div>
      </div>
    </div>

    <hr class="border-grey-30 mb-10" />

    <h2 class="text-size-24 font-bold text-grey-100 mb-2">Semantic Colours</h2>
    <p class="text-size-14 text-grey-60 mb-8">
      Primitive 색상을 의미에 맞게 매핑한 Semantic 색상 토큰입니다.
    </p>

    <!-- CTA -->
    <h3 class="text-size-18 font-semibold text-grey-90 mb-4">CTA</h3>
    <table class="w-full border-collapse mb-10 text-size-14">
      <thead>
        <tr class="border-b-2 border-grey-30">
          <th class="text-left p-3 text-grey-90 font-semibold">Swatch</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Token</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Reference</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in semanticCta" :key="item.token" class="border-b border-grey-30">
          <td class="p-3"><div class="w-8 h-8 rounded-md border border-grey-30" :style="{ backgroundColor: item.hex }" /></td>
          <td class="p-3"><code class="bg-grey-20 px-2 py-0.5 rounded-sm text-size-13 text-navy-80">{{ item.token }}</code></td>
          <td class="p-3 text-grey-80">{{ item.ref }}</td>
          <td class="p-3 text-grey-70">{{ item.desc }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Label -->
    <h3 class="text-size-18 font-semibold text-grey-90 mb-4">Label</h3>
    <table class="w-full border-collapse mb-10 text-size-14">
      <thead>
        <tr class="border-b-2 border-grey-30">
          <th class="text-left p-3 text-grey-90 font-semibold">Swatch</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Token</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Reference</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in semanticLabel" :key="item.token" class="border-b border-grey-30">
          <td class="p-3"><div class="w-8 h-8 rounded-md border border-grey-30" :style="{ backgroundColor: item.hex }" /></td>
          <td class="p-3"><code class="bg-grey-20 px-2 py-0.5 rounded-sm text-size-13 text-navy-80">{{ item.token }}</code></td>
          <td class="p-3 text-grey-80">{{ item.ref }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Background -->
    <h3 class="text-size-18 font-semibold text-grey-90 mb-4">Background</h3>
    <table class="w-full border-collapse mb-10 text-size-14">
      <thead>
        <tr class="border-b-2 border-grey-30">
          <th class="text-left p-3 text-grey-90 font-semibold">Swatch</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Token</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Reference</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in semanticBg" :key="item.token" class="border-b border-grey-30">
          <td class="p-3"><div class="w-8 h-8 rounded-md border border-grey-30" :style="{ backgroundColor: item.hex }" /></td>
          <td class="p-3"><code class="bg-grey-20 px-2 py-0.5 rounded-sm text-size-13 text-navy-80">{{ item.token }}</code></td>
          <td class="p-3 text-grey-80">{{ item.ref }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Status -->
    <h3 class="text-size-18 font-semibold text-grey-90 mb-4">Status / Context</h3>
    <table class="w-full border-collapse mb-10 text-size-14">
      <thead>
        <tr class="border-b-2 border-grey-30">
          <th class="text-left p-3 text-grey-90 font-semibold">Swatch</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Token</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Reference</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in semanticStatus" :key="item.token" class="border-b border-grey-30">
          <td class="p-3"><div class="w-8 h-8 rounded-md border border-grey-30" :style="{ backgroundColor: item.hex }" /></td>
          <td class="p-3"><code class="bg-grey-20 px-2 py-0.5 rounded-sm text-size-13 text-navy-80">{{ item.token }}</code></td>
          <td class="p-3 text-grey-80">{{ item.ref }}</td>
          <td class="p-3 text-grey-70">{{ item.desc }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
