<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = withDefaults(
  defineProps<{
    tournamentId: string;
    apiKey: string;
    theme?: 'dark' | 'light';
    limit?: number;
  }>(),
  { theme: 'dark' }
);

const CDN_URL = 'https://cdn.tournamentsuite.com/widgets/v1/ts-widgets.js';
const container = ref<HTMLDivElement | null>(null);

function loadScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${CDN_URL}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = CDN_URL;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load TournamentSuite widgets script'));
    document.head.appendChild(script);
  });
}

onMounted(async () => {
  if (!container.value) return;
  await loadScript();
  const ts = (window as unknown as { TournamentSuite: { mount: (el: HTMLElement, o: object) => void } }).TournamentSuite;
  ts.mount(container.value, {
    widget: 'leaderboard',
    tournament: props.tournamentId,
    apiKey: props.apiKey,
    theme: props.theme,
    limit: props.limit,
  });
});
</script>

<template>
  <div ref="container" />
</template>