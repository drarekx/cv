<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { scene, startClock, wallpy, type Moment, type Scene } from './store';
import type { WallpyText } from '../../i18n/pages/wallpy';

/**
 * Texts and the home link come from the page (src/i18n/pages/wallpy.ts): islands can't import the dictionaries.
 * The language switcher is an Astro component, so the page passes it in through the `lang` slot.
 */
const props = defineProps<{ t: WallpyText['hero']; homeHref: string }>();

const scenes: Record<Scene, { sky: string; hillA: string; hillB: string; orb: string; orbLeft: string; orbTop: string; cloud: string; stars: number; clock: string }> = {
  dawn: { sky: '#0b1030', hillA: '#161d47', hillB: '#0a0e26', orb: '#dfe6ff', orbLeft: '72%', orbTop: '90px', cloud: '#1c2454', stars: 1, clock: '#ffffff' },
  morning: { sky: '#9fd3f0', hillA: '#3f8f6b', hillB: '#245a44', orb: '#fff0a8', orbLeft: '58%', orbTop: '250px', cloud: '#e6f4fb', stars: 0, clock: '#0b2a3d' },
  afternoon: { sky: '#f2a65a', hillA: '#a8502f', hillB: '#5e261f', orb: '#ffe2a6', orbLeft: '80%', orbTop: '300px', cloud: '#f7c592', stars: 0, clock: '#2a1208' },
  night: { sky: '#1a1440', hillA: '#2e2266', hillB: '#130d2e', orb: '#f4f0ff', orbLeft: '46%', orbTop: '70px', cloud: '#2a2160', stars: 0.9, clock: '#ffffff' },
};

const moments: { id: Moment; label: string }[] = (['auto', 'dawn', 'morning', 'afternoon', 'night'] as Moment[]).map((id) => ({ id, label: props.t.moments[id] }));

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

const pad = (n: number) => String(n).padStart(2, '0');
/** Fills the {day} {date} {month} {time} placeholders of a date template (order differs between languages). */
const fill = (tpl: string, v: Record<string, string>) => tpl.replace(/\{(\w+)\}/g, (_, k: string) => v[k]);

const clock = computed(() => (wallpy.now ? `${pad(wallpy.now.getHours())}:${pad(wallpy.now.getMinutes())}` : '--:--'));
const dateLong = computed(() => {
  const d = wallpy.now;
  if (!d) return '';
  return fill(props.t.dateLong, { day: props.t.days[d.getDay()], date: String(d.getDate()), month: props.t.monthsOf[d.getMonth()], time: clock.value });
});
const menuDate = computed(() => {
  const d = wallpy.now;
  if (!d) return '';
  return fill(props.t.dateMenu, { day: props.t.daysShort[d.getDay()], date: String(d.getDate()), month: props.t.monthsShort[d.getMonth()], time: clock.value });
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
        :class="anim && 'motion-safe:animate-twinkle'"
        :style="{ left: x + '%', top: y + '%', width: size + 'px', height: size + 'px', animationDelay: i * 0.6 + 's' }"
      ></span>
    </div>
    <div
      aria-hidden="true"
      class="absolute h-[150px] w-[150px] rounded-full transition-[background] duration-[1800ms] motion-safe:transition-all"
      :style="{ left: sc.orbLeft, top: sc.orbTop, background: sc.orb }"
    ></div>
    <div
      v-for="(c, i) in clouds"
      :key="i"
      aria-hidden="true"
      class="cloud-drift absolute left-0 rounded-full transition-[background] duration-[1800ms]"
      :style="{
        top: c.top + 'px', width: c.w + 'px', height: c.h + 'px', background: sc.cloud,
        '--drift-dur': c.dur + 's', '--drift-delay': c.delay + 's',
        animationPlayState: covered ? 'paused' : 'running',
      }"
    ></div>
    <svg aria-hidden="true" viewBox="0 0 1440 360" preserveAspectRatio="none" class="absolute bottom-0 left-0 h-[360px] w-full">
      <path d="M0 190 Q240 40 520 170 T1000 120 T1440 150 V360 H0Z" class="transition-[fill] duration-[1800ms]" :style="{ fill: sc.hillA }"></path>
      <path d="M0 270 Q300 150 640 250 T1180 220 T1440 250 V360 H0Z" class="transition-[fill] duration-[1800ms]" :style="{ fill: sc.hillB }"></path>
    </svg>

    <div class="relative flex flex-wrap items-center justify-between gap-x-5 gap-y-1 bg-[#07090f]/80 px-5 font-sora text-[13px]">
      <a :href="homeHref" class="flex min-h-11 items-center text-[#f3f1ec] no-underline hover:text-[#ffb454]">{{ t.back }}</a>
      <div class="flex items-center gap-[18px]">
        <span v-if="covered" class="font-semibold text-[#ffb454]">{{ t.paused }}</span>
        <span class="font-semibold">Wallpy</span>
        <span class="hidden sm:inline">{{ menuDate }}</span>
        <slot name="lang" />
      </div>
    </div>

    <div class="relative mx-auto box-border flex w-full max-w-[1280px] grow flex-wrap items-start justify-between gap-8 px-6 pt-12 pb-6">
      <div
        class="box-border min-w-0 overflow-hidden rounded-2xl border border-[#2c3242] bg-[#10131c] motion-safe:transition-[flex-basis] duration-500"
        :style="{ flex: covered ? '1 1 100%' : '0 1 600px' }"
      >
        <div class="flex h-10 items-center gap-2 border-b border-[#2c3242] bg-[#171b27] px-3.5">
          <span v-for="n in 3" :key="n" aria-hidden="true" class="h-3 w-3 rounded-full bg-[#454c60]"></span>
          <span class="ml-2 text-xs text-[#a9afc0]">Wallpy — v1.10.0</span>
        </div>
        <div class="flex flex-col gap-[18px] p-8">
          <h1 class="font-sora text-[clamp(34px,4.6vw,60px)] leading-[1.04] font-bold tracking-[-0.03em]">
            {{ t.h1Start }} <span class="text-[#ffb454]">{{ t.h1Accent }}</span>
          </h1>
          <p class="max-w-[560px] text-lg text-[#c5c9d6]">{{ t.text }}</p>
          <div class="flex flex-wrap gap-3">
            <a href="#installa" class="flex min-h-[50px] items-center rounded-full bg-[#ffb454] px-6 font-semibold text-[#1c1206] no-underline hover:bg-white">{{ t.install }}</a>
            <button
              type="button"
              class="min-h-[50px] cursor-pointer rounded-full border border-[#5a6178] bg-transparent px-6 font-semibold text-[#f3f1ec] hover:border-[#f3f1ec]"
              :aria-pressed="covered"
              @click="covered = !covered"
            >
              {{ covered ? t.unmaximize : t.maximize }}
            </button>
          </div>
          <p class="text-[13px] text-[#a9afc0]">{{ t.tryIt }}</p>
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
      <div role="group" :aria-label="t.momentLabel" class="flex flex-wrap justify-center gap-1.5 rounded-[30px] bg-[#07090f]/80 p-1.5">
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
      <div class="rounded-xl bg-[#07090f]/80 px-3 py-1 text-[13px] text-[#c5c9d6]">{{ t.momentHint }}</div>
    </div>
  </section>
</template>
