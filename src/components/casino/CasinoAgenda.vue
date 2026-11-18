<script setup lang="ts">
import { computed, ref } from 'vue';
import type { CasinoText } from '../../i18n/pages/casino-tortella';

const props = defineProps<{ t: CasinoText['agenda'] }>();

type CategoryKey = 'cinema' | 'popular';
type SpaceKey = 'galliner' | 'sala';

/** Keys are language-neutral; the visible labels come from `t`. */
interface Event {
  day: number;
  month: keyof CasinoText['agenda']['months'];
  id: keyof CasinoText['agenda']['titles'];
  category: CategoryKey;
  space?: SpaceKey;
  time?: string;
  free?: boolean;
  upcoming: boolean;
}

/** Real events from casino.mrdrarek.es/agenda, November 2026. */
const events: Event[] = [
  { day: 15, month: 'nov', id: 'cinema', category: 'cinema', space: 'galliner', time: '18:00', upcoming: true },
  { day: 21, month: 'nov', id: 'glosa', category: 'popular', space: 'sala', time: '16:30', upcoming: true },
  { day: 31, month: 'oct', id: 'castanyada', category: 'popular', space: 'galliner', time: '17:00', free: true, upcoming: false },
  { day: 10, month: 'oct', id: 'cursa', category: 'popular', upcoming: false },
  { day: 19, month: 'sep', id: 'urban', category: 'popular', upcoming: false },
  { day: 2, month: 'aug', id: 'sardinada', category: 'popular', time: '20:00', upcoming: false },
];

const categories = ['all', 'cinema', 'popular'] as const;
const spaces = ['all', 'galliner', 'sala'] as const;

const category = ref<(typeof categories)[number]>('all');
const space = ref<(typeof spaces)[number]>('all');

const visible = computed(() =>
  events.filter(
    (e) => (category.value === 'all' || e.category === category.value) && (space.value === 'all' || e.space === space.value),
  ),
);
const upcoming = computed(() => visible.value.filter((e) => e.upcoming));
const past = computed(() => visible.value.filter((e) => !e.upcoming));

const spaceLabel = (e: Event) => (e.space ? props.t.spaces[e.space] : undefined);
const meta = (e: Event, withNote: boolean) =>
  [spaceLabel(e), e.time, withNote && e.free ? props.t.free : undefined].filter(Boolean).join(' · ');

const chip = (on: boolean) =>
  on ? 'border-[#1c1c1c] bg-[#1c1c1c] text-white' : 'border-[#8b94a1] bg-white text-[#1c1c1c] hover:border-[#1c1c1c]';
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-wrap items-center gap-x-8 gap-y-3">
      <div role="group" :aria-label="t.categoryLabel" class="flex flex-wrap gap-2">
        <button
          v-for="c in categories"
          :key="c"
          type="button"
          class="min-h-11 cursor-pointer border px-4 text-sm font-medium"
          :class="chip(category === c)"
          :aria-pressed="category === c"
          @click="category = c"
        >{{ t.categories[c] }}</button>
      </div>
      <div role="group" :aria-label="t.spaceLabel" class="flex flex-wrap gap-2">
        <button
          v-for="s in spaces"
          :key="s"
          type="button"
          class="min-h-11 cursor-pointer border px-4 text-sm font-medium"
          :class="chip(space === s)"
          :aria-pressed="space === s"
          @click="space = s"
        >{{ t.spaces[s] }}</button>
      </div>
      <p class="text-sm text-[#5d6673]" aria-live="polite">{{ visible.length }} {{ visible.length === 1 ? t.countOne : t.countMany }}</p>
    </div>

    <div v-if="upcoming.length" class="flex flex-col">
      <h3 class="border-b-2 border-[#1c1c1c] pb-2 font-slab text-xl">{{ t.upcoming }}</h3>
      <article v-for="e in upcoming" :key="e.id" class="flex items-start gap-5 border-b border-[#c3c8cf] py-5">
        <div class="w-16 shrink-0 text-center">
          <div class="font-slab text-[44px] leading-none text-[#1c1c1c]">{{ e.day }}</div>
          <div class="mt-1 text-sm font-medium tracking-wide text-[#157f7c] uppercase">{{ t.months[e.month] }}</div>
        </div>
        <div class="flex min-w-0 flex-col gap-1.5">
          <span class="self-start bg-[#55d8d2] px-2 py-0.5 text-xs font-medium text-[#1c1c1c]">{{ t.categories[e.category] }}</span>
          <h4 class="font-slab text-[22px] leading-tight text-[#1c1c1c]">{{ t.titles[e.id] }}</h4>
          <p class="text-sm text-[#3d4756]">{{ meta(e, false) }}</p>
        </div>
      </article>
    </div>

    <div v-if="past.length" class="flex flex-col">
      <h3 class="border-b-2 border-[#1c1c1c] pb-2 font-slab text-xl">{{ t.past }}</h3>
      <article v-for="e in past" :key="e.id" class="flex items-baseline gap-5 border-b border-[#c3c8cf] py-3.5">
        <div class="w-16 shrink-0 text-center font-slab text-2xl text-[#3d4756]">{{ e.day }} <span class="text-xs uppercase">{{ t.months[e.month] }}</span></div>
        <div class="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 class="font-slab text-lg text-[#1c1c1c]">{{ t.titles[e.id] }}</h4>
          <span class="text-sm text-[#5d6673]">{{ meta(e, true) }}</span>
        </div>
      </article>
    </div>

    <p v-if="!visible.length" class="border border-[#8b94a1] p-5 text-[#3d4756]">{{ t.empty }}</p>
  </div>
</template>
