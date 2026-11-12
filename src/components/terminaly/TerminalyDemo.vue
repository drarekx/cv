<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

type Status = 'working' | 'ready' | 'needs';
type Line = [text: string, color: string];
type SessionId = 's1' | 's2' | 'lead' | 'w1' | 'w2' | 'w3' | 'sh';
type Session = { agent: string; title: string; status: Status; lines: Line[]; started: boolean; worktree?: string };

const C: Record<Status, string> = { working: '#f2b84b', ready: '#6fdd8b', needs: '#7ab7ff' };
const L: Record<Status, string> = { working: 'treballant', ready: 'a punt', needs: 'et necessita' };
const dim = '#aab2bd';
const txt = '#d6dbe2';
const ok = '#6fdd8b';
const white = '#ffffff';
const cmd = '#c9a7ff';

const sel = ref<SessionId>('lead');
const view = ref<'one' | 'split' | 'swarm'>('one');
/** Steps since the swarm started (one every 1.1 s). */
const t = ref(0);
/** The permission the third worker asks for: unanswered, allowed or denied, and when. */
const answer = ref<'s' | 'n' | null>(null);
const answeredAt = ref(0);
let timer: ReturnType<typeof setInterval> | undefined;

const reduceMotion = ref(false);
/** Reduced motion: jump to the end of every script instead of playing it. */
const FAR = 100;
onMounted(() => {
  reduceMotion.value = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion.value) t.value = FAR;
  else timer = setInterval(() => t.value < 60 && t.value++, 1100);
});
onBeforeUnmount(() => clearInterval(timer));

function restart() {
  answer.value = null;
  t.value = reduceMotion.value ? FAR : 0;
}

function reply(a: 's' | 'n') {
  answer.value = a;
  answeredAt.value = reduceMotion.value ? t.value - FAR : t.value;
}

/** A worker started by the lead at `start`: its lines appear one per step, then it is ready. */
function worker(start: number, script: Line[]) {
  const n = Math.max(0, Math.min(script.length, t.value - start));
  return { started: t.value >= start, lines: script.slice(0, n), readyAt: start + script.length };
}

const w1 = computed(() =>
  worker(2, [
    ['> rutes de pagament', white],
    ['● Llegint routes/api.php', txt],
    ['● Creat routes/pagaments.php', txt],
    ['● Editant PagamentController.php', txt],
    ['  ✓ rutes verificades', ok],
    ['Fet. Branca swarm/rutes a punt.', dim],
  ]),
);
const w2 = computed(() =>
  worker(3, [
    ['> tests del flux de pagament', white],
    ['● Creat tests/Feature/PagamentTest.php', txt],
    ['● Executant php artisan test', txt],
    ['  ✓ 12 proves superades', ok],
    ['● Afegint els casos d\'error', txt],
    ['  ✓ 15 proves superades', ok],
    ['Fet. Branca swarm/tests a punt.', dim],
  ]),
);
/** The third worker stops to ask for a permission: it only goes on once you answer. */
const w3 = computed(() => {
  const start = 4;
  const before: Line[] = [
    ['> taula de pagaments', white],
    ['● Creat la migració create_pagaments', txt],
  ];
  const ask: Line = ['? Permís: executar php artisan migrate (s/n)', C.needs];
  const after: Line[] =
    answer.value === 'n'
      ? [['> n', white], ['Sense executar. Branca swarm/migracio a punt.', dim]]
      : [['> s', white], ['● Executant php artisan migrate', txt], ['  ✓ migració aplicada', ok], ['Fet. Branca swarm/migracio a punt.', dim]];
  const shown = Math.max(0, Math.min(before.length, t.value - start));
  if (shown < before.length) return { started: t.value >= start, status: 'working' as Status, lines: before.slice(0, shown), readyAt: Infinity };
  if (answer.value === null) return { started: true, status: 'needs' as Status, lines: [...before, ask], readyAt: Infinity };
  const from = Math.max(answeredAt.value, start + before.length);
  const n = Math.min(after.length, 1 + t.value - from);
  return {
    started: true,
    status: (n >= after.length ? 'ready' : 'working') as Status,
    lines: [...before, ask, ...after.slice(0, n)],
    readyAt: from - 1 + after.length,
  };
});

/** The lead splits the task, waits for its workers, then reviews and merges their branches. */
const lead = computed(() => {
  const plan: Line[] = [
    ['> afegeix pagaments a les reserves, amb un swarm', white],
    ['● Reparteixo la feina en tres workers', txt],
    ['$ tly new --worktree rutes --prompt "rutes de pagament"', cmd],
    ['$ tly new --worktree tests --prompt "tests del flux"', cmd],
    ['$ tly new --worktree migracio --prompt "taula de pagaments"', cmd],
    ['$ tly wait w1 w2 w3', cmd],
  ];
  const lines = plan.slice(0, Math.min(plan.length, t.value + 1));
  const workers = [
    { id: 'w1', name: 'rutes', at: w1.value.readyAt },
    { id: 'w2', name: 'tests', at: w2.value.readyAt },
    { id: 'w3', name: 'migracio', at: w3.value.readyAt },
  ].sort((a, b) => a.at - b.at);
  for (const w of workers) if (t.value >= w.at) lines.push([`  ✓ ${w.id} · ${w.name}: a punt`, ok]);
  const allDone = Math.max(...workers.map((w) => w.at));
  const merge: Line[] = [
    ['● Revisant les tres branques', txt],
    ['● Fusionant swarm/rutes, swarm/tests i swarm/migracio', txt],
    ['  ✓ 15 proves superades a main', ok],
    ['Fet. Esperant instruccions.', dim],
  ];
  const m = Number.isFinite(allDone) ? Math.max(0, Math.min(merge.length, t.value - allDone)) : 0;
  lines.push(...merge.slice(0, m));
  return { status: (m >= merge.length ? 'ready' : 'working') as Status, lines };
});

const sessions = computed<Record<SessionId, Session>>(() => {
  const loop = [
    ['● Llegint src/components/Cistella.vue', txt],
    ['● Editant src/components/Cistella.vue', txt],
    ['● Llegint src/components/Producte.vue', txt],
    ['● Editant src/components/Producte.vue', txt],
    ['● Executant npm run test', txt],
    ['  ✓ proves superades', ok],
  ] as Line[];
  const ws: [SessionId, string, string][] = [['w1', 'claude', 'rutes'], ['w2', 'codex', 'tests'], ['w3', 'opencode', 'migracio']];
  const wstate = { w1: { ...w1.value, status: (t.value >= w1.value.readyAt ? 'ready' : 'working') as Status }, w2: { ...w2.value, status: (t.value >= w2.value.readyAt ? 'ready' : 'working') as Status }, w3: w3.value };
  const list: Record<string, Session> = {
    s1: { agent: 'claude', title: 'migració a Vue 3', status: 'working', started: true, lines: [['> migra la botiga a Vue 3', white], ...loop.slice(0, 1 + (t.value % loop.length))] },
    s2: { agent: 'codex', title: 'tests de la cistella', status: 'ready', started: true, lines: [['> escriu tests per a la cistella', white], ['● Creat tests/cistella.spec.ts', txt], ['  ✓ proves superades', ok], ['Fet. Esperant instruccions.', dim]] },
    lead: { agent: 'claude', title: 'pagaments (swarm)', started: true, ...lead.value },
  };
  for (const [id, agent, wt] of ws) {
    const w = wstate[id as 'w1' | 'w2' | 'w3'];
    list[id] = { agent, title: wt === 'migracio' ? 'taula de pagaments' : wt === 'rutes' ? 'rutes de pagament' : 'tests del flux', status: w.status, lines: w.lines, started: w.started, worktree: wt };
  }
  const started = ws.filter(([id]) => list[id].started);
  list.sh = {
    agent: 'zsh', title: 'shell', status: 'ready', started: true,
    lines: [
      ['api-reserves % tly ls', white],
      [`lead  claude    pagaments (swarm)   ${L[list.lead.status]}`, dim],
      ...started.map(([id, agent]): Line => [` └ ${id}  ${agent.padEnd(8)} ${list[id].title.padEnd(19)} ${L[list[id].status]}`, dim]),
      ['api-reserves %', white],
    ],
  };
  return list as Record<SessionId, Session>;
});

const workerIds: SessionId[] = ['w1', 'w2', 'w3'];
const liveWorkers = computed(() => workerIds.filter((id) => sessions.value[id].started));
/** The lead's sidebar summary: how many workers are in each state. */
const summary = computed(() => {
  const n = (s: Status) => liveWorkers.value.filter((id) => sessions.value[id].status === s).length;
  return (['working', 'needs', 'ready'] as Status[]).filter((s) => n(s)).map((s) => ({ s, n: n(s) }));
});

const projects: { name: string; color: string; ids: SessionId[] }[] = [
  { name: 'botiga-web', color: '#f2b84b', ids: ['s1', 's2'] },
  { name: 'api-reserves', color: '#7ab7ff', ids: ['lead', 'sh'] },
];

const panes = computed<SessionId[]>(() => {
  if (view.value === 'swarm') return ['lead', ...liveWorkers.value];
  if (view.value === 'split') return [sel.value, sel.value === 'lead' ? 'sh' : 'lead'];
  return [sel.value];
});
const done = computed(() => sessions.value.lead.status === 'ready');

function toggle(v: 'split' | 'swarm') {
  view.value = view.value === v ? 'one' : v;
}
</script>

<template>
  <div class="overflow-hidden rounded-[14px] border border-[#262c36] bg-[#0d1014]">
    <div class="flex flex-wrap items-center gap-x-2.5 gap-y-2 border-b border-[#262c36] bg-[#12161c] px-3.5 py-1.5 text-xs">
      <span aria-hidden="true" class="flex gap-[7px]"><span v-for="n in 3" :key="n" class="h-3 w-3 rounded-full bg-[#3a424f]"></span></span>
      <span class="grow pl-1 text-[#aab2bd]">Terminaly</span>
      <button
        v-if="done"
        type="button"
        class="min-h-11 cursor-pointer rounded-lg border border-[#3a424f] bg-transparent px-3.5 text-[#d6dbe2] hover:border-[#6fdd8b]"
        @click="restart"
      >torna a començar</button>
      <button
        type="button"
        class="min-h-11 cursor-pointer rounded-lg border border-[#3a424f] px-3.5"
        :class="view === 'swarm' ? 'bg-[#6fdd8b] text-[#04140a]' : 'bg-transparent text-[#d6dbe2] hover:border-[#6fdd8b]'"
        :aria-pressed="view === 'swarm'"
        @click="toggle('swarm')"
      >mostra el swarm</button>
      <button
        type="button"
        class="min-h-11 cursor-pointer rounded-lg border border-[#3a424f] px-3.5"
        :class="view === 'split' ? 'bg-[#6fdd8b] text-[#04140a]' : 'bg-transparent text-[#d6dbe2] hover:border-[#6fdd8b]'"
        :aria-pressed="view === 'split'"
        @click="toggle('split')"
      >⌘D divideix</button>
    </div>
    <div class="flex flex-wrap">
      <nav aria-label="Sessions" class="box-border flex flex-[1_1_250px] flex-col gap-3.5 border-r border-[#262c36] bg-[#0a0c10] px-2.5 py-3.5 text-[13px]">
        <div v-for="p in projects" :key="p.name" class="flex flex-col gap-0.5">
          <div class="flex items-center gap-2 px-2 py-1 font-bold text-[#aab2bd]">
            <span aria-hidden="true" class="h-2.5 w-2.5 rounded-[3px]" :style="{ background: p.color }"></span>{{ p.name }}
          </div>
          <template v-for="id in p.ids" :key="id">
            <button
              type="button"
              class="flex min-h-12 cursor-pointer items-center gap-2.5 rounded-lg border-0 px-2 py-1 text-left text-[#d6dbe2]"
              :class="id === sel && view !== 'swarm' ? 'bg-[#1f2630]' : 'bg-transparent hover:bg-[#1a1f27]'"
              :aria-current="id === sel ? 'true' : undefined"
              @click="sel = id; view = view === 'swarm' ? 'one' : view"
            >
              <span aria-hidden="true" class="h-[9px] w-[9px] shrink-0 rounded-full" :class="sessions[id].status === 'working' && 'animate-pulse-soft'" :style="{ background: C[sessions[id].status] }"></span>
              <span class="min-w-0 grow">
                <span class="block truncate">{{ sessions[id].title }}</span>
                <span class="block text-[11px]" :style="{ color: C[sessions[id].status] }">{{ sessions[id].agent }} · {{ L[sessions[id].status] }}</span>
                <span v-if="id === 'lead' && summary.length" class="mt-0.5 flex gap-2.5 text-[11px]">
                  <span v-for="x in summary" :key="x.s" :style="{ color: C[x.s] }">{{ x.n }} {{ L[x.s] }}</span>
                </span>
              </span>
            </button>
            <!-- Workers hang under the session that started them, as they appear. -->
            <TransitionGroup v-if="id === 'lead'" tag="div" name="worker" class="ml-4 flex flex-col gap-0.5 border-l border-[#262c36] pl-1.5">
              <button
                v-for="w in liveWorkers"
                :key="w"
                type="button"
                class="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-lg border-0 px-2 py-1 text-left text-[#d6dbe2]"
                :class="w === sel && view !== 'swarm' ? 'bg-[#1f2630]' : 'bg-transparent hover:bg-[#1a1f27]'"
                :aria-current="w === sel ? 'true' : undefined"
                @click="sel = w; view = view === 'swarm' ? 'one' : view"
              >
                <span aria-hidden="true" class="h-[7px] w-[7px] shrink-0 rounded-full" :class="sessions[w].status === 'working' && 'animate-pulse-soft'" :style="{ background: C[sessions[w].status] }"></span>
                <span class="min-w-0 grow">
                  <span class="block truncate text-[12px]">{{ sessions[w].title }}</span>
                  <span class="block text-[11px]" :style="{ color: C[sessions[w].status] }">{{ sessions[w].agent }} · {{ L[sessions[w].status] }}</span>
                </span>
              </button>
            </TransitionGroup>
          </template>
        </div>
      </nav>
      <div class="grid min-w-0 flex-[999_1_480px]" :class="view === 'swarm' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-[repeat(auto-fit,minmax(340px,1fr))]'">
        <div
          v-for="id in panes"
          :key="id"
          class="box-border flex min-w-0 flex-col border-b border-l border-[#262c36]"
          :class="view === 'swarm' ? 'min-h-[230px]' : 'min-h-[400px]'"
        >
          <div class="flex justify-between gap-3 border-b border-[#262c36] px-3.5 py-2 text-xs">
            <span class="truncate">{{ sessions[id].agent }} — {{ sessions[id].title }}<span v-if="sessions[id].worktree" class="text-[#aab2bd]"> · worktree {{ sessions[id].worktree }}</span></span>
            <span class="whitespace-nowrap" :style="{ color: C[sessions[id].status] }">● {{ L[sessions[id].status] }}</span>
          </div>
          <div class="flex grow flex-col gap-[3px] overflow-x-auto p-3.5" :class="view === 'swarm' ? 'text-[12px]' : 'text-[13px]'">
            <div v-for="([text, color], i) in sessions[id].lines" :key="i" class="whitespace-pre" :style="{ color }">{{ text }}</div>
            <div v-if="sessions[id].status === 'needs'" class="mt-2.5 flex flex-wrap items-center gap-2.5">
              <button type="button" class="min-h-11 cursor-pointer rounded-lg border-0 bg-[#7ab7ff] px-[18px] font-bold text-[#06121f] hover:bg-white" @click="reply('s')">s · permet</button>
              <button type="button" class="min-h-11 cursor-pointer rounded-lg border border-[#3a424f] bg-transparent px-[18px] text-[#d6dbe2] hover:border-[#d6dbe2]" @click="reply('n')">n · denega</button>
            </div>
            <div v-else aria-hidden="true" class="animate-blink text-[#6fdd8b]">█</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.worker-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.worker-enter-from {
  opacity: 0;
  transform: translateX(-8px);
}
@media (prefers-reduced-motion: reduce) {
  .worker-enter-active {
    transition: none;
  }
}
</style>
