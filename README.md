# Tournament Suite Widgets

Embeddable live tournament widgets for any website. Drop in a script tag — no build step required.

## Quick Start

```html
<!-- Load the widget library -->
<script src="https://cdn.tournamentsuite.com/widgets/v1/ts-widgets.js"></script>

<!-- Embed a live bracket -->
<div
  data-ts-widget="bracket"
  data-ts-tournament="YOUR_TOURNAMENT_ID"
  data-ts-key="YOUR_PUBLIC_API_KEY"
></div>
```

## Widgets

### Live Bracket

```html
<div
  data-ts-widget="bracket"
  data-ts-tournament="TOURNAMENT_ID"
  data-ts-key="PUBLIC_API_KEY"
  data-ts-theme="dark"
></div>
```

### Leaderboard / Standings

```html
<div
  data-ts-widget="leaderboard"
  data-ts-tournament="TOURNAMENT_ID"
  data-ts-key="PUBLIC_API_KEY"
  data-ts-limit="10"
></div>
```

### Registration Form

```html
<div
  data-ts-widget="registration"
  data-ts-tournament="TOURNAMENT_ID"
  data-ts-key="PUBLIC_API_KEY"
></div>
```

### Match Schedule

```html
<div
  data-ts-widget="schedule"
  data-ts-tournament="TOURNAMENT_ID"
  data-ts-key="PUBLIC_API_KEY"
  data-ts-rounds="3"
></div>
```

## Configuration Attributes

| Attribute | Required | Description |
|---|---|---|
| `data-ts-widget` | Yes | Widget type: `bracket`, `leaderboard`, `registration`, `schedule` |
| `data-ts-tournament` | Yes | Tournament ID |
| `data-ts-key` | Yes | Public API key from Developer Portal |
| `data-ts-theme` | No | `dark` (default) or `light` |
| `data-ts-locale` | No | Locale code, e.g. `en`, `tr`, `de` |
| `data-ts-limit` | No | Max rows (leaderboard only) |
| `data-ts-rounds` | No | Rounds to show (schedule only) |

## Theming

Override CSS custom properties to match your brand:

```css
:root {
  --ts-color-primary: #7c3aed;
  --ts-color-bg: #0f0f0f;
  --ts-color-surface: #1a1a1a;
  --ts-color-text: #f5f5f5;
  --ts-color-border: #2a2a2a;
  --ts-font-family: 'Inter', sans-serif;
  --ts-border-radius: 8px;
}
```

## JavaScript API

```js
// Manual initialization (if you load the script async)
TournamentSuite.init();

// Mount programmatically
TournamentSuite.mount('#my-bracket', {
  widget: 'bracket',
  tournament: 'TOURNAMENT_ID',
  apiKey: 'PUBLIC_API_KEY',
  theme: 'dark',
});

// Listen for events
TournamentSuite.on('match:completed', (event) => {
  console.log('Match result:', event.matchId, event.winnerId);
});
```

## React

```tsx
import { TsBracket, TsLeaderboard } from '@tournamentsuite/widgets-react';

function MyPage() {
  return (
    <TsBracket
      tournamentId="TOURNAMENT_ID"
      apiKey="PUBLIC_API_KEY"
      theme="dark"
    />
  );
}
```

## Examples

- [`examples/plain-html.html`](examples/plain-html.html) — standalone HTML page with all four widgets
- [`examples/react/`](examples/react/) — React component wrappers
- [`examples/vue/`](examples/vue/) — Vue component wrappers

## Sandbox

Use a sandbox tournament ID for development — no real data is affected:

```html
<div
  data-ts-widget="bracket"
  data-ts-tournament="sandbox-tournament-demo"
  data-ts-key="ts_sandbox_key"
></div>
```

## Links

- [Developer Docs](https://tournamentsuite.com/developer)
- [API Docs](https://github.com/Tournament-Suite/api-docs)
- [SDK](https://github.com/Tournament-Suite/sdk-js)
- [GitHub Discussions](https://github.com/orgs/Tournament-Suite/discussions)