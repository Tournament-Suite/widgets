import { ensureLoaded } from './_loader';

export interface ScheduleOptions {
  /** Tournament ID */
  tournamentId: string;
  /** Your public API key */
  apiKey: string;
  /** Visual theme. Defaults to 'dark' */
  theme?: 'dark' | 'light';
  /** Locale for date/time formatting. Defaults to browser locale */
  locale?: string;
  /** IANA timezone string, e.g. 'America/New_York'. Defaults to browser timezone */
  timezone?: string;
  /** Show only matches within the next N hours */
  upcomingHours?: number;
  /** Auto-refresh interval in milliseconds. 0 = disabled */
  refreshInterval?: number;
}

/**
 * Mount a match schedule widget.
 *
 * @example
 * ```html
 * <div id="schedule"></div>
 * <script type="module">
 *   import { mountSchedule } from '@tournamentsuite/widgets';
 *   mountSchedule('#schedule', { tournamentId: 'TOURNAMENT_ID', apiKey: 'PUBLIC_API_KEY' });
 * </script>
 * ```
 */
export async function mountSchedule(container: string | HTMLElement, options: ScheduleOptions): Promise<void> {
  await ensureLoaded();
  window.TournamentSuite!.mount(container, { widget: 'schedule', ...options });
}

export function unmountSchedule(container: string | HTMLElement): void {
  window.TournamentSuite?.unmount(container);
}