<script setup lang="ts">
const shadows = [
  {
    name: 'Shadow / Small',
    token: 'shadow-small',
    value: '0px 1px 2px 0px rgba(13, 21, 42, 0.08)',
    cssVar: '0px 1px 2px 0px rgba(13, 21, 42, 0.08)',
  },
  {
    name: 'Shadow / Regular',
    token: 'shadow-regular',
    value: '0px 2px 4px 0px rgba(13, 21, 42, 0.08)',
    cssVar: '0px 2px 4px 0px rgba(13, 21, 42, 0.08)',
  },
  {
    name: 'Shadow / Medium',
    token: 'shadow-medium',
    value: '0px 4px 8px 0px rgba(13, 21, 42, 0.08)',
    cssVar: '0px 4px 8px 0px rgba(13, 21, 42, 0.08)',
  },
  {
    name: 'Shadow / Large',
    token: 'shadow-large',
    value: '0px 8px 16px 0px rgba(13, 21, 42, 0.08)',
    cssVar: '0px 8px 16px 0px rgba(13, 21, 42, 0.08)',
  },
]
</script>

<template>
  <div class="p-12 bg-grey-20 max-w-[1200px] font-sans min-h-screen">
    <h1 class="text-size-32 font-bold text-grey-100 mb-2">Shadows</h1>
    <p class="text-size-16 text-grey-60 mb-12">
      디자인 시스템의 그림자(Shadow) 토큰을 정의합니다. 컴포넌트의 깊이감과 계층을 표현합니다.
    </p>

    <hr class="border-grey-40 mb-10" />

    <h2 class="text-size-24 font-bold text-grey-100 mb-8">Shadow Levels</h2>

    <div class="flex gap-8 flex-wrap">
      <div
        v-for="shadow in shadows"
        :key="shadow.token"
        class="flex flex-col items-center gap-4"
      >
        <!-- Shadow card -->
        <div
          class="bg-white flex items-center justify-center"
          :style="{
            width: '200px',
            height: '150px',
            borderRadius: '12px',
            boxShadow: shadow.value,
          }"
        >
          <span class="text-size-13 font-semibold text-grey-60">{{ shadow.name }}</span>
        </div>

        <!-- Meta -->
        <div class="flex flex-col items-center gap-1.5 max-w-[200px]">
          <code class="bg-white px-2 py-0.5 rounded-sm text-size-13 text-navy-80 border border-grey-30">
            {{ shadow.token }}
          </code>
          <span class="text-[11px] text-grey-60 text-center leading-relaxed">{{ shadow.cssVar }}</span>
        </div>
      </div>
    </div>

    <hr class="border-grey-40 mt-12 mb-10" />

    <!-- Token reference table -->
    <h2 class="text-size-24 font-bold text-grey-100 mb-6">Token Reference</h2>
    <table class="w-full border-collapse text-size-14">
      <thead>
        <tr class="border-b-2 border-grey-40">
          <th class="text-left p-3 text-grey-90 font-semibold bg-grey-20">Preview</th>
          <th class="text-left p-3 text-grey-90 font-semibold bg-grey-20">Token</th>
          <th class="text-left p-3 text-grey-90 font-semibold bg-grey-20">CSS Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shadow in shadows" :key="shadow.token" class="border-b border-grey-30 bg-white">
          <td class="p-4">
            <div
              class="bg-white border border-grey-30"
              :style="{
                width: '60px',
                height: '40px',
                borderRadius: '8px',
                boxShadow: shadow.value,
              }"
            />
          </td>
          <td class="p-3">
            <code class="bg-grey-20 px-2 py-0.5 rounded-sm text-size-13 text-navy-80">{{ shadow.token }}</code>
          </td>
          <td class="p-3 text-grey-70 font-mono text-[12px]">{{ shadow.cssVar }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
