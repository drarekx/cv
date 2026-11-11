<script setup lang="ts">
import { computed, ref } from 'vue';

interface Event {
  day: number;
  month: string;
  monthLong: string;
  title: string;
  category: 'Cinema' | 'Cultura popular';
  space?: 'El Galliner' | 'La sala gran';
  time?: string;
  note?: string;
  upcoming: boolean;
}

/** Real events from casino.mrdrarek.es/agenda, November 2026. */
const events: Event[] = [
  { day: 15, month: 'nov', monthLong: 'Novembre', title: 'Mostra de Cinema Espiritual de Catalunya', category: 'Cinema', space: 'El Galliner', time: '18:00', upcoming: true },
  { day: 21, month: 'nov', monthLong: 'Novembre', title: '5è Combat de Glosa de Tortellà', category: 'Cultura popular', space: 'La sala gran', time: '16:30', upcoming: true },
  { day: 31, month: 'oct', monthLong: 'Octubre', title: 'Festa de la Castanyada', category: 'Cultura popular', space: 'El Galliner', time: '17:00', note: 'Gratuït', upcoming: false },
  { day: 10, month: 'oct', monthLong: 'Octubre', title: '1a Cursa Antiracista de la Garrotxa', category: 'Cultura popular', upcoming: false },
  { day: 19, month: 'set', monthLong: 'Setembre', title: 'Tortellà Urban Fest 2026', category: 'Cultura popular', upcoming: false },
  { day: 2, month: 'ago', monthLong: 'Agost', title: 'Sardinada 2026', category: 'Cultura popular', time: '20:00', upcoming: false },
];

const categories = ['Totes', 'Cinema', 'Cultura popular'] as const;
const spaces = ['Tots', 'El Galliner', 'La sala gran'] as const;

const category = ref<(typeof categories)[number]>('Totes');
const space = ref<(typeof spaces)[number]>('Tots');

const visible = computed(() =>
  events.filter(
    (e) => (category.value === 'Totes' || e.category === category.value) && (space.value === 'Tots' || e.space === space.value),
  ),
);
const upcoming = computed(() => visible.value.filter((e) => e.upcoming));
const past = computed(() => visible.value.filter((e) => !e.upcoming));

const chip = (on: boolean) =>
  on ? 'border-[#1c1c1c] bg-[#1c1c1c] text-white' : 'border-[#8b94a1] bg-white text-[#1c1c1c] hover:border-[#1c1c1c]';
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-wrap items-center gap-x-8 gap-y-3">
      <div role="group" aria-label="Categoria" class="flex flex-wrap gap-2">
        <button
          v-for="c in categories"
          :key="c"
          type="button"
          class="min-h-11 cursor-pointer border px-4 text-sm font-medium"
          :class="chip(category === c)"
          :aria-pressed="category === c"
          @click="category = c"
        >{{ c }}</button>
      </div>
      <div role="group" aria-label="Espai" class="flex flex-wrap gap-2">
        <button
          v-for="s in spaces"
          :key="s"
          type="button"
          class="min-h-11 cursor-pointer border px-4 text-sm font-medium"
          :class="chip(space === s)"
          :aria-pressed="space === s"
          @click="space = s"
        >{{ s }}</button>
      </div>
      <p class="text-sm text-[#5d6673]" aria-live="polite">{{ visible.length }} {{ visible.length === 1 ? 'acte' : 'actes' }}</p>
    </div>

    <div v-if="upcoming.length" class="flex flex-col">
      <h3 class="border-b-2 border-[#1c1c1c] pb-2 font-slab text-xl">Ara i els propers mesos</h3>
      <article v-for="e in upcoming" :key="e.title" class="flex items-start gap-5 border-b border-[#c3c8cf] py-5">
        <div class="w-16 shrink-0 text-center">
          <div class="font-slab text-[44px] leading-none text-[#1c1c1c]">{{ e.day }}</div>
          <div class="mt-1 text-sm font-medium tracking-wide text-[#157f7c] uppercase">{{ e.month }}</div>
        </div>
        <div class="flex min-w-0 flex-col gap-1.5">
          <span class="self-start bg-[#55d8d2] px-2 py-0.5 text-xs font-medium text-[#1c1c1c]">{{ e.category }}</span>
          <h4 class="font-slab text-[22px] leading-tight text-[#1c1c1c]">{{ e.title }}</h4>
          <p class="text-sm text-[#3d4756]">{{ [e.space, e.time].filter(Boolean).join(' · ') }}</p>
        </div>
      </article>
    </div>

    <div v-if="past.length" class="flex flex-col">
      <h3 class="border-b-2 border-[#1c1c1c] pb-2 font-slab text-xl">Ja ho hem fet</h3>
      <article v-for="e in past" :key="e.title" class="flex items-baseline gap-5 border-b border-[#c3c8cf] py-3.5">
        <div class="w-16 shrink-0 text-center font-slab text-2xl text-[#3d4756]">{{ e.day }} <span class="text-xs uppercase">{{ e.month }}</span></div>
        <div class="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 class="font-slab text-lg text-[#1c1c1c]">{{ e.title }}</h4>
          <span class="text-sm text-[#5d6673]">{{ [e.space, e.time, e.note].filter(Boolean).join(' · ') }}</span>
        </div>
      </article>
    </div>

    <p v-if="!visible.length" class="border border-[#8b94a1] p-5 text-[#3d4756]">Cap acte amb aquests filtres.</p>
  </div>
</template>
