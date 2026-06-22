import { ensureLoaded } from './_loader';

export interface LeaderboardOptions {
  /** Tournament or circuit ID */
  resourceId: string;
  /** 'tournament' or 'circuit' */
  resourceType?: 'tournament' | 'circuit';
  /** Your public API key */
  apiKey: string;
  /** Visual theme. Defaults to 'dark' */
  theme?: 'dark' | 'light';
  /** Number of rows to display. Defaults to 10 */
  limit?: number;
  /** Auto-refresh interval in milliseconds. 0 = disabled */
  refreshInterval?: number;
}

/**
 * Mount a live leaderboard/standings widget.
 *
 * @example
 * ```html
 * <div id="leaderboard"></div>
 * <script type="module">
 *   import { mountLeaderboard } from '@tournamentsuite/widgets';
 *   mountLeaderboard('#leaderboard', { resourceId: 'TOURNAMENT_ID', apiKey: 'PUBLIC_API_KEY' });
 * </script>
 * ```
 */
export async function mountLeaderboard(container: string | HTMLElement, options: LeaderboardOptions): Promise<void> {
  await ensureLoaded();
  window.TournamentSuite!.mount(container, { widget: 'leaderboard', resourceType: 'tournament', ...options });
}

export function unmountLeaderboard(container: string | HTMLElement): void {
  window.TournamentSuite?.unmount(container);
}