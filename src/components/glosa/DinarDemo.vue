<script setup lang="ts">
import { computed, ref } from 'vue';

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
      <h3 class="font-hand text-[40px] leading-none font-bold text-[#8b1a1a]">Dinar popular</h3>
      <p class="text-sm">Arròs amb verdures i bolets · hamburguesa vegetal o botifarra</p>
    </div>
    <div v-for="row in [{ label: 'adults', price: ADULT, ref: adults }, { label: 'infants', price: CHILD, ref: children }]" :key="row.label" class="flex items-center justify-between gap-4">
      <span class="font-bold">{{ row.label }} · <span class="text-[#e5006d]">{{ row.price }}€</span></span>
      <div class="flex items-center gap-3" role="group" :aria-label="`Quants ${row.label}`">
        <button type="button" :class="btn" :aria-label="`Un ${row.label === 'adults' ? 'adult' : 'infant'} menys`" :disabled="row.ref.value === 0" @click="step(row.ref, -1)">−</button>
        <span class="w-8 text-center text-2xl font-bold tabular-nums" aria-live="polite">{{ row.ref.value }}</span>
        <button type="button" :class="btn" :aria-label="`Un ${row.label === 'adults' ? 'adult' : 'infant'} més`" @click="step(row.ref, 1)">+</button>
      </div>
    </div>
    <div class="flex items-baseline justify-between border-t-2 border-[#111111] pt-4">
      <span class="font-bold">Total</span>
      <span class="font-hand text-5xl leading-none font-bold text-[#e5006d]" aria-live="polite">{{ total }}€</span>
    </div>
    <p class="text-sm">Això és una mostra. Les reserves de debò es fan a la web, i reben un correu de confirmació.</p>
  </div>
</template>
