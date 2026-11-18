import { computed, reactive } from 'vue';

/** Neutral ids (not shown): the visible labels come from src/i18n/pages/wallpy.ts. */
export type Scene = 'dawn' | 'morning' | 'afternoon' | 'night';
export type Moment = 'auto' | Scene;

/** Shared by the hero (which picks the moment) and the schedule grid (which highlights it). */
export const wallpy = reactive({
  moment: 'auto' as Moment,
  /** null until mounted, so the server render and the first client render match. */
  now: null as Date | null,
});

let started = false;
export function startClock() {
  if (started) return;
  started = true;
  wallpy.now = new Date();
  setInterval(() => (wallpy.now = new Date()), 10_000);
}

export const scene = computed<Scene>(() => {
  if (wallpy.moment !== 'auto') return wallpy.moment;
  if (!wallpy.now) return 'afternoon';
  const h = wallpy.now.getHours();
  return h < 7 ? 'dawn' : h < 13 ? 'morning' : h < 20 ? 'afternoon' : 'night';
});
