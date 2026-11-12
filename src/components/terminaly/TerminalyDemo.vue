<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

type Status = 'working' | 'ready' | 'needs';
type Line = [text: string, color: string];
type SessionId = 's1' | 's2' | 's3' | 's4';

const C: Record<Status, string> = { working: '#f2b84b', ready: '#6fdd8b', needs: '#7ab7ff' };
const L: Record<Status, string> = { working: 'treballant', ready: 'a punt', needs: 'et necessita' };
const dim = '#aab2bd';
const txt = '#d6dbe2';
const ok = '#6fdd8b';
const white = '#ffffff';

const sel = ref<SessionId>('s3');
const split = ref(false);
const step = ref(0);
const answer = ref<'s' | 'n' | null>(null);
const answeredAt = ref(0);
let timer: ReturnType<typeof setInterval> | undefined;

const reduceMotion = ref(false);
onMounted(() => {
  reduceMotion.value = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Reduced motion: show every line at once and don't keep the output scrolling.
  if (reduceMotion.value) step.value = s1script.length - 2;
  else timer = setInterval(() => step.value++, 1100);
});
onBeforeUnmount(() => clearInterval(timer));

const s1script: Line[] = [
  ['> migra els components de la botiga a Vue 3', white],
  ['● Llegint src/components/Cistella.vue', txt],
  ['● Editant src/components/Cistella.vue', txt],
  ['● Llegint src/components/Producte.vue', txt],
  ['● Editant src/components/Producte.vue', txt],
  ['● Executant npm run test', txt],
  ['  ✓ proves superades', ok],
  ['● Editant src/stores/cistella.ts', txt],
];
const s3base: Line[] = [
  ['> separa les rutes de reserves per mòdul', white],
  ['● Llegint routes/api.php', txt],
  ['● Proposta: moure les rutes a routes/reserves.php', txt],
];
const s3after: Line[] = [
  ['> s', white],
  ['● Editant routes/api.php', txt],
  ['● Creat routes/reserves.php', txt],
  ['  ✓ rutes verificades', ok],
  ['Fet. Esperant instruccions.', dim],
];

const s3 = computed<{ status: Status; lines: Line[] }>(() => {
  if (answer.value === null) return { status: 'needs', lines: [...s3base, ['? Vols aplicar els canvis? (s/n)', C.needs]] };
  if (answer.value === 'n') return { status: 'ready', lines: [...s3base, ['> n', white], ['Canvis descartats. Esperant instruccions.', dim]] };
  const n = Math.min(s3after.length, 1 + step.value - answeredAt.value);
  return { status: n >= s3after.length ? 'ready' : 'working', lines: [...s3base, ...s3after.slice(0, n)] };
});

const sessions = computed<Record<SessionId, { agent: string; title: string; status: Status; lines: Line[] }>>(() => ({
  s1: { agent: 'claude', title: 'migració a Vue 3', status: 'working', lines: s1script.slice(0, 2 + (step.value % (s1script.length - 1))) },
  s2: {
    agent: 'codex', title: 'tests de pagament', status: 'ready',
    lines: [['> escriu tests per al flux de pagament', white], ['● Creat tests/pagament.spec.ts', txt], ['  ✓ proves superades', ok], ['Fet. Esperant instruccions.', dim]],
  },
  s3: { agent: 'claude', title: 'refactor de rutes', ...s3.value },
  s4: {
    agent: 'zsh', title: 'shell', status: 'ready',
    lines: [
      ['api-reserves % tly ls', white],
      [`s1  claude  migració a Vue 3    ${L.working}`, dim],
      [`s2  codex   tests de pagament   ${L.ready}`, dim],
      [`s3  claude  refactor de rutes   ${L[s3.value.status]}`, dim],
      ['api-reserves %', white],
    ],
  },
}));

const projects: { name: string; color: string; ids: SessionId[] }[] = [
  { name: 'botiga-web', color: '#f2b84b', ids: ['s1', 's2'] },
  { name: 'api-reserves', color: '#7ab7ff', ids: ['s3', 's4'] },
];

const panes = computed<SessionId[]>(() => (split.value ? [sel.value, sel.value === 's1' ? 's2' : 's1'] : [sel.value]));

function reply(a: 's' | 'n') {
  answer.value = a;
  answeredAt.value = reduceMotion.value ? step.value - 100 : step.value;
}
</script>

<template>
  <div class="overflow-hidden rounded-[14px] border border-[#262c36] bg-[#0d1014]">
    <div class="flex flex-wrap items-center gap-x-3.5 gap-y-2 border-b border-[#262c36] bg-[#12161c] px-3.5 py-1.5 text-xs">
      <span aria-hidden="true" class="flex gap-[7px]"><span v-for="n in 3" :key="n" class="h-3 w-3 rounded-full bg-[#3a424f]"></span></span>
      <span class="grow text-[#aab2bd]">Terminaly</span>
      <button
        type="button"
        class="min-h-11 cursor-pointer rounded-lg border border-[#3a424f] px-3.5"
        :class="split ? 'bg-[#6fdd8b] text-[#04140a]' : 'bg-transparent text-[#d6dbe2] hover:border-[#6fdd8b]'"
        :aria-pressed="split"
        @click="split = !split"
      >
        ⌘D · {{ split ? 'un sol panell' : 'divideix' }}
      </button>
    </div>
    <div class="flex flex-wrap">
      <nav aria-label="Sessions" class="box-border flex flex-[1_1_250px] flex-col gap-3.5 border-r border-[#262c36] bg-[#0a0c10] px-2.5 py-3.5 text-[13px]">
        <div v-for="p in projects" :key="p.name" class="flex flex-col gap-0.5">
          <div class="flex items-center gap-2 px-2 py-1 font-bold text-[#aab2bd]">
            <span aria-hidden="true" class="h-2.5 w-2.5 rounded-[3px]" :style="{ background: p.color }"></span>{{ p.name }}
          </div>
          <button
            v-for="id in p.ids"
            :key="id"
            type="button"
            class="flex min-h-12 cursor-pointer items-center gap-2.5 rounded-lg border-0 px-2 py-1 text-left text-[#d6dbe2]"
            :class="id === sel ? 'bg-[#1f2630]' : 'bg-transparent hover:bg-[#1a1f27]'"
            :aria-current="id === sel ? 'true' : undefined"
            @click="sel = id"
          >
            <span
              aria-hidden="true"
              class="h-[9px] w-[9px] shrink-0 rounded-full"
              :class="sessions[id].status === 'working' && 'animate-pulse-soft'"
              :style="{ background: C[sessions[id].status] }"
            ></span>
            <span class="min-w-0 grow">
              <span class="block truncate">{{ sessions[id].title }}</span>
              <span class="block text-[11px]" :style="{ color: C[sessions[id].status] }">{{ sessions[id].agent }} · {{ L[sessions[id].status] }}</span>
            </span>
          </button>
        </div>
      </nav>
      <div class="flex min-w-0 flex-[999_1_480px] flex-wrap">
        <div v-for="id in panes" :key="id" class="box-border flex min-h-[400px] min-w-0 flex-[1_1_340px] flex-col border-l border-[#262c36]">
          <div class="flex justify-between gap-3 border-b border-[#262c36] px-3.5 py-2 text-xs">
            <span class="truncate">{{ sessions[id].agent }} — {{ sessions[id].title }}</span>
            <span class="whitespace-nowrap" :style="{ color: C[sessions[id].status] }">● {{ L[sessions[id].status] }}</span>
          </div>
          <div class="flex grow flex-col gap-[3px] overflow-x-auto p-3.5 text-[13px]">
            <div v-for="([text, color], i) in sessions[id].lines" :key="i" class="whitespace-pre" :style="{ color }">{{ text }}</div>
            <div v-if="sessions[id].status === 'needs'" class="mt-2.5 flex flex-wrap items-center gap-2.5">
              <button type="button" class="min-h-11 cursor-pointer rounded-lg border-0 bg-[#7ab7ff] px-[18px] font-bold text-[#06121f] hover:bg-white" @click="reply('s')">s · aplica</button>
              <button type="button" class="min-h-11 cursor-pointer rounded-lg border border-[#3a424f] bg-transparent px-[18px] text-[#d6dbe2] hover:border-[#d6dbe2]" @click="reply('n')">n · descarta</button>
            </div>
            <div v-else aria-hidden="true" class="animate-blink text-[#6fdd8b]">█</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
