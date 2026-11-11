<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const thumbs = ['#161d47', '#1f2a5c', '#2c4a7a', '#3f7f9a', '#6fb3c4', '#9fd3f0', '#cfe3c0', '#f0d48a', '#f2a65a', '#d9743c', '#a8502f', '#5e261f'];

const playing = ref(true);
const pos = ref(30);
const inP = ref(22);
const outP = ref(68);
let timer: ReturnType<typeof setInterval> | undefined;

onMounted(() => {
  timer = setInterval(() => {
    if (!playing.value) return;
    let p = pos.value + 0.5;
    if (p >= outP.value || p < inP.value) p = inP.value;
    pos.value = p;
  }, 100);
});
onBeforeUnmount(() => clearInterval(timer));

/** The demo clip is one minute long: 100% = 60 s. */
const tc = (p: number) => `0:${String(Math.round(p * 0.6)).padStart(2, '0')}`;
const inLabel = computed(() => tc(inP.value));
const outLabel = computed(() => tc(outP.value));
const posLabel = computed(() => tc(pos.value));

const markIn = () => (inP.value = Math.min(pos.value, outP.value - 6));
const markOut = () => (outP.value = Math.max(pos.value, inP.value + 6));
const resetLoop = () => {
  inP.value = 0;
  outP.value = 100;
};

const keyClass = 'min-h-[46px] cursor-pointer rounded-[10px] border border-b-4 border-[#454c60] bg-[#1b2030] px-4 text-[#f3f1ec] hover:bg-[#242b3e] active:translate-y-0.5';
</script>

<template>
  <div class="flex min-w-0 flex-col gap-4 rounded-[20px] border border-[#232838] bg-[#10131c] p-[22px]">
    <div class="flex justify-between font-mono text-[13px] text-[#c5c9d6]">
      <span>entrada {{ inLabel }}</span>
      <span class="text-[#ffb454]">cap {{ posLabel }}</span>
      <span>sortida {{ outLabel }}</span>
    </div>
    <div class="relative flex h-[84px] overflow-hidden rounded-[10px]" aria-hidden="true">
      <div v-for="c in thumbs" :key="c" class="flex-1" :style="{ background: c }"></div>
      <div class="absolute inset-y-0 left-0 bg-[#07090f]/70" :style="{ width: inP + '%' }"></div>
      <div class="absolute inset-y-0 right-0 bg-[#07090f]/70" :style="{ width: 100 - outP + '%' }"></div>
      <div class="absolute inset-y-0 box-border rounded-lg border-[3px] border-[#ffb454]" :style="{ left: inP + '%', width: outP - inP + '%' }"></div>
      <div class="absolute inset-y-0 w-[3px] bg-white" :style="{ left: pos + '%' }"></div>
    </div>
    <div class="flex flex-wrap gap-2.5 font-mono text-[13px]">
      <button type="button" :class="keyClass" :aria-pressed="playing" @click="playing = !playing">Espai · {{ playing ? 'pausa' : 'reprodueix' }}</button>
      <button type="button" :class="keyClass" @click="markIn">I · entrada</button>
      <button type="button" :class="keyClass" @click="markOut">O · sortida</button>
      <button type="button" :class="keyClass" @click="resetLoop">Tot el vídeo</button>
    </div>
  </div>
</template>
