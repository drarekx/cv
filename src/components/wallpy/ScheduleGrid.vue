<script setup lang="ts">
import { onMounted } from 'vue';
import { scene, startClock } from './store';

const cols = [
  { id: 'sempre', label: 'Sempre' },
  { id: 'matinada', label: 'Matinada' },
  { id: 'mati', label: 'Matí' },
  { id: 'tarda', label: 'Tarda' },
  { id: 'nit', label: 'Nit' },
];

const rows: { name: string; cells: [string, string][] }[] = [
  { name: 'Pantalla 1', cells: [['—', '#232838'], ['Boira al bosc', '#161d47'], ['Costa al matí', '#9fd3f0'], ['Camp de blat', '#f2a65a'], ['Ciutat de nit', '#2e2266']] },
  { name: 'Pantalla 2', cells: [['Onades', '#3f8f6b'], ['—', '#232838'], ['—', '#232838'], ['—', '#232838'], ['Foc a terra', '#a8502f']] },
];

onMounted(startClock);
</script>

<template>
  <div class="overflow-x-auto rounded-[20px] border border-[#232838] bg-[#10131c] p-[18px]">
    <table class="w-full min-w-[640px] border-separate border-spacing-1.5 text-sm">
      <thead>
        <tr>
          <th scope="col" class="px-2.5 py-2 text-left font-medium text-[#a9afc0]">Pantalla</th>
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
