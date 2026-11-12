<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

interface Palette {
  id: string;
  label: string;
  bg: string;
  stripe: string;
  accent: string;
  bright: string;
  ink: string;
  paper: string;
}

/** The first one is the real 2026 poster palette (the app's defaults); the others are examples. */
const palettes: Palette[] = [
  { id: '2026', label: 'Cartell 2026', bg: '#f4a3b9', stripe: '#8fd94a', accent: '#e5006d', bright: '#ff2e88', ink: '#111111', paper: '#fdf6ec' },
  { id: 'blau', label: 'Exemple: blau i taronja', bg: '#9cc7f2', stripe: '#ff8a3d', accent: '#1f45b8', bright: '#3d6bff', ink: '#111111', paper: '#f6f4ee' },
  { id: 'groc', label: 'Exemple: groc i negre', bg: '#ffd23f', stripe: '#111111', accent: '#b3261e', bright: '#ff4d3d', ink: '#111111', paper: '#fffaf0' },
];

const patterns = [
  { id: 'stripes-v', label: 'Ratlles verticals' },
  { id: 'stripes-h', label: 'Ratlles horitzontals' },
  { id: 'flat', label: 'Color pla' },
] as const;

const palette = ref(palettes[0]);
const pattern = ref<(typeof patterns)[number]['id']>('stripes-v');

/** Same drawing as the app's shared/backgrounds.ts: 46px of background, 6px of stripe. */
const background = computed(() => {
  const { bg, stripe } = palette.value;
  if (pattern.value === 'flat') return bg;
  const angle = pattern.value === 'stripes-v' ? '90deg' : '0deg';
  return `repeating-linear-gradient(${angle}, ${bg} 0 46px, ${stripe} 46px 52px, ${bg} 52px 96px)`;
});

const target = new Date('2026-11-21T16:30:00+01:00').getTime();
const now = ref<number | null>(null);
let timer: ReturnType<typeof setInterval> | undefined;
onMounted(() => {
  now.value = Date.now();
  timer = setInterval(() => (now.value = Date.now()), 1000);
});
onBeforeUnmount(() => clearInterval(timer));

const left = computed(() => {
  if (now.value === null) return null;
  const s = Math.max(0, Math.floor((target - now.value) / 1000));
  return { done: s === 0, parts: [[Math.floor(s / 86400), 'dies'], [Math.floor(s / 3600) % 24, 'h'], [Math.floor(s / 60) % 60, 'min'], [s % 60, 'seg']] as const };
});
</script>

<template>
  <section :style="{ '--c-accent': palette.accent, '--c-ink': palette.ink, '--c-paper': palette.paper }">
    <div class="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 text-sm text-white" :style="{ background: palette.ink }">
      <a href="/" class="flex min-h-11 items-center text-white hover:underline">← Gerard Fortea</a>
      <span class="font-bold" :style="{ color: palette.bright }">5è Combat de Glosa de Tortellà</span>
      <a href="https://combatglosa.casinotortella.cat/" class="flex min-h-11 items-center text-white hover:underline">Visita la web</a>
    </div>

    <div class="px-5 py-14 transition-[background] duration-500 sm:py-20" :style="{ background }">
      <div
        class="mx-auto flex max-w-[860px] flex-col items-center gap-5 px-6 py-10 text-center shadow-[8px_8px_0_var(--c-ink)] sm:px-12"
        :style="{ background: palette.paper, color: palette.ink, border: `3px solid ${palette.ink}` }"
      >
        <p class="text-sm font-bold tracking-[0.12em] uppercase">Landing i panell de gestió</p>
        <h1 class="font-hand text-[clamp(48px,8vw,96px)] leading-[0.95] font-bold transition-colors duration-500" :style="{ color: palette.accent }">
          Combat de Glosa i Corrandes de Tortellà
        </h1>
        <p class="text-lg font-bold">21 de novembre · 16:30h · Casino de Tortellà</p>
        <div v-if="left && !left.done" class="flex flex-wrap justify-center gap-3" aria-label="Compte enrere fins al Combat">
          <div v-for="[n, unit] in left.parts" :key="unit" class="flex min-w-[76px] flex-col items-center px-3 py-2 text-white" :style="{ background: palette.ink }">
            <span class="text-3xl leading-none font-bold tabular-nums" :style="{ color: unit === 'dies' ? palette.bright : '#ffffff' }">{{ n }}</span>
            <span class="text-xs">{{ unit }}</span>
          </div>
        </div>
        <p v-else-if="left && left.done" class="font-hand text-3xl font-bold">Ja s'ha fet. Fins a l'any que ve!</p>
        <div v-else aria-hidden="true" class="h-[58px]"></div>
        <p class="max-w-[560px] text-[17px]">
          La web de l'acte: programa, dinar popular amb reserves, inscripció de glosadors, vídeos de les edicions anteriors i
          un panell perquè l'organització ho canviï tot sense tocar codi.
        </p>
      </div>
    </div>

    <div class="bg-[#111111] text-white">
      <div class="mx-auto flex max-w-[1100px] flex-col gap-4 px-6 py-8">
        <p class="text-sm"><strong>Prova el panell.</strong> Cada edició fa servir els colors del seu cartell: es trien al <code class="font-mono">/admin</code> i la web es repinta sola.</p>
        <div class="flex flex-wrap gap-x-8 gap-y-4">
          <div role="group" aria-label="Paleta" class="flex flex-wrap gap-2">
            <button
              v-for="p in palettes"
              :key="p.id"
              type="button"
              class="flex min-h-11 cursor-pointer items-center gap-2.5 border-2 px-3 text-sm"
              :class="palette.id === p.id ? 'border-white bg-white text-[#111111]' : 'border-white/40 bg-transparent text-white hover:border-white'"
              :aria-pressed="palette.id === p.id"
              @click="palette = p"
            >
              <span aria-hidden="true" class="flex">
                <span v-for="c in [p.bg, p.stripe, p.accent]" :key="c" class="h-5 w-3.5" :style="{ background: c }"></span>
              </span>
              {{ p.label }}
            </button>
          </div>
          <div role="group" aria-label="Fons" class="flex flex-wrap gap-2">
            <button
              v-for="pt in patterns"
              :key="pt.id"
              type="button"
              class="min-h-11 cursor-pointer border-2 px-3 text-sm"
              :class="pattern === pt.id ? 'border-white bg-white text-[#111111]' : 'border-white/40 bg-transparent text-white hover:border-white'"
              :aria-pressed="pattern === pt.id"
              @click="pattern = pt.id"
            >{{ pt.label }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
