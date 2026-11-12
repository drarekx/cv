<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    command: string;
    prompt?: string;
    codeClass?: string;
    buttonClass?: string;
    copyLabel?: string;
    copiedLabel?: string;
  }>(),
  { prompt: '', codeClass: '', buttonClass: '', copyLabel: 'Copia', copiedLabel: 'Copiat' },
);

const copied = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

async function copy() {
  try {
    await navigator.clipboard.writeText(props.command);
  } catch {
    // Clipboard blocked (insecure context): the command stays visible to copy by hand.
  }
  copied.value = true;
  clearTimeout(timer);
  timer = setTimeout(() => (copied.value = false), 1800);
}
</script>

<template>
  <div class="flex flex-wrap items-stretch gap-2.5">
    <code
      tabindex="0"
      class="min-w-0 flex-[999_1_420px] overflow-x-auto whitespace-nowrap px-[18px] py-4 font-mono text-sm"
      :class="codeClass"
    ><span v-if="prompt" class="text-[#6fdd8b]">{{ prompt }} </span>{{ command }}</code>
    <button
      type="button"
      class="min-h-[52px] flex-[1_0_auto] cursor-pointer px-[22px] font-semibold"
      :class="buttonClass"
      @click="copy"
    >
      {{ copied ? copiedLabel : copyLabel }}
    </button>
    <span class="sr-only" role="status">{{ copied ? 'Ordre copiada' : '' }}</span>
  </div>
</template>
