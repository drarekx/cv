<script setup lang="ts">
import { computed, ref } from 'vue';
import type { GlosaText } from '../../i18n/pages/combat-glosa';

defineProps<{ t: GlosaText['dinar'] }>();

const ADULT = 15;
const CHILD = 10;
const adults = ref(2);
const children = ref(0);
const total = computed(() => adults.value * ADULT + children.value * CHILD);

const step = (r: typeof adults, d: number) => (r.value = Math.max(0, Math.min(20, r.value + d)));
const btn = 'h-11 w-11 cursor-pointer border-2 border-[#111111] bg-white text-xl font-bold hover:bg-[#8fd94a] disabled:cursor-not-allowed disabled:opacity-40';
</script>

<template>
  <div class="flex flex-col gap-5 border-[3px] border-[#111111] bg-[#fdf6ec] p-6 shadow-[8px_8px_0_#111111]">
    <div class="flex flex-col gap-1">
      <h3 class="font-hand text-[40px] leading-none font-bold text-[#8b1a1a]">{{ t.title }}</h3>
      <p class="text-sm">{{ t.menu }}</p>
    </div>
    <div v-for="row in ([{ key: 'adults', price: ADULT, ref: adults }, { key: 'children', price: CHILD, ref: children }] as const)" :key="row.key" class="flex items-center justify-between gap-4">
      <span class="font-bold">{{ t[row.key].label }} · <span class="text-[#e5006d]">{{ row.price }}€</span></span>
      <div class="flex items-center gap-3" role="group" :aria-label="t[row.key].howMany">
        <button type="button" :class="btn" :aria-label="t[row.key].less" :disabled="row.ref.value === 0" @click="step(row.ref, -1)">−</button>
        <span class="w-8 text-center text-2xl font-bold tabular-nums" aria-live="polite">{{ row.ref.value }}</span>
        <button type="button" :class="btn" :aria-label="t[row.key].more" @click="step(row.ref, 1)">+</button>
      </div>
    </div>
    <div class="flex items-baseline justify-between border-t-2 border-[#111111] pt-4">
      <span class="font-bold">{{ t.total }}</span>
      <span class="font-hand text-5xl leading-none font-bold text-[#e5006d]" aria-live="polite">{{ total }}€</span>
    </div>
    <p class="text-sm">{{ t.note }}</p>
  </div>
</template>
