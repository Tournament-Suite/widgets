# Vue 3 Widget Wrappers

Vue 3 components (Composition API, `<script setup>`) that load the TournamentSuite widget library via CDN and mount widgets into a `div`.

No npm package required — the CDN script is injected automatically via `onMounted`.

## Usage

Copy the `.vue` files into your project, then import:

```vue
<script setup lang="ts">
import TsBracket from './TsBracket.vue';
import TsLeaderboard from './TsLeaderboard.vue';
</script>

<template>
  <TsBracket
    tournament-id="YOUR_TOURNAMENT_ID"
    api-key="YOUR_PUBLIC_API_KEY"
    theme="dark"
  />
  <TsLeaderboard
    tournament-id="YOUR_TOURNAMENT_ID"
    api-key="YOUR_PUBLIC_API_KEY"
    :limit="10"
  />
</template>
```

## Props

| Prop | Type | Required | Default |
|---|---|---|---|
| `tournamentId` | `string` | Yes | — |
| `apiKey` | `string` | Yes | — |
| `theme` | `'dark' \| 'light'` | No | `'dark'` |

Additional props per component:

- **TsLeaderboard** — `limit?: number`

## How it works

Each component uses a template ref (`ref="container"`) and `onMounted` to inject the CDN `<script>` tag if not already present, then calls `TournamentSuite.mount()` on the container element.

## Sandbox

Use `sandbox-tournament-demo` as `tournamentId` and `ts_sandbox_key` as `apiKey` for local testing.