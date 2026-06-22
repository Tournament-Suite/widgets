# React Widget Wrappers

React components that load the TournamentSuite widget library via CDN and mount widgets into a `div`.

No npm package required — the CDN script is injected automatically via `useEffect` on first mount.

## Usage

Copy the component files into your project, then import directly:

```tsx
import { TsBracket } from './TsBracket';
import { TsLeaderboard } from './TsLeaderboard';
import { TsRegistration } from './TsRegistration';
import { TsSchedule } from './TsSchedule';

function TournamentPage() {
  return (
    <>
      <TsBracket
        tournamentId="YOUR_TOURNAMENT_ID"
        apiKey="YOUR_PUBLIC_API_KEY"
        theme="dark"
      />
      <TsLeaderboard
        tournamentId="YOUR_TOURNAMENT_ID"
        apiKey="YOUR_PUBLIC_API_KEY"
        limit={10}
      />
      <TsRegistration
        tournamentId="YOUR_TOURNAMENT_ID"
        apiKey="YOUR_PUBLIC_API_KEY"
      />
      <TsSchedule
        tournamentId="YOUR_TOURNAMENT_ID"
        apiKey="YOUR_PUBLIC_API_KEY"
        rounds={3}
      />
    </>
  );
}
```

## Props

All components share these base props:

| Prop | Type | Required | Default |
|---|---|---|---|
| `tournamentId` | `string` | Yes | — |
| `apiKey` | `string` | Yes | — |
| `theme` | `'dark' \| 'light'` | No | `'dark'` |

Additional props per component:

- **TsLeaderboard** — `limit?: number` (max rows to display)
- **TsSchedule** — `rounds?: number` (rounds to show)

## How it works

Each component uses `useEffect` to append a `<script>` tag pointing to `https://cdn.tournamentsuite.com/widgets/v1/ts-widgets.js` if not already present, then calls `TournamentSuite.mount()` on the component's container `div` via `useRef`.

## Sandbox

Use `sandbox-tournament-demo` as `tournamentId` and `ts_sandbox_key` as `apiKey` for local testing.