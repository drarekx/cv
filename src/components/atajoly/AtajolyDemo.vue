<script setup lang="ts">
import { computed, ref } from 'vue';
import type { AtajolyText } from '../../i18n/pages/atajoly';

// Texts come from the page (src/i18n/pages/atajoly.ts): islands can't import the dictionaries.
const props = defineProps<{ t: AtajolyText['demo'] }>();

type AppId = keyof AtajolyText['demo']['apps'];
/** Neutral ids (not shown), in "most used first" order: it decides the order among apps that share a letter. */
const order: AppId[] = ['appstore', 'calendar', 'calculator', 'finder', 'photos', 'mail', 'maps', 'music', 'notes', 'podcasts', 'safari', 'terminal', 'xcode'];
const name = (id: AppId) => props.t.apps[id];

/** Open apps by initial of their name in this language, like Atajoly's automatic letters. */
const map: Partial<Record<string, AppId[]>> = Object.groupBy(order, (id) => name(id)[0].toUpperCase());
const letters = Object.keys(map).sort();
const names = (letter: string) => (map[letter] ?? []).map(name);

const colors: Record<AppId, string> = {
  appstore: '#8ec5ff', calendar: '#ff9d94', calculator: '#c9c6bb', finder: '#9ad0f5', photos: '#ffd166',
  mail: '#7fb8ff', maps: '#9be0a8', music: '#ff8fa3', notes: '#ffe08a', podcasts: '#d4a5ff',
  safari: '#8fd3ff', terminal: '#b7f0c0', xcode: '#a9c4ff',
};
const rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'].map((r) => r.split(''));
const rowPad = ['0', '0 5%', '0 15%'];

/** Fills {letter} and {app} in a log template. */
const fmt = (tpl: string, v: { letter?: string; app?: string }) => tpl.replace('{letter}', () => v.letter ?? '').replace('{app}', () => v.app ?? '');

const front = ref<AppId | null>('safari');
const held = ref(true);
const log = ref(fmt(props.t.log.front, { letter: 'S', app: name('safari') }));

const frontLetter = computed(() => (front.value ? letters.find((l) => map[l].includes(front.value!)) : ''));
const dock = computed(() => letters.flatMap((letter) => map[letter].map((id) => ({ id, letter }))));

function press(letter: string) {
  const apps = map[letter];
  if (!held.value) return void (log.value = fmt(props.t.log.needHeld, { letter }));
  if (!apps) return void (log.value = fmt(props.t.log.noApp, { letter }));
  const i = front.value ? apps.indexOf(front.value) : -1;
  if (i < 0) {
    front.value = apps[0];
    log.value = fmt(props.t.log.front, { letter, app: name(apps[0]) });
  } else if (apps.length > 1) {
    front.value = apps[(i + 1) % apps.length];
    log.value = fmt(props.t.log.next, { letter, app: name(front.value) });
  } else {
    front.value = null;
    log.value = fmt(props.t.log.hide, { app: name(apps[0]) });
  }
}

function toggleHeld() {
  held.value = !held.value;
  log.value = held.value ? props.t.log.held : props.t.log.released;
}

function keyClass(letter: string) {
  if (letter === frontLetter.value) return 'bg-[#ff6a3d] text-[#1c1b19] border-b-[#c2441d]';
  if (map[letter]) return 'bg-white text-[#1c1b19] border-b-[#b9b6ab] motion-safe:hover:-translate-y-0.5';
  return 'bg-[#e2e0d9] text-[#5a584f] border-b-[#c6c3b8]';
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-4 rounded-3xl bg-[#1c1b19] p-[clamp(16px,2.4vw,28px)]">
      <div class="flex min-h-[200px] flex-wrap items-center justify-center gap-x-10 gap-y-5 p-3">
        <div v-if="front" :key="front" class="motion-safe:animate-pop flex items-center gap-5 rounded-2xl bg-[#f7f6f2] px-[30px] py-[22px]">
          <span
            aria-hidden="true"
            class="flex h-[84px] w-[84px] items-center justify-center rounded-[20px] font-display text-[44px] font-bold text-[#1c1b19]"
            :style="{ background: colors[front] }"
          >{{ frontLetter }}</span>
          <div class="text-left">
            <div class="font-display text-[32px] leading-[1.1] font-bold text-[#1c1b19]">{{ name(front) }}</div>
            <div class="text-sm text-[#46443d]">{{ t.inFront }}</div>
          </div>
        </div>
        <div v-else class="font-display text-2xl font-semibold text-[#d9d6cc]">{{ t.empty }}</div>
      </div>
      <div role="status" class="min-h-[22px] text-center font-mono text-sm text-[#ffb59c]">{{ log }}</div>
      <ul :aria-label="t.openApps" class="flex flex-wrap justify-center gap-2">
        <li
          v-for="app in dock"
          :key="app.id"
          class="flex items-center gap-2 rounded-xl py-1.5 pr-3 pl-1.5 text-[13px] transition-colors"
          :class="app.id === front ? 'bg-[#f7f6f2] text-[#1c1b19]' : 'bg-[#2e2c28] text-[#d9d6cc]'"
        >
          <span
            aria-hidden="true"
            class="flex h-6 w-6 items-center justify-center rounded-[7px] font-mono text-xs font-bold text-[#1c1b19]"
            :style="{ background: colors[app.id] }"
          >{{ app.letter }}</span>{{ name(app.id) }}
        </li>
      </ul>
    </div>

    <div :aria-label="t.keyboard" role="group" class="flex flex-col gap-[clamp(4px,0.8vw,10px)] rounded-3xl bg-[#d9d6cc] p-[clamp(10px,2vw,24px)] font-mono font-bold">
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
          class="aspect-square min-h-7 sm:min-h-11 cursor-pointer rounded-[clamp(6px,1vw,14px)] border-0 border-b-4 p-0 text-[clamp(14px,2.2vw,28px)] motion-safe:transition-transform motion-safe:active:translate-y-[3px]"
          :class="keyClass(letter)"
          :aria-label="map[letter] ? `${letter}: ${names(letter).join(', ')}` : `${letter}: ${t.noApp}`"
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
          class="min-h-14 flex-[2.2] cursor-pointer rounded-[clamp(6px,1vw,14px)] border-0 px-2 text-sm text-[#1c1b19] motion-safe:transition-transform"
          :class="held ? 'motion-safe:translate-y-0.5 border-b-2 border-b-[#c2441d] bg-[#ff6a3d]' : 'border-b-4 border-b-[#b9b6ab] bg-white'"
          :aria-pressed="held"
          @click="toggleHeld"
        >
          {{ t.heldKey }}
        </button>
        <div aria-hidden="true" class="box-border flex min-h-14 flex-1 items-center justify-center rounded-[clamp(6px,1vw,14px)] border-b-4 border-[#b9b6ab] bg-[#e2e0d9] text-sm text-[#5a584f]">⌥</div>
      </div>
    </div>
    <p class="-mt-2.5 text-center text-sm text-[#46443d]">{{ t.hint }}</p>
  </div>
</template>
