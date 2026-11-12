<script setup lang="ts">
import { computed, ref } from 'vue';

/** Open apps by initial, in "most used first" order, like Atajoly's automatic letters. */
const map: Record<string, string[]> = {
  A: ['App Store'],
  C: ['Calendari', 'Calculadora'],
  F: ['Finder', 'Fotos'],
  M: ['Mail', 'Mapes', 'Música'],
  N: ['Notes'],
  P: ['Podcasts'],
  S: ['Safari'],
  T: ['Terminal'],
  X: ['Xcode'],
};
const colors: Record<string, string> = {
  'App Store': '#8ec5ff', Calendari: '#ff9d94', Calculadora: '#c9c6bb', Finder: '#9ad0f5', Fotos: '#ffd166',
  Mail: '#7fb8ff', Mapes: '#9be0a8', 'Música': '#ff8fa3', Notes: '#ffe08a', Podcasts: '#d4a5ff',
  Safari: '#8fd3ff', Terminal: '#b7f0c0', Xcode: '#a9c4ff',
};
const rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((r) => r.split(''));
const rowPad = ['0', '0 5%', '0 15%'];

const front = ref<string | null>('Safari');
const held = ref(true);
const log = ref('⌘ dret + S → Safari al davant');

const frontLetter = computed(() => (front.value ? Object.keys(map).find((l) => map[l].includes(front.value!)) : ''));
const dock = computed(() => Object.entries(map).flatMap(([letter, apps]) => apps.map((name) => ({ name, letter }))));

function press(letter: string) {
  const apps = map[letter];
  if (!held.value) return void (log.value = `Primer mantén ⌘ dret: sense ell, la ${letter} és una lletra normal.`);
  if (!apps) return void (log.value = `Cap app oberta comença per ${letter}.`);
  const i = front.value ? apps.indexOf(front.value) : -1;
  if (i < 0) {
    front.value = apps[0];
    log.value = `⌘ dret + ${letter} → ${apps[0]} al davant`;
  } else if (apps.length > 1) {
    front.value = apps[(i + 1) % apps.length];
    log.value = `Una altra vegada → següent app amb la ${letter}: ${front.value}`;
  } else {
    front.value = null;
    log.value = `Una altra vegada → ${apps[0]} s'amaga`;
  }
}

function toggleHeld() {
  held.value = !held.value;
  log.value = held.value ? '⌘ dret premut: tria una lletra.' : '⌘ dret deixat anar.';
}

function keyClass(letter: string) {
  if (letter === frontLetter.value) return 'bg-[#ff6a3d] text-[#1c1b19] border-b-[#c2441d]';
  if (map[letter]) return 'bg-white text-[#1c1b19] border-b-[#b9b6ab] hover:-translate-y-0.5';
  return 'bg-[#e2e0d9] text-[#5a584f] border-b-[#c6c3b8]';
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-4 rounded-3xl bg-[#1c1b19] p-[clamp(16px,2.4vw,28px)]">
      <div class="flex min-h-[200px] flex-wrap items-center justify-center gap-x-10 gap-y-5 p-3">
        <div v-if="front" :key="front" class="animate-pop flex items-center gap-5 rounded-2xl bg-[#f7f6f2] px-[30px] py-[22px]">
          <span
            aria-hidden="true"
            class="flex h-[84px] w-[84px] items-center justify-center rounded-[20px] font-display text-[44px] font-bold text-[#1c1b19]"
            :style="{ background: colors[front] }"
          >{{ frontLetter }}</span>
          <div class="text-left">
            <div class="font-display text-[32px] leading-[1.1] font-bold text-[#1c1b19]">{{ front }}</div>
            <div class="text-sm text-[#46443d]">al davant</div>
          </div>
        </div>
        <div v-else class="font-display text-2xl font-semibold text-[#d9d6cc]">Escriptori buit · tot amagat</div>
      </div>
      <div role="status" class="min-h-[22px] text-center font-mono text-sm text-[#ffb59c]">{{ log }}</div>
      <ul aria-label="Apps obertes" class="flex flex-wrap justify-center gap-2">
        <li
          v-for="app in dock"
          :key="app.name"
          class="flex items-center gap-2 rounded-xl py-1.5 pr-3 pl-1.5 text-[13px] transition-colors"
          :class="app.name === front ? 'bg-[#f7f6f2] text-[#1c1b19]' : 'bg-[#2e2c28] text-[#d9d6cc]'"
        >
          <span
            aria-hidden="true"
            class="flex h-6 w-6 items-center justify-center rounded-[7px] font-mono text-xs font-bold text-[#1c1b19]"
            :style="{ background: colors[app.name] }"
          >{{ app.letter }}</span>{{ app.name }}
        </li>
      </ul>
    </div>

    <div aria-label="Teclat" role="group" class="flex flex-col gap-[clamp(4px,0.8vw,10px)] rounded-3xl bg-[#d9d6cc] p-[clamp(10px,2vw,24px)] font-mono font-bold">
      <div
        v-for="(row, r) in rows"
        :key="r"
        class="grid gap-[clamp(4px,0.8vw,10px)]"
        :style="{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))`, padding: rowPad[r] }"
      >
        <button
          v-for="letter in row"
          :key="letter"
          type="button"
          class="aspect-square min-h-7 sm:min-h-11 cursor-pointer rounded-[clamp(6px,1vw,14px)] border-0 border-b-4 p-0 text-[clamp(14px,2.2vw,28px)] transition-transform active:translate-y-[3px]"
          :class="keyClass(letter)"
          :aria-label="map[letter] ? `${letter}: ${map[letter].join(', ')}` : `${letter}: cap app`"
          @click="press(letter)"
        >
          {{ letter }}
        </button>
      </div>
      <div class="flex gap-[clamp(4px,0.8vw,10px)] px-[8%]">
        <div aria-hidden="true" class="box-border flex min-h-14 flex-1 items-center justify-center rounded-[clamp(6px,1vw,14px)] border-b-4 border-[#b9b6ab] bg-[#e2e0d9] text-sm text-[#5a584f]">⌥</div>
        <div aria-hidden="true" class="box-border min-h-14 flex-[5] rounded-[clamp(6px,1vw,14px)] border-b-4 border-[#b9b6ab] bg-[#f7f6f2]"></div>
        <button
          type="button"
          class="min-h-14 flex-[2.2] cursor-pointer rounded-[clamp(6px,1vw,14px)] border-0 px-2 text-sm text-[#1c1b19] transition-transform"
          :class="held ? 'translate-y-0.5 border-b-2 border-b-[#c2441d] bg-[#ff6a3d]' : 'border-b-4 border-b-[#b9b6ab] bg-white'"
          :aria-pressed="held"
          @click="toggleHeld"
        >
          ⌘ dret
        </button>
        <div aria-hidden="true" class="box-border flex min-h-14 flex-1 items-center justify-center rounded-[clamp(6px,1vw,14px)] border-b-4 border-[#b9b6ab] bg-[#e2e0d9] text-sm text-[#5a584f]">⌥</div>
      </div>
    </div>
    <p class="-mt-2.5 text-center text-sm text-[#46443d]">Tecles blanques: lletres amb una app oberta. A la M n'hi ha tres: prem-la uns quants cops.</p>
  </div>
</template>
