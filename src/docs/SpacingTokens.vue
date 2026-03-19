<script setup lang="ts">
const primitives = [
  { token: 'space-2', px: 2 },
  { token: 'space-4', px: 4 },
  { token: 'space-6', px: 6 },
  { token: 'space-8', px: 8 },
  { token: 'space-12', px: 12 },
  { token: 'space-16', px: 16 },
  { token: 'space-20', px: 20 },
  { token: 'space-24', px: 24 },
  { token: 'space-28', px: 28 },
  { token: 'space-32', px: 32 },
  { token: 'space-36', px: 36 },
  { token: 'space-40', px: 40 },
  { token: 'space-48', px: 48 },
  { token: 'space-56', px: 56 },
  { token: 'space-64', px: 64 },
  { token: 'space-80', px: 80 },
  { token: 'space-112', px: 112 },
]

const semanticMargin = [
  { token: 'margin-02', ref: 'space-2', px: 2 },
  { token: 'margin-04', ref: 'space-4', px: 4 },
  { token: 'margin-08', ref: 'space-8', px: 8 },
  { token: 'margin-12', ref: 'space-12', px: 12 },
  { token: 'margin-16', ref: 'space-16', px: 16 },
  { token: 'margin-20', ref: 'space-20', px: 20 },
  { token: 'margin-24', ref: 'space-24', px: 24 },
  { token: 'margin-28', ref: 'space-28', px: 28 },
]

const semanticPadding = [
  { token: 'padding-02', ref: 'space-2', px: 2 },
  { token: 'padding-04', ref: 'space-4', px: 4 },
  { token: 'padding-06', ref: 'space-6', px: 6 },
  { token: 'padding-08', ref: 'space-8', px: 8 },
  { token: 'padding-12', ref: 'space-12', px: 12 },
  { token: 'padding-16', ref: 'space-16', px: 16 },
  { token: 'padding-20', ref: 'space-20', px: 20 },
  { token: 'padding-24', ref: 'space-24', px: 24 },
  { token: 'padding-28', ref: 'space-28', px: 28 },
]

// Scale the bar: max px is 112, max bar width is 560px (5x scale)
const BAR_SCALE = 5
</script>

<template>
  <div class="p-12 bg-white max-w-[1200px] font-sans">
    <h1 class="text-size-32 font-bold text-grey-100 mb-2">Spacing</h1>
    <p class="text-size-16 text-grey-60 mb-12">
      디자인 시스템의 간격(Spacing) 토큰을 정의합니다. 모든 여백과 간격은 이 토큰을 기반으로 적용됩니다.
    </p>

    <hr class="border-grey-30 mb-10" />

    <h2 class="text-size-24 font-bold text-grey-100 mb-8">Primitive Spacing</h2>

    <div class="border border-grey-30 rounded-lg overflow-hidden mb-12">
      <!-- Header -->
      <div class="grid grid-cols-[160px_1fr_80px] bg-grey-20 border-b border-grey-30">
        <div class="p-4 text-size-13 font-semibold text-grey-70">Token</div>
        <div class="p-4 text-size-13 font-semibold text-grey-70 border-l border-grey-30">Visual</div>
        <div class="p-4 text-size-13 font-semibold text-grey-70 border-l border-grey-30">Value</div>
      </div>
      <!-- Rows -->
      <div
        v-for="item in primitives"
        :key="item.token"
        class="grid grid-cols-[160px_1fr_80px] border-b border-grey-30 last:border-b-0 items-center"
      >
        <div class="p-4">
          <code class="bg-grey-20 px-2 py-0.5 rounded text-size-13 text-navy-80">{{ item.token }}</code>
        </div>
        <div class="p-4 border-l border-grey-30 flex items-center">
          <div
            class="rounded-sm bg-navy-80"
            :style="{ width: `${item.px * BAR_SCALE}px`, height: '20px' }"
          />
        </div>
        <div class="p-4 border-l border-grey-30 text-size-13 text-grey-70">{{ item.px }}px</div>
      </div>
    </div>

    <hr class="border-grey-30 mb-10" />

    <h2 class="text-size-24 font-bold text-grey-100 mb-2">Semantic Spacing</h2>
    <p class="text-size-14 text-grey-60 mb-8">
      Primitive spacing을 의미에 맞게 매핑한 Semantic 간격 토큰입니다.
    </p>

    <!-- Margin -->
    <h3 class="text-size-18 font-semibold text-grey-90 mb-4">Margin</h3>
    <table class="w-full border-collapse mb-10 text-size-14">
      <thead>
        <tr class="border-b-2 border-grey-30">
          <th class="text-left p-3 text-grey-90 font-semibold w-[200px]">Token</th>
          <th class="text-left p-3 text-grey-90 font-semibold w-[160px]">Reference</th>
          <th class="text-left p-3 text-grey-90 font-semibold w-[80px]">Value</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Visual</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in semanticMargin" :key="item.token" class="border-b border-grey-30">
          <td class="p-3"><code class="bg-grey-20 px-2 py-0.5 rounded text-size-13 text-navy-80">{{ item.token }}</code></td>
          <td class="p-3 text-grey-80">{{ item.ref }}</td>
          <td class="p-3 text-grey-70">{{ item.px }}px</td>
          <td class="p-3">
            <div
              class="rounded-sm bg-navy-80"
              :style="{ width: `${item.px * BAR_SCALE}px`, height: '20px' }"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Padding -->
    <h3 class="text-size-18 font-semibold text-grey-90 mb-4">Padding</h3>
    <table class="w-full border-collapse mb-10 text-size-14">
      <thead>
        <tr class="border-b-2 border-grey-30">
          <th class="text-left p-3 text-grey-90 font-semibold w-[200px]">Token</th>
          <th class="text-left p-3 text-grey-90 font-semibold w-[160px]">Reference</th>
          <th class="text-left p-3 text-grey-90 font-semibold w-[80px]">Value</th>
          <th class="text-left p-3 text-grey-90 font-semibold">Visual</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in semanticPadding" :key="item.token" class="border-b border-grey-30">
          <td class="p-3"><code class="bg-grey-20 px-2 py-0.5 rounded text-size-13 text-navy-80">{{ item.token }}</code></td>
          <td class="p-3 text-grey-80">{{ item.ref }}</td>
          <td class="p-3 text-grey-70">{{ item.px }}px</td>
          <td class="p-3">
            <div
              class="rounded-sm bg-navy-80"
              :style="{ width: `${item.px * BAR_SCALE}px`, height: '20px' }"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
