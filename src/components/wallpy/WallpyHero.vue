<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { scene, startClock, wallpy, type Moment, type Scene } from './store';

const scenes: Record<Scene, { sky: string; hillA: string; hillB: string; orb: string; orbLeft: string; orbTop: string; cloud: string; stars: number; clock: string }> = {
  matinada: { sky: '#0b1030', hillA: '#161d47', hillB: '#0a0e26', orb: '#dfe6ff', orbLeft: '72%', orbTop: '90px', cloud: '#1c2454', stars: 1, clock: '#ffffff' },
  mati: { sky: '#9fd3f0', hillA: '#3f8f6b', hillB: '#245a44', orb: '#fff0a8', orbLeft: '58%', orbTop: '250px', cloud: '#e6f4fb', stars: 0, clock: '#0b2a3d' },
  tarda: { sky: '#f2a65a', hillA: '#a8502f', hillB: '#5e261f', orb: '#ffe2a6', orbLeft: '80%', orbTop: '300px', cloud: '#f7c592', stars: 0, clock: '#2a1208' },
  nit: { sky: '#1a1440', hillA: '#2e2266', hillB: '#130d2e', orb: '#f4f0ff', orbLeft: '46%', orbTop: '70px', cloud: '#2a2160', stars: 0.9, clock: '#ffffff' },
};

const moments: { id: Moment; label: string }[] = [
  { id: 'auto', label: 'Automàtic' },
  { id: 'matinada', label: 'Matinada' },
  { id: 'mati', label: 'Matí' },
  { id: 'tarda', label: 'Tarda' },
  { id: 'nit', label: 'Nit' },
];

const stars = [
  [8, 16, 3, true], [22, 30, 2, false], [41, 12, 3, true], [56, 26, 2, false],
  [68, 9, 2, true], [84, 22, 3, false], [93, 38, 2, true],
] as const;

const clouds = [
  { top: 130, w: 260, h: 44, dur: 60, delay: 0 },
  { top: 230, w: 170, h: 30, dur: 85, delay: -30 },
  { top: 320, w: 320, h: 36, dur: 110, delay: -70 },
];

const covered = ref(false);
const sc = computed(() => scenes[scene.value]);

const days = ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'];
const months = ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre'];
const pad = (n: number) => String(n).padStart(2, '0');

const clock = computed(() => (wallpy.now ? `${pad(wallpy.now.getHours())}:${pad(wallpy.now.getMinutes())}` : '--:--'));
const dateLong = computed(() => {
  const d = wallpy.now;
  if (!d) return '';
  const m = months[d.getMonth()];
  return `${days[d.getDay()]}, ${d.getDate()} ${/^[aeiou]/.test(m) ? "d'" : 'de '}${m}`;
});
const menuDate = computed(() => {
  const d = wallpy.now;
  return d ? `${days[d.getDay()].slice(0, 2)}. ${d.getDate()} ${months[d.getMonth()].slice(0, 3)}. ${clock.value}` : '';
});

onMounted(startClock);
</script>

<template>
  <section class="relative flex min-h-[760px] flex-col overflow-hidden transition-[background] duration-[1800ms]" :style="{ background: sc.sky }">
    <div aria-hidden="true" class="absolute inset-0 transition-opacity duration-[1800ms]" :style="{ opacity: sc.stars }">
      <span
        v-for="([x, y, size, anim], i) in stars"
        :key="i"
        class="absolute rounded-full bg-white"
        :class="anim && 'animate-twinkle'"
        :style="{ left: x + '%', top: y + '%', width: size + 'px', height: size + 'px', animationDelay: i * 0.6 + 's' }"
      ></span>
    </div>
    <div
      aria-hidden="true"
      class="absolute h-[150px] w-[150px] rounded-full transition-all duration-[1800ms]"
      :style="{ left: sc.orbLeft, top: sc.orbTop, background: sc.orb }"
    ></div>
    <div
      v-for="(c, i) in clouds"
      :key="i"
      aria-hidden="true"
      class="absolute left-0 rounded-full transition-[background] duration-[1800ms]"
      :style="{
        top: c.top + 'px', width: c.w + 'px', height: c.h + 'px', background: sc.cloud,
        animation: `drift-wide ${c.dur}s linear infinite ${c.delay}s`,
        animationPlayState: covered ? 'paused' : 'running',
      }"
    ></div>
    <svg aria-hidden="true" viewBox="0 0 1440 360" preserveAspectRatio="none" class="absolute bottom-0 left-0 h-[360px] w-full">
      <path d="M0 190 Q240 40 520 170 T1000 120 T1440 150 V360 H0Z" class="transition-[fill] duration-[1800ms]" :style="{ fill: sc.hillA }"></path>
      <path d="M0 270 Q300 150 640 250 T1180 220 T1440 250 V360 H0Z" class="transition-[fill] duration-[1800ms]" :style="{ fill: sc.hillB }"></path>
    </svg>

    <div class="relative flex flex-wrap items-center justify-between gap-x-5 gap-y-1 bg-[#07090f]/80 px-5 font-sora text-[13px]">
      <a href="/" class="flex min-h-11 items-center text-[#f3f1ec] no-underline hover:text-[#ffb454]">← Gerard Fortea</a>
      <div class="flex items-center gap-[18px]">
        <span v-if="covered" class="font-semibold text-[#ffb454]">❙❙ fons en pausa</span>
        <span class="font-semibold">Wallpy</span>
        <span>{{ menuDate }}</span>
      </div>
    </div>

    <div class="relative mx-auto box-border flex w-full max-w-[1280px] grow flex-wrap items-start justify-between gap-8 px-6 pt-12 pb-6">
      <div
        class="box-border min-w-0 overflow-hidden rounded-2xl border border-[#2c3242] bg-[#10131c] transition-[flex-basis] duration-500"
        :style="{ flex: covered ? '1 1 100%' : '0 1 600px' }"
      >
        <div class="flex h-10 items-center gap-2 border-b border-[#2c3242] bg-[#171b27] px-3.5">
          <span v-for="n in 3" :key="n" aria-hidden="true" class="h-3 w-3 rounded-full bg-[#454c60]"></span>
          <span class="ml-2 text-xs text-[#a9afc0]">Wallpy — v1.10.0</span>
        </div>
        <div class="flex flex-col gap-[18px] p-8">
          <h1 class="font-sora text-[clamp(34px,4.6vw,60px)] leading-[1.04] font-bold tracking-[-0.03em]">
            El teu escriptori, <span class="text-[#ffb454]">en moviment.</span>
          </h1>
          <p class="max-w-[560px] text-lg text-[#c5c9d6]">
            Fons de pantalla amb vídeo per a macOS. Viu a la barra de menús, posa un vídeo en bucle darrere les teves
            finestres i es posa en pausa tot sol quan no el veus.
          </p>
          <div class="flex flex-wrap gap-3">
            <a href="#installa" class="flex min-h-[50px] items-center rounded-full bg-[#ffb454] px-6 font-semibold text-[#1c1206] no-underline hover:bg-white">Instal·la'l</a>
            <button
              type="button"
              class="min-h-[50px] cursor-pointer rounded-full border border-[#5a6178] bg-transparent px-6 font-semibold text-[#f3f1ec] hover:border-[#f3f1ec]"
              :aria-pressed="covered"
              @click="covered = !covered"
            >
              {{ covered ? 'Torna a deixar veure el fons' : 'Maximitza la finestra' }}
            </button>
          </div>
          <p class="text-[13px] text-[#a9afc0]">Prova-ho: quan una finestra tapa l'escriptori, Wallpy atura el vídeo per no gastar bateria.</p>
        </div>
      </div>
      <div
        v-if="!covered"
        class="flex-[1_1_240px] text-right font-sora transition-colors duration-[1800ms]"
        :style="{ color: sc.clock }"
      >
        <div class="text-[clamp(64px,10vw,148px)] leading-none font-light tracking-[-0.04em]">{{ clock }}</div>
        <div class="mt-1.5 text-lg font-semibold">{{ dateLong }}</div>
      </div>
    </div>

    <div class="relative flex flex-col items-center gap-2.5 px-6 pb-7">
      <div role="group" aria-label="Moment del dia" class="flex flex-wrap justify-center gap-1.5 rounded-[30px] bg-[#07090f]/80 p-1.5">
        <button
          v-for="m in moments"
          :key="m.id"
          type="button"
          class="min-h-11 cursor-pointer rounded-full border-0 px-[18px] text-sm font-semibold"
          :class="wallpy.moment === m.id ? 'bg-[#ffb454] text-[#1c1206]' : 'bg-transparent text-[#f3f1ec] hover:bg-white/10'"
          :aria-pressed="wallpy.moment === m.id"
          @click="wallpy.moment = m.id"
        >
          {{ m.label }}
        </button>
      </div>
      <div class="rounded-xl bg-[#07090f]/80 px-3 py-1 text-[13px] text-[#c5c9d6]">Canvia el moment del dia: el fons canvia amb una fosa, com a l'app.</div>
    </div>
  </section>
</template>
