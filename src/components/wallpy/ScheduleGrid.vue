<script setup lang="ts">
import { onMounted } from 'vue';
import { scene, startClock } from './store';
import type { WallpyText } from '../../i18n/pages/wallpy';

// Texts come from the page (src/i18n/pages/wallpy.ts): islands can't import the dictionaries.
const props = defineProps<{ t: WallpyText['schedule'] }>();

/** `id` is what the shared store calls the moment (neutral, not shown); labels come from the dictionary. */
const cols = [
  { id: 'always', label: props.t.always },
  { id: 'dawn', label: props.t.dawn },
  { id: 'morning', label: props.t.morning },
  { id: 'afternoon', label: props.t.afternoon },
  { id: 'night', label: props.t.night },
];

/** Swatch colour of each demo cell, same shape as `t.cells`. */
const colors = [
  ['#232838', '#161d47', '#9fd3f0', '#f2a65a', '#2e2266'],
  ['#3f8f6b', '#232838', '#232838', '#232838', '#a8502f'],
];
const rows = props.t.cells.map((names, r) => ({
  name: props.t.screenN.replace('{n}', () => String(r + 1)),
  cells: names.map((name, i): [string, string] => [name, colors[r][i]]),
}));

onMounted(startClock);
</script>

<template>
  <div tabindex="0" role="region" :aria-label="t.label" class="overflow-x-auto rounded-[20px] border border-[#232838] bg-[#10131c] p-[18px]">
    <table class="w-full min-w-[640px] border-separate border-spacing-1.5 text-sm">
      <thead>
        <tr>
          <th scope="col" class="px-2.5 py-2 text-left font-medium text-[#a9afc0]">{{ t.screen }}</th>
          <th
            v-for="c in cols"
            :key="c.id"
            scope="col"
            class="rounded-[10px] px-2.5 py-2 font-semibold"
            :class="c.id === scene ? 'bg-[#ffb454] text-[#1c1206]' : 'bg-[#171b27] text-[#c5c9d6]'"
          >
            {{ c.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <th scope="row" class="px-2.5 py-2 text-left font-medium">{{ row.name }}</th>
          <td
            v-for="([name, color], i) in row.cells"
            :key="i"
            class="rounded-[10px] p-2.5"
            :class="cols[i].id === scene ? 'bg-[#2a2212] text-[#ffe7c2] outline-2 outline-[#ffb454]' : 'bg-[#171b27] text-[#c5c9d6]'"
          >
            <span aria-hidden="true" class="mb-1.5 block h-[34px] rounded-md" :style="{ background: color }"></span>{{ name }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
